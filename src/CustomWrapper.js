import React, {useState} from 'react';
import AddNewTaskForm from "./forms/addNewTaskForm";
import EditNewTaskForm from "./forms/editTaskForm";


function CustomWrapper(props) {
    const {modal, closeModal, addNewTask, modalState, editTask} = props;

    return (
        <>
            {modalState.form === 'addNewTask' &&
            <AddNewTaskForm modal={modal} closeModal={closeModal} addNewTask={addNewTask}/>}

            {modalState.form === 'editTask' &&
            <EditNewTaskForm task={modalState.task} modal={modal} closeModal={closeModal} editTask={editTask}/>}

        </>
    );
}

export default CustomWrapper;
