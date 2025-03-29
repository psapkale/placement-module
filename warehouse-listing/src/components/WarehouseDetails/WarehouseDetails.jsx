import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateWarehouse, addCustomField } from '../../redux/warehouseSlice';
import './WarehouseDetails.css';

const WarehouseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const warehouse = useSelector(state => 
    state.warehouses.warehouses.find(w => w.id === parseInt(id))
  );

  const [editedWarehouse, setEditedWarehouse] = useState(warehouse);
  const [newField, setNewField] = useState({ name: '', value: '' });

  if (!warehouse) {
    return <div>Warehouse not found</div>;
  }

  const handleSave = () => {
    dispatch(updateWarehouse(editedWarehouse));
    navigate('/');
  };

  const handleAddCustomField = () => {
    if (newField.name && newField.value) {
      dispatch(addCustomField({
        warehouseId: warehouse.id,
        fieldName: newField.name,
        fieldValue: newField.value
      }));
      setEditedWarehouse({
        ...editedWarehouse,
        [newField.name]: newField.value
      });
      setNewField({ name: '', value: '' });
    }
  };

  return (
    <div className="warehouse-details">
      <h2>Edit Warehouse</h2>
      <div className="edit-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={editedWarehouse.name}
            onChange={(e) => setEditedWarehouse({
              ...editedWarehouse,
              name: e.target.value
            })}
          />
        </div>

        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            value={editedWarehouse.city}
            onChange={(e) => setEditedWarehouse({
              ...editedWarehouse,
              city: e.target.value
            })}
          />
        </div>

        <div className="form-group">
          <label>Cluster:</label>
          <input
            type="text"
            value={editedWarehouse.cluster}
            onChange={(e) => setEditedWarehouse({
              ...editedWarehouse,
              cluster: e.target.value
            })}
          />
        </div>

        <div className="form-group">
          <label>Space Available:</label>
          <input
            type="number"
            value={editedWarehouse.space_available}
            onChange={(e) => setEditedWarehouse({
              ...editedWarehouse,
              space_available: parseInt(e.target.value)
            })}
          />
        </div>

        <div className="form-group">
          <label>Live Status:</label>
          <input
            type="checkbox"
            checked={editedWarehouse.is_live}
            onChange={(e) => setEditedWarehouse({
              ...editedWarehouse,
              is_live: e.target.checked
            })}
          />
        </div>

        <div className="custom-fields">
          <h3>Add Custom Field</h3>
          <input
            type="text"
            placeholder="Field Name"
            value={newField.name}
            onChange={(e) => setNewField({...newField, name: e.target.value})}
          />
          <input
            type="text"
            placeholder="Field Value"
            value={newField.value}
            onChange={(e) => setNewField({...newField, value: e.target.value})}
          />
          <button onClick={handleAddCustomField}>Add Field</button>
        </div>

        <div className="buttons">
          <button onClick={handleSave}>Save Changes</button>
          <button onClick={() => navigate('/')}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default WarehouseDetails; 