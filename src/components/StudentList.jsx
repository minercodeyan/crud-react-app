import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button} from "@mui/material";




export const StudentList = ({ listStudents, errors ,onDelete,onOpenDialog })=>{
    
    function deleteStudent(evt){
        onDelete(evt.target.value)
    }
    function openDialog(evt){
        onOpenDialog(JSON.parse(evt.target.value));
    }

    function createData(id, firstname, lastname, avg, groupId, actions,) {
        return { id,firstname, lastname, avg, groupId, actions };
    }

    if(!errors) {
        const rows = listStudents.map((obj) => {
            return  createData(obj.id,obj.firstname, obj.lastname, obj.avgStatus, obj.groupId,
                <div>
                    <Button value={obj.id} variant="outlined" color="secondary" type={"submit"} onClick={deleteStudent} >Delete</Button>
                    <Button value={JSON.stringify(obj)} variant="outlined" color="secondary" type={"submit"} onClick={openDialog}>Update</Button>
                </div>
                );
        });

        return (
                <TableContainer component={Paper} sx={{ mt: 5 }}>
                    <Table sx={{ minWidth: 640}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Имя</TableCell>
                                <TableCell align="right">Фамилия</TableCell>
                                <TableCell align="right">Рейтинг</TableCell>
                                <TableCell align="right">Группа</TableCell>
                                <TableCell align="right">Действия</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.firstname}
                                    </TableCell>
                                    <TableCell align="right">{row.lastname}</TableCell>
                                    <TableCell align="right">{row.avg}</TableCell>
                                    <TableCell align="right">{row.groupId}</TableCell>
                                    <TableCell align="right">{row.actions}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    <div className={"red"}>

                    </div>
                </TableContainer>
        )
    }
    else {
        return ( <div>Загрузка...</div>)
    }
}