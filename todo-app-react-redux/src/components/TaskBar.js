import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TaskList from './TaskList';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
library.add(faTrash);

export default class TaskBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentTask: {
                description: '',
                key: '',
            }
        }
    }

    handleTaskInputChange = (e,type) => {
        this.setState({currentTask: {
            description: e.target.value,
            key: Date.now(),
        }});
    }

    addNewTask = (e) => {
        e.preventDefault();
        const {actions} = this.props;
        const {currentTask} = this.state;
        if(currentTask.description !=="" && currentTask.description.length >=3){
            this.setState({currentTask:{
                    description:'',
                    key:''
                }
            });
            const currentToDo = {
                description:'',
                key:''
            };
            actions.addTask({...currentTask, currentToDo, toDoList: [] });
        }
    }

    deleteAddedTask = (key) => {
        const {actions, taskList} = this.props;
        const filteredTasks = taskList.filter(item =>item.key!==key);
        actions.deleteTask({filteredTasks});
    }

    updateAddedTask = (description,key) => {
        const {actions, taskList} = this.props;
        const updatedTasks = taskList.map(item=>{      
            if(item.key === key){
              item.description = description;
            }
            return item;
        });
        actions.updateTask({updatedTasks});
    }

    
    handleToDoInputChange = (description,key) => {
        const {actions, taskList} = this.props;
        const updatedTasks = taskList.map(item=>{      
            if(item.key === key){
              item.currentToDo.description = description;
              item.currentToDo.key = Date.now();
            }
            return item;
        });
        actions.updateTask({updatedTasks});
    }

    addNewToDoList = (e,key) => {
        e.preventDefault();
        const {actions, taskList} = this.props;
            const updatedTasks = taskList.map((task) => {
                if(task.key === key && task.currentToDo.description !== "" && task.currentToDo.description.length >=3){
                    task.toDoList.push({...task.currentToDo});
                    task.currentToDo.description = '';
                    task.currentToDo.key = '';
                }
                return task;
            });
            actions.addToDoList({updatedTasks});
    }

    deleteAddedToDoItem = (taskKey,toDoItemKey) => {
        const {actions, taskList} = this.props;
        const filteredTasks = taskList.map(taskListItem =>{
            if(taskListItem.key === taskKey){
                taskListItem.toDoList = taskListItem.toDoList.filter((todoListItem)=>todoListItem.key !== toDoItemKey);
            }
            return taskListItem;
        });
        actions.deleteToDoList({filteredTasks});
    }

    updateAddedToDoItem = (value,taskKey,toDoListItemKey,type) => {
        const {actions, taskList} = this.props;
        const updatedTasks = taskList.map(taskListItem=>{      
            if(taskListItem.key === taskKey){
                taskListItem.toDoList.forEach((todoListItem)=> {
                    if(todoListItem.key === toDoListItemKey){
                        todoListItem[type] = value;
                    }
                })
            }
            return taskListItem;
        });
        actions.updateTask({updatedTasks});
    }

    render(){
        const {currentTask: {description} } = this.state;
        return(
        <div className="to-do-task-wrapper">
        <header>
            <h2 className="text-center text-bold p-top-bottom-10 m-top-bottom-0">To do Task App</h2>
            <form className="to-do-task-form" onSubmit={(e) => this.addNewTask(e)}>
            <div className="flex flex-no-wrap flex-align-items-center flex-justify-content-space-between p-top-bottom-10">
                <div>
                    <input type="text" placeholder="Enter task" value= {description} onChange={(e) => this.handleTaskInputChange(e)}></input>
                </div>
                <div>
                    <button type="submit">Add Task</button>
                </div>
            </div>
            </form>
        </header>
        <TaskList deleteAddedTask={this.deleteAddedTask} 
        updateAddedTask={this.updateAddedTask} 
        addNewToDoList={this.addNewToDoList} 
        updateAddedToDoItem={this.updateAddedToDoItem} 
        handleToDoInputChange={this.handleToDoInputChange} 
        deleteAddedToDoItem={this.deleteAddedToDoItem}
        {...this.props}/>
        </div>
        );
    }
}

TaskBar.propTypes = {
    actions: PropTypes.object.isRequired,
    taskList: PropTypes.array.isRequired,
};


