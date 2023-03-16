import React, { useState } from "react";
import '../styles/TaskDetail.css';
import PushPinIcon from '@mui/icons-material/PushPin';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ReviewsIcon from '@mui/icons-material/Reviews';

function TaskDetailComponent({ task }) {

    return (
        <div className="Task-Detail">
            <div className="Task-Detail-Title">
                <h1>{task.title}</h1>
                <PushPinIcon className={`pin-task-icon ${task.pinTask == true ? " pin-task-true" : " pin-task-false"}`} />
            </div>
            <div className="Task-description">
                <p>{task.describe}</p>
            </div>
            <div className="Task-Line-3">
                <div className="Task-detail-status">

                    <div className="AttackIcon">
                        <AttachFileIcon />
                    </div>
                    <div className="CommendIcon">
                        <div className="number-cmt">1</div>
                        <ReviewsIcon />
                    </div>

                </div>
                <div className="PeopleJoin">
                    <div className="PeopleJoin-img">

                    </div>
                    <div className="PeopleJoin-img">

                    </div>
                    <div className="PeopleJoin-img">

                    </div>
                </div>
            </div>
        </div>
    )
}
export default TaskDetailComponent;
