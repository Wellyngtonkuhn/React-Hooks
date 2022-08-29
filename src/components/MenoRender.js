import { memo } from "react";

const MemoRender = ({ nome }) => {
  return (
    <>
      <li>{nome}</li>
    </>
  );
};

export default memo(MemoRender);
