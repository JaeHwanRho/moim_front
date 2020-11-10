import React, { useState } from "react";
import axios from "axios";


function ExamplePOST(props) {
    const [Name, SetName] = useState("");

    const nameHandler = (e) => {
        e.preventDefault();
        SetName(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        // state에 저장한 값을 가져옵니다.
        console.log(Name);

        let body = {
        name: Name,
        };

        axios
        .post("http://localhost:8000/users", body)
        .then((res) => console.log(res));
  };

  return (
    <div>
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <form
          onSubmit={submitHandler}
          style={{ display: "flex", flexDirection: "Column" }}
        >
          <label>Name</label>
          <input type="text" value={Name} onChange={nameHandler}></input>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default ExamplePOST;
