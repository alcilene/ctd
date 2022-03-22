const body = document.querySelector(`body`);
const form = document.querySelector(`form`);
const titleInput = document.querySelector(`#title`);
const descriptionInput = document.querySelector(`#description`);
const imageInput = document.querySelector(`#imgurl`);
const saveButton = document.querySelector(`button`);
const main = document.createElement(`main`);

const data = [];

form.addEventListener("submit", (e) => e.preventDefault());

saveButton.addEventListener(`click`, (e) => {
  e.preventDefault();

  const dataObj = {
    title: titleInput.value,
    description: descriptionInput.value,
    imgUrl: imageInput.value,
  };

  data.push(dataObj);


  // const cardTemplate = `
  //   <div class="card"> 
  //     <img src="${data[data.length - 1].imgUrl}"> 
  //     <div class="container"> 
  //       <h2><b>${data[data.length - 1].title}</b></h2> 
  //       <p>${data[data.length - 1].description}</p> 
  //     </div> 
  //   </div> 
  // `;

  const cardTemplate = 
  `<div class="card mb-6" style="max-width: 900px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${data[data.length - 1].imgUrl}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${data[data.length - 1].title}</h5>
        <p class="card-text">${data[data.length - 1].description}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
`;
  
  main.innerHTML += cardTemplate;

  body.appendChild(main);
});
