import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFilters } from "../../redux/warehouseSlice";
import "./WarehouseList.css";

const WarehouseList = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { warehouses, filters } = useSelector((state) => state.warehouses);

   const uniqueCities = [...new Set(warehouses.map((w) => w.city))];
   const uniqueClusters = [...new Set(warehouses.map((w) => w.cluster))];

   const filteredWarehouses = warehouses.filter((warehouse) => {
      const matchesSearch = warehouse.name
         .toLowerCase()
         .includes(filters.searchTerm.toLowerCase());
      const matchesCity = !filters.city || warehouse.city === filters.city;
      const matchesCluster =
         !filters.cluster || warehouse.cluster === filters.cluster;
      const matchesSpace =
         !filters.spaceAvailable ||
         warehouse.space_available >= parseInt(filters.spaceAvailable);

      return matchesSearch && matchesCity && matchesCluster && matchesSpace;
   });

   return (
      <div className="warehouse-list-container">
         <div className="filters">
            <input
               type="text"
               placeholder="Search warehouses..."
               value={filters.searchTerm}
               onChange={(e) =>
                  dispatch(setFilters({ searchTerm: e.target.value }))
               }
            />

            <select
               value={filters.city}
               onChange={(e) => dispatch(setFilters({ city: e.target.value }))}
            >
               <option value="">All Cities</option>
               {uniqueCities.map((city) => (
                  <option key={city} value={city}>
                     {city}
                  </option>
               ))}
            </select>

            <select
               value={filters.cluster}
               onChange={(e) =>
                  dispatch(setFilters({ cluster: e.target.value }))
               }
            >
               <option value="">All Clusters</option>
               {uniqueClusters.map((cluster) => (
                  <option key={cluster} value={cluster}>
                     {cluster}
                  </option>
               ))}
            </select>

            <input
               type="number"
               placeholder="Min Space Available"
               value={filters.spaceAvailable}
               onChange={(e) =>
                  dispatch(setFilters({ spaceAvailable: e.target.value }))
               }
            />
         </div>

         <div className="warehouses-grid">
            {filteredWarehouses.map((warehouse) => (
               <div
                  key={warehouse.id}
                  className="warehouse-card"
                  onClick={() => navigate(`/warehouse/${warehouse.id}`)}
               >
                  <h3>{warehouse.name}</h3>
                  <p>City: {warehouse.city}</p>
                  <p>Cluster: {warehouse.cluster}</p>
                  <p>Space Available: {warehouse.space_available}</p>
                  <p>Status: {warehouse.is_live ? "Live" : "Not Live"}</p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default WarehouseList;
