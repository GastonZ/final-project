import carsReducer from "./carsReducer";
import cartReducer from "./cartReducer"
import userReducer from "./userReducer";
import itemsReducer from "./itemsReducer";
import commentReducer from "./commentReducer";
import carRequestReducer from "./carRequestReducer";

const rootReducer= {
    cars : carsReducer,
    usuario:userReducer,
    items: itemsReducer,
    cart: cartReducer,
    comments:commentReducer,
    requests: carRequestReducer
}

export default rootReducer