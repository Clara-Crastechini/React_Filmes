import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";
import Cadastro from "../../components/cadastro/Cadastro";

import { useEffect, useState } from "react";

import api from "../../Services/services";

import Swal from 'sweetalert2';


// function() = {} funcao
// () => {} funcao anonima ou arrow function
// hooks       funcao    dependencia
// useEffect( () => {} ,     []     )
// hooks: Effect(efeito colateral a partir de uma alteracao de estado)
// funcao:
// dependencia: Vazio(o efeito acontece na primeira vez que a tela eh "montada" ou quando for recarregada, com dependencia(toda vez que o state sofrer alteracao o efeito acontecera))



const CadastroGenero = () => {

    const [genero, setGenero] = useState("");
    const [listaGenero, setListaGenero] = useState([]);


    function alertar(icone, mensagem){
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



    async function cadastrarGenero(e) {
        e.preventDefault();

        // verificar se o input esta vindo vazio
        if (genero.trim() != "") {

            try {
                // cadastrar um genero: post
                await api.post("genero", { nome: genero });
                alertar("success", "Cadastro realizado com sucesso!")
                setGenero("")
                // atualiza minha lista assim que cadastrar um novo genero
                listarGenero();
            } catch (error) {
                alertar("error", "Entre em contato com o suporte.")
                console.log(error);

            }
        } else {
                alertar("error", "O campo precisa estar preenchido!")
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

            Swal.fire({
                title: "Quer exlcuir permanentemente?",
                text: "Não será possível reverter",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Deletar item"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    // interpolação 
                    await api.delete(`genero/${generoId.idGenero}`);
                    alertar("success", "Gênero deletado com sucesso!")
                    // Swal.fire({
                    //     title: "Deletado!",
                    //     text: "Genero deletado com sucesso!",
                    //     icon: "success"
                    // });
                }
            });
            listaGenero();

        } catch (error) {
            console.log(error);
        }

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
    }, [listaGenero])


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
                    funcExcluir = {deletarGenero}

                />
            </main>
            <Footer />
        </>
    );
}


export default CadastroGenero;