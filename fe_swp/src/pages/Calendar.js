import React from "react";
import '../styles/Calendar.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import MonthCalendar from '../components/MonthCalendar.js';
import ButtonSwapListToGrid from "../components/ButtonSwapListToGrid";
import ButtonCreate from "../components/ButtonCreate.js";

const Calendar = () => {


  return (
    <div className="calendar">

      <Box sx={{ flexGrow: 1 }}>
        <Grid container >
          <Grid xs={1} >

          </Grid>
          <Grid xs={1} className="ButtonSS" >
            <ButtonSwapListToGrid />
          </Grid>
          <Grid xs={8}>

          </Grid>
          <Grid xs={1} className="ButtonSS" >
            <ButtonCreate/>
          </Grid>
          <Grid xs={1} >

          </Grid>
        </Grid>
        <MonthCalendar />
      </Box>
    </div>
  );
};
export default Calendar;
