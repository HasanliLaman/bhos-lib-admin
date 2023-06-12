import ChartBarIcon from "@heroicons/react/24/solid/ChartBarIcon";
import InboxStackIcon from "@heroicons/react/24/solid/InboxStackIcon";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import ArrowDownTrayIcon from "@heroicons/react/24/solid/ArrowDownTrayIcon";
import BookOpenIcon from "@heroicons/react/24/solid/BookOpenIcon";
import ClipboardDocumentListIcon from "@heroicons/react/24/solid/ClipboardDocumentListIcon";
import { SvgIcon } from "@mui/material";

export const items = [
  {
    title: "Overview",
    path: "/",
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Users",
    path: "/users",
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Books",
    path: "/books",
    icon: (
      <SvgIcon fontSize="small">
        <BookOpenIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Categories",
    path: "/categories",
    icon: (
      <SvgIcon fontSize="small">
        <InboxStackIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Uploads",
    path: "/uploads",
    icon: (
      <SvgIcon fontSize="small">
        <ArrowDownTrayIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Requests",
    path: "/requests",
    icon: (
      <SvgIcon fontSize="small">
        <ClipboardDocumentListIcon />
      </SvgIcon>
    ),
  },
];
