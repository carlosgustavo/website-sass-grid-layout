// Make Cards
const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const videos = [
  {
    title:
      "Conor Anthony McGregor é um lutador irlandês de artes marciais mistas. É conhecido pelas provocações que faz aos seus oponentes e estilo extravagante, The Notorious, como é apelidado,conquistou o título do UFC nocauteando José Aldo em 13 segundos.",
    duration: "08:23",
    thumb:
      "https://i.insider.com/5c99fcfb86d56e664e19998c?width=1100&format=jpeg&auto=webp",
    video_id: "3mPPMCa8Nxw",
  },
  {
    title:
      "Amanda Nunes, é uma lutadora brasileira de artes marciais mistas, atualmente é a campeã da categoria de peso-galo feminino e peso pena do Ultimate Fighting Championship, sendo a primeira atleta brasileira a conquistar um cinturão da categoria.",
    duration: " 05:52 min",
    thumb:
      "https://s2.glbimg.com/n17WT4_QypYrtMi2Q06H5ECDiIQ=/0x0:4300x2867/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/v/O/fvYqJBQFKWEuX7lDpUbg/gettyimages-1154277323.jpg",
    video_id: "J5sq2Z7Tn5M",
  },
  {
    title:
      "Daniel Cormier. Ex-campeão peso pesado do extinto Strikeforce e do UFC. Recentemente fez história sendo o segundo lutador a ter dois cinturões simultâneos no UFC,e também ao se tornar o primeiro lutador a defender duas categorias diferentes.",
    duration: "05:00 min",
    thumb:
      "https://rdsimages.cookieless.ca/polopoly_fs/1.6239338.1531030203!/img/httpImage/image.jpg_gen/derivatives/main-xxxhdpi/image.jpg",
    video_id: "zsH6XZR6FlM",
  },
  {
    title:
      "Zhang Weili é uma lutadora de artes marciais mistas chinesa. Ela é a atual campeã do peso-palha do Ultimate Fighting Championship, sendo a primeira chinesa a ser campeã da organização. ",
    duration: " 06:19 min",
    thumb:
      "https://statics.sportskeeda.com/editor/2019/12/841dc-15777773797288.png",
    video_id: "0r5TfkOASsg",
  },
  {
    title:
      "Anthony A. Ferguson é um lutador norte-americano de artes marciais mistas e ex-campeão interino do peso-leve do Ultimate Fighting Championship. Ele foi o vencedor do The Ultimate Fighter: Team Lesnar vs. Team Dos Santos.",
    duration: "03:23min",
    thumb:
      "https://specials-images.forbesimg.com/imageserve/1051990668/960x0.jpg?fit=scale",
    video_id: "o8Mb4eOroNo",
  },
  {
    title:
      "Ronda Jean Rousey é uma atriz, dubladora e lutadora de luta livre profissional, artes marciais mistas e judô que atualmente trabalha para a WWE no programa Raw onde é a atual ex campeã feminina do Raw. ",
    duration: "03:30 min",
    thumb:
      "https://wrestling-edge.com/wp-content/uploads/2018/01/Ronda-Rousey2.jpg",
    video_id: "hViC5DQOcP4",
  },
];

videos.map((video) => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", video.video_id);
  cardClone.querySelector("img").src = video.thumb;
  cardClone.querySelector(".title").innerHTML = video.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML = video.duration;
  sectionCards.appendChild(cardClone);
});

card.remove();

// Modal actions
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = [...document.querySelectorAll(".cards .card")];

cards.forEach((card) => {
  card.addEventListener("click", () => {
    modal.querySelector(
      "iframe"
    ).src = `https://www.youtube.com/embed/${card.getAttribute("id")}`;
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector("iframe").src = ``;
  document.querySelector("body").style.overflow = "initial";
});

// MENU RESPONSIVO
