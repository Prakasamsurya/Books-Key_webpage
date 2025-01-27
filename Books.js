var popupoverlay = document.querySelector(".popupoverlay");
var popupbox = document.querySelector(".popup-box");
var newpopup = document.getElementById("popupbutton");

newpopup.addEventListener("click", function () {
  popupoverlay.style.display = "block";
  popupbox.style.display = "block";
});

var cancelpopup = document.getElementById("cancel-popup");
cancelpopup.addEventListener("click", function () {
  event.preventDefault();
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});

//select container${booktitle.value}
var container = document.querySelector(".container");
var addbook = document.getElementById("addbook");
var booktitle = document.getElementById("book-title-ip");
var bookauthor = document.getElementById("book-autor-ip");
var bookdescription = document.getElementById("book-description-ip");

addbook.addEventListener("click", function (event) {
  event.preventDefault();
  var div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = `<h2>${booktitle.value}</h2>
<h5>${bookauthor.value}</h5>
<p>${bookdescription.value}</p>
<button onclick="deletecontainer(event)">Delete</button>`;
  container.append(div);
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});

function deletecontainer(event) {
  event.target.parentElement.remove();
}
