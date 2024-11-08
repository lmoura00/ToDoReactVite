import logo from "./assets/logo.svg"
import {useState} from 'react'
import {TrashIcon} from "lucide-react"
import "./App.css"
type Task = {
  id: number
  title: string
  done: boolean
}


export default function App(){
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState<Task[]>([])

  function handleAddTask() {
    if (!task) {
      alert("Verifique os campos!")
    }
    else {
      setTasks([...tasks, {
        id: Math.random(),
        title: task,
        done: false
      }])
      setTask("")
    }
  }

  function handleDoneTask(item: Task) {
    setTasks(
      tasks.map(task => task.id === item.id ? { ...task, done: !item.done } : task)
    )
  }

  function handleDeleteTask(item: Task) {
    setTasks(
      tasks.filter(task => task.id !== item.id)
    )
  }

  return(
    <div style={{display:"flex", flexDirection:'column', justifyContent:'center'}}>
      {/* HEADER */}
      <div 
        style={{
          backgroundColor:"#F1ECE6", 
          display:'flex', 
          width:"100%", 
          alignItems:"center", 
          justifyContent:'center', 
          height:80
        }}>
          <img src={logo} style={{}}/>
      </div>



        {/* INPUT AND ADD BUTTON */}
      <div 
        style={{
          display:"flex", 
          alignItems:"center", 
          justifyContent:"center", 
          marginLeft:10,
          marginRight:10,
          marginTop:120,
        }}>
        <input 
          type="text" 
          placeholder="What do you need to do?"
          value={task}
          onChange={e=>setTask(e.target.value)}
          style={{
            width:900,
            justifyContent:'center',
            alignItems:"center",
            display:'flex',
            height:"78px",
            borderTopLeftRadius:50,
            borderBottomLeftRadius:50,
            backgroundColor:'#F1ECE6',
            padding:10,
            paddingLeft:25,
            fontSize:25,
            border:"none",
            color:"#969696",
            outline:"none"
          }}
        />
        <button
          onClick={handleAddTask}
          style={{
            height:"78px",
            width:140,
            backgroundColor:"#76B7CD",
            border:"none",
            borderTopRightRadius:50,
            borderBottomRightRadius:50,
            fontSize:32,
            padding:10,
            color:'white',
            fontFamily:'poppins',
            fontWeight:"bold"
          }}
        >
          ADD
        </button>
      </div>


      {/* CONTAINER TASKS */}

      <div 
          style={{
            display:tasks.length==0?"none":'flex',
            justifyContent:'center',
            margin:15,
            alignSelf:'center',
            flexDirection:'column',
            width:900,
            backgroundColor:"#F1ECE6",
            padding:25,
            borderRadius:50
          }}
      >
      

        {tasks.map(task => (
          <div style={{
            display:'flex',
            paddingBottom:30,
            marginBottom:20,
           
          }}>
              <div
                style={{
                  width:"95%", 
                  borderBottomStyle:'solid', 
                  borderBottomWidth:1,
                  borderBottomColor:"#76B7CD",
                  paddingBottom:20
                }}
                >
                  <button 
                    onClick={()=>handleDoneTask(task)}
                    style={{backgroundColor:"transparent", border:"none"}}
                  >
                    <text 
                    style={{ 
                      fontSize:32,
                      textDecorationLine: task.done ? "line-through" : "none", 
                      color: task.done ? "#969696" : "black",
                      fontWeight:300,
                      fontFamily:'poppins',
                      padding:10,
    
                    }}>
                      {task.title}
                    </text>
                  </button>
              </div>
              <div 
                style={{
                  border:'none',
                  borderWidth:0, 
                  borderColor:"transparent",
                  display:'flex',
                  borderImage:'none'
                }}
              >
                <button
                style={{ border:'none', backgroundColor:"#F1ECE6"}} 
                  onClick={() => handleDeleteTask(task)}>
                    <TrashIcon
                      style={{
                        color:"#B30B04",
                        border:'none', 
                        borderWidth:0,
                        borderColor:"transparent", 
                        backgroundColor:'transparent'
                      }}
            
                />
              
                </button>
              </div>

          </div>
        ))}

      </div>
    </div>
  )
}