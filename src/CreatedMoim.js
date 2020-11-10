import React, {useState} from 'react';



function CreatedMoim(props) {
  
  var inputStyle = {
    width: "100%",
    height: "30px",
    textAlign: "center",
    color: "rgb(47, 49, 52)",
    fontSize: 20,
    top: "50%",
    margin: "10px",
    position: "relative"
  };

  var textStyle = {
    margin: 0,
    padding: 100,
  };

  var createMoinFormStyle = {
    border: "2px solid black",
    borderradius: "0.5rem" ,
    padding: "20px 10px"
  }

  return (
    <div style={createMoinFormStyle}>
      <sapn>모임 제목: {props.title}</sapn>
    </div>
    );
}

export default CreatedMoim;