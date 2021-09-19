import React from 'react';

import Carousel from   "react-bootstrap/Carousel";

function CarouselHome() {
    return (
            <div>
                <Carousel interval={null}>
                    <Carousel.Item>
                        <div className="d-block w-100 carousel-image-1">
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-block w-100 carousel-image-2">
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-block w-100 carousel-image-3">
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
    )
}

export default CarouselHome
