import './App.css';
import {useEffect, useState} from "react";
import {StudentList} from "./components/StudentList";
import indexAPI from "./api/indexAPI";
import {StudentForm} from "./components/StudentForm";
import {StudentDialog} from "./components/StudentDialog"
import {Grid} from "@mui/material";




function App() {

    const [students, setValue] = useState([])
    const [errorData, setErrorData] = useState()
    const [formError, setFormError] = useState()
    const [userForUpdate, setUserForUpdate] = useState({})
    const [open, setOpen] = useState(false);

    useEffect(() => {
        indexAPI.students.getAll().then(r => {
                setValue(r.data)
            }
        ).catch(err => setErrorData(err))
    }, [])

    function openDialog(user){
        setOpen(true)
        setUserForUpdate(user)
    }

    function closeDialog(){
        setOpen(false)
    }


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

    function updateUser(student,studentId) {

        indexAPI.students.updateStudent(studentId,student)
            .then(setValue(students.map(s => {
                if (s.id === studentId) {
                    return {
                        id:s.id,
                        firstname: s.firstname,
                        lastname: s.lastname,
                        avgStatus: student.avgStatus,
                        groupId: student.groupId
                    };
                }
                return s;
            })))
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
                    <div className={"tableContainer"}>
                        <StudentList errors={errorData} listStudents={students} onDelete={deleteUser} onOpenDialog={openDialog}/>
                    </div>
                </Grid>
            </Grid>
            <StudentDialog isOpen={open} onClose={closeDialog} user={userForUpdate} onCloseWithUpdate={updateUser}/>
        </div>
    );
}

export default App;
