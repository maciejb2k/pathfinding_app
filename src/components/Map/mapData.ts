/**
 * Vertex:
 * - V_<id>
 * - EV_<id>
 *
 * Edge:
 * - E__<startVertex>__<endVertex>
 */

type mapData = {
  v: { [key: string]: string };
  e: { [key: string]: string };
};

const mapData: mapData = {
  v: {
    v_1: "v_1",
    v_2: "v_2",
    v_3: "v_3",
    v_4: "v_4",
  },
  e: {
    v_1__v_2__0__1: "v_1__v_2__0__1",
  },
};

export { mapData };
