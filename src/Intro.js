import React from 'react';
import Moim from './Moim';


function Intro(props) {
    var sectionStyle = {
      width: "100%",
      height: "600px",
      textAlign: "center",
      color: "white",
      fontSize: 50,
      top: "50%",
      justifyContent: "center",
    };
    var textStyle = {
      margin: 0,
      padding: "100px 0px 0px 0px",
    };
  return (
    <div style={sectionStyle}>
        <p style={textStyle}>모임을 빠르게 만들고</p>
        <p style={textStyle}>쉽게 참여하기</p>
    </div>
  );
}

export default Intro;
