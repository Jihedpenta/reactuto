import {useState} from 'react'

function AddTask({onAddTask}) {
    const [text,setText] = useState('');
    const [day,setDay] = useState('');
    const [reminder,setReminder] = useState(false);

    const onSubmit = (e)=>{
        e.preventDefault()

        if(!text){
            alert('Please add text')
            return
        }

        onAddTask({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control"><label>Task</label><input type="text" placeholder='Add task' value={text} onChange={(e)=>setText(e.target.value)}/></div>
            <div className="form-control"><label>Day and time</label><input type="text" placeholder='Add day and time' value={day} onChange={(e)=>setDay(e.target.value)}/></div>
            <div className="form-control form-control-check"><label>Set reminder</label><input type="checkbox" value={reminder} checked={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/></div>
            <input type="submit" value="Save" className='btn btn-block'/>

        </form>
    )
}

export default AddTask
