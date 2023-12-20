import { useEffect, useState } from "react";
import axios from "../../axios";
import Loading from "../Loading/loding";
const CategoryList = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const response = await axios.get("/FoodCategory/categories");
    setCategories(response.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  const renderContent = () => {
    if (loading) {
      return <Loading theme="primary" />;
    }
    return (
      <ul className="nav ">
        <li className="nav-item">
          <a href="" className="nav-link">
            فست فود
          </a>
        </li>
        {categories.map((category) => (
          <li key={category.id} className="nav-item">
            <a href="" className="nav-link">
              {category.name}
            </a>
          </li>
        ))}
      </ul>
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
