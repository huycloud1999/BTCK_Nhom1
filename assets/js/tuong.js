const searchInput = document.querySelector(".champions-list__header input");
const championItems = document.querySelectorAll(".champions-list__item");

searchInput.addEventListener("input", function (event) {
  const searchText = event.target.value.toLowerCase();

  championItems.forEach(function (championItem) {
    const championName = championItem
      .querySelector("h3")
      .textContent.toLowerCase();

    if (championName.includes(searchText)) {
      championItem.style.display = "block";
    } else {
      championItem.style.display = "none";
    }
  });
});
