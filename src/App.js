import './App.css';
import {useEffect, useState} from "react";
import {StudentList} from "./components/StudentList";
import indexAPI from "./api/indexAPI";
import {StudentForm} from "./components/StudentForm";
import {Grid} from "@mui/material";


function App() {

    const [students, setValue] = useState([])
    const [errorData, setErrorData] = useState()
    const [formError, setFormError] = useState()

    useEffect(() => {
        indexAPI.students.getAll().then(r => {
                setValue(r.data)
            }
        ).catch(err => setErrorData(err))
    }, [])

    function addUser(student) {
        indexAPI.students.postStudent(student)
            .then(r => {
                setValue([...students, r.data])
                setFormError('')
            })
            .catch(err => setFormError(err.response.data))
    }

    function deleteUser(studentId) {
        indexAPI.students.deleteStudent(studentId)
            .then(setValue(students.filter(s => s.id !== Number(studentId))))
    }

    return (
        <div className="App">
            <header className="App-header">
                Crud React App
            </header>
            <Grid container spacing={2}>
                <Grid item xs={4} sx={{ pt: 5 }}>
                    <div className={"cent"}>
                        <StudentForm error={formError} onSubmit={addUser}/>
                    </div>
                </Grid>
                <Grid item xs={8} >
                    <StudentList errors={errorData} listStudents={students} onDelete={deleteUser}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
