import Header from "./components/Header";
import NoteCard from "./components/NoteCard";
import { useState } from "react";

function App() {

  const [notes, setNotes] = useState([
    {
      id:0,
      title: "Hello world!",
      content: "some content goes here... Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsa.",
      links: ["https://www.youtube.com", "https://github.com/thisIsHarshB"],
      images: [],
      tags: ["Regular", "Work"],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:1,
      title: "Note - 2",
      content: "some content goes here... Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsa.",
      links: ["https://www.grok.com"],
      images: [],
      tags: ["Important", "Study", "High Priority"],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:2,
      title: "something here",
      content: "some content goes here... Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsa.",
      links: ["https://www.youtube.com", "https://github.com/thisIsHarshB", "https://linkedin.com"],
      images: [],
      tags: ["Regular"],
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);

  const addNotes = () => {
    const newNote = {
      id:crypto.randomUUID(),
      title: "New Note",
      content: "Your content goes here...",
      links: [],
      images: [],
      tags: [],
      createdAt: new Date(),
      updatedAt: new Date()
    }
    setNotes([...notes, newNote]);
  }

  const delNotes = (idToDel) =>{
    const updatedNotes = notes.filter(note=> note.id !== idToDel)
    setNotes(updatedNotes)
  }

  return (
    <div className="font-mulish">
      <Header addNotes = {addNotes}/>
      {
        notes.map((note)=>{
          return <NoteCard key = {note.id} id={note.id} title={note.title} content = {note.content} links = {note.links} images = {note.images} tags = {note.tags} updatedAt = {note.updatedAt} delNotes={delNotes} />
        })
      }
    </div>
  )
}

export default App