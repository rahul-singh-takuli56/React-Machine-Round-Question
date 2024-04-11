import { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);

  if (explorer.isFolder) {
    return (
      <div className="mt-5 cursor-pointer">
        <div
          className="folder  mt-5 bg-gray-600 flex justify-between p-3 w-[300px] cursor-pointer"
          onClick={() => setExpand(!expand)}
        >
          <span>📁{explorer.name}</span>

          <div className=" font-5 bg-slate-200">
            <button>Folder +</button>
            <button>File +</button>
          </div>

        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {explorer.items.map((exp) => {
            return <Folder explorer={exp} key={exp.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <span className="file mt-2 pl-3  flex flex-col bg-gray-400">
        📃{explorer.name}
      </span>
    );
  }
};

export default Folder;
