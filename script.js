// thời gian
let countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

let countdownFunction = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerHTML =
    minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerHTML =
    seconds < 10 ? "0" + seconds : seconds;

  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

const products = [
  {
    img: "./assets/anh7.jpg",
    title: "Lorem ullamco",
    price: "17.99€",
  },
  {
    img: "./assets/anh8.png",
    title: "Lorem ullamco",
    price: "17.99€",
  },
  {
    img: "./assets/anh9.jpg",
    title: "Lorem ullamco",
    price: "17.99€",
  },
  {
    img: "./assets/anh10.png",
    title: "Lorem ullamco",
    price: "17.99€",
  },
];

// Hàm tạo sản phẩm
function createProductCard(product) {
  return `
      <div class="production-card">
        <img src="${product.img}" alt="${product.title}" />
        <div class="list-icon">
               <div class="product-labels">
                <span class="label-new">New</span>
                <span class="label-sale">Sale</span>
              </div>
              <div class="list-icon-right">
                <i class="fa-regular fa-heart"></i>
              </div>
        </div>
        <div class="color-options">
              <span class="color" style="background-color: #a38960"></span>
              <span class="color" style="background-color: #cccccc"></span>
              <span class="color" style="background-color: #7e5b42"></span>
              <span class="color" style="background-color: #285e8f"></span>
        </div>
        <div class="product-info">
          <p class="product-title">${product.title}</p>
          <p class="product-price">${product.price}</p>
        </div>
      </div>
    `;
}
const productList = document.getElementById("product-list");
productList.innerHTML = products.map(createProductCard).join("");

// information

const informations = [
  {
    title:
      "Lorem ullamco in est sit proident elit adipisicing dolor occaecat enim et sunt. Proident duis sunt sit veniam non. Dolore ut officia consectetur excepteur consequat reprehenderit",
  },
  {
    title:
      "Lorem ullamco in est sit proident elit adipisicing dolor occaecat enim et sunt. Proident duis sunt sit veniam non. Dolore ut officia consectetur excepteur consequat reprehenderit",
  },
  {
    title:
      "Lorem ullamco in est sit proident elit adipisicing dolor occaecat enim et sunt. Proident duis sunt sit veniam non. Dolore ut officia consectetur excepteur consequat reprehenderit",
  },
  {
    title:
      "Lorem ullamco in est sit proident elit adipisicing dolor occaecat enim et sunt. Proident duis sunt sit veniam non. Dolore ut officia consectetur excepteur consequat reprehenderit",
  },
];

// hàm tạo các thông tin

function createInformationCard(information) {
  return `<div class="information-card">
      <div class="list-icon">
      <i class="fa-brands fa-envira"></i>
      </div>
      <div class="list-title">
        <p>${information.title}</p>
      </div>
    </div>`;
}

const informationList = document.getElementById("information-list");
informationList.innerHTML = informations.map(createInformationCard).join("");

// slide product
const sildeProducts = [
  {
    img: "./assets/anh12.jpg",
    title: "Aute duis",
  },
  {
    img: "./assets/anh13.jpg",
    title: "Proident",
  },
  {
    img: "./assets/anh14.png",
    title: "Aliqua",
  },
  {
    img: "./assets/anh15.jpg",
    title: "NguyenChi",
  },
];

function createSildeProduct(sildeProduct) {
  return `<div class="slides-container">
      <div class="slide">
        <img src="${sildeProduct.img}" />
        <div class="slide-caption">
          <h3>${sildeProduct.title}</h3>
          <a href="#" class="see-products">
            See Products
          </a>
        </div>
      </div>
    </div>`;
}

const sildeList = document.getElementById("list-slide-product");
sildeList.innerHTML = sildeProducts.map(createSildeProduct).join("");
