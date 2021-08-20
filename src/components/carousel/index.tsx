import React from "react";
import { isMobile } from "react-device-detect";
import { View } from "vcc-ui";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import Card from "components/card";
import { Car } from "types";

import "./styles.css";

SwiperCore.use([Pagination, Navigation]);

interface Props {
    items: Car[];
}

const Carousel = ({ items }: Props) => {
    return (
        <>
            <Swiper
                slidesPerView="auto"
                spaceBetween={30}
                pagination={
                    isMobile
                        ? {
                            clickable: true
                        }
                        : false
                }
                navigation={isMobile ? false : true}
            >
                {items.map((car) => (
                    <SwiperSlide key={car.id}>
                        <View direction="row">
                            <Card
                                bodyType={car.bodyType}
                                modelName={car.modelName}
                                modelType={car.modelType}
                                imageUrl={car.imageUrl}
                                id={car.id}
                            />
                        </View>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Carousel;
