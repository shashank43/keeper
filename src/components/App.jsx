import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    let [notes, setNotes] = useState([]);

    function addNote(note) {
        setNotes((prevNotes) => {
            return [
                ...prevNotes, note
            ];
        });
    }

    function deleteNote(id) {
        setNotes((prevNotes) => {
            return prevNotes.filter((noteItem, index) => {
                return id !== index;
            })
        })
    }

    return (
    <div>
        <Header />
        <CreateArea addNote = {addNote}/>
        {notes.map((note, index) =>
            (<Note
            key = {index}
            id = {index}
            title = {note.title}
            content = {note.content}
            deleteNote = {deleteNote}
            />)
        )}
        <Footer />
    </div>
    );
}

export default App;