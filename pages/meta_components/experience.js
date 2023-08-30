import Link from "next/link";
import Style from "../../public/style/meta_components/experience.module.css";
export default function Experience(){
    return (
        <section className={Style.container}>
            <h2 className={Style.maintitle}>Personal Experience</h2>
            <div className={Style.subcontainer}>
                    <div className={Style.sub1}>
                        <p className={Style.title}>Research Paper</p>
                        <span className={Style.description}>I used to write my persoanl paper ,software engineering. as regard to this we have learn alot .</span>
                        <img className={Style.image} src="/exp2.jpg" />
                        <p className={Style.reference}>Reference Link</p>
                        <Link className={Style.link} href="#2">Github : https://github/lyheang/paper</Link>
                    </div>
                    <div className={Style.sub1}>
                        <p className={Style.title}>Akara system</p>
                        <span className={Style.description}>I used to write my persoanl paper ,software engineering. as regard to this we have learn alot .</span>
                        <img className={Style.image} src="/exp2.jpg" />
                        <p className={Style.reference}>Reference Link</p>
                        <Link className={Style.link} href="#2">Github : https://github/lyheang/akara</Link>
                    </div>
                    <div className={Style.sub1}>
                        <p className={Style.title}>ITE culculator</p>
                        <span className={Style.description}>I used to write my persoanl paper ,software engineering. as regard to this we have learn alot .</span>
                        <img className={Style.image} src="/exp2.jpg" />
                        <p className={Style.reference}>Reference Link</p>
                        <Link className={Style.link} href="#2">Github : https://github/lyheang/ITEcaculator</Link>
                    </div>
                    <div className={Style.sub1}>
                        <p className={Style.title}>Image Processing</p>
                        <span className={Style.description}>I used to write my persoanl paper ,software engineering. as regard to this we have learn alot .</span>
                        <img className={Style.image} src="/exp2.jpg" />
                        <p className={Style.reference}>Reference Link</p>
                        <Link className={Style.link} href="#2">Github : https://github/lyheang/Image processing</Link>
                    </div>

            </div>
        </section>

    )
}