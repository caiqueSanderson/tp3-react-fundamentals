import "./styles.css"
import Card from "./component/Card";

export default function App() {
    return (
        <>
            <h1>Cards</h1>
            <div className="container_cards">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}