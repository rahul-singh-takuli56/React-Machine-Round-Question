import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [currentPage, itemsPerPage]);

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4  gap-4 mx-10 mt-10 ">
        {currentItems.map((items) => (
          <div
            key={items.id}
            className="border-4 p-2  border-blue-400 rounded-lg cursor-pointer hover:bg-blue-100 "
          >
            <img
              src={items.image}
              alt={items.title}
              className="w-[150px] h-[200px] mx-auto"
            />
            <p className="mx-auto text-gray-900 ">
              <span className="font-semibold">Category:</span> {items.category}
            </p>
            <p className="mx-auto text-gray-900 ">
              <span className="font-semibold">Title:</span>{" "}
              {items.title.slice(0, 28)}
            </p>
            <p className="mx-auto text-gray-900 ">
              <span className="font-semibold">Price:</span> {items.price}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-between item-center mt-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white  rounded-md font-semibold px-3 py-2 mx-auto"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="bg-blue-500 text-white  rounded-md font-semibold px-3 py-2 mx-auto"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
