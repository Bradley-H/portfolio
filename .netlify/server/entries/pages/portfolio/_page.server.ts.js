import { d as data } from "../../../chunks/portfolio.js";
const load = async () => {
  return {
    props: {
      items: data
    }
  };
};
export {
  load
};
