import React from 'react';
import {Button, Row} from 'reactstrap';


function Controller(props) {
    const {openModal} = props;


    return (
        <Row>
            <Button onClick={() => openModal()}>Add new Task</Button>
        </Row>


    );
}

export default Controller;
