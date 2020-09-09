import { takeLatest, call, all, put } from "redux-saga/effects";
import { Action } from "store/actions";
import { apiArrayToObject } from "utils/helpers";
import { objectToVertexKey } from "algorithms/graph/Utils";

import {
  SEARCH_PRODUCT_FAILED,
  SEARCH_PRODUCT_REQUEST,
  SEARCH_PRODUCT_SUCCESS,
} from "./constants";

import { GET_PATH_REQUEST } from "store/path/constants";

import { searchProductApi } from "./api";

// TODO - Type API Call and response and this saga
function* searchProduct(action: Action<string>) {
  try {
    if (action.payload) {
      const productName = action.payload;
      const response = yield call(searchProductApi, productName);
      // Shitty workaround for json-server because when product is not found
      // it still returns 200 so I have to check it manually.
      if (response.data && response.data.length) {
        // Also I'm fetching single product but json-server returns it
        // as single element array instead of object...
        const product = apiArrayToObject(response.data);
        yield put({ type: SEARCH_PRODUCT_SUCCESS, payload: product });

        const endVertex = objectToVertexKey(product.objectId);

        yield put({
          type: GET_PATH_REQUEST,
          payload: {
            startVertexKey: "v_95",
            endVertexKey: endVertex,
          },
        });
      } else {
        throw new Error();
      }
    }
  } catch (error) {
    yield put({ type: SEARCH_PRODUCT_FAILED });
  }
}

export function* searchRootSaga() {
  yield all([takeLatest(SEARCH_PRODUCT_REQUEST, searchProduct)]);
}
