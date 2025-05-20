import React, { useState } from "react";
import "./Paginacao.css";


const Pagination = ({ totalItems, itemsPerPage, currentPage, setPage }) => {
  // Calcula o total de páginas com base na quantidade de itens e itens por página
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div style={{ marginTop: "1rem" }}>
      {/* Botão para ir para a página anterior, desabilitado se já estiver na primeira página */}
      <button onClick={() => setPage(currentPage - 1)} disabled={currentPage === 1}>
        ←
      </button>

      {/* Texto exibindo a página atual e o total de páginas */}
      <span style={{ margin: "0 1rem" }}>
        Página {currentPage} de {totalPages}
      </span>

      {/* Botão para ir para a próxima página, desabilitado se já estiver na última página */}
      <button onClick={() => setPage(currentPage + 1)} disabled={currentPage === totalPages}>
        →
      </button>
    </div>
  );
};

// Componente principal da página (exemplo de uso da paginação)
const Home = () => {
  // Cria um array de 25 itens, de "Item 1" até "Item 25"
  const data = Array.from({ length: 25 }, (_, i) => `Item ${i + 1}`);
  const itemsPerPage = 5; // Quantidade de itens exibidos por página
  const [currentPage, setCurrentPage] = useState(1); // Estado que armazena a página atual

  // Calcula o índice de início dos itens da página atual
  const start = (currentPage - 1) * itemsPerPage;

  // Extrai os itens da página atual usando slice
  const currentItems = data.slice(start, start + itemsPerPage);

  // OBS: O componente Home está incompleto. Faltou retornar algum conteúdo com JSX, 
  // como a lista de itens e o componente Pagination. Sem isso, nada será exibido na tela.
};

// Exporta o componente Home como padrão
export default Home;
