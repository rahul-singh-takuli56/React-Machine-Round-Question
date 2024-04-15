import React, { useState } from "react";
import MenuList from "./MenuList";
import { FaPlus, FaMinus } from "react-icons/fa";

const MenuItems = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggle = (getCurrenLevel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrenLevel]: !displayCurrentChildren[getCurrenLevel],
    });
  };

  return (
    <li>
      <p>{item.label}</p>
      <div className="gap- cursor-pointer ">
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggle(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus className="h-10 text-red-900 " />
            ) : (
              <FaPlus className="h-10 text-green-900" />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItems;
