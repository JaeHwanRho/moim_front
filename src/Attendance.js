import React, {useState, setState} from 'react';



function Attendance(props) {
  

  const state= {clicked: true}

  const changeAttendance = () => {
    setState({clicked: !state.clicked})
  }

  return (
    <div>
      <p>참석하기 버튼</p>
      <button onClick={changeAttendance}>{state.clicked? <button>참석</button> : <button>불참</button>}</button>
    </div>
  );
}

export default Attendance;



