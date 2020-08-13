import React, {useState} from 'react';
import Column from "./Column";
import {Container, Row} from 'reactstrap';
import Controller from "./Controller";
import CustomWrapper from "./CustomWrapper";


const taskArray = [
    {id: Math.random(), name: 'Eat', priority: 0, status: 'todo'},
    {id: Math.random(), name: 'Wash dishes', priority: 1, status: 'progress'},
    {id: Math.random(), name: 'Clean teeth', priority: 2, status: 'review'},
    {id: Math.random(), name: 'Sleep', priority: 3, status: 'review'}
]

const columnArray = [
    {id: Math.random(), title: 'To do', status: 'todo'},
    {id: Math.random(), title: 'Progress', status: 'progress'},
    {id: Math.random(), title: 'Review', status: 'review'},
    {id: Math.random(), title: 'Done', status: 'done'},
]


function App() {
    const statuses = ['todo', 'progress', 'review', 'done'];
    const priorities = [0, 1, 2, 3];

    const [tasks, setTasks] = useState(taskArray);
    const [modal, setModal] = useState(false);
    const [modalState, setModalState] = useState({});


    const editTask = (taskId, newTitle, newStatus, newPriority) => {
        const newTask = {
            id: Math.random(),
            name: newTitle,
            priority: Number(newPriority),
            status: newStatus
        }
        const newTasks = tasks.map(el => {
            if ( el.id === taskId) return newTask
            return el
        });
        setTasks(newTasks);
    }

    const addNewTask = (newTitle, newStatus, newPriority) => {
        const newTask = {
            id: Math.random(),
            name: newTitle,
            priority: Number(newPriority),
            status: newStatus
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

    const closeModal = () => {
        setModal(false)
    }

    const openModal = (modalState) => {
        setModalState(modalState);
        setModal(true)
    }

    return (
        <div>
            <Container>

                <CustomWrapper editTask={editTask} modalState={modalState} modal={modal} closeModal={closeModal}  addNewTask={addNewTask}/>

                <Row className='justify-content-center'>
                    <h1>Kanban Board</h1>
                </Row>


                <Row className="pb-4 mb-4 border-bottom justify-content-between">
                    <Controller openModal={openModal}/>
                </Row>


                <Row>
                    {columnArray.map(el => <Column changeTaskStatus={changeTaskStatus} column={el} tittle={'todo'}
                                                   tasks={tasks} openModal={openModal}/>)}

                </Row>
            </Container>
        </div>
    );
}

export default App;
