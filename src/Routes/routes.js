import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import CadastroFilme from "../pages/cadastroFilme/CadastroFilme";
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero";


const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                {/*   / => Login  */}
                <Route path="/" element={<Login/>} exact />
                {/*   /CadastroFilme  => cadastro filme*/}
                <Route path="/Filme" element={<CadastroFilme/>} exact/>
                {/*   /CadastroGenero  => cadastro genero  */}
                <Route path="/Genero" element={<CadastroGenero/>} exact />

            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;