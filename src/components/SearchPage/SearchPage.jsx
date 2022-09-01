import React,{ useEffect} from "react";
import { connect } from "react-redux";
import ProductItem from "../ProductItem/ProductItem";
import { getData } from "../../redux/actions";

const SearchPage = ({ data, searchTerm,getData }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if(data.length===0){

      getData();
    }
  
  }, [getData,data])
  
  let renderedList = data.map(({ id, title, price, description, image }) => {
    if (
      String(title).toLowerCase().includes(String(searchTerm).toLowerCase())
    ) {
      return (
        <ProductItem
          key={id}
          nav={true}
          id={id}
          title={title}
          price={price}
          desc={description}
          imgUrl={image}
          childrenComps={null}
        />
      );
    }
    return null;
  });
  // console.log(renderedList);
  return <div className="search-results">
    {renderedList}
  </div>

};
const mapStatesToProps = (state) => {
  return { data: state.data, searchTerm: state.searchTerm };
};
export default connect(mapStatesToProps,{getData})(SearchPage);
