import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="date"
          required="required"
          placeholder="Enter your DOB"
          name="dob"
          value={editFormData.dob}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
      <select id="jobtype" value={editFormData.jobtype} onChange={handleEditFormChange} name="jobtype">
          <option disabled selected value>Select Your Job Type </option>
          <option  value="FT">FT</option>
          <option value="PT">PT</option>
          <option value="PT">Consultant</option>
        </select>
      </td>
      <td>
        <input onChange={handleEditFormChange} type="checkbox" id="preferedjoblocation" name="preferedjoblocation" value="Chennai" />
        <label for="vehicle1">Chennai</label><br/>
        <input onChange={handleEditFormChange} type="checkbox" id="preferedjoblocation" name="preferedjoblocation" value="Hyderabad" />
        <label for="vehicle1">Hyd</label><br/>
        <input onChange={handleEditFormChange} type="checkbox" id="preferedjoblocation" name="preferedjoblocation" value="Bangalore" />
        <label for="vehicle1">Bnglr</label><br/>
      </td>
    
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
