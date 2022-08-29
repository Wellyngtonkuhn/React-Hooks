import UseState from "../UseState";
import UseEffect from "../UseEffect";
import UseRef from "..//UseRef";

import Form from "../Form";
import UseReducer from "../UseReducer";
import Memo from "../Memo";
import UseCallBack from "../UseCallBack";

import usePath from "../hooks/usePath";

function Home() {
  const { isHome } = usePath();
  return (
    <>
      <h1>
        {isHome && isHome === true
          ? "Você está na Home"
          : "Você não está na Home"}
      </h1>
      <UseState />
      <hr />
      <UseEffect />
      <hr />
      <UseRef />
      <hr />
      <Form />
      <hr />
      <UseReducer />
      <hr />
      <Memo />
      <hr />
      <UseCallBack />
      <hr />
    </>
  );
}

export default Home;
