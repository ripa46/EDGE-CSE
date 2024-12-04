import React, { useState } from "react";
import DynamicTable from "../components/DynamicTable";
import CRUDModal from "../components/CRUDModel"; // Correct path

const GuestPage = () => {
  const [modalShow, setModalShow] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleEdit = (data) => {
    setEditData(data);
    setModalShow(true);
  };

  const handleSave = () => {
    // Refresh logic or state update here if needed
  };

  return (
    <div>
      <h2>Guests</h2>
      <button className="btn btn-primary mb-3" onClick={() => setModalShow(true)}>
        Add New Guest
      </button>
      <DynamicTable tableName="Guest" onEdit={handleEdit} />
      <CRUDModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        tableName="Guest"
        editData={editData}
        onSave={handleSave}
      />
    </div>
  );
};

export default GuestPage;
