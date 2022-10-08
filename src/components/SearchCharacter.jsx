import React from "react";

import { FaSearch } from "react-icons/fa";

function SearchCharacter({ search, setSearch }) {
  return (
    <div className="w-60 xl:w-96 sm:w-80 bg-bodyLight h-8 flex flex-row space-x-2 px-3 rounded-2xl md:ml-6 md:w-96 lg:-ml-20 lg:w-72 lg:mt-6 dark:bg-cardDark">
      <FaSearch className="mt-2 dark:text-white" />
      <input
        className="w-80 bg-bodyLight outline-none md:w-96 dark:bg-cardDark dark:text-white"
        type="text"
        placeholder="Character"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
}

export { SearchCharacter };
