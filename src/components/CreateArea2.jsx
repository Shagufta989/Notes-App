import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateAreaContact(props) {
  const [contact, setContact] = useState({
    title: "",
    content: ""
  });
    function handleChange(event) {
      const { name, value } = event.target;

      setContact(prevContact => {
        return {
          ...prevContact,
          [name]: value
        };
      });
    }
    const handleInputChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      if (/^[0-9+]*$/.test(value)) {
        setContact(prevcontact => {
          return {
            ...prevcontact,
            [name]: value
          };
        });
      }
    };

  function submitContact(event) {
    props.onAdd(contact);
    setContact({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  const [expand, updateExpand] = useState(false)

  function expandArea(){
    updateExpand(true) }

  return (
    <div>
      <form className="create-contact">
        <input
          onFocus={expandArea}
          name="title"
          onChange={handleChange}
          value={contact.title}
          placeholder="Contact Name"
        />
       {expand && <textarea name="content" onChange={handleInputChange} value={contact.content}placeholder="Save a contact..." rows="3" />}
        <Zoom in={expand}>
        <Fab onClick={submitContact}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateAreaContact;
