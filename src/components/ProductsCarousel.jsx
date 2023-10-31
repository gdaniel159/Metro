import { Carousel } from "primereact/carousel";
import img1 from "../assets/images/pub1.png";
import img2 from "../assets/images/pub2.png";
import img3 from "../assets/images/pub3.png";
import "../styles/main.css";

export default function ProductCarousel() {
  const images = [
    {
      src: img1,
      alt: "Image 1",
      moreInfoLink : ""
    },
    {
      src: img2,
      alt: "Image 2",
      moreInfoLink : ""
    },
    {
      src: img3,
      alt: "Image 3",
      moreInfoLink : ""
    },
    {
      src: img2,
      alt: "Image 2",
      moreInfoLink : ""
    },
    {
      src: img1,
      alt: "Image 1",
      moreInfoLink : ""
    },
  ];

  return (
    <>
      <Carousel
        value={images}
        numVisible={3}
        numScroll={1}
        itemTemplate={(image) => <img src={image.src} alt={image.alt} className="img-fluid" />}
      />
    </>
  );
}
