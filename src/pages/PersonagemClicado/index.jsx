import { useEffect, useState } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";
import { Div } from "./style";

export const PersonagemClicado = () => {
  const { id } = useParams();

  const [personagem, setPersonagem] = useState(null);

  useEffect(() => {
    api
      .get(`/characters/${id}`)
      .then((response) => setPersonagem(response.data));
  }, [id]);

  return (
    <>
      {personagem ? (
        <Div>
          {" "}
          <h1>
            {id} - {personagem.name}
          </h1>
          <img src={personagem.images[0]} alt={personagem.name} />
          {personagem.about.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </Div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
