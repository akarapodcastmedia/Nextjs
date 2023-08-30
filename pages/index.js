// import module 
import Image from "next/image"
import Style from "../public/style/index.module.css"

// import component section
import Banner from "./meta_components/banner";
import Skills from "./meta_components/skills";
import Personality from "./meta_components/personlity";
import Experience from "./meta_components/experience";
import Layout from "./layout";
import Head from 'next/head';
// export main compnent 
export default function MainApp(){
    return (
        <Layout>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div className={Style.container}>
                {/* <Navigation /> */}
                <Banner />
                <Skills />
                <Personality />
                <Experience />
                {/* <Footer /> */}
            </div>
        </Layout> 
    )
}