import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    return (
        <div className='lista-suspensa'>
            
            <label> {/* Label == etiqueta. Aqui estamos incluindo um etiqueta ao campo para melhor a cessibilidade. */}
                {props.label}
            </label> 

            <select 
                onChange={evento => props.aoAlterado(evento.target.value)}
                required={props.required} /* Tag que cria o menu de opção (Drop down == lista suspensa).
                                            O "required={props.required}" diz que esse campo é requerido(required / Obrigatório) 
                                            quando no props vier o props.required */
                value={props.valor}
            > 

                {props.itens.map(item => <option key={item}>{item}</option>)} 
                {/* O .map pode ser usada em qualquer lista no JS. 
                    O .map mapeia uma lista e após uma ação, que é realizada pela Arrow Function, returma um nova lista traformada pela ação.
                    Então, neste caso, para cada "item" da lista de "itens", estamos retornando um <option>{item}</option> para a nova lista de retorno, 
                    que neste caso se tornou um lista de <option>. (Veio uma lista de itens e voltou uma lista de options)
                    E o <option> é a tag HTML que retorna uma opção do <select> (Drop down == lista suspensa) 
                    
                    Obs.: O "key={item}" está incluindo um chave única(O nome de cada item da lista, que não repete) para cada 
                    um dos itens da lista suspensa. (Esse erro foi mostrado no console do navegador, mas a página rederizou sem erros) */}
            </select>
        </div>
    )
}

export default ListaSuspensa;