import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";
import Cadastro from "../../components/cadastro/Cadastro";

import { useEffect, useState } from "react";

import api from "../../Services/services";

import Swal from 'sweetalert2';



const CadastroGenero = () => {

    const [genero, setGenero] = useState("");
    const [listaGenero, setListaGenero] = useState([]);
    const [itemDelete, setItemDelete] = useState([]);


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
                alerta("success", "Cadastro realizado com sucesso!")
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


    // sincrono => acontece simultaneamente.
    // assincrono => esperar algo/resposta para ir para o proximo bloco de codigo.

     async function listarGenero(){
        try {
            const resposta = await api.get("genero");
            console.log(resposta.data);
            
            setListaGenero(resposta.data);
            
        } catch(error){
            console.log(error);
            
        }
    }

 

    // funcao de excluir genero:
  async function deletarGenero(generoId) {
        try {
            await api.delete(`genero/${generoId.idGenero}`);
            alerta("success", "Gênero excluído com sucesso!");
            // Atualizar a lista após exclusão
        } catch (error) {
            alerta("error", "Erro ao excluir gênero.");
            console.log(error);
        }
        listarGenero();
    }






    // teste: validar o genero.
    // useEffect(<function>, <dependecy>)
    // useEffect(() => {
    //     console.log(genero)
    // }, [genero]);
    // fim do teste


    // assim que a pagina reenderizar o metodos listarGenero() sera chamado
    useEffect(() => {
        listarGenero();
    }, [genero])


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

                    // atribuir para lista, o meu estado atual:
                    lista = {listaGenero}
                    funcDeletar = {deletarGenero}

                />
            </main>
            <Footer />
        </>
    );
}


export default CadastroGenero;