import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import CreateAreaContact from "./CreateArea2";
import Contact from "./Note2";

function App() {
  const [notes, setNotes] = useState([]);
  const [contacts, setContacts] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function addContact(newContact) {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  }

  function deleteContact(id) {
    setContacts(prevContact => {
      return prevContact.filter((contactItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <div className="main">
      <CreateArea onAdd={addNote} />
      <CreateAreaContact onAdd={addContact} />
      <div className="note-content">
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      </div>
      <div className="contact-content">
      {contacts.map((contactItem, index) => {
        return (
          <Contact
            key={index}
            id={index}
            title={contactItem.title}
            content={contactItem.content}
            onDelete={deleteContact}
          />
        );
      })}
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
