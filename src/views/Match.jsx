import { useState } from "react"
import banner from "../Assets/match.jpg"
import MatchPic from "../Assets/match/macth.jpeg"
import MatchPicTwo from "../Assets/match/match2.jpg"
import soru from "../Assets/av.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import Modal from 'react-modal';
import "swiper/css";
import "swiper/css/effect-cards";
import "../Component/style.css";
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex:"100"
    },
};

export default function Match() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [count, setCount] = useState(1);
    let array = [
        { "url": MatchPic, "text": "Mahzun" },
        { "url": banner, "text": "Alican" },
        { "url": MatchPicTwo, "text": "Muteber" },
        { "url": MatchPic, "text": "Tevfik" },
        { "url": banner, "text": "Münir" },
        { "url": MatchPicTwo, "text": "Saim" },
        { "url": MatchPic, "text": "Süheyl" },
        { "url": banner, "text": "Bahri" },
        { "url": MatchPicTwo, "text": "Hüccet" },
        { "url": MatchPic, "text": "Fazıl" },
        { "url": banner, "text": "Üzeyir" },
        { "url": MatchPicTwo, "text": "Mete" }
    ]
    function closeModal() {
        setIsOpen(false);
      }
      function openModal() {
        setIsOpen(true);
      }
    return (
        <div>
            <div className="relative w-full px-4 py-16 lg:py-32 bg-primary-400 text-center selection:text-primary-400" style={{
                backgroundPosition: "center 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${banner})`,
                backgroundSize: "cover",
            }}>
                <h1 className="text-3xl md:text-4xl  font-bold uppercase text-white">Match Player</h1>
                <h2 className="text-white mb-8 mt-4 font-medium lg:text-lg">Let's match the most suitable player for you together</h2>
            </div>
            <div className="flex justify-center md:flex-row flex-col-reverse items-center p-5">
                <div className="w-[300px] md:h-[600px] h-[400px] bg-[#1C1A1F] items-center flex justify-center">
                    <div>
                        <input type="text" className="text-black border-none outline-none" />
                    </div>
                </div>
            
                < >
                    <Swiper style={{   zIndex:"0" }}
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        {
                            array.map((x, i) => {
                                return (
                                    <SwiperSlide onClick={{openModal,}} key={i}> <div  className="bg-[#e00b87] rounded-t-lg flex justify-center items-center w-full" >10%</div>
                                        <div className="relative w-full px-4 py-16 lg:py-32 bg-primary-400 h-[200px] text-center selection:text-primary-400" style={{
                                            backgroundPosition: "center 50%",
                                            backgroundRepeat: "no-repeat",
                                            backgroundImage: `url(${x.url})`,
                                            backgroundSize: "cover",
                                        }}></div></SwiperSlide>

                                )
                            })
                        }
                    </Swiper>

                </>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    ariaHideApp={false}
                    contentLabel=" Example Modal"
                > </Modal>
            </div>
        </div>
    )
} 