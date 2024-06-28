import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function ActionAreaCard({
  title,
  idRef,
  content,
  skills,
  imageUrl,
  backgroundImageUrl,
}) {
  return (
    <Card id={idRef} sx={{width: '30%', maxWidth: 345, bgcolor: "#1c1c1c", color: "#9c9c9c" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200px"
         
          image={backgroundImageUrl} // URL direto para a imagem
          alt="Descrição da imagem"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ color: "#9c9c9c" }}
          >
            {content}
          </Typography>
          <CardActions   sx={{ marginLeft: -2 }}>
            <Button size="small" sx={{ color: '#FF6E4A'}}>Ver mais</Button>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
