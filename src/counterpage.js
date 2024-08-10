import  './counterpage.css'

function counterpage() {

    let [count, updateval] = useState(0);
  
  
    return (
          
            <div className ='mid'>
            
          <button id='but' onClick={
            ()=>{
            if(count>0){
              updateval(count-1);
            }
            }
          }>-</button>
          <p>{count}</p>
          <button id='but' onClick={
            ()=>{
            if(count<10){
              updateval(count+1);
            }
            }
          }>+</button>
    </div>
     );
  }
  
  
  export default counterpage;
  