import React, { useState } from 'react'
import Modal from 'react-modal'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ButtonClick } from '../UIkit';
import { ImagePageTop, ImagePageList } from '../../assets/images'

const AppExplanation = () => {
    const [isOpen, setIsOpen] = useState(false)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <>
            <ButtonClick
                className={"ms-3 rounded-circle"} label={"？"}
                variant={"secondary"} onClick={() => setIsOpen(true)}
            />
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
                <h3 className="text-info">★How To Use★</h3>
                <Slider {...settings}>
                    <img className="d-block w-100" src={ImagePageTop} alt="PageTop" />
                    <img className="d-block w-100" src={ImagePageList} alt="PageTaskList"/>
                </Slider>
            </Modal>
        </>
    )
}

export default AppExplanation
