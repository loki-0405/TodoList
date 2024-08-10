import {useState} from 'react';
import './App.css';

function App() {

  // declaration
  let [ids,update] = useState(1);

  let [tasks , updatetasks] = useState(
    [
  ]

  );
  let [newtasks , updatenewtasks] = useState("");

//  check operations


 function check(){
 
 if(newtasks===""){
  
      alert("enter input field");
 
}
 }

//  handlechangeinput  operations

 function handlechangedinput(e){
  updatenewtasks(e.target.value);
 }


// adding tasks operation

function addingtasks(){
      
   let n = [...tasks,{
    id : ids,
    task : newtasks,
   }];
   updatetasks(n)
   updatenewtasks("")

}

// delete task operation

function deletetask(ind){

  const newafterdeleting = tasks.filter((t)=>{
    const p = t;
     return( p.id !== ind);
  } );
     updatetasks(newafterdeleting);
}
 console.log(tasks);
 // html code

  return (
    <>
     <h3 id='head'>TO-DO LIST APP</h3>
      <div className='container'>
      <div className='set'>

      <input type='text' id='search' placeholder='enter the tasks' onChange={
        (e)=>{
        handlechangedinput(e)  
        }
        } value={newtasks}/>

      <button id='but' onClick={()=>{
      return(
       check(),
       update(ids+1),
       addingtasks()
      )
      }
      }>add</button>
      </div>
      <>
        {
          tasks.map(
            (t)=>{ 
              const x = t;
              return(
              <div className='list'>
                 <span>{x.task}</span>
                <button className='wrong' key={x.id} onClick={()=>{deletetask(x.id)}}>❤</button>   
              </div>     
            )  
            }
          )
        }
    
</>
      </div>
    
     </>
   )
}
// exporting

export default App;
