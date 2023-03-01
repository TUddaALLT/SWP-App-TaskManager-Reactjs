import ResponsiveAppBar from "../components/NavBar";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";


const gifts = ['cpi i9', 'ram 32gb RGB', 'RGB keyboard']
function dashboard(){


    return (
        <div>
            {ResponsiveAppBar}
        </div>
        )
    
}
export default dashboard;