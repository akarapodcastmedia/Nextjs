import Style from "../../public/style/meta_components/personality.module.css"
export default function Personality(){
    return (
       <section className={Style.container}>
            <h2>Who am I ? </h2>
            <div className={Style.subcontainer1}>
                <div className={Style.sub1}>
                    <img className={Style.logo}  src="/profile_lyheang.jpg" />
                    <p className={Style.logotext}>
                        Mr.Pich Lyheang
                    </p>
                </div>
                <div className={Style.sub2}>
                    <h3 className={Style.seftintro}>Seft introduction</h3>
                    <p className={Style.description}>
                        My name is pich lyheang , third-year student at Royal University of Phnom Penh, is very pleasure
                        to have this such fantastic opportunity to exhibit a few things associated to myself. I have some experience in both front-end or back-end development
                        I intensively and profoundly comprehend how those components process their underlying process. I am writting this to inform you that I have available virtual video in both Youtube or Facebood that
                        It means being free for all you who may be eager to learn new techonologies. additionally you can save you time alot with learning through the my online prepared video owning to its uncomplexity. I wait for you guys.
                    </p>
                </div>
            </div>
       </section>
    )
}