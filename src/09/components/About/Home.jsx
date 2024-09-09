import styles from "./styles.module.css"

export default function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.introduction}>
                <img
                    className={styles.image}
                    src="https://www.coca-cola.com/content/dam/onexp/br/pt/about-us/nos-conheca/0.jpg/width1960.jpg"
                    alt=""
                />
                <div className={styles.text}>
                    <h2>Nosso Propósito é Refrescar o Mundo e Fazer a Diferença.</h2>
                    <p>Nosso Propósito é Refrescar o Mundo e Fazer a Diferença.
                        Estamos comprometidos em oferecer às pessoas as bebidas que desejam, em uma variedade de categorias e tamanhos,
                        enquanto promovemos soluções sustentáveis que fortalecem a resiliência do nosso negócio e criam mudanças positivas
                        para o planeta.</p>
                </div>
            </div>

            <div className={styles.about}>
                <h2>Quem somos</h2>
                <p>Em 8 de maio de 1886, o Dr. John Pemberton levou seu xarope aperfeiçoado para a Farmácia Jacobs no centro de Atlanta, onde foi servido o primeiro copo de Coca‑Cola. A partir dessa bebida icônica, evoluímos para uma empresa de bebidas completa. Mais de 2,2 bilhões de unidades de nossas bebidas são apreciadas em mais de 200 países e territórios todos os dias.</p>
                <p>Estamos constantemente transformando nosso portfólio, em ações que vão desde a redução de açúcar adicionado em nossas bebidas até a introdução de novos produtos inovadores no mercado. Buscamos impactar positivamente a vida das pessoas, as comunidades e o planeta por meio da reposição de água, reciclagem de embalagens, práticas de fornecimento sustentável e redução de emissões de carbono em toda nossa cadeia de valor. Junto com nossos parceiros engarrafadores, empregamos mais de 700.000 pessoas, ajudando a trazer oportunidades econômica para comunidades locais em todo o mundo.</p>
            </div>

        </div>
    )
}