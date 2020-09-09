import axios from "axios";

export type ProductType = {
  id: number;
  name: string;
  desc: string;
  objectId: string;
};

export const searchProductApi = (productName: string) => {
  return axios
    .get<ProductType>(`http://localhost:3001/products?name=${productName}`)
    .then((res) => res.data)
    .catch((error) => {
      // TODO
    });
};
