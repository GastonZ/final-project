import carsReducer from "./carsReducer";

import userReducer from "./userReducer";
import itemsReducer from "./itemsReducer";

const rootReducer= {
    cars : carsReducer,
    usuario:userReducer,
    items: itemsReducer
}

export default rootReducer