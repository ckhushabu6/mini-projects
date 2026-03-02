import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [todos , setTodos] = useState([]);
  const [task , setTask] = useState("");
  const [search , setSearch] = useState("");
  
 function handelAdd(){
  if(task.trim()=="") return ;
  const xyz = {
    id : Date.now(),
    task : task,
    compleat : false
  }
  console.log(xyz)
  setTodos([...todos,xyz]);
  setTask("");

 }
function handelDelete(indexToDelete){
 let updated = todos.filter((index)=> index.id !== indexToDelete);
 setTodos(updated);
}



function handelSearch(index){

}

function handelToggel(indextoUppdate){
const update = todos.map((todo)=>{
return todo.id == indextoUppdate ? {...todo , compleat: !todo.compleat } : todo
});
setTodos(update)
}

useEffect(()=>{
  const storedTodos = localStorage.getItem('todos');
  if(storedTodos){

  }
})
const filteredTodo = todos.filter((todo)=>{
  return todo.task.toLowerCase().includes(search.toLowerCase());
});
  
  return (
    <>
    <div className='bg-blue-200 text-center '>
       <div>
        <h3 className='bg-blue-500 text-amber-50 text-2xl font-bold align-center p-2 rounded-xl m-9' >Todo App</h3>
      </div>
      <div className=' flex justify-center'>
      <div className='p-8 bg-blue-100 w-100  m-10 text-center  '>
      <div>

        {/* Add */}
        <input 
        value={task}
        onChange={(ele)=>setTask(ele.target.value)}
        className='bg-white p-2 rounded-sm m-2'
        type='text'
        placeholder='Enter your todo'/>
        <button className='bg-blue-600 text-amber-50 rounded-sm p-2 m-2'
         onClick={handelAdd}
        >Add Task</button>

        {/* search */}
        <input type='text' 
        placeholder="Search todo here..."
        value={{search}}
        onChange={(e)=>setSearch(e.target.value)}
        className='bg-white p-2 text-sm rounded-md '
        />
       
      </div>

      {/* List of TOdo */}
      <div>
        <ul className='p-2 m-2 '>
        
          {
            todos.map((ele , index)=>(
              <li key={ele.id}
              className={ele.compleat ? "line-through text-blue-950 " : ""}
              >
                  {ele.task}
                  {/* todos */}
                  <button className='p-2'
                  onClick={()=>handelToggel(ele.id)}
                  >🔀</button> 
     
                  {/*delete button */}
                  <button className='p-2'
                  onClick={()=> handelDelete(ele.id)}
                  >❌</button>
              </li>
              
            ))
          }
        </ul>
      </div>
      </div>
      </div>
    </div>
   
    </>
  )
}

export default App
