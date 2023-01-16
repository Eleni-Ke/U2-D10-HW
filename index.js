// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "aecbd0fa26msh452976635c4a7a1p15b31djsn4390e91bae1e",
//     "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
//   },
// };
const getPinkFloyd = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=pink floyd")
    .then((response) => response.json())
    .then((data) => {
      console.log(data), createPinkFloydAlbums(data);
    })
    .catch((err) => console.error(err));
};

const createPinkFloydAlbums = (data) => {
  let pinkFloydRow = document.querySelector("#pinkFloydList");
  let dataArray = data.data;
  for (let i = 0; i < dataArray.length; i++) {
    pinkFloydRow.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${dataArray[i].album.cover_medium}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${dataArray[i].title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`;
  }
};

const getMetallica = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica")
    .then((response) => response.json())
    .then((data) => {
      console.log(data), createAlbums(data);
    })
    .catch((err) => console.error(err));
};

window.onload = () => {
  getPinkFloyd();
  getMetallica();
};
