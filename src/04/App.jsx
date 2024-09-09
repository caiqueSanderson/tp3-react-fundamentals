import "./styles.css"

export default function App() {
    return (
        <div className="form">
            <h1 className="title_register">Cadastro de Produtos</h1>
            <form action="">
                <label for="product" className="label">
                    Nome do produto: 
                    <input className="name_product input" type="text" placeholder="Informe o nome do produto" />
                </label>

                <section className="section_price">
                    <label className="label">
                        Preço de venda: 
                        <input className="input" type="number" placeholder="Informe o preço de venda" />
                    </label>

                    <label className="label">
                        Preço de custo: 
                        <input className="input" type="number" placeholder="Informe o preço de custo" />
                    </label>
                </section>

                <section className="section_select">
                    <label className="label">
                        Fornecedor:
                        <input className="input" type="select" />
                    </label>

                    <label className="label">
                        Categoria: 
                        <input className="input" type="select" />
                    </label>
                </section>

                <label className="label">
                    Descrição:
                    <textarea className="input" name="description" id=""></textarea>
                </label>

                <label>
                    <input type="submit" value="Enviar"/>
                </label>
            </form>
        </div>
    )
}