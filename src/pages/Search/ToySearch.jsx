import React, { useState } from 'react';

const ToySearch = ({ toys, setFilteredToys }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = toys.filter((toy) =>
      toy.toyName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredToys(filtered);
  };

  return (
    <div className="flex justify-end p-4">
      <input
        type="text"
        placeholder="Search by toy name"
        value={searchQuery}
        onChange={handleSearchChange}
        className="px-4 py-2 border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default ToySearch;
