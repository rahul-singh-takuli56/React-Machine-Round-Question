import MenuItems from "./MenuItems";

const MenuList = ({ list = [] }) => {
  return (
    <ul className="">
      {list && list.length
        ? list.map((listItem, index) => (
            <MenuItems item={listItem} key={index} />
          ))
        : null}
    </ul>
  );
};

export default MenuList;
