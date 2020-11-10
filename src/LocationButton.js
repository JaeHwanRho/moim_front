import React, {useState, useEffect, useFetch} from 'react';


function LocationButton(props) {
  const btnStyle1 = {
    width: "90px",
    height: "40px",
    color: "black",
    background: "white",
    padding: ".375rem .75rem",
    border: "1px solid black",
    borderRadius: "1.5rem",
    fontSize: "0.9rem",
    margin: "10px"
  }

  const btnStyle2 = {
    width: "90px",
    height: "40px",
    color: "white",
    background: "balck",
    padding: ".375rem .75rem",
    border: "1px solid black",
    borderRadius: "1.5rem",
    fontSize: "0.9rem",
    margin: "10px"
  }


  const [ color, setColor ] = useState(
    {black: true}
  );

  const changeColor = () => {
    setColor({black: !color.black})
  }

  const btnStyle = (color.black) ? btnStyle1 : btnStyle2


  const state = {
      location: ' '
  }

  const arr = ["관악구", "서초구", "강남구", "노원구", "용산구", "기타"];

  return (
    <div>
      <div>
        {arr.map((i) => <button style={btnStyle} onClick={changeColor} value={arr[i]} >{i}</button>)}
      </div>
    </div>
  );
}

export default LocationButton;
