import styles from "./styles.module.css";

import Card from "../Cards/Cards";

export default function Products() {
    return (
        <div className={styles.container}>
            <h2 className={styles.text}>Produtos</h2>
            <div className={styles.cards}>
                <Card image="https://www.coca-cola.com/content/dam/onexp/br/pt/brands/coca-cola/Brazil_coca_cola_logo.png" />
                <Card image="https://www.coca-cola.com/content/dam/onexp/br/pt/brands/sprite/br_sprite_logo.png" />
                <Card image="https://www.coca-cola.com/content/dam/onexp/br/pt/brands/fanta/Logo-Fanta.png"/>
                <Card image="https://www.coca-cola.com/content/dam/onexp/br/pt/logos/Logo_Schweppes.png"/>
                <Card image="https://www.coca-cola.com/content/dam/onexp/br/pt/logos/crystal_logo_500x180.png"/>
                <Card image="https://www.coca-cola.com/content/dam/onexp/br/pt/logos/kuat_logo.png"/>
                <Card image="https://www.coca-cola.com/content/dam/onexp/br/pt/brands/lemon-dou/es_Mexico_Lemon-Dou_Logotype_Blue_500x180.png"/>
                <Card image="https://www.coca-cola.com/content/dam/onexp/br/pt/brands/jack-daniels/Brazil_JandC_Logo_180x180.png"/>
                <Card image="https://www.coca-cola.com/content/dam/onexp/br/pt/brands/del-valle/finals/es_Global%20delValle%20Logo%204C_180x180.png"/>
                <Card image="https://www.coca-cola.com/content/dam/onexp/br/pt/logos/es_ades_logo_180x180.png"/>
                <Card image="https://www.coca-cola.com/content/dam/onexp/br/pt/brands/produtos-leao/logo_chas_leao.jpg"/>
            </div>
        </div>
    )
}