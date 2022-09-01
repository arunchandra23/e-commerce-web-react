export default function setSelectedReducer(state = {}, action) {
  switch (action.type) {
    case "SET_SELECTED_DATA":
      return action.payload;

    default:
      return state;
  }
}
