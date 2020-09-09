import axios from "axios";

type ProductType = {
  id: number;
  name: string;
  desc: string;
  objectId: string;
};

export const searchProductApi = (productName: string) => {
  return axios({
    url: `http://localhost:3001/products?name=${productName}`,
    method: "GET",
  }).catch((error) => {
    // TODO
  });
};
