import React from 'react';
import Task from "./Task";
import { Container, Row, Col } from 'reactstrap';


function Column(props) {
    const {tasks, tittle, changeTaskStatus} = props;

    return (

            <Col>
                {/*<Col>*/}
                    <h3>{tittle}</h3>
                {/*</Col>*/}
                {tasks.filter(el => el.status === tittle)
                    .map(el => {
                    return <Task changeTaskStatus={changeTaskStatus} task={el}/>
                })}
            </Col>


    );
}

export default Column;
