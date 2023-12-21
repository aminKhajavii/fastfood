import { useEffect, useState } from "react";
import "./App.css";
import CategoryList from "./Components/CategoryList/categoryList";
import Header from "./Components/Header/header";
import axios from "./axios";
import Loading from "./Components/Loading/loding";
import FastFoodList from "./Components/FastFoodList/fastFoodList";
import SearchBar from "./Components/SearchBar/searchBar";
import noteFound from "./assets/images/404.png";
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

  const searchItem = async (term) => {
    setLoading(true);
    const response = await axios.get(
      `/FastFood/search/${term ? "?term=" + term : ""}`
    );
    setLoading(false);
    setFastFoodItem(response.data);
    console.log(term);
    console.log(response.data);
  };

  const renderContent = () => {
    if (loading) {
      return <Loading theme="dark" />;
    }
    if (fastFoodItem.length === 0) {
      return (
        <>
          <div className="alert alert-warning text-center">
            برای کلبد واژه فوق هیچ ایتمی یافت نشد
          </div>
          <img
            src={noteFound}
            className="mx-auto mt-5 d-block .fade-in-horiz"
            alt=""
          />
        </>
      );
    }
    return <FastFoodList fastFoodItems={fastFoodItem} />;
  };

  return (
    <div className="wrapper bg-faded-dark">
      <Header />
      <CategoryList filterItems={filterItems}>
        <SearchBar searchItems={searchItem} />
      </CategoryList>
      <div className="container mt-4">{renderContent()}</div>
    </div>
  );
}

export default App;
