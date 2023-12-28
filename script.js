const menu = document.querySelector(".ham");
console.log(menu);

const sidebar = document.querySelector(".sidebar");

menu.addEventListener('click', function () {
  sidebar.classList.toggle("show-sidebar");
});
