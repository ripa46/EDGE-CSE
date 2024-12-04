import React, { useEffect, useState } from "react";
import { Table, Spinner, Alert, Button } from "react-bootstrap";
import { fetchTableData, deleteTableData } from "../api";

const DynamicTable = ({ tableName, onEdit }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchTableData(tableName);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [tableName]);

  const handleDelete = async (id) => {
    try {
      await deleteTableData(tableName, id);
      setData(data.filter((row) => row.id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  if (loading) {
    return <Spinner animation="border" />;
  }

  if (error) {
    return <Alert variant="danger">Error: {error}</Alert>;
  }

  return (
    <div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            {data.length > 0 &&
              Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {Object.values(row).map((value, idx) => (
                <td key={idx}>{value}</td>
              ))}
              <td>
                <Button
                  variant="warning"
                  className="me-2"
                  onClick={() => onEdit(row)}
                >
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDelete(row.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DynamicTable;
