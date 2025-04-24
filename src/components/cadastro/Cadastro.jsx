import Botao from "../botao/Botao";
import "./Cadastro.css";

const Cadastro = () => {
    return(
        <section className="section_cadastro">
            <form action="" className="layout_grid form_cadastro">
                <h1>Cadastro de Filme</h1>
                <hr/>
                <div className="campos_cadastro">
                    <div className="campo_cad_nome">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" name="nome" id="" placeholder="Digite o nome"/>
                    </div>
                    <div className="campo_cad_genero">
                        <label htmlFor="genero">Gênero:</label>
                        <select name="genero" id="" >
                            <option  value="" disabled selected>Selecione seu gênero</option>
                            <option value="">op 1</option>
                            <option value="">op 2</option>
                            <option value="">op 3</option>
                        </select>
                    </div>
                <Botao/>
                </div>
            </form>
        </section>
    )
}

export default Cadastro;