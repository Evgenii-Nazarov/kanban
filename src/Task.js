import React from 'react';
import Card from "reactstrap/es/Card";
import {Col, CardBody, CardHeader, CardTitle, Alert, Button} from "reactstrap";

function Task(props) {
    const {task, changeTaskStatus} = props;
    const taskName = task.name;
    const taskId = task.id;
    const taskStatus = task.status;
    const taskPriority = task.priority;
    const alertColors = ['secondary', 'primary', 'warning', 'success'];


    return (
        <Col>
            <Card>
                <CardBody>
                    <CardHeader>
                        {taskName}
                        <Button size="sm">edit</Button>
                    </CardHeader>

                </CardBody>
                <CardBody>
                    <Alert color={alertColors[taskPriority]}>
                        {taskPriority}: {' '}
                        {taskPriority !== 3 &&
                        <Button color="primary" size="sm" onClick={() => changeTaskStatus(taskId, 'up')}>↑</Button>
                        }
                        {taskPriority !== 0 &&
                        <Button color="primary" size="sm" onClick={() => changeTaskStatus(taskId, 'down')}>↓</Button>
                        }
                        {' '}
                    </Alert>
                    status: {' '}
                    {taskStatus !== 'todo' &&
                    <Button size="sm" onClick={() => changeTaskStatus(taskId, 'left')}>←</Button>}

                    {' '}
                    {taskStatus !== 'done' &&
                    <Button size="sm" onClick={() => changeTaskStatus(taskId, 'right')}>→</Button>}
                </CardBody>
            </Card>
        </Col>
    );
}

export default Task;
