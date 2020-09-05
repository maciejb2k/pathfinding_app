export type Action<P = any> = {
  type: string;
  payload?: P;
};

export const createAction = <P = object>(
  type: string,
  payload?: P
): Action => ({
  type,
  payload,
});
