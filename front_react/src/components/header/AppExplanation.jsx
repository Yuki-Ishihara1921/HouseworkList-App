import React, { useState } from 'react'
import Modal from 'react-modal'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImagePageTop, ImagePageList } from '../../assets/images'
import { Button } from 'react-bootstrap'

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
            <Button
                variant="secondary" className="ms-3 rounded-circle"
                onClick={() => setIsOpen(true)}
            >
                ？
            </Button>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
                <h3 className="text-info">★How To Use★</h3>
                <Slider {...settings}>
                    <div className="w-100">
                        <img className="d-block w-100" src={ImagePageTop} alt="トップページ" />
                    </div>
                    <div className="w-100">
                        <img className="d-block w-100" src={ImagePageList} alt="タスクリストページ"/>
                    </div>
                </Slider>
            </Modal>
        </>
    )
}

export default AppExplanation