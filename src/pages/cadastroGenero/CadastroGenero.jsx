import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";
import Cadastro from "../../components/cadastro/Cadastro";

import { useEffect, useState } from "react";

import api from "../../Services/services";

import Swal from 'sweetalert2';



const CadastroGenero = () => {

    const [genero, setGenero] = useState("");


    function alerta(icone, mensagem){
         // ------------alerta-----------
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: icone,
                    title: mensagem
                });



                // -------fim do alerta---------
    }



    async function cadastrarGenero(e) {
        e.preventDefault();

        // verificar se o input esta vindo vazio
        if (genero.trim() != "") {

            try {
                // cadastrar um genero: post
                await api.post("genero", { nome: genero });
                alerta("sucess", "Cadastro realizado com sucesso!")
                setGenero("")
            } catch (error) {
                alerta("error", "Entre em contato com o suporte.")
                console.log(error);

            }
        } else {
                alerta("error", "O campo precisa estar preenchido!")
        }


        // try => tentar(o esperado)
        // catch => lanca a excecao

    }


    // teste: validar o genero.
    // useEffect(<function>, <dependecy>)
    // useEffect(() => {
    //     console.log(genero)
    // }, [genero]);
    // fim do teste


    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro do Gênero"
                    visibilidade="none"
                    placeholder="gênero"

                    //atribuindo a funcao:
                    funcCadastro={cadastrarGenero}

                    // atribuindo o valor do input:
                    valorInput={genero}

                    // atribuindo a funcao do que atualiza o meu genero 
                    setValorInput={setGenero}

                />

                <Lista
                    tituloLista="Gênero"
                    visibilidade="none"
                />
            </main>
            <Footer />
        </>
    );
}


export default CadastroGenero;