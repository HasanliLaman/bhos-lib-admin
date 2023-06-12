import { createContext, useContext, useEffect, useReducer, useRef } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const login = async (body) => {
  try {
    const response = await axios.post("https://bhos-lib.onrender.com/users/login", body);
    return response.data;
  } catch {
    return;
  }
};

const HANDLERS = {
  INITIALIZE: "INITIALIZE",
  SIGN_IN: "SIGN_IN",
  SIGN_OUT: "SIGN_OUT",
};

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
  token: null,
};

const handlers = {
  [HANDLERS.INITIALIZE]: (state, action) => {
    const { user, token } = action.payload;

    return {
      ...state,
      ...// if payload (user) is provided, then is authenticated
      (user && token
        ? {
            isAuthenticated: true,
            isLoading: false,
            user,
            token,
          }
        : {
            isLoading: false,
          }),
    };
  },
  [HANDLERS.SIGN_IN]: (state, action) => {
    const { user, token } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
      token,
    };
  },
  [HANDLERS.SIGN_OUT]: (state) => {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
      token: null,
    };
  },
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

// The role of this context is to propagate authentication state through the App tree.

export const AuthContext = createContext({ undefined });

export const AuthProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const initialized = useRef(false);

  const initialize = async () => {
    // Prevent from calling twice in development mode with React.StrictMode enabled
    if (initialized.current) {
      return;
    }

    initialized.current = true;

    let isAuthenticated = false;

    try {
      isAuthenticated = !!localStorage.getItem("user") && !!localStorage.getItem("token");
    } catch (err) {
      console.error(err);
    }

    if (isAuthenticated) {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = localStorage.getItem("token");

      dispatch({
        type: HANDLERS.INITIALIZE,
        payload: { user, token },
      });
    } else {
      dispatch({
        type: HANDLERS.INITIALIZE,
        payload: { user: undefined, token: undefined },
      });
    }
  };

  useEffect(
    () => {
      initialize();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const signIn = async (email, password) => {
    try {
      const data = await login({ email, password });
      if (data.data.user.role !== "admin") throw new Error("Please check your email and password");
      localStorage.setItem("user", JSON.stringify(data.data.user));
      localStorage.setItem("token", data.token);
    } catch (err) {
      throw new Error("Please check your email and password");
    }

    dispatch({
      type: HANDLERS.SIGN_IN,
      payload: {
        user: JSON.parse(localStorage.getItem("user")),
        token: localStorage.getItem("token"),
      },
    });
  };

  const signOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    dispatch({
      type: HANDLERS.SIGN_OUT,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export const AuthConsumer = AuthContext.Consumer;

export const useAuthContext = () => useContext(AuthContext);
