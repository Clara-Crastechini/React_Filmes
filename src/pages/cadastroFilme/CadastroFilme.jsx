// import { Fragment } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import listarGenero from "../cadastroGenero/CadastroGenero"

import { useEffect, useState } from "react";

import api from "../../Services/services";

import Swal from 'sweetalert2';



const CadastroFilme = () => {

    const [filme, setFilme] = useState("");
    const [genero, setGenero] = useState("");
    const [listaGenero, setListaGenero] = useState([]);
    const [listaFilme, setListaFilme] = useState([]);

    function alertar(icone, mensagem) {
        // ------------alertar-----------
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



        // -------fim do alertar---------
    }

    // funcao para trazer os generos no meu select
    async function listarGenero() {
        try {
            const resposta = await api.get("genero");
            setListaGenero(resposta.data);
        } catch (error) {
            console.log(error);
        }

    }


    async function cadastrarFilme(e) {
        e.preventDefault();
        // tratamento de exceção
        if (filme.trim() !== "") {
            try {
                await api.post("filme", {titulo: filme, idGenero: genero}); 
                alertar("success", "Sucesso! Cadastro realizado com sucesso");
                setFilme("");
                setGenero("");
            } catch (error) {
                console.log(error);
            }
            // alert("foi chamado o cadastrarFilme")
        } else {
            alertar("error", "Erro! Preencha todos os campos")
        }
    }


    async function listarFilme() {
        try {
            const resposta = await api.get("filme");
            setListaFilme(resposta.data);
        } catch (error) {
            console.log(error);
            
        }
    }




    useEffect(() => {
        listarGenero();
        listarFilme();
    }, [])


    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro do FIlme"
                    placeholder="filme"
                    funcCadastro={cadastrarFilme}
                        lista={listaGenero}

                    valorInput={filme}
                    setValorInput={setFilme}

                    valorSelect={genero}
                    setValorSelect={setGenero}
                />
                <Lista
                    tituloLista="Filme"
                    tipoLista="filme"
                    lista={listaFilme}
                />
            </main>
            <Footer />
        </>
    )
}


export default CadastroFilme;