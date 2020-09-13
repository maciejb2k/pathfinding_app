import { takeLatest, call, all, put } from "redux-saga/effects";

import {
  ProductsApiType,
  CategoriesApiType,
  ObjectToCategoryApiType,
} from "./reducer";

import {
  fetchCategoriesApi,
  fetchObjectToCategoryApi,
  fetchProductApi,
} from "./api";

import {
  FETCH_API_REQUEST,
  FETCH_API_FAILED,
  FETCH_API_SUCCESS,
} from "./constants";

function* fetchData() {
  try {
    const productsData: Array<ProductsApiType> = yield call(fetchProductApi);
    const categoriesData: Array<CategoriesApiType> = yield call(
      fetchCategoriesApi
    );
    const objectToCategoryData: Array<ObjectToCategoryApiType> = yield call(
      fetchObjectToCategoryApi
    );

    const payload = {
      products: productsData,
      categories: categoriesData,
      objectToCategory: objectToCategoryData,
    };

    console.log(payload);

    yield put({
      type: FETCH_API_SUCCESS,
      payload,
    });
  } catch (error) {
    yield put({ type: FETCH_API_FAILED, payload: error });
  }
}

export function* apiRootSaga() {
  yield all([takeLatest(FETCH_API_REQUEST, fetchData)]);
}
