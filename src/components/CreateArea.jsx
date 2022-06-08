import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
export default function CreateArea(props) {
  const [note, setNote] = useState({
    title:"",
    content:""
  });
  function handleChange(event){
   const {name,value}=event.target;
   setNote((prevNote=>{
     return {...prevNote,[name]:value}
   }))
  }

  function submitNote(event)
  {
    props.onAdd(note);
    setNote({
      title:"",
      content:""
    })
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input name="title" value={note.title}  onChange={handleChange} placeholder="Title" />
        <textarea name="content" value={note.content}  onChange={handleChange} placeholder="write notes.." />
        <button onClick={submitNote}><AddIcon/></button>
      </form>
    </div>
  );
}
