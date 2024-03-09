import React, {useState} from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import * as actions from '../store/actions';
import { useDispatch } from "react-redux";

const AddNewTask = () => {
    const [taskTitle, setTaskTitle] = useState('');
    const dispatch = useDispatch();

    const handleTaskTitleChange = (e) => {
        setTaskTitle(e.target.value);
    }

    const handleTaskSubmit = () => {
        dispatch(actions.addTask({
            title: taskTitle
        }));
    }

    return (
        <InputGroup className="mb-3">
            <FormControl placeholder="Добавить новый текст" value={taskTitle} onChange={e => handleTaskTitleChange(e)} />
            <InputGroup.Append>
                <Button variant="outline-secondsry" onClick={handleTaskSubmit}>Сохранить</Button>
            </InputGroup.Append>
        </InputGroup>
    )
}

export default AddNewTask;