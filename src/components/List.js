import React from 'react'
import { FiTrash2 } from 'react-icons/fi';

const List = ({items,deleteTask,selectTask,deselectTask}) => {




  return (
    <div className='list-container'>
     {items.map((item)=>{
        const{id,title,completed}=item;
        return(
          <div className='task-container' key={id}>
            {completed ? (
              <>
                  <div className="task-list">
                    <input type="checkbox" className="checkbox-round" onClick={()=>deselectTask(id)} />
                    <p style={{ textDecoration: 'line-through' }}>{title}</p> 
                  </div>
                  <button 
                  className='btn-delete' 
                  onClick={()=>deleteTask(id)}>
                  <FiTrash2/></button>
              </>
           ):(
              <>
                  <div className="task-list">
                    <input type="checkbox" className="checkbox-round" onClick={()=>selectTask(id)} />
                    <p>{title}</p> 
                  </div>
                  
              </>
            )}
          </div>
        );
      })}
    </div>
     
  )
}

export default List
