const initialState={
    count:10
}

const reducer=(state=initialState,action)=>{

    const newState={...state};
if(action.type=="INCREMENT")
{
     ++newState.count

}
if(action.type=="DECREMENT")
{
     --newState.count;
}

return newState;

}
export default reducer;