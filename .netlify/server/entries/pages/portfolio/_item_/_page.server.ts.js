import { e as error } from "../../../../chunks/index.js";
import { d as data } from "../../../../chunks/portfolio.js";
let msg = "";
const load = ({ params }) => {
  const item = data.find((item2) => item2.title.trim().replace(" ", "-") === params.item);
  if (!item) {
    msg = `No project found. I'll redirect you in a few seconds. :)`;
    throw error(404, msg);
  }
  return {
    props: {
      item,
      msg
    }
  };
};
export {
  load
};
