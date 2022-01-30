import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persisConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const rootReducers = combineReducers({
  cart: cartReducer,
});
export default persistReducer(persisConfig, rootReducers);
