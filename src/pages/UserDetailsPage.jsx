import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCardComponent from "../components/UserCardComponent.jsx";
import FilterUsersComponent from "../components/FilterUsersComponent.jsx";
import "../styling/general-page-style.css";
import "../styling/user-details-page-style.css";

const url = import.meta.env.VITE_URL;

const UserDetailsPage = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [minCash, setMinCash] = useState("");
  const [maxCash, setMaxCash] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(url + "/users");
      setData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const fetchFilteredData = async () => {
    try {
      const response = await axios.get(`${url}/${minCash}/${maxCash}/filter`);
      setFilteredData(response.data);
    } catch (error) {
      console.error("Error fetching filtered data:", error.message);
    }
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    fetchFilteredData();
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="user-details page">
      <br />
      <h1>Users:</h1>
      <div className="buttons-container">
        <button onClick={fetchData}>Show All Users</button>
      </div>
      <form className="filter-form" onSubmit={handleFilterSubmit}>
        <label htmlFor="minCash">Min Cash:</label>
        <input
          type="number"
          id="minCash"
          value={minCash}
          onChange={(e) => setMinCash(e.target.value)}
        />
        <label htmlFor="maxCash">Max Cash:</label>
        <input
          type="number"
          id="maxCash"
          value={maxCash}
          onChange={(e) => setMaxCash(e.target.value)}
        />
        <button type="submit">Filter</button>
      </form>
      <FilterUsersComponent />
      <div>
        {currentData.map((user, key) => (
          <UserCardComponent
            key={user.userId}
            _id={user._id}
            userId={user.userId}
            isActive={user.isActive}
            fName={user.fName}
            lName={user.lName}
            cash={user.cash}
            credit={user.credit}
          />
        ))}
      </div>
      <div className="pagination">
        {Array.from({
          length: Math.ceil(filteredData.length / itemsPerPage),
        }).map((item, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default UserDetailsPage;
