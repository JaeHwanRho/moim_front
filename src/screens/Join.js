import React, { useState } from "react";
import axios from "axios";

import { isEmail, isPassword } from "../stores/Validation"

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function Join(props) {

    const body_join = {
      display: "block",
      width: "50%",
      margin: "auto",
    };

    const header = {
      display: "block",
      padding: "20px 40px"
    };

    var joinFormStyle = {
      display: "block",
      width: "750px",
      margin: "30px",
      border: "0px solid rgb(47, 49, 52)",
      borderradius: "0.5rem",
    };

    var inputStyle = {
      display: "block",
      width: "730px",
      height: "30px",
      textAlign: "center",
      color: "rgb(47, 49, 52)",
      fontSize: 20,
      top: "50%",
      margin: "10px",
      borderWidth: "0 0 1px",
    };

    var textStyle = {
      margin: 0,
      padding: 100,
    };

    var smallTitle = {
      margin: "10px",
      color: "rgb(71, 62, 60)",
    };

    var saveButton = {
      display: "inlineblock",
      width: "880px",
      height: "50px",
      textAlign: "center",
      background: "rgb(150, 150, 150)",
      border: "2px solid white",
      fontSize: 20,
      fontColor: "rgb(250, 250, 250)",
      top: "50%",
      margin: "10px",
      position: "relative"
    };

    var resetButton = {
      display: "inlineblock",
      width: "880px",
      height: "50px",
      textAlign: "center",
      color: "rgb(71, 62, 60)",
      border: "2px solid white",
      fontSize: 20,
      top: "50%",
      margin: "10px",
      position: "relative"
    };

    const onReset = () => {
        SetEmail(' ');
        SetPwd(' ');
        SetName(' ');
    };

    const [Email, SetEmail] = useState("");
    const [Pwd, SetPwd] = useState("");
    const [Name, SetName] = useState("");
    const [emailValidation, SetEmailValidation] = useState(false);
    const [pwdValidation, SetPwdValidation] = useState(false);
    const [nameValidation, SetNameValidation] = useState(false);


    const emailHandler = (e) => {
        e.preventDefault();
        SetEmail(e.target.value);
        checkValidEmail();
    };

    const checkValidEmail = () => {
      if (!isEmail(Email)) {
        SetEmailValidation(false);
      } else {
        SetEmailValidation(true);
      }
    };
    
    const pwdHandler = (e) => {
        e.preventDefault();
        SetPwd(e.target.value);
        checkValidPwd();
    };

    const checkValidPwd = () => {
      if (!isPassword(Pwd)) {
        SetPwdValidation(false);
      } else {
        SetPwdValidation(true);
      }
    };
    
    const nameHandler = (e) => {
        e.preventDefault();
        SetName(e.target.value);
    };

    const checkValidName = () => {
      if (!Name) {
        SetNameValidation(false);
      } else {
        SetNameValidation(true);
      }
    };
    

    /*
    const submitHandler = (e) => {
        e.preventDefault();
        // state에 저장한 값을 가져옵니다.

        let body = {
        email: Email,
        pwd: Pwd,
        name: Name
        };

        axios
        .post("http://localhost:8000/users/join", body)
        .then((res) => console.log(res.msg));
    };
    */

    const submitHandler = (e) => {
        e.preventDefault();
        // state에 저장한 값을 가져옵니다.


        let body = {
        email: Email,
        pwd: Pwd,
        name: Name
        };

        axios
        .post("http://localhost:8000/users/join", body)
        .then((res) => console.log(res.msg))
        .then(
            () => {
                SetEmail(' ');
                SetPwd(' ');
                SetName(' ');
            }
        )
    };

  return (
    <div style={body_join}>
        <h2 style={header}>회원 가입</h2>
      <div>
        <form
          onSubmit={submitHandler}
          style={joinFormStyle}
        >
          <Grid container spacing={3}>
          <Grid item xs={12}>
            <label style={smallTitle}>이메일</label><br />
            <input type="email" placeholder="이메일" style={inputStyle} value={Email} onChange={emailHandler}></input>
            {Email ? (
              emailValidation ? (
                <span style={{ color: "blue" }}>사용가능한 email입니다.</span>
              ) : (
                <span style={{ color: "red" }}>유효하지 않은 email입니다.</span>
              )
            ) : null}
          </Grid>
          <Grid item xs={12}>
            <label style={smallTitle}>비밀번호</label><br />
            <input type="text" placeholder="비밀번호" style={inputStyle} value={Pwd} onChange={pwdHandler}></input>
            {Pwd ? (
              pwdValidation ? (
                <span style={{ color: "blue" }}>사용가능한 비밀번호입니다.</span>
              ) : (
                <span style={{ color: "red" }}>유효하지 않은 비밀번호입니다.</span>
              )
            ) : null}
          </Grid>
          <Grid item xs={12}>
            <label style={smallTitle}>이름</label><br />
            <input type="text" placeholder="이름" style={inputStyle} value={Name} onChange={nameHandler}></input>
            {Name ? (
              nameValidation ? (
                <span style={{ color: "blue" }}></span>
              ) : (
                <span style={{ color: "red" }}>이름을 입력해주세요.</span>
              )
            ) : null}
          </Grid>
          <button style={saveButton} type="submit">회원가입 완료</button>
          <button style={resetButton} onClick={onReset}>지우기</button>
          </Grid>
        </form>
      </div>
    </div>
  );
}


export default Join;