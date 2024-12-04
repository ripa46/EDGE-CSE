import React, { useState } from "react";
import DynamicTable from "../components/DynamicTable";
import CRUDModal from "../components/CRUDModel";

const HotelPage = () => {
  const [modalShow, setModalShow] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleEdit = (data) => {
    setEditData(data);
    setModalShow(true);
  };

  const handleSave = () => {
    // Refresh logic here if needed
  };

  return (
    <div>
      <h2>Hotels</h2>
      <button className="btn btn-primary mb-3" onClick={() => setModalShow(true)}>
        Add New Hotel
      </button>
      <DynamicTable tableName="Hotel" onEdit={handleEdit} />
      <CRUDModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        tableName="Hotel"
        editData={editData}
        onSave={handleSave}
      />
    </div>
  );
};

export default HotelPage;
