import React, {useState, useEffect, useFetch} from 'react';
import Sub from './Sub';
import Moim from './Moim';
import Intro from './Intro';
import MoimTitle from './MoimTitle';
import CreatedMoim from './CreatedMoim';
import Attendance from './Attendance';
import { title } from './CreateMoimForm';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './screens/Home'
import JoinatMoim from './screens/JoinatMoim'
import Statistics from './screens/Statistics'
import Join from './screens/Join'
import Login from './screens/Login'

import ExamplePOST from './ExamplePOST';


import MyStore from './stores/MyStore';
import { observer } from 'mobx-react';
import axios from "axios";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import imgA from './LOGO_B.png';
import "./App.css";
import './index.css';
import { nonenumerable } from 'core-decorators';


function App() {
  
  /*let a = 1;
  let b = 2;
  let count = a + b;
  */


/*
  const getData = async () => {
    const res = await fetch('http://localhost:8000/users');
    const data = await res.json();
    setTxt(data.msg);
  }
*/
/*
  const getData = async () => {
    const res = await fetch('http://apis.data.go.kr/B551182/hospInfoService/getHospBasisList?numOfRows=3000&_type=json&sidoCd=110000&dgsbjtCd=05&ServiceKey=9bsnTwn9rY1kfHs9G%2BuP9Yfjk%2BLzBdD4i%2BTk9Vsb5V%2BlhbOfBzWTvh6LEsVp6NSYq3nCtLFSJ6SMvDxDp91uKQ%3D%3D');
    const data = await res.json();
    setTxt(data);
  }
*/

  useEffect(() => {
  }, [])

  const menubar = {
    float: "right",
    width: "40px",
    textDecoration: "none",
    color: "white",
    padding: "10px",
    margin: "10px 40px 10px 10px",
    textAlign: "center",
    fontSize: 20,
    top: "50%",
    fontFamily: "NanumSquareRound",
    fontWeight: "bold"
  }

  const header = {
    width: "100%",
  }

  /*
  for 문을 한줄로 표현
  */

  return (
    <Router>
    <div className="body">
      <header>
        <div style={header}>
          
        </div>
      </header>
      <div className="introContainer" style={header}>
        <a href="http://localhost:3000/">
          <img src={ imgA } 
          width='180'
          height='90'
          alt='imgA' />
        </a>
        <Link to="/Login" >
          <a style={menubar}>
            Login
          </a>
        </Link>
        <Link to="/Join" >
          <a style={menubar}>
            Join
          </a>
        </Link>
        <Intro />
      </div>
      <div>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Link to="/" ><Moim btnTxt="새로 만들기"/></Link>
          </Grid>
          <Grid item xs={4}>
            <Link to="/joinatMoim" ><Moim btnTxt="참여하기"/></Link>
          </Grid>
          <Grid item xs={4}>
            <Link to="/statistics" ><Moim btnTxt="모임 통계"/></Link>
          </Grid>
        </Grid>
      </div>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/joinatMoim" component={JoinatMoim}/>
        <Route path="/statistics" component={Statistics}/>
        <Route path="/join" component={Join}/>
        <Route path="/login" component={Login}/>
      </div>
    </div>
    </Router>
  );
}

export default observer(App);
