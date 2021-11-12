import React from "react";
import {shape, string} from "prop-types";
import sliderClasses from '@magento/pagebuilder/lib/ContentTypes/Slider/slider.css';
import SlickSlider from 'react-slick';

const Mage2Slider = props => {
    const { items, slidesToShow } = props;

    var sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }

        ]
    };

    return (
        <div className={sliderClasses.root}>
            <SlickSlider {...sliderSettings}>
                {items}
            </SlickSlider>
        </div>
    );
}

export default Mage2Slider;

Mage2Slider.prototype = {
    classes: shape({
        root: string,
        slides: string
    })
};
