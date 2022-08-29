import { useEffect } from "react";

import HookPErsonalizado from "../HookPersonalisado";

import usePath from "../hooks/usePath";

export default function Hook() {
  useEffect(() => {
    document.title = "Hooks Personalisados";
  }, []);

  const { isHome } = usePath();
  return (
    <>
      <h1>
        {isHome && isHome === true
          ? "Você está na Home"
          : "Você não está na Home"}
      </h1>
      <h1>Hooks</h1>

      <HookPErsonalizado />
    </>
  );
}
