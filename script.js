document.addEventListener("DOMContentLoaded", () => {
  const thingsidos = document.querySelectorAll(".thingsido");

  thingsidos.forEach((thingsido) => {
    thingsido.addEventListener("click", () => {
      thingsido.classList.toggle("active");
    });
  });
});

const list = document.querySelector(".text-list");
const listWidth = list.getBoundingClientRect().width;

if (listWidth > document.querySelector(".idothese").clientWidth) {
  const items = list.innerHTML;
  list.innerHTML += items;
}
