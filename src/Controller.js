import React, {useState} from 'react';
import Task from "./Task";
import {Container, Row, Col, Input, Button, Form, FormGroup, Label} from 'reactstrap';


function Controller(props) {
    const {addNewTask} = props;

    const [newTask, setNewTask] = useState('');

    const addButtonHandler = () => {
        addNewTask(newTask);
        setNewTask('');
    }

    const submitButtonHandler = (e) => {
        e.preventDefault();
        console.log(e)
    }

    return (
        <Row>
            <Col>
                <Form onSubmit={submitButtonHandler}>
                    <FormGroup row>
                        <Label sm={2}>Title</Label>
                        <Col sm={10}>
                            <Input type="text" name="name" placeholder="with a placeholder"/>
                        </Col>
                    </FormGroup>
                    <Row form>
                        <Col>
                            <FormGroup row>
                                <Label sm={2}>Priority</Label>
                                <Col sm={10}>
                                    <Input type="select" name="priority">
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup row>
                                <Label sm={2}>Status</Label>
                                <Col sm={10}>
                                    <Input type="select" name="priority">
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Button type="submit" size="sm" onClick={submitButtonHandler}>add new task</Button>
                </Form>
            </Col>

            {/*<Col sm={4}>*/}
            {/*    <Input type="text" onChange={(e) => setNewTask(e.target.value)}/>*/}


            {/*</Col>*/}
            {/*<Col>*/}
            {/*    <Button type="submit" size="sm" onClick={addButtonHandler}>add new task</Button>*/}
            {/*</Col>*/}
        </Row>


    );
}

export default Controller;
