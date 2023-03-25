//filter
const defaultImg = document.querySelector('.filter img.all');

// Thêm lớp CSS "active" vào hình ảnh đó
defaultImg.classList.add('active');
//Lắng nghe sự kiện click vào các hình ảnh filter

document.querySelectorAll('.filter img').forEach((img) => {
  img.addEventListener('click', () => {
    // Lấy tên lớp CSS tương ứng với img
    const filterClass = img.getAttribute('class');
    //
    document.querySelectorAll('.filter img').forEach((btn) => {
            btn.classList.remove('active');
          });
      
          // Thêm lớp CSS 'active' vào hình ảnh đang được click
          img.classList.add('active');

    // Lấy tất cả các video có lớp CSS là video1
    const videos = document.querySelectorAll('.video1');

    // Lặp qua từng video để kiểm tra lớp CSS của nó
    videos.forEach((video) => {
      // Nếu video không có lớp CSS tương ứng với hình ảnh filter, ẩn nó đi
      if (!video.classList.contains(filterClass)) {
        video.style.display = 'none';
      }
      // Ngược lại, hiển thị video
      else {
        video.style.display = 'block';
      }
    });
  });
});


///form
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const rating = document.querySelector('#rating').value;
  const comment = document.querySelector('#comment').value;
  
  // Lưu đánh giá vào localStorage
  const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
  const newReview = {
    name: name,
    email: email,
    rating: rating,
    comment: comment,
    date: new Date()
  };
  reviews.push(newReview);
  localStorage.setItem('reviews', JSON.stringify(reviews));
  
  // Hiển thị thông báo và xóa form
  alert('Cảm ơn bạn đã gửi đánh giá của mình!');
  form.reset();
});

