const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((data) => displayComments(data));
};
loadData();
const displayComments = (data) => {
  let count = 1;
  const example = document.getElementById("example");
  console.log(example);
  data.forEach((comment) => {
    const p = document.createElement("p");
    // console.log(comment.body);
    p.innerText = `${count++}|  ${comment.body} `;
    console.log(p);
    example.appendChild(p);
  });
};
