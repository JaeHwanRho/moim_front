import React, {useState, useEffect, useFetch} from 'react';

function Join(props) {
    return (
      <div>
        <input id="email" type="text" placeholder="이메일"/>
        <input id="pwd" type="text" placeholder="비밀번호"/>
        <input id="name" type="text" placeholder="이름"/>
        <input onclick="saveUser()" value="제출" type="button"/>
        <input onclick="viewUser()" value="조회" type="button"/>
      </div>
    );
  }
  
export default Join;
  