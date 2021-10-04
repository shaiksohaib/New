import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    dob: "",
    phoneNumber: "",
    email: "",
    preferedjoblocation: "",
    jobtype: ""
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    dob: "",
    phoneNumber: "",
    email: "",
    preferedjoblocation: "",
    jobtype: ""
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      dob: addFormData.dob,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
      preferedjoblocation: addFormData.preferedjoblocation,
      jobtype: addFormData.jobtype,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      dob: editFormData.dob,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
      preferedjoblocation: editFormData.preferedjoblocation,
      jobtype: editFormData.jobtype
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      dob: contact.dob,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
      preferedjoblocation: contact.preferedjoblocation,
      jobtype: contact.jobtype
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <h2 className="Title">Registration Form</h2>
      <form className="Form" onSubmit={handleAddFormSubmit}>
        <label class="header"><b>Profile Photo</b>:</label>
        <input id="image" type="file" name="profile_photo" placeholder="Photo" required="" capture />
        <label for="fullName"><b>Full Name</b></label>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter your name"
          onChange={handleAddFormChange}
        />
        <label for="email"><b>Email</b></label>
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter your email"
          onChange={handleAddFormChange}
        />
        <label for="phoneNumber"><b>Phone Number</b></label>
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter your phone number"
          onChange={handleAddFormChange}
        />
        <label for="DOB"><b>DOB</b></label>
        <input
          type="date"
          name="dob"
          className="dob"
          required="required"
          placeholder="Enter your DOB"
          onChange={handleAddFormChange}
        />
        <label for="jobtype"><b>Job Type</b>:</label>
        <select onChange={handleAddFormChange} id="jobtype" name="jobtype">
          <option disabled selected value>Select Your Job Type </option>
          <option value="FT">FT</option>
          <option value="PT">PT</option>
          <option value="Consultant">Consultant</option>
        </select>
        <label for="preferedjoblocation"><b>Prefered Location:</b> </label>
        
        <input onChange={handleAddFormChange} type="checkbox" id="preferedjoblocation" name="preferedjoblocation" value="Chennai"  />
        <label for="preferedjoblocation"className="Chennai">Chennai</label>
        <input onChange={handleAddFormChange} type="checkbox" id="preferedjoblocation" name="preferedjoblocation" value="Hyderabad" />
        <label for="preferedjoblocation" className="Hyderabad">Hyderabad</label>
        <input onChange={handleAddFormChange} type="checkbox" id="preferedjoblocation" name="preferedjoblocation" value="Bangalore" />
        <label for="preferedjoblocation" className="Bangalore">Bangalore</label>
        <button type="submit">Add / Update</button>
     
        
      </form>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>DOB</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Job Type</th>
              <th>Prefered Job Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>


    </div>
  );
};

export default App;
