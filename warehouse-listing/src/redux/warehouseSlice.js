import { createSlice } from '@reduxjs/toolkit';
import warehousesData from '../data/warehouses.json';

const initialState = {
  warehouses: warehousesData,
  filters: {
    searchTerm: '',
    city: '',
    cluster: '',
    spaceAvailable: ''
  }
};

const warehouseSlice = createSlice({
  name: 'warehouses',
  initialState,
  reducers: {
    updateWarehouse: (state, action) => {
      const index = state.warehouses.findIndex(w => w.id === action.payload.id);
      if (index !== -1) {
        state.warehouses[index] = action.payload;
      }
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    addCustomField: (state, action) => {
      const { warehouseId, fieldName, fieldValue } = action.payload;
      const warehouse = state.warehouses.find(w => w.id === warehouseId);
      if (warehouse) {
        warehouse[fieldName] = fieldValue;
      }
    }
  }
});

export const { updateWarehouse, setFilters, addCustomField } = warehouseSlice.actions;
export default warehouseSlice.reducer; 