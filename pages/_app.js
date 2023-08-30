// import module section
import "../public/style/global.css";
export default function App({Component , pageProps}){
    return (
        <>
            <Component {...pageProps}  />
        </>
       
    )
}