import React from 'react';
import Task from "./Task";
import {Col} from 'reactstrap';


function Column(props) {
    const {tasks, changeTaskStatus, column, openModal} = props;

    const columnTitle = column.title;
    const columnStatus = column.status;

    return (

        <Col xs={3}>
            <h3>{columnTitle}</h3>
            {tasks.filter(el => el.status === columnStatus)
                .map(el => {
                    return <Task changeTaskStatus={changeTaskStatus} openModal={openModal} task={el}/>
                })}
        </Col>


    );
}

export default Column;
