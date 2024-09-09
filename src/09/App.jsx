import styles from "./styles.module.css";

import Header from "./components/Header/Header";
import Home from "./components/About/Home";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

export default function App() {
    return (
        <div className={styles.components}>
            <Header />
            <Home />
            <Products />
            <Footer />
        </div>
    )
}