import { combineReducers } from 'redux'
import AllProductReducer from './reducers/AllProductReducer';
import CartItemsReducer from './reducers/CartItemsReducer';
import CartReducer from './reducers/CartReducer';
import SelectedProduct from './reducers/SelectedProduct';
import UserReducer from './reducers/UserReducer';



const Reducers = combineReducers({
    CartReducer : CartReducer,
    AllProductReducer : AllProductReducer,
    SelectedProduct : SelectedProduct,
    CartItemsReducer : CartItemsReducer,
    UserReducer : UserReducer
});

export default Reducers;