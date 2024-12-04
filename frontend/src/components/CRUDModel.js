import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const CRUDModal = ({ show, onHide, tableName, editData, onSave }) => {
  const [formData, setFormData] = useState({});
  
  // Update formData when editData is passed (for editing)
  useEffect(() => {
    if (editData) {
      setFormData(editData);
    } else {
      setFormData({});
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const url = editData
      ? `/api/${tableName}/${editData.id}` // Update the record if editData exists
      : `/api/${tableName}`; // Insert new record

    const method = editData ? 'put' : 'post';

    try {
      await axios({ method, url, data: formData });
      onSave(); // Call onSave to refresh data on parent component
      onHide(); // Close the modal
    } catch (error) {
      console.error("Error saving data", error);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{editData ? 'Edit' : 'Add'} {tableName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {Object.keys(formData).map((key) => (
            <Form.Group key={key} controlId={`formBasic${key}`}>
              <Form.Label>{key}</Form.Label>
              <Form.Control
                type="text"
                placeholder={`Enter ${key}`}
                name={key}
                value={formData[key] || ''}
                onChange={handleChange}
              />
            </Form.Group>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CRUDModal;
