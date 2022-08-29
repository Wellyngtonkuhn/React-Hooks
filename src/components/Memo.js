import { useState, useRef, useMemo } from "react";
import MemoRender from "./MenoRender";

import UseMeno from "./UseMeno";

export default function Memo() {
  const produtos = [
    { nome: "Laranja" },
    { nome: "Maracuja" },
    { nome: "Melancia" },
    { nome: "Pepino" },
  ];

  const [item, setItem] = useState(produtos);
  const [title] = useState("Títulos");

  // Neste exemplo use o useRef para controlar as renderizações do componente ao invés do state.
  const newItemRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem([...item, { nome: newItemRef.current }]);
  };

  const UseMemo = useMemo(() => <UseMeno title={title} />, [title]);

  return (
    <>
      <h1>Memo | UseMeno</h1>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          type="text"
          placeholder="Digite um Item"
          onChange={(e) => (newItemRef.current = e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      <ul>
        {item &&
          item.map((content) => {
            return <MemoRender key={content.nome} nome={content.nome} />;
          })}
      </ul>
      {UseMemo}
    </>
  );
}
