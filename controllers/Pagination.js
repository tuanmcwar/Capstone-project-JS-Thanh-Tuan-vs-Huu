let pdPage = [];
let curPage = 1;
let perPage = 6;
let totalPages = pdPage.length / 2;

let perPD = [];
function getProduct() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product", //Đường dẫn backend cung cấp
    method: "GET", //method backend cung cấp
  });
  //Xử lý thành công
  promise.then(function (result) {
    console.log("hihi ", result.data.content);
    //Sau khi lấy dữ liệu từ backend về dùng dữ liệu đó tạo ra tr trên table
    pdPage = result.data.content;

    perPD = pdPage.slice(
      (curPage - 1) * perPage,
      (curPage - 1) * perPage + perPage
    );
    renderPagination(result.data.content);
    number();
  });
  //Xử lý thất bại
  promise.catch(function (err) {});
}

function renderPagination(arr) {
  let pdPage = arr;

  perPD = pdPage.slice(
    (curPage - 1) * perPage,
    (curPage - 1) * perPage + perPage
  );
  renderProduct(perPD);
  console.log("perPD", perPD);
}

let check = 0;

function number() {
  totalPages = pdPage.length / perPage;
  console.log("pdPage", pdPage);
  for (let i = 0; i < totalPages; i++) {
    document.getElementById(
      "pagination"
    ).innerHTML += `<a class="paginate-button" id="numPage${
      i + 1
    }"  onclick="handel(${i + 1})">${i + 1}</a>`;
  }
}

function handel(num) {
  //   let pdPage = arr;
  let text = "numPage" + num;
  let allButton = document.querySelectorAll(".paginate-button");

  allButton.forEach((item) => {
    item.classList.remove("active");
  });

  document.getElementById(text).classList.add("active");

  check = num;
  let numPagni = document.querySelector(`#numPage${num}`).innerHTML;
  if ((numPagni = num)) {
    console.log("numPagni", numPagni);
  }
  curPage = num;

  perPD = pdPage.slice(
    (curPage - 1) * perPage,
    (curPage - 1) * perPage + perPage
  );

  renderProduct(perPD);
  console.log("perPD", perPD);
}
