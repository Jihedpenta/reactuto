import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks'
import {useState} from 'react'
import AddTask from './components/AddTask'
function App() {
  const [showAddTask,setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30am',
        reminder: true,            
    },
    {
        id:2,
        text: 'Work meeting',
        day: 'Feb 10th at 4:30am',
        reminder: true,            
    },
    {
        id:3,
        text: 'Shopping',
        day: 'Feb 15th at 10:00am',
        reminder: false,            
    },
]);
//Delete task
  const deleteTask = (id)=>{
    setTasks(tasks.filter((task)=> task.id !== id))
  }
  const toggleReminder = (id) =>{
  setTasks(tasks.map((task) => task.id == id ? {...task, reminder: !task.reminder} : task))
  }
  const addTask= (task)=>{
    const id = tasks.length + 1;
    const newTask = {id,...task};
    setTasks([...tasks, newTask]);
    console.log(tasks);
  }
  const newTask=()=>{setShowAddTask(!showAddTask)}


  return (
    <div className="container">
      <Header title="Task Tracker" onNewTask={newTask}/>

      {showAddTask && <AddTask  onAddTask={addTask}/>}

      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    </div>
  );
}

export default App;
