import Image from "next/image"
import Style from "../../public/style/meta_components/banner.module.css";
export default function Banner(){
    return (
        <main className={Style.main}>
            {/* banner content */}
            <section className={Style.section1}>
                <h2 className={Style.main_text}> 
                    CUTTING-EDGE TECHONOLOGY CHANGE <br></br>
                    YOUR WORLD
                </h2>
                <p className={Style.sub_text}>Start your business with us to enhance your productivity with the current <br></br>
                new revolution of the world bussiness process.</p>
                <div className={Style.horizontal_line}></div>
                <button className={Style.view_more}>
                    View more
                </button>
            </section>
            {/* image section */}
            <section className={Style.section2}>
                <img className={Style.image} src="/hacker_banner.png" />
            </section>
        </main>
    )
}