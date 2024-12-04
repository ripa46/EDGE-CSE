import React, { useState } from "react";
import DynamicTable from "../components/DynamicTable";
import CRUDModal from "../components/CRUDModel";

const RoomPage = () => {
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
      <h2>Rooms</h2>
      <button className="btn btn-primary mb-3" onClick={() => setModalShow(true)}>
        Add New Room
      </button>
      <DynamicTable tableName="Room" onEdit={handleEdit} />
      <CRUDModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        tableName="Room"
        editData={editData}
        onSave={handleSave}
      />
    </div>
  );
};

export default RoomPage;
