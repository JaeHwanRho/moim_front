import React from 'react';


function Sub(props) {
  return (
    <div>
        <input type="text"/>
        <button onClick={props.fnc}>{props.count}</button>
    </div>
  );
}

export default Sub;
