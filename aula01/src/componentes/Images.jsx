//Trabalhando com duas formas de importação de imagens. Usando a pasta public (opcão 1) e a pasta assets e src (opção 2-  mais usual)

//para imagens em assets deve-se importar como se fosse um componente. Esta forma vai se mostrar mais prática.
//Obs: Cuidado com o nome a ser dado para as variáveis. Não deve ser utilizado nomes reservados.
import imagem from "../assets/coelho.jpeg"
import ponte from "../assets/ponte.jpeg"


function Images (){

    return(
        <>
        {/* opção 1 - importando de public, podemos referenciar como se estivesse em src. 
        Obs.: Tag figure permite usar a opção de legenda figcaption */}
        <figure>
            <img src={ponte} alt="Imagem de Ponte" />
            <figcaption>Imagem de ponte</figcaption>
        </figure>
        <figure>
            <img src={imagem} alt="Imagem do coelho" />
            <figcaption>Imagem do coelho</figcaption>
        </figure>
        </>

    )
}

export default Images