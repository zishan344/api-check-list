const randomUser = () => {
  fetch("https://randomuser.me/api")
    .then((response) => response.json())
    .then((data) => randomUserDisplay(data.results[0]));
};
randomUser();
const randomUserDisplay = (data) => {
  console.log(data);
  const randomUserProfile = document.getElementById("randomUserProfile");
  randomUserProfile.textContent = "";
  const div = document.createElement("div");
  div.classList.add("card");
  div.classList.add("cards");
  div.classList.add("shadow-lg");
  div.innerHTML = `
  <img  src="${data.picture.large}" class="card-img-top w-50 mx-auto" alt="." />
  <div class="card-body">
    <h5 class="card-title"> Name: ${data.name.title} ${data.name.first} ${data.name.last}</h5>
    <h5>gender: ${data.gender}</h5>
     <div class=" ">
     <h5>Email: ${data.email}</h5>
     <h5>Phone: ${data.phone}</h5>
     <h5>country: ${data.location.country}</h5>
     </div>
     <div class="d-flex justify-content-center">
    <a href="#" class="btn btn-primary ">see full detils</a>
    </div>
  </div>
   `;
  randomUserProfile.appendChild(div);
};
