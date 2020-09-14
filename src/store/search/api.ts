import axios from "axios";
import { ProductsApiType } from "store/api/reducer";

export const searchProductApi = (productName: string) => {
  return axios
    .get<Array<ProductsApiType>>(
      `http://localhost:3001/products?name=${productName}`
    )
    .then((res) => res.data)
    .catch((error) => {
      // TODO
    });
};
