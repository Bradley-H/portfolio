const load = async () => {
  let catagories = [
    { id: 1, text: "Bradley's Skill's", additional: [
      { id: 0, text: "TypeScript", img: "TS" },
      { id: 1, text: "SASS", img: "sass" },
      { id: 2, text: "Svelte", img: "svelte" },
      { id: 3, text: "Node", img: "node" }
    ] }
  ];
  return {
    props: {
      catagories
    }
  };
};
export {
  load
};
