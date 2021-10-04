import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.dob}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>{contact.jobtype}</td>
      <td>{contact.preferedjoblocation}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
      
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
        <button
          type="button"
        >
          Pic
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
