import { useEffect, useState } from "react";
import useAxios from "../../customHook/useAxios";
import Loading from "../Loading/loding";
import SearchBar from "../SearchBar/searchBar";
const CategoryList = ({ filterItems, children }) => {
  const [categories, , loading] = useAxios({
    url: "/FoodCategory/categories",
  });

  const renderContent = () => {
    if (loading) {
      return <Loading theme="primary" />;
    }
    return (
      <div className="d-flex algin-items-center ps-3 w-100 justify-content-between gap-5 ">
        <ul className="nav ">
          <li className="nav-item" onClick={() => filterItems()}>
            <a href="#" className="nav-link">
              فست فود
            </a>
          </li>
          {categories.map((category) => (
            <li
              key={category.id}
              className="nav-item"
              onClick={() => filterItems(category.id)}
            >
              <a href="#" className="nav-link">
                {category.name}
              </a>
            </li>
          ))}
        </ul>
        {children}
      </div>
    );
  };
  return (
    <nav className="container mt-n5">
      <div
        className=" d-flex align-items-center bg-white rounded-3 shadow-lg py-4"
        style={{ height: "80px" }}
      >
        {renderContent()}
      </div>
    </nav>
  );
};

export default CategoryList;
