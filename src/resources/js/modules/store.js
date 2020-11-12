import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import Reducer from "./reducer";

const persistConfig = {
    key: "root", // Storageに保存されるキー名を指定する
    storage // 保存先としてlocalStorageがここで設定される
};

const persistedReducer = persistReducer(persistConfig, Reducer);

const store = createStore(persistedReducer);

export const persistor = persistStore(store);
export default store;
