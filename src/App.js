import React, {useState} from 'react';
import Column from "./Column";
import {Container, Row} from 'reactstrap';
import Controller from "./Controller";


const taskArray = [
    {id: Math.random(), name: 'Eat', priority: 0, status: 'todo'},
    {id: Math.random(), name: 'Wash dishes', priority: 1, status: 'progress'},
    {id: Math.random(), name: 'Clean teeth', priority: 2, status: 'review'},
    {id: Math.random(), name: 'Sleep', priority: 3, status: 'review'}
]

function App() {
    const statuses = ['todo', 'progress', 'review', 'done'];
    const priorities = [0, 1, 2, 3];

    const [tasks, setTasks] = useState(taskArray);

    const addNewTask = (newTitle) => {
        const newTask = {
            id: Math.random(),
            name: newTitle,
            priority: 0,
            status: 'todo'
        }

        const newTasks = [...tasks, newTask];
        setTasks(newTasks);
    }

    const changeTaskStatus = (taskId, direction) => {

        const newTasks = tasks.map(el => {
            if (el.id === taskId) {
                if (direction === 'right') el.status = statuses[statuses.indexOf(el.status) + 1]
                if (direction === 'left') el.status = statuses[statuses.indexOf(el.status) - 1]
                if (direction === 'up') el.priority = priorities[priorities.indexOf(el.priority) + 1]
                if (direction === 'down') el.priority = priorities[priorities.indexOf(el.priority) - 1]
            }
            return el
        })
        setTasks(newTasks)

    }

    return (
        <div>
            <Container>
                <Row className='justify-content-center'>
                    <h1>Kanban Board</h1>
                </Row>

                {/*<Row>*/}
                <Row className="pb-4 mb-4 border-bottom ">
                    <Controller addNewTask={addNewTask}/>
                </Row>
                {/*</Row>*/}
                <Row>
                    <Column changeTaskStatus={changeTaskStatus} tittle={'todo'} tasks={tasks}/>
                    <Column changeTaskStatus={changeTaskStatus} tittle={'progress'} tasks={tasks}/>
                    <Column changeTaskStatus={changeTaskStatus} tittle={'review'} tasks={tasks}/>
                    <Column changeTaskStatus={changeTaskStatus} tittle={'done'} tasks={tasks}/>
                </Row>
            </Container>
        </div>
    );
}

export default App;
