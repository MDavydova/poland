import React, { useState, useEffect } from "react";
import { MDBCard } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { generateNounWord } from "../redux/features/wordSlice";

const GenerateWord = () => {
  const dispatch = useDispatch();
  const handleWordGeneration = () => {
    dispatch(generateNounWord(8));
  };

  return (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "450px",
        alignContent: "center",
        marginTop: "120px",
      }}
      className="container"
    >
      <MDBCard alignment="center">
        <h5>GenerateWord Word</h5>
        <button onClick={handleWordGeneration}>Generate</button>
      </MDBCard>
    </div>
  );
};

export default GenerateWord;
