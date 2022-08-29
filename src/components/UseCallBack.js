import { useState, useCallback } from "react";
import UseCallBackRender from "./UseCallBackRender";

export default function UseCallBack() {
  const [title, setTitle] = useState();
  const [newTitles, setNewTitles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTitles([...newTitles, title]);
    setTitle("");
  };

  const modifierList = useCallback((list) => {
    const spaceList = list.map((item) => item.split("").join(" "));

    return spaceList;
  }, [])

  return (
    <>
      <h1>UseCallBack</h1>

      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          type={"tetx"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>

      <UseCallBackRender list={newTitles} modifierList={modifierList} />
    </>
  );
}
