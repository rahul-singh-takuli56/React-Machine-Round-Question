import { useState } from "react";
import explorer from "./data/Data";
import Folder from "./components/Folder";

const App = () => {
  const [exploreData, setExploreData] = useState(explorer);

  return (
    <div>
      <Folder explorer={explorer} />
    </div>
  );
};

export default App;
