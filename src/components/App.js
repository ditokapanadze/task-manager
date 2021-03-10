import React from 'react'
import TaskList from './TaskList.js'
import TaskForm from './TaskForm.js'
import TaskListContextProvider from "../context/TaskListContext";

import Header from './Header.js';
import '../App.css'

const App = () =>{
    return(
        <TaskListContextProvider>
        <div className="container">
            <div className="app-wrapper">
                <Header/>
              <div className="main">
                <TaskForm />
                <TaskList/>
              </div>
            </div>
            
        </div>
        </TaskListContextProvider>
    )
}
export default App
