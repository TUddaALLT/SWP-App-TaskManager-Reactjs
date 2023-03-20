import React, { useState , useEffect} from "react";
import Grid from '@mui/material/Grid';
import TaskDetailComponent from "./TaskDetail";

const Calendar = (props) => {
    const [ListTasks, setListTasks] = useState([]);
    useEffect(() => {
        setListTasks([]);
        fetch('https://localhost:7239/api/Task/GetTasksRangeByTime?userID=1&timeFrom=' + props.daystring +'&timeTo=' + props.daystring)
           .then((response) => response.json())
           .then((data) => {
              setListTasks(data.data);
              console.log('https://localhost:7239/api/Task/GetTasksRangeByTime?userID=1&timeFrom=' + props.daystring +'&timeTo=' + props.daystring)
            
            })
           .catch((err) => {
             
            console.log(err.message);
           });
     }, [props.daystring]);

    return (
        <div className="Task-list">
            

            {ListTasks.map((Task) => (
                <TaskDetailComponent task={Task}/>
                
            ))}
          
        </div>
    );
};
export default Calendar;
