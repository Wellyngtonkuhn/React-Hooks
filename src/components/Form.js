import { useRef } from "react";

export default function Form() {
  const nomeRef = useRef('');
  const idadeRef = useRef();
  const aceitartTermosRef = useRef({ value: false})

  const handleForm = (e) => {
    e.preventDefault();
    console.log(`Nome: ${nomeRef.current}`);
    console.log(`Idade: ${idadeRef.current}`);
    console.log(`Termo: ${aceitartTermosRef.current.value}`);
};

  return (
    <>
      <h1>Form with Refs</h1>
      <form onSubmit={handleForm}>
        <label>
          Nome:
          <input
            autoFocus
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => (nomeRef.current = e.target.value)}
          />
        </label>
        <label>
          {" "}
          Idade:
          <input
            type="number"
            placeholder="Digite sua idade"
            onChange={(e) => (idadeRef.current = e.target.value)}
          />
        </label>
        <button value={aceitartTermosRef.current.value} type="button" onClick={()=>aceitartTermosRef.current.value = true}>Aceitar termos</button>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
