import React, { useState } from "react";
import axios from "axios";
import LocationButton from './LocationButton';
import CreatedMoim from './CreatedMoim';
import Counts from './Counts';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function CreateMoimForm(props) {

  var createMoinFormStyle = {
    width: "100%",
    margin: "auto",
    pading: "20px",
    border: "0px solid rgb(61, 50, 45)",
    borderRadius: "0.5rem",
    backgroundColor: "rgb(250, 250, 250)"
  }

  var createMoinFormDiv = {
    padding: "0px 0px 50px 0px",
  }

  var createMoinFormContents = {
    display: "block",
    width: "80%",
    margin: "auto",
    padding: "10px 20px 20px 20px",
  }


  var header = {
    display: "block",
    width: "80%",
    padding: "30px 0px 30px 0px",
    margin: "auto",
  }


  var inputStyle = {
    width: "100%",
    height: "40px",
    textAlign: "center",
    color: "rgb(47, 49, 52)",
    fontSize: 20,
    top: "50%",
    margin: "10px",
    margin: "auto",
    borderWidth: "0 0 2px",
  };

  var textStyle = {
    margin: 0,
    padding: 100,
  };

  var smallTitle = {
    margin: "30px 10px 10px 10px",
    color: "black",
    fontSize: "20px"
  }

  var saveButton = {
    display: "inline-block",
    width: "100%",
    height: "50px",
    margin: "20px 0px 10px 0px",
    textAlign: "center",
    background: "rgb(50, 50, 70)",
    border: "2px solid white",
    borderRadius: "0.5rem",
    fontSize: 20,
    color: "white",
    top: "50%",
    position: "relative",
  };

  var resetButton = {
    display: "inline-block",
    width: "100%",
    height: "50px",
    textAlign: "center",
    color: "rgb(71, 62, 60)",
    border: "2px solid white",
    borderRadius: "0.5rem",
    fontSize: 20,
    top: "50%",
    position: "relative"
  };

  const [ title, setText ] = useState(' ');

  const onChange = (e) => {
    setText(e.target.value);
  }

  const onReset = () => {
    setText(' ');
  }

  const [Title, SetTitle] = useState("");

    const titleHandler = (e) => {
        e.preventDefault();
        SetTitle(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        // state에 저장한 값을 가져옵니다.

        let body = {
        title: Title,
        };

        axios
        .post("http://localhost:8000/users", body)
        .then((res) => console.log(res.msg))
        .then(
          () => {
              SetTitle(' ');
          }
      )
  };

/*
  const printValues = () => {
    console.log("aaa");
  }
*/
  return (
    <div>
      <div style={createMoinFormDiv}>
        <h2 style={header}>새로운 모임을 만들 수 있습니다.</h2>
        <form
            onSubmit={submitHandler}
            style={createMoinFormStyle}
        >
          <div style={createMoinFormContents}>
            <p style={smallTitle}>모임 제목</p>
            <Grid container spacing={3}>
            <Grid item xs={12}>
              <input type="text" placeholder="모임 제목" style={inputStyle} value={Title} onChange={titleHandler}></input>
            </Grid>
            </Grid>
            <p style={smallTitle}>장소 선택</p>
            <LocationButton/>
            <p style={smallTitle}>참여 인원</p>
            <Counts />
            <button style={saveButton} type="submit">저장하기</button>
            <button style={resetButton} onClick={onReset}>지우기</button>
          </div>
        </form>
      </div>
    </div>
    );
}

export default CreateMoimForm;