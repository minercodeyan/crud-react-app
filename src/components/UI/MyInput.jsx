import React from "react";
import {TextField} from "@mui/material";

export const MyInput = (props)=>{

    return(
        <div className={"red"}>
            <TextField {...props} id="standard-basic" variant="standard" margin="normal" />
        </div>
    )
}

