import { ProductsApiType } from "store/api/reducer";
import db from "store/api/db";

export const searchProductApi = (productName: string) => {
  return new Promise<Array<ProductsApiType>>((resolve) => {
    const arr = [...db["products"]];

    const results = arr.filter((item) => {
      return item.name === productName;
    });

    resolve(results);
  });
};
