import { useEffect, useState } from "react";
import "./App.css";
import CategoryList from "./Components/CategoryList/categoryList";
import Header from "./Components/Header/header";
import axios from "./axios";
import Loading from "./Components/Loading/loding";
import FastFoodList from "./Components/FastFoodList/fastFoodList";
function App() {
  const [loading, setLoading] = useState(true);
  const [fastFoodItem, setFastFoodItem] = useState([]);
  const fetchData = async (categoryId = null) => {
    const response = await axios.get(
      `/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`
    );
    setLoading(false);
    setFastFoodItem(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const filterItems = (categoryId) => {
    fetchData(categoryId);
  };
  const renderContent = () => {
    if (loading) {
      return <Loading theme="dark" />;
    }
    return <FastFoodList fastFoodItems={fastFoodItem} />;
  };

  return (
    <div className="wrapper bg-faded-dark">
      <Header />
      <CategoryList filterItems={filterItems} />
      <div className="container mt-4">{renderContent()}</div>
    </div>
  );
}

export default App;
