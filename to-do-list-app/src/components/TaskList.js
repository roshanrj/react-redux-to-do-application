import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';
import './index.css';

const TaskList = (props) => {
    
    const renderToDoList = (toDoList,taskKey) => {
        return toDoList.map((item)=> {
            return (
                <div className="list task-list-item" key={`list task-list-item-${item.key}`}>
                    <p>
                        <input type="checkbox" value={item.completed} onChange={(e)=>props.updateAddedToDoItem(e.target.value, taskKey, item.key,'completed')}/>
                        <input type="text" value={item.description} onChange={(e)=>props.updateAddedToDoItem(e.target.value, taskKey, item.key,'description')}/>
                        <span>
                        <FontAwesomeIcon className="faicons" onClick={(e) => {
                            props.deleteAddedToDoItem(taskKey, item.key)
                        }} icon="trash" />
                        </span>
                    </p>
                </div>
            );
        });
    };
    
    const renderEachTask = (tasks)=> {
        return tasks.map((item)=> {
            return (
                <div className="task-list-item-wrapper" key={`task-list-item-wrapper-${item.key}`}>
                    <div className="list task-list-header">
                        <p>
                            <input type="text" id={item.key} value={item.description} onChange={(e)=>props.updateAddedTask(e.target.value,item.key)}/>
                            <span>
                            <FontAwesomeIcon className="faicons" onClick={() => {
                                props.deleteAddedTask(item.key)
                            }} icon="trash" />
                            </span>
                        </p>
                    </div>
                    <div className="task-list-body" key={`task-list-body-${item.key}`}>
                        <header>
                            <form className="to-do-list-form" onSubmit={(e) => props.addNewToDoList(e,item.key)}>
                            <div className="flex flex-no-wrap flex-align-items-center flex-justify-content-space-between p-top-bottom-10">
                                <div>
                                    <input type="text" placeholder="Enter to do" value={item.currentToDo.description} onChange={(e) => props.handleToDoInputChange(e.target.value,item.key)}></input>
                                </div>
                                <div>
                                    <button type="submit">Add To Do</button>
                                </div>
                            </div>
                            </form>
                        </header>
                        {renderToDoList(item.toDoList, item.key)}
                    </div>
                </div>
            );
        });
    };

    const {taskList} = props;
    if(!taskList.length){
        return <div className="no-tasks-added">No tasks added yet!</div>
    }
    return (
        <div className="task-lists">
            <FlipMove duration={300} easing="ease-in-out">
                {renderEachTask(taskList)}
            </FlipMove>
        </div>
    );
}

TaskList.propTypes = {
    actions: PropTypes.object.isRequired,
    taskList: PropTypes.array.isRequired,
    deleteAddedTask: PropTypes.func.isRequired,
    updateAddedTask: PropTypes.func.isRequired,
    updateAddedToDoItem: PropTypes.func.isRequired,
    handleToDoInputChange: PropTypes.func.isRequired,
    deleteAddedToDoItem: PropTypes.func.isRequired
};

export default TaskList;