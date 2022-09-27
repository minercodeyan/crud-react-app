import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from "react";
import {MyInput} from "./UI/MyInput";
import {useEffect} from "react";


export const StudentDialog=({isOpen,user,onClose,onCloseWithUpdate})=>{

    const [avgStatus, setAvgStatus] = useState(0)
    const [groupId, setGroupId] = useState(0)

    useEffect(() => {
       if(isOpen){
           setAvgStatus(user.avgStatus)
           setGroupId(user.groupId)
       }
    }, [isOpen, user.avgStatus, user.groupId], )

    function handleClose(){
        onClose()
    }

    function handleCloseWithUpdate(){
        const updatedUserId=user.id;
        const updatedUser={
            avgStatus,
            groupId
        }
        onCloseWithUpdate(updatedUser,updatedUserId)
        onClose()
    }

    return (
        <div>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {user.firstname} {user.lastname}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <MyInput type={"text"}
                                 label={"AVG Status"}
                                 placeholder={"slsld"}
                                 value={avgStatus}
                                 onChange={e=>setAvgStatus(e.target.value)}
                        />

                        <MyInput  type={"number"}
                                  min={0}
                                  label={"Group ID"}
                                  placeholder={"slsld"}
                                  value={groupId}
                                  onChange={e=>setGroupId(e.target.value)}/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>CANCEL</Button>
                    <Button onClick={handleCloseWithUpdate} autoFocus>
                        UPDATE
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}