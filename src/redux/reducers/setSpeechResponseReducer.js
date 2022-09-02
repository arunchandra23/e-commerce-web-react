const setSpeechResponseReducer=(state='',action)=>{
    switch (action.type) {
        case 'SET_SPEECH_RESPONSE':
            return action.payload;
    
        default:
            return state;
    }
}
export default setSpeechResponseReducer;