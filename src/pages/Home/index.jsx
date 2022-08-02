import { useEffect, useState } from "react";
import api from "../../services/api";
import { ContainerUl, Li } from "./style";
import { Link, useSearchParams } from "react-router-dom";

export const Home = () => {
  const [personagens, setPersonagens] = useState([]);
  const [name, setInput] = useState("");
  const [searchParams, setSearchParams] = useSearchParams("");

  function pesquisarInput(e) {
    e.preventDefault();
    setSearchParams({ name });
  }

  useEffect(() => {
    api
      .get("/characters", {
        params: {
          offsset: 0,
          limit: 96,
          name: searchParams.get("name"),
        },
      })
      .then((response) => setPersonagens(response.data))
      .catch((error) => alert(error));
  }, [searchParams]);
  return (
    <>
      <h1>Personagens Naruto</h1>
      <form onSubmit={pesquisarInput}>
        <input
          type="text"
          placeholder="Digite aqui um clan"
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button type="submit">Procurar</button>
      </form>
      <ContainerUl>
        {personagens.map((personagem) => (
          <Link key={personagem.id} to={`${personagem.id}`}>
            <Li key={personagem.id}>
              {personagem.name}
              <img src={personagem.images[0]} alt={personagem.name} />
            </Li>
          </Link>
        ))}
      </ContainerUl>
    </>
  );
};
