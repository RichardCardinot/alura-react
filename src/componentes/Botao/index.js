import './Botao.css'

const Botao = (props) => {
    return (
        <button className='botao'> {/* Tag HTML para a criação do botão*/}
            {props.children}       {/* props.childes (Ou elementos aninhados). Tudo que for passado dentro do <Botao> --aqui-- </Botao>, 
                                       onde esse componente é chamado, será reconhecido como um filho(props.children) e será usado. 
                                       Ex.: Um nome, um ícone, ou até mesmo um nome e um ícone. */}
        </button>
    )
}

export default Botao;