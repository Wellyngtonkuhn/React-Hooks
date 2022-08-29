import { useEffect } from "react";

export default function UseCallBackRender({ list, modifierList }) {
  const executeListModifier = modifierList(list);

  useEffect(() => {
    console.log("A função recarregou");
  }, [modifierList]);

  return (
    <>
      <ul>
        {executeListModifier &&
          executeListModifier.map((item) => {
            return <li key={item}>{item}</li>;
          })}
      </ul>
    </>
  );
}
