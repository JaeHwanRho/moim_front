import React, {useState, useEffect, useFetch} from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import MoimLists from "../MoimLists";


function JoinatMoim(props) {

  const [array, setArray] = useState([]);

  const getData = async () => {
    const res = await fetch('http://localhost:8000/users');
    const data = await res.json();
    const moim_created = data.arr;
    const selected_Moim_created = moim_created.map((moim_created) => {
        return {
          title: moim_created.title,
          name: moim_created.name,
          created_at: moim_created.created_at
        }
      }
    )
    setArray(selected_Moim_created);
  };

  useEffect(() => {
    getData();
  }, []);

  const header = {
    display: "block",
    padding: "0px 40px"
  };


  return (
    <div>
        <h2 style={header}>모임에 참여할 수 있습니다.</h2>
        <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>created_at</TableCell>
              <TableCell>title</TableCell>
              <TableCell>name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {array.map(c => { return ( 
          <MoimLists key={c.id} created_at={c.created_at} title={c.title} name={c.name} />);//map.return
        })}
          </TableBody>
        </Table>
        </Paper>
    </div>
  );
}

export default JoinatMoim;