import React from "react";
import Pagination from "./components/Pagination";

const App = () => {
  return (
    <div className="h-full  bg-slate-300">
      <h1 className="uppercase text-4xl text-center font-bold text-blue-500 py-4">
        pagination project
      </h1>
      <Pagination />
    </div>
  );
};

export default App;
