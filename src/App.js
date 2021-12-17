import React,{useState} from 'react'
import List from './components/List'
import { v4 as uuid4 } from 'uuid';
import Modal from 'react-modal';
const App = () => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const [task,setTask] = useState('');
  const [list,setList]=useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  
  const openModal=()=> {
    setIsOpen(true);
  }

 

  const closeModal=()=> {
    setIsOpen(false);
  }
  // const [alert,setAlert]=useState()



  const selectTask=(e)=>{
    const objIndex = list.findIndex((obj) => obj.id === e);
    list[objIndex].completed = true;
    const newList=[...list];
    setList(newList);
  }
  const deselectTask=(e)=>{
    const objIndex = list.findIndex((obj) => obj.id === e);
    list[objIndex].completed = false;
    const newList=[...list];
    setList(newList);
  }
  const deleteTask=(id)=>{
    const updatedList=list.filter(item=>item.id!==id);
    setList(updatedList)
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    
      //add task
      const newTask={id:uuid4(),title:task, completed:false}
      setList([...list,newTask])
      setTask('');
      closeModal()
    
  }

  return (
    <section>
      <div className="container">
        <div className="header">Website todo</div>
        {list.length > 0 && <List items={list} deleteTask={deleteTask} selectTask={selectTask} deselectTask={deselectTask}/>}
        <button className='btn-modal' onClick={openModal}>+ New task</button>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          
        <form onSubmit={submitHandler} > 
          <input 
          type="text"
          placeholder='eg. buy grocery...' 
          className='custom-input'
          value={task}
          onChange={(e)=>setTask(e.target.value)}
          />
          <button className='btn-add' type='submit'>Add</button>
        </form>
        </Modal>
      </div>
    </section>
  )
}

export default App
