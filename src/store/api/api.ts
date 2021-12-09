import db from "./db";
import {
  CategoriesApiType,
  ObjectToCategoryApiType,
  ProductsApiType,
} from "./reducer";

export const fetchProductApi = () => {
  return new Promise<Array<ProductsApiType>>((resolve) => {
    // ... ORDER BY name ASC
    const arr = [...db["products"]];
    arr.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
    resolve(arr);
  });
};

export const fetchProductsAutcompleteApi = (name: string) => {
  return new Promise<Array<ProductsApiType>>((resolve) => {
    const arr = [...db["products"]];

    let query = name.toLowerCase();
    const results = arr.filter((item) => {
      return item.name.toLowerCase().indexOf(query) > -1;
    });

    resolve(results);
  });
};

export const fetchProductsByObjectId = (objectId: string) => {
  return new Promise<Array<ProductsApiType>>((resolve) => {
    const arr = [...db["products"]];

    const results = arr.filter((item) => {
      return item.objectId === objectId;
    });

    resolve(results);
  });
};

export const fetchObjectIdFromObjectCategories = (objectId: string) => {
  return new Promise<Array<ObjectToCategoryApiType>>((resolve) => {
    const arr = [...db["object-to-category"]];

    const results = arr.filter((item) => {
      return item.objectId === objectId;
    });

    resolve(results);
  });
};

export const fetchCategoriesApi = () => {
  return new Promise<Array<CategoriesApiType>>((resolve) => {
    resolve(db["categories"]);
  });
};

export const fetchCategoryIdFromCategories = (categoryId: number) => {
  return new Promise<Array<CategoriesApiType>>((resolve) => {
    const arr = [...db["categories"]];

    const results = arr.filter((item) => {
      return item.id === categoryId;
    });

    resolve(results);
  });
};

export const fetchObjectToCategoryApi = () => {
  return new Promise<Array<ObjectToCategoryApiType>>((resolve) => {
    resolve(db["object-to-category"]);
  });
};
