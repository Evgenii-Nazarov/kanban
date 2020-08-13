import React, {useState, useEffect} from 'react';
import {Button, Col, Input, Label, ModalBody, ModalFooter, ModalHeader, Row} from 'reactstrap';
import Modal from "reactstrap/es/Modal";


function EditNewTaskForm (props) {
    console.log(props)

    const { modal, closeModal, editTask, task} = props;
    const [newTask, setNewTask] = useState(task.name);
    const [newStatus, setNewStatus] = useState(task.status);
    const [newPriority, setNewPriority] = useState(task.priority);

    useEffect(() => {
        setNewTask(task.name);
        setNewStatus(task.status);
        setNewPriority(task.priority);
    }, [props]);

    const submitButtonHandler = () => {
        editTask(task.id, newTask, newStatus, newPriority);
        closeModal()
    }

    const toggle = () => {
        // setNewTask('');
        // setNewStatus('');
        // setNewPriority(0);
        closeModal()
    }

    return (

        <Modal isOpen={modal} toggle={toggle}>

            <ModalHeader>Edit task</ModalHeader>
            <ModalBody>
                        <Label sm={2}>Name</Label>
                        {/*<Col sm={10}>*/}
                            <Input onChange={(e) => setNewTask(e.target.value)} value={newTask} type="text" name="name" placeholder="with a placeholder"/>
                        {/*</Col>*/}

                    <Row>
                        <Col>
                                <Label sm={2}>Priority</Label>
                                {/*<Col sm={10}>*/}
                                    <Input type="select" name="priority" value={newPriority} onChange={(e) => setNewPriority(e.target.value)}>
                                        <option value={0}>Low</option>
                                        <option value={1}>Med</option>
                                        <option value={2}>High</option>
                                        <option value={3}>Extra</option>
                                    </Input>
                                {/*</Col>*/}
                        </Col>
                        <Col>
                                <Label sm={2}>Status</Label>
                                {/*<Col sm={10}>*/}
                                    <Input type="select" name="status" value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
                                        <option value='todo'>Todo</option>
                                        <option value={'progress'}>Progress</option>
                                        <option value={'review'}>Review</option>
                                        <option value={'done'}>Done</option>
                                    </Input>
                                {/*</Col>*/}
                        </Col>
                    </Row>

            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={submitButtonHandler}>add new task</Button>{' '}
                <Button color="secondary" onClick={()=>closeModal()}>Cancel</Button>
            </ModalFooter>
        </Modal>


    );
}

export default EditNewTaskForm;
