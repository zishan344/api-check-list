let count = 1;
const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((data) => displayComments(data));
};
loadData();
const displayComments = (data) => {
  const example = document.getElementById("example");
  //   console.log(example);
  data.forEach((comment) => {
    const div = document.createElement("div");
    // console.log(comment.body);
    div.innerHTML = `
<p>${count++}|  ${comment.body}</p>
<button onclick="loadCommentDetils(${comment.id})"> Detils</button>
`;
    // console.log(p);
    example.appendChild(div);
  });
};

const loadCommentDetils = (data) => {
  const url = `https://jsonplaceholder.typicode.com/comments/${data}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayCommentsDetails(data));
};
const displayCommentsDetails = (data) => {
  console.log(data);
  const commentsDetils = document.getElementById("comments-detils");
  commentsDetils.innerText = "";
  const div = document.createElement("div");
  div.innerHTML = `
        <h2>name: ${data.name}</h2>
      <h2>postId: ${data.postId}</h2>
       <h3>email: ${data.email}</h3>
      <p>comment: ${data.body}</p>
       `;
  commentsDetils.appendChild(div);

  //   console.log(data);
};
