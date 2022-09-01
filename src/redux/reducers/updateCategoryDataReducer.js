const updateCategoryData=(state=[],action) =>{
  switch (action.type) {
    case 'UPDATE_CATEGORY_DATA':
        return action.payload;
  
    default:
        return state;
  }
}
export default updateCategoryData;