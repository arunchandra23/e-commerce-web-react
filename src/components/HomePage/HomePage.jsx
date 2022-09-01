import React, { useEffect } from "react";
import HomeItem from "./HomeItem";
import { connect } from "react-redux";
import { updateCategoryData } from "../../redux/actions";
import { getData } from "../../redux/actions";
import "./HomePage.css";

const HomePage = ({ getData, data, categoryData, updateCategoryData }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const callGetData = async () => {
      await getData();
      document.querySelector("#men").click();
    };
    callGetData();
  }, [getData]);

  const getCatecoryData = (category) => {
    const categoryData = data.filter((item) => {
      if (item.category === category) {
        console.log("getCatecoryData", item);
        return item;
      }
      return null;
    });
    updateCategoryData(categoryData);
  };
  let renderedList;
  if (categoryData !== []) {
    renderedList = categoryData.map((item) => {
      console.log(item);
      return <HomeItem key={item.id} itemObj={item} />;
    });
  } else {
    renderedList = null;
  }

  return (
    <div className="container">
      <div className="category-btns home-item">
        {" "}
        <button
          type="submit"
          id="men"
          onClick={(e) => {
            console.log("clicked men");
            getCatecoryData(e.target.innerHTML);
          }}
        >
          men's clothing
        </button>
        <button
          type="submit"
          onClick={(e) => {
            getCatecoryData(e.target.innerHTML);
          }}
        >
          jewelery
        </button>
        <button
          type="submit"
          onClick={(e) => {
            getCatecoryData(e.target.innerHTML);
          }}
        >
          electronics
        </button>
        <button
          type="submit"
          onClick={(e) => {
            getCatecoryData(e.target.innerHTML);
          }}
        >
          women's clothing
        </button>
      </div>
      <div className="content">
        <div className="home-items">{renderedList}</div>
      </div>
    </div>
  );
};
const mapStatesToprops = (state) => {
  return { data: state.data, categoryData: state.categoryData };
};
export default connect(mapStatesToprops, { updateCategoryData, getData })(
  HomePage
);
