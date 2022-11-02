import './CampoTexto.css' /* Sempre importar o arquivo CSS! */

/* Entenda que todo componente no React é um Função! Neste caso, a "arrow function" abaixo () = {}, mas isso também vale para a função normal. */

const CampoTexto = (props) => { /* Implicitamente o React entrega para essa função o parâmetro chamado de propriedade("props"), 
                                que é um objeto JS. Poderia ser usado qualquer nome, mas por padrão é usamos "props" */

    const placeholderModificada = `${props.placeholder}...` /* Concatenando o valor do atributo "placeholder" com o três pontinhos (...) */
    /* Atenção!, o `${}` é chaamdo de "template strings", que é JS e não React! O "template strings" é usado para concatenações. */


    const aoDigitado = (evento) => { /* O "evento" é o evento de subscript do próprio JS */
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto"> {/* Com a tag className, estou nomeando essa classe div como "capo-texto". Ela é usada no CampoTexto.css */}

            <label>
                {props.label}  
            </label>     {/* Com o {props.label}, substituímos o código "hard coded" (Marretado) "<label>Nome</label>" para um 
                            dinâmico, que tem o valor passado por variável. 
                            Atenção!, no JSX, para dizer que você quer imprimir o valor, é necessário o uso das chaves"{}" em volta 
                            da propriedade a ser impressa "props.label", ficando assim =>  "{props.label}" */}

            <input 
                value={props.valor} 
                onChange={aoDigitado} /* O "onChange={}, capta cada caracter informado dentro do input e para cada captura, executa o que se encontra em {}." */
                required={props.obrigatorio} /* O "required={props.required}" diz que esse campo é requerido(required / Obrigatório) quando no props vier o props.required. */
                placeholder={placeholderModificada} /* placeholder é a sugestão de preenchimento do campo. Aqui passamos a variável,
                pois o JSX aguarda receber uma variável JS, seja vinda de fora como criada no próprio arquio .js (Ex.: "props.placeholder" ou "placeholderModificada"). */
            /> 
        </div>
    )
}

export default CampoTexto;