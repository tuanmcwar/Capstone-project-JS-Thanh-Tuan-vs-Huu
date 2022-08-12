window.onload = function () {
  getProductCarousel();
};
function getProductCarousel() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product", //Đường dẫn backend cung cấp
    method: "GET", //method backend cung cấp
  });
  //Xử lý thành công
  promise.then(function (result) {
    //Sau khi lấy dữ liệu từ backend về dùng dữ liệu đó tạo ra tr trên table
    console.log("hihi ", result.data.content);
    getCargousel(result.data.content, 3);
  });
  //Xử lý thất bại
  promise.catch(function (err) {});
}

function getCargousel(arrCargousel, index) {
  getProduct();
  var html = "";

  var html1 = "";

  var imge = "";

  const price = [];
  for (let i = 0; i < arrCargousel.length; i++) {
    const pd = arrCargousel[i];
    price.push(pd.price);
    price.sort(sortPrice);
    // console.log("price", price);
  }
  // for (let i = 0; i < arrCargousel.length; i++) {
  //   const pd = arrCargousel[i];
  //   for (let i = 0; i < index; i++) {
  //     const pd1 = price[i];
  //     //   console.log("price1111", pd1);

  //     if (pd1 === pd.price) {
  //       imge = pd.image;
  //       // console.log("ảnh", pd.id);

  //       html += `
  //       <div class="swiper-slide">
  //           <div class="carousel-img">
  //               <img
  //               src="${imge}"
  //               class="swiper-lazy"
  //             />
  //             </div>
  //               <div class="product-info">
  //                   <h3 id="productName">${pd.name}</h3>
  //                   <p id="productDescription">${pd.description}</p>

  //                   <a href="../view/detail.html?productid=${pd.id}" id="Buy" onclick="showDetail('${pd.id}')">  Buy now</a>
  //               </div>
  //       </div>
  //      `;
  //     }
  //   }
  // }
  for (let i = 0; i < index; i++) {
    const pd = arrCargousel[i];
    // for (let i = 0; i < index; i++) {
    //   const pd1 = price[i];
    //   //   console.log("price1111", pd1);

    //   if (pd1 === pd.price) {
    imge = pd.image;
    console.log("ảnh", pd);

    html += `
        <div class="swiper-slide" id=${i}>
            <div class="carousel-img">
                <img
                src="${imge}"
                class="swiper-lazy"
              />
              </div>
                <div class="product-info">
                    <h3 id="productName">${pd.name}</h3>
                    <p id="productDescription">${pd.description}</p>
                    
                    <a href="../view/detail.html?productid=${pd.id}" id="Buy" onclick="showDetail('${pd.id}')">  Buy now</a>
                </div>
        </div>
       `;

    //   }
    // }
  }
  console.log(html);
  function sortPrice(a, b) {
    return b - a;
  }

  document.querySelector(".swiper-wrapper").innerHTML = html;

  new Swiper(".mySwiper", {
    loop: true,

    lazy: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
