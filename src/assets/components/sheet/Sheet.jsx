import React from "react";
import Page from "../page/Page";
import Back from "../back/Back";
import { useState } from "react";

function Sheet({ isFlipped }) {
  return (
    <>
      <div className={`Sheet ${isFlipped ? "flip" : ""}`}>
        <Page>Pagina 1</Page>
        <Back></Back>
      </div>
    </>
  );
}

export default Sheet;
