import { useState } from "react";
import "./App.css";
import CategoryList from "./Components/CategoryList/categoryList";
import Header from "./Components/Header/header";
import Loading from "./Components/Loading/loding";
import FastFoodList from "./Components/FastFoodList/fastFoodList";
import SearchBar from "./Components/SearchBar/searchBar";
import noteFound from "./assets/images/404.png";
import useAxios from "./customHook/useAxios";
function App() {
  const [url, setUrl] = useState("/FastFood/list");
  const [fastFoodItem, , loading] = useAxios({
    url,
  });

  const filterItems = (categoryId) => {
    setUrl(`/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`);
  };

  const searchItem = async (term) => {
    setUrl(`/FastFood/search/${term ? "?term=" + term : ""}`);
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
