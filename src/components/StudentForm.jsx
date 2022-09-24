import React from "react";
import {MyInput} from "./UI/MyInput";
import {useState} from "react";
import {Button} from "@mui/material";


export const StudentForm = ({error,onSubmit})=>{

    const [firstname, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [avgStatus, setAvgStatus] = useState(0)
    const [groupId, setGroupId] = useState(0)

    const handleAdd=(event)=>{
        event.preventDefault()
        const student={
            firstname,
            lastname,
            avgStatus,
            groupId
        }
        onSubmit(student)
        setName('')
        setLastname('')
        setGroupId(0)
        setAvgStatus(0)
    }

    return(
        <div className={"sForm"}>
            <h3>Student module</h3>
            <form>

                <MyInput type={"text"}
                         label={"Firstname"}
                         placeholder={"slsld"}
                         value={firstname}
                         onChange={e=>setName(e.target.value)}
                />

                <MyInput  type={"text"}
                          label={"Lastname"}
                          placeholder={"slsld"}
                          value={lastname}
                          onChange={e=>setLastname(e.target.value)}/>

                <MyInput  type={"text"}
                          placeholder={"slsld"}
                          value={avgStatus}
                          onChange={e=>setAvgStatus(e.target.value)}/>

                <MyInput  type={"number"}
                          placeholder={"slsld"}
                          value={groupId}
                          onChange={e=>setGroupId(e.target.value)}/>

                <Button variant="outlined" color="secondary" type={"submit"} onClick={handleAdd}>add</Button>
                <div className={"red"}>{error}</div>
            </form>
        </div>
    )
}