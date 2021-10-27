import { useContext } from "react";
import SlickCarousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductListContext } from "../../context/productsContext";

export const Carousel = ({ children }: any) => {
  const { filtredProductsList } = useContext(ProductListContext);

  const props = {
    dots: true,
    focusOnSelect: true,
    speed: 500,
    infinite: false,
    slidesToShow: filtredProductsList.length < 5 ? 4 : 5,
    slidesToScroll: filtredProductsList.length < 5 ? 4 : 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <SlickCarousel {...props}>{children}</SlickCarousel>
    </>
  );
};

export default { Carousel };
