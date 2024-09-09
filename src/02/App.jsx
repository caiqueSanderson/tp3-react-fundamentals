export default function App() {
    const containerProducts = {
        margin: '40px 0',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    };

    const imageStyle = {
        width: '150px',
    };

    const productMain = {
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: "30px"
    }

    const text = {
        width: '50vw',
    }

    const nameBrand = {
        fontFamily: "Lobster, sans - serif",
        fontWeight: "400",
        fontStyle: "normal",
        color: "red",
    }

    const cocaCola = {
        width: "60vw",
    }

    return (
        <div>
            <div style={containerProducts}>
                <img src="https://coca-colafemsa.com/wp-content/uploads/2020/02/3-57.png" alt="" style={imageStyle} />
                <img src="https://coca-colafemsa.com/wp-content/uploads/2020/02/1.png" alt="" style={imageStyle} />
                <img src="https://coca-colafemsa.com/wp-content/uploads/2020/02/1-129.png" alt="" style={imageStyle} />
            </div>
            <div style={productMain}>
                <div style={text}>
                    <h1 style={nameBrand}>Coca-Cola</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius labore eligendi itaque cumque at. Atque neque at ex aspernatur aliquid odio, debitis cupiditate odit laboriosam in incidunt, placeat cumque accusantium.</p>
                </div>
                <img src="https://coca-colafemsa.com/wp-content/uploads/2019/11/2.png" alt="" style={cocaCola}/>
            </div>

        </div>
    )
}