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
    pinkFloydRow.innerHTML += `<div class="col card-container">
    <div id="${dataArray[i].album.id}" class="card" style="width: 10rem;">
        <img src="${dataArray[i].album.cover_medium}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${dataArray[i].title}</h5>
        </div>
    </div>
</div>`;
  }
};

const getDaftPunk = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=daft punk")
    .then((response) => response.json())
    .then((data) => {
      console.log(data), createDaftPunkAlbum(data);
    })
    .catch((err) => console.error(err));
};

const createDaftPunkAlbum = (data) => {
  let daftPunkRow = document.querySelector("#daftPunkList");
  let dataArray = data.data;
  for (let i = 0; i < dataArray.length; i++) {
    daftPunkRow.innerHTML += `<div class="col card-container">
    <div id="${dataArray[i].album.id}" class="card" style="width: 10rem;">
        <img src="${dataArray[i].album.cover_medium}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${dataArray[i].title}</h5>
        </div>
    </div>
</div>`;
  }
};

const getMetallica = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica")
    .then((response) => response.json())
    .then((data) => {
      console.log(data), createMetallicaAlbums(data);
    })
    .catch((err) => console.error(err));
};

const createMetallicaAlbums = (data) => {
  let metallicaRow = document.querySelector("#metallicaList");
  let dataArray = data.data;
  for (let i = 0; i < dataArray.length; i++) {
    metallicaRow.innerHTML += `<div class="col card-container">
    <div id="${dataArray[i].album.id}" class="card" style="width: 10rem;">
        <img src="${dataArray[i].album.cover_medium}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${dataArray[i].title}</h5>
        </div>
    </div>
</div>`;
  }
};

// const getSongs = (artist) => {
//   fetch(
//     "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data), createAlbums(data);
//     })
//     .catch((err) => console.error(err));
// };

// const createAlbums = (data) => {
//   let allSongsRow = document.querySelector("#allSongs");
//   let dataArray = data.data;
//   for (let i = 0; i < dataArray.length; i++) {
//     allSongsRow.innerHTML += `<div class="col card-container">
//     <div class="card" style="width: 10rem;">
//         <img src="${dataArray[i].album.cover_medium}" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">${dataArray[i].title}</h5>
//         </div>
//     </div>
// </div>`;
//   }
// };

// window.onload = () => {
//   getSongs("daft punk");
// };

const getAllSongs = () => {
  let allSongsArr = document.querySelectorAll(".card-title");
  let modalBodyNode = document.querySelector("#song-list");
  modalBodyNode.innerHTML = "";
  for (let i = 0; i < allSongsArr.length; i++) {
    modalBodyNode.innerHTML += `<li>${allSongsArr[i].innerHTML}</li>`;
  }
};

window.onload = () => {
  getPinkFloyd();
  getDaftPunk();
  getMetallica();
};

const countUniqueSongs = () => {
  let allSongsArr = document.querySelectorAll(".card");
  let uniqueAlbumList = [];
  for (let i = 0; i < allSongsArr.length; i++) {
    if (!uniqueAlbumList.includes(allSongsArr[i].id)) {
      uniqueAlbumList.push(allSongsArr[i].id);
    }
  }
  console.log(uniqueAlbumList.length);
};
