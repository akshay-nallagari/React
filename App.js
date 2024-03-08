const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Am h1 of child1"),
    React.createElement("h3", {}, "Am h3 of child1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Am h1 of child2"),
    React.createElement("h3", {}, "Am h3 of child2"),
  ])]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
