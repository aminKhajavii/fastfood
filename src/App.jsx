import "./App.css";
import CategoryList from "./Components/CategoryList/categoryList";
import Header from "./Components/Header/header";
function App() {
  return (
    <div className="wrapper bg-faded-dark">
      <Header />
      <CategoryList />
    </div>
  );
}

export default App;
