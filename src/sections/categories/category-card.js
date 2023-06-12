import { Card, CardContent, Typography, CardMedia } from "@mui/material";

export const CategoryCard = (props) => {
  const { category } = props;

  return (
    <Card>
      <CardMedia sx={{ height: 250 }} image={category.image} title={category.name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {category.name}
        </Typography>
      </CardContent>
    </Card>
  );
};
