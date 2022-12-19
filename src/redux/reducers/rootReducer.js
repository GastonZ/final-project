import carsReducer from "./carsReducer";
import cartReducer from "./cartReducer"
import userReducer from "./userReducer";
import itemsReducer from "./itemsReducer";

const rootReducer= {
    cars : carsReducer,
    usuario:userReducer,
    items: itemsReducer,
    cart: cartReducer
}

export default rootReducer