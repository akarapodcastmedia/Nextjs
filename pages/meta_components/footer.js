import Style from "../../public/style/meta_components/footer.module.css";
export default function Footer(){
    return (
        <section className={Style.container}>
            <div className={Style.sub1}>
                <p><span>Email Adress: </span>lyheangcs168@gmail.com</p>
                <p><span>Phone Contact:</span>+885 10639109</p>
            </div>
            <div className={Style.sub2}>
                <p>Copyright@2023</p>
            </div>
            <div className={Style.sub3}>
                <p><span>Founder : </span>Mr. Pich Lyheang</p>
            </div>
        </section>
    )
}