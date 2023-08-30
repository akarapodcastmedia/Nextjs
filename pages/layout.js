import Navigation from "./meta_components/navigationbar_component";
import Footer from "./meta_components/footer";

export default function Layout({children}){
    return (
        <>
            <Navigation />
                {children}
            <Footer />
        </>
    )
}