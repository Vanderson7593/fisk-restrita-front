/* eslint-disable jsx-a11y/alt-text */
import { FC } from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useTheme } from "@emotion/react";
import { Theme } from "@theme";
import { Flex } from "../../modules/styles/slider.styles";
import Slider from "react-slick";
import { useNotification } from "hooks/use-notification";

const Carousel: FC = () => {
  const { notifications } = useNotification();

  const sliderSettings = {
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
  };

  const cards = [
    {
      imageSrc: "/check.svg",
      description: "Confirme a visualização",
    },
    {
      imageSrc: "/check.svg",
      description: "Confirme a visualização",
    },
    {
      imageSrc: "/check.svg",
      description: "Confirme a visualização",
    },
  ];

  return (
    <Flex className="content">
      <Slider {...sliderSettings}>
        {cards.map((card, index) => (
          <div key={index}>
            <Image
              alt={card.description}
              src={card.imageSrc}
              width="44"
              height="18"
            />
            <p>{card.description}</p>
          </div>
        ))}
      </Slider>
    </Flex>
  );
};

export default Carousel;
