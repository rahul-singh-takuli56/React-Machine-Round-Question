import Tree from "./components/Tree";
import menus from "./data";

const App = () => {
  return (
    <div className="min-h-[100vh] w-[350px] bg-blue-400">
      <h1 className="uppercase text-4xl text-center font-bold text-blue-500 py-4">
        Recursive Menu bar
      </h1>
      <Tree menu={menus} />
    </div>
  );
};

export default App;
