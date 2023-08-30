import Image from "next/image";
import Link from "next/link";
import Style from "../../public/style/meta_components/navigation.module.css";
import { useRouter } from "next/router";
import Head from "next/head";
export default function Navigation(){
    const route = useRouter();
    return(
        <nav className={Style.nav}>
            <Head>
                <title >
                    My blog page
                </title>
            </Head>
            {/* Log section */}
            <div className={Style.logo}>
                <Image src="/hacker_logo.png" className={Style.image} width={60} height={60}/>
                <span className={Style.name}>
                    DevTech
                </span>
            </div>
            {/* links section */}
            <div className={Style.linkcontroll}>
                <Link href="#d1" className={route.pathname=="/"? Style.currentlink:Style.link}> Home </Link>
                <Link href="#d1" className={Style.link}> Contact</Link>
                <Link href="#d1" className={Style.link}> Resouce</Link>
                <Link href="#d1" className={Style.link}> About me</Link>
            </div>
        </nav>

    )
}