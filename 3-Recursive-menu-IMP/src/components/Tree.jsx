import menus from "../data";
import MenuList from "./MenuList";

const Tree = () => {
  return (
    <div className="min-h-[100vh] w-[350px] bg-sky-500">
      <MenuList list={menus} />
    </div>
  );
};

export default Tree;
