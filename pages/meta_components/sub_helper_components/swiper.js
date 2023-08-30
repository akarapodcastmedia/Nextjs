import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Style from  '../../../public/style/meta_components/helper/swiperSkill.module.css'
export default function SwiperSkills(){
    return (
             <Swiper
                className={Style.topcontainer}
                spaceBetween={10}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                > 
                <SwiperSlide className={Style.container}>
                    <div className={Style.subcontainer}>
                        <img src="/js.png"className={Style.image}  />
                    </div>
                </SwiperSlide>
                <SwiperSlide className={Style.container}>
                    <div className={Style.subcontainer}>
                        <img src="/java.jpg"className={Style.image}  />
                    </div>
                </SwiperSlide>
                <SwiperSlide className={Style.container}>
                    <div className={Style.subcontainer}>
                        <img src="/Laravel.jpg"className={Style.image}  />
                    </div>
                </SwiperSlide>
                <SwiperSlide className={Style.container}>
                    <div className={Style.subcontainer}>
                        <img src="/Nextjs.jpg"className={Style.image}  />
                    </div>
                </SwiperSlide>
                <SwiperSlide className={Style.container}>
                    <div className={Style.subcontainer}>
                        <img src="/php.png"className={Style.image}  />
                    </div>
                </SwiperSlide>
                <SwiperSlide className={Style.container}>
                    <div className={Style.subcontainer}>
                        <img src="/cplush.png"className={Style.image}  />
                    </div>
                </SwiperSlide>
                <SwiperSlide className={Style.container}>
                    <div className={Style.subcontainer}>
                        <img src="/github.png"className={Style.image}  />
                    </div>
                </SwiperSlide>
                <SwiperSlide className={Style.container}>
                    <div className={Style.subcontainer}>
                        <img src="/docker.png"className={Style.image}  />
                    </div>
                </SwiperSlide>
                <SwiperSlide className={Style.container}>
                    <div className={Style.subcontainer}>
                        <img src="/jenkins.jpg"className={Style.image}  />
                    </div>
                </SwiperSlide>
            </Swiper>
    )
}