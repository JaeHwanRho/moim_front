import React, {useState} from 'react';


function Moim(props) {

  const buttonContainer = {
    width: "100%",

  }

  const btnStyle = {
    width: "90%",
    height: "80px",
    color: "white",
    background: "rgb(40, 40, 50)",
    border: "1px solid white",
    borderRadius: ".5rem",
    fontSize: "1.75rem",
    fontWeight: "bold",
    fontFamily: "NanumSquareRound",
    textDecoration: "none",
    margin: "20px 10px 10px 10px",
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1.0,
    shadowRadius: 2,
  }

    const [bgColour, setBgColour] = useState("rgb(0, 0, 0)");


  return (
    <div style={buttonContainer}>
        <button style={btnStyle}>{props.btnTxt}</button>
    </div>
  );
}

export default Moim;
