window.onload = function () {
  const urlParam = new URLSearchParams(window.location.search);
  const myParam = urlParam.get("productid");
  console.log(myParam);
  showDetail(myParam);
};
function showDetail(id) {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=" + id, //Đường dẫn backend cung cấp
    method: "GET", //method backend cung cấp
  });
  //Xử lý thành công
  promise.then(function (result) {
    console.log("hihi ", result.data.content);
    console.log("id", id);

    //Sau khi lấy dữ liệu từ backend về dùng dữ liệu đó tạo ra tr trên table
    // renderProduct(result.data.content);
  });
  //Xử lý thất bại
  promise.catch(function (err) {});
}
function getProductById(id) {}
