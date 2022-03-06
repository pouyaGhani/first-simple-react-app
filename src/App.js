import "./App.css";
import List from "./components/List";
import Header from "./components/Header";
import AddCard from "./components/AddCard";
import { useState } from "react";

function App() {
  const [reviews, setReviews] = useState([]);
  const [filterData, setFilterData] = useState("");

  const searchHandler = (data) => {
    setFilterData(data);
  };
  const submitHandler = (data) => {
    const nowdate = new Date(Date.now());
    const newReviewData = {
      description: data,
      date: nowdate.toLocaleDateString("en-US"),
    };
    setReviews((old) => [...old, newReviewData]);
  };
  const deleteHandler = (index) => {
    setReviews(reviews.filter((item, id) => id !== index));
  };
  return (
    <div className="App">
      <Header onSearch={searchHandler}></Header>
      <List
        reviews={reviews}
        onDelete={deleteHandler}
        filterData={filterData}
      ></List>
      <AddCard onSubmit={submitHandler}></AddCard>
    </div>
  );
}

export default App;
