import { useEffect, useContext } from "react";
import { GlobalContext } from "../contexts/ContextProvider";

export default function UseRef() {

  const { emailRef, counterRef, showComponent, setShowComponent } = useContext(GlobalContext);

  const handleShowComponent = () => {
    setShowComponent(!showComponent);
  };

  const ExibirComponent = () => {
   
    useEffect(() => {
      document.title = "UseRef";
      return () => {
        document.title = "React App";
      };
    }, [showComponent]);

    useEffect(() => {
      emailRef.current?.focus();
    }, []);

    return (
      <>
        <h1>UseReF | Context</h1>
        <button onClick={() => (counterRef.current = counterRef.current + 1)}>
          Clicar
        </button>
        <button onClick={() => alert(`Você clicou ${counterRef.current}`)}>
          Visualizar Clicadas
        </button>

        <div>
          <input
            ref={emailRef}
            type="nome"
            placeholder="Digite seu nome"
            onChange={(e) => (emailRef.current = e.target.value)}
          />
        </div>
        <button onClick={() => alert(emailRef.current)}>Ver email</button>
      </>
    );
  };

  return (
    <>
      <h1>UseReF | Context</h1>
      <button onClick={handleShowComponent}>
        {showComponent ? "Fechar Componente" : "Abrir Componente"}
      </button>

      {showComponent && <ExibirComponent />}
    </>
  );
}
