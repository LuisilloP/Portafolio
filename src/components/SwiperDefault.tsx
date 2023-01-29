import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Keyboard, Autoplay } from "swiper";

type Props = {
  data: Array<string>;
  className: string;
  delay?: number;
};

export const SwiperDefault = (props: Props) => {
  const { data, className, delay } = props;
  console.log(data);
  return (
    <div>
      <Swiper
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Keyboard, EffectFade, Autoplay]}
        autoplay={{
          delay: delay || 2500,
          disableOnInteraction: false,
        }}
        className={className}
        navigation={true}
      >
        {data.map((img, i) => (
          <SwiperSlide key={img + i}>
            <img src={img} id={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
