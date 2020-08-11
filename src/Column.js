import React from 'react';
import Task from "./Task";
import {Container, Row, Col} from 'reactstrap';


function Column(props) {
    const {tasks, tittle, changeTaskStatus, column} = props;

    const columnTitle = column.title;
    const columnStatus = column.status;

    return (

        <Col xs={3}>
            {/*<Col>*/}
            <h3>{columnTitle}</h3>
            {/*</Col>*/}
            {tasks.filter(el => el.status === columnStatus)
                .map(el => {
                    return <Task changeTaskStatus={changeTaskStatus} task={el}/>
                })}
        </Col>


    );
}

export default Column;
