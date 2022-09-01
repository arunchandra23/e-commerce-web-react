const showAddToCartModalReducer=(state=false,action)=>{
    switch (action.type) {
        case 'SHOW_MODAL':
            return action.payload;
            
    
        default:
            return state
    }
}
export default showAddToCartModalReducer;