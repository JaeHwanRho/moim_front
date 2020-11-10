import React, {useState, useEffect, useFetch} from 'react';

function Counts(props) {

    const btnStyle = {
        width: props.circleDiameter,
        height: props.circleDiameter,
        color: "black",
        background: "white",
        padding: ".375rem .75rem",
        border: "1px solid black",
        borderRadius: (props.circleDiameter / 2),
        fontSize: "0.9rem",
        margin: "10px"
      }

    const [count, setCount] = useState(0);

    const addOne = () => {
        setCount(count + 1);
    }

    const subtractOne = () => {
        setCount(count - 1);
    }

    

  return (
    <div>
        <button onClick={subtractOne} style={btnStyle}>-</button>
        <span>{count}명</span>
        <button onClick={addOne} style={btnStyle}>+</button>
    </div>
  );
}

export default Counts;
