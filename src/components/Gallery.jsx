import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "../index.css";

export default function Gallery({ images }) {
  return (
    <Box sx={{ width: "100", height: "100", overflowY: "none", m: 10 }}>
      <ImageList variant="masonry"  gap={10} sx={{
    columnCount: {
      xs: '1 !important',
      md: '2 !important',
      lg: '3 !important',
    },
  }}>
        {images.map((image) => (
          <ImageListItem key={image.id}>
            <img
              src={`${image.webformatURL}?w=248&fit=crop&auto=format`}
              srcSet={`${image.webformatURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={image.user}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
