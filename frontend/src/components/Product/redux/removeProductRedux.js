import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";

import { updateAllProductsAfterRemove } from "../../../views/BasePage/Home/redux/getAllProductsRedux";

// --------------------------------- slice ---------------------------------
export const removeProductSlice = createSlice({
  name: "remove-product",
  initialState: {
    success: null,
    error: null,
    loading: null,
  },
  reducers: {
    removeProductSaga: () => ({ loading: true, success: null, error: null }),
    removeProductSuccess: () => ({
      loading: false,
      success: true,
      error: null,
    }),
    removeProductError: () => ({ loading: false, success: null, error: true }),
  },
});

export const {
  removeProductSuccess,
  removeProductError,
  removeProductSaga,
} = removeProductSlice.actions;

//--------------------------------- saga---------------------------------
const removeProductAPI = async (productId) => {
  const { data } = await axios.delete(
    `/products/delete-product-by-id/${productId}`
  );
  return data;
};
function* removeProductCallAPI(action) {
  try {
    const data = yield call(removeProductAPI, action.payload);
    console.log(data);
    yield toast.success(data.msg);
    yield put(removeProductSuccess(data));
    yield put(updateAllProductsAfterRemove(action.payload));
  } catch (error) {
    yield toast.error(error.response.data.msg);
    yield put(removeProductError(error.response.data.msg));
  }
}
export function* watchRemoveProduct() {
  yield takeLatest(removeProductSaga.type, removeProductCallAPI);
}
