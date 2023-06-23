import store from "../Redux/store";
import product from "../Redux/actions";

console.log('initial state',store.getState())
const unsubscribe = store.subscribe(()=>{
    console.log('updated state',store.getState())
})



unsubscribe