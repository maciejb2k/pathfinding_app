import axios from "axios";

import {
  ProductsApiType,
  CategoriesApiType,
  ObjectToCategoryApiType,
} from "./reducer";

export const fetchProductApi = () => {
  return axios
    .get<Array<ProductsApiType>>(
      `http://localhost:3001/products?_sort=name&_order=asc`
    )
    .then((res) => res.data)
    .catch((error) => {
      // TODO
    });
};

export const fetchCategoriesApi = () => {
  return axios
    .get<Array<CategoriesApiType>>(`http://localhost:3001/categories`)
    .then((res) => res.data)
    .catch((error) => {
      // TODO
    });
};

export const fetchObjectToCategoryApi = () => {
  return axios
    .get<Array<ObjectToCategoryApiType>>(
      `http://localhost:3001/object-to-category`
    )
    .then((res) => res.data)
    .catch((error) => {
      // TODO
    });
};
