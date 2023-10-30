import { useState } from "react";
import { Galleria } from "primereact/galleria";
import '../styles/carousel.css';

export default function Carousel() {
  const [images] = useState([
    {
      itemImageSrc:
        "https://metroio.vtexassets.com/assets/vtex.file-manager-graphql/images/0201c32a-499f-404c-a223-fb376c581509___88b491a7ee274f2297703811146d333e.jpg",
      thumbnailImageSrc:
        "https://metroio.vtexassets.com/assets/vtex.file-manager-graphql/images/0201c32a-499f-404c-a223-fb376c581509___88b491a7ee274f2297703811146d333e.jpg",
      alt: "Description for Image 1",
      title: "Title 1",
    },
    {
      itemImageSrc:
        "https://metroio.vtexassets.com/assets/vtex.file-manager-graphql/images/cc134325-afdc-4e7d-950f-04d5c074126f___e4f8b995197460fd880edb2d5d51dbd0.jpg",
      thumbnailImageSrc:
        "https://metroio.vtexassets.com/assets/vtex.file-manager-graphql/images/cc134325-afdc-4e7d-950f-04d5c074126f___e4f8b995197460fd880edb2d5d51dbd0.jpg",
      alt: "Description for Image 1",
      title: "Title 1",
    },
    {
      itemImageSrc:
        "https://metroio.vtexassets.com/assets/vtex.file-manager-graphql/images/079cbf0e-8fd4-4def-a6a0-ed4b88f0149d___74d1c24230ef27c2124c7f90f86c68c7.png",
      thumbnailImageSrc:
        "https://metroio.vtexassets.com/assets/vtex.file-manager-graphql/images/079cbf0e-8fd4-4def-a6a0-ed4b88f0149d___74d1c24230ef27c2124c7f90f86c68c7.png",
      alt: "Description for Image 1",
      title: "Title 1",
    },
  ]);

  const itemTemplate = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        alt={item.alt}
        style={{ width: "100%", display: "block" }}
      />
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <img
        src={item.thumbnailImageSrc}
        alt={item.alt}
        style={{ display: "block" }}
      />
    );
  };

  return (
    <>
      <Galleria
          value={images}
          numVisible={5}
          circular
          style={{ maxWidth: "100%" }}
          showItemNavigators 
          showItemNavigatorsOnHover
          showIndicators
          showThumbnails={false}
          item={itemTemplate}
          thumbnail={thumbnailTemplate}
          className="carousel-custom"
        />
    </>
  );
}
