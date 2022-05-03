import "../styles/globals.css";
import { MoralisProvider, moralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
    return ( <
        MoralisProvider serverUrl = { process.env.NEXT_PUBLIC_MORALIS_SERVER }
        appId = { process.env.NEXT_PUBLIC_MORALIS_APP_ID } >
        <
        Component {...pageProps }
        /> < /
        MoralisProvider >
    );
}

export default MyApp;