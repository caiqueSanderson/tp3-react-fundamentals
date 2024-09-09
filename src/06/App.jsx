import "./styles.css";

import Header from "./component/Header/Header";
import Card from "./component/Card/Card";
import Footer from "./component/Footer/Footer";

export default function App() {
    return (
        <div>
            <Header/>
            <Card/>
            <Card/>
            <Footer/>
        </div>
    )
}