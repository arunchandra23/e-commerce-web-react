import fakeStore from "../../apis/fakeStore";



export const setSearchTerm =(term)=>{
    return {
        type: 'SET_SEARCH_TERM',
        payload: term
    }
}

export const getData=()=>async (dispatch) => {
    const response = await fakeStore.get(`/products/search`);
    dispatch({
      type: "SET_DATA",
      payload: response.data
    });
  };
  export const getSelectedData=(id)=>async (dispatch) => {
    const response = await fakeStore.get(`/products/search?id=${id}`);
    dispatch({
      type: "SET_SELECTED_DATA",
      payload: response.data
    });
  };

  export const addToCart=(item)=>{
    return {
      type: 'ADD_TO_CART',
      payload: item
    }
  }
  export const reduceQuantity=(item)=>{
    return {
      type: 'REDUCE_QUANTITY',
      payload: item
    }
  }

  export const updateCategoryData=(categoryData)=>{
    return {
      type: 'UPDATE_CATEGORY_DATA',
      payload: categoryData
    }

  }

  export const setSpeechResponse=(response)=>{
    return{
      type:'SET_SPEECH_RESPONSE',
      payload:response
    }
  }

 