// import { Fragment } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";

const CadastroFilme = () => {
    return(
        <>
            <Header/>
            <main>
            <Cadastro 
            tituloCadastro="Cadastro do FIlme"
            placeholder="filme "
            />
            <Lista
            tituloLista = "Filme"
            />
            </main>
            <Footer/>
        </>
    )
}


export default CadastroFilme;