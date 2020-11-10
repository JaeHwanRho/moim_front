import React, {useState, useEffect, useFetch} from 'react';
import Sub from '../Sub';
import MyStore from '../stores/MyStore';


function Statistics(props) {

  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1);
  }

  const arr = [1, 2, 3, 4, 5];

  const header = {
    display: "block",
    padding: "0px 40px"
  }

  return (
    <div>
        <h2 style={header}>모임 통계</h2>
      <div>
        {(count > 7) ? <p>hohoho</p> : <button>hahah</button>}
        {arr.map((i) => <button>{i}</button>)}
        <p>{MyStore.count}</p>
        <button onClick={()=>{ MyStore.addOne() }}>plus</button>
        <Sub btnTxt="aaa" count={count} fnc={addOne} />
        <Sub btnTxt="bbb" count={count} fnc={addOne} />
      </div>
    </div>
  );
}

export default Statistics;