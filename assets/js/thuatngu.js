
const accordion = document.querySelector('.active');
const panel = document.querySelector('.panel');

accordion.addEventListener('click', function () {
  panel.classList.toggle('show');
}); 
const backToTopButton = document.getElementById("back-to-top");

backToTopButton.addEventListener("click", function() {
  window.scrollTo(0, 0);
});
// Lắng nghe sự kiện scroll trên trang
window.addEventListener("scroll", function() {
    // Lấy vị trí hiện tại của cuộn trang
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    // Lấy chiều cao của màn hình
    var screenHeight = window.innerHeight;
    
    // Lấy phần tử có ID là back-to-top
    var backToTopButton = document.getElementById("back-to-top");
    
    // Nếu vị trí hiện tại của cuộn trang lớn hơn chiều cao của màn hình,
    // hiển thị nút back-to-top, ngược lại ẩn nó
    if (scrollPosition > screenHeight) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

    