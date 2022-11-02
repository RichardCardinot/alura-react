import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = (props) => {

    const times = [   /* Criando uum vetor com o times. */
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('');  /* Sepre que houver a palavra "use", se trata do hook(Gancho) do React.
          [leitura, escrita]                  Neste caso, estamos fazendo o hook(Gancho) do estado. */

    /* Caso informado um dado como parâmetro no useState(''), como useState('Richard'), estamos dizendo que a String 'Richard'
    é o estado padrão. Se precisar mudar o valor do estado, temos que passar o valor a partir do "setNome('novo nome')"". */

    /* Sempre que queremos que o componente reaja a alguma alteração no valor de uma variável e se renderize novamente, 
    precisamos indicar isto utilizando o useState. Do contrário, o valor vai ser alterado mas o DOM não será atualizado. */

    /* No "const [nome, setNome] = " estamos "desestruturando o array". A primeira posição do array chammaos de (nome) e a segunda,
    de (setNome). Repare que o array desestruturado é o array de retorno do "useState('')" */

    const [cargo, setCargo] = useState(''); /* Resumo: Foi feito o set? Sim. Atualiza o componente. */
    const [imagem, setImagem] = useState(''); /* Resumo: Foi feito o set? Sim. Atualiza o componente. */
    const [time, setTime] = useState(''); /* Resumo: Foi feito o set? Sim. Atualiza o componente. */

    const aoSalvar = (evento) => {  /* O "evento" é o evento de subscript do próprio JS */
        evento.preventDefault() /* O "preventDefault", de "evento" previde o comportamento padrão do navegador, que é o carregar a página. 
                                   Desta forma, a página não será recarregada automaticamente e o React controlará e dirá o que deve 
                                   ser feito.  */
        props.aoColaboradorCadastrado(
            {
                nome,
                cargo,
                imagem,
                time
            }
        )
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>  {/* O "onSubmit" faz com que o React ouça o evento DOM de submissão deste formulário e aplique
                                            o que se encontra em ={}. Neste caso é a função que está na variável const aoSalvar. 
                                            Dica, digitar "on" e vê as possibilidades de ações que o VS indica como 
                                            possíveis para serem ouvidas. */}

                <h2>Preencha os dados para criar o card do colaborador</h2>

                <CampoTexto 
                    obrigatorio={true} /* O "obrigatorio={true}" é uma validação padrão do próprio HTML 5, então estamos dizendo que esse campo é obrigatório.*/
                    label="Nome" 
                    placeholder="Digite o seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo" 
                    value={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />

                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} 
                />

                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={times}
                    valor={time}
                    aoAlterado={(valor) => {setTime(valor)}}
                />
        
                <Botao>
                    Criar Card        {/* Tudo que estiver entre <Botao> --aqui-- </Botao>, será reconhecido como um props.children do componente Botao. */}
                </Botao>

            </form>
        </section>
    )

}

export default Formulario;