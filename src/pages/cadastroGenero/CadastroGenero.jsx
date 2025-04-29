import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";
import Cadastro from "../../components/cadastro/Cadastro";

const CadastroGenero = () => {
    return(
        <>
        <Header/>
        <main>
            <Cadastro 
            tituloCadastro="Cadastro do Gênero"
            visibilidade = "none"
            placeholder = "gênero" 
            />
            
            <Lista
            tituloLista = "Gênero"
            visibilidade = "none"
            />
        </main>
        <Footer/>
        </>
    );
}


export default CadastroGenero;