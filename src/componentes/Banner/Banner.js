import './Banner.css'

export const Banner = () => {

    // JSX -> O código abaixo parece HTML, mas não é! Ele é um JSX.
    return (
        <header className="banner"> {/* Como class é uma palavra reservada do JavaScript, no lugar de class usamos o className*/}
            <img src="/imagens/banner.png" alt="O banner principal da página do Organo" />
        </header> 
    )

};

export default Banner