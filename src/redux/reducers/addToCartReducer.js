const addToCartReducer=(state=[],action)=>{
    switch (action.type) {
        case 'ADD_TO_CART':
            if(state!==[]){
                let quant=0
                const data =state.map((item,index)=>{
                    if(item.itemId.id===action.payload.id){
                        quant=item.quantity + 1;
                        return {...item,quantity:item.quantity+1}
                     
                    }
                    return item;

                })
                if(quant===0){
                    return [...state,{itemId:action.payload,quantity:1}];
                }
                return data;
            }
            else{
                return [...state,{itemId:action.payload,quantity:1}];
            }
            
        case 'REDUCE_QUANTITY':
            let quant=0;
            let indexToRemove=-1;
            state.forEach((item,index)=>{
                if(item.itemId.id===action.payload.id){
                    quant=item.quantity - 1;
                    indexToRemove=index;
                }
            })
            if(quant<=0){
                return [...state.slice(0, indexToRemove),...state.slice(indexToRemove + 1)];
            }
            else{
                return [...state.slice(0, indexToRemove), {itemId:action.payload,quantity:quant},...state.slice(indexToRemove + 1)];
            }
        default:
            return state;
    }
}
export default addToCartReducer;