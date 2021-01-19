import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../src/styles/theme";
import Nav from "../src/components/nav";
import { wrapper } from "../src/redux/store";

function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Nav />
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    );
}

export default wrapper.withRedux(App);
