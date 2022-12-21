import carsReducer from "./carsReducer";
import cartReducer from "./cartReducer"
import userReducer from "./userReducer";
import itemsReducer from "./itemsReducer";
import commentReducer from "./commentReducer";
const rootReducer= {
    cars : carsReducer,
    usuario:userReducer,
    items: itemsReducer,
    cart: cartReducer,
    comments:commentReducer
}

export default rootReducer