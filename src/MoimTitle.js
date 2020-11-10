import React from 'react';


function MoimTitle(props) {
  return (
    <div>
        <input type="text"/>
        <button onClick={props.fnc}>추가하기</button>
    </div>
  );
}

export default MoimTitle;
