import SwiperSkills from "./sub_helper_components/swiper"
import Style from "../../public/style/meta_components/skills.module.css"
export default function Skills(){
    return (
        <section>
                <h2 className={Style.text}>Programming Skills</h2>
                <SwiperSkills />
        </section>
    )
}