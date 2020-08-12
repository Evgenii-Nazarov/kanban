import React from 'react';
import {Button, Row, Col} from 'reactstrap';


function Controller(props) {
    const {openModal} = props;


    return (
        // <Row className="justify-content-between">
        <>

            <Col xs={2}>

            <Button onClick={() => openModal()}>Add new Task</Button>
            </Col>
            <Col xs={2}>

                <Button onClick={() => openModal()}>Add new Column</Button>
            </Col>
         {/*</Row>*/}

        </>

    );
}

export default Controller;
