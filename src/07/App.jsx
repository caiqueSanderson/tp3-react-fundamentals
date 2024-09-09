import styles from "./styles.module.css";

import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";

export default function App() {
    return (
        <div>
            <Header />
            <div className={styles.cards}>
                <Card />
                <Card />
            </div>

            <Footer />
        </div>
    )
}