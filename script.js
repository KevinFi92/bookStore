

import { books } from "./books";

function render_all() {
  loadFromLocalStorage()
  render_content();
  renderLiked();


}


function render_content(books) {
  document.getElementById('content').innerHTML = "";

  for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
    const book = books[indexBooks];
    document.getElementById('content').innerHTML +=
      `<div class="items"><div class="bookTitel">${books[indexBooks].name}</div>
<div class="img"><img class="bookImg" src="./img/book.png" alt="book"></div>
<div class="midsection"><div class="price">${books[indexBooks].price} €</div>
<div class="likes"><div><img class="likeimg" onclick="likeBook(${indexBooks})" src="" id="heart${indexBooks}" alt="heart"></div><div>${books[indexBooks].likes}</div></div></div>
<div class="info">
<div class="author">Autor: ${books[indexBooks].author}</div>
<div class="year">Erschienen: ${books[indexBooks].publishedYear}</div>
<div class="genre">Genre: ${books[indexBooks].genre}</div>
</div>
<div class="cmtDiv"><h3>Kommentare</h3>
<div id="comments${indexBooks}" class="cmtDiv">
${book.comments.map(comment => `<div><b>${comment.name}</b>: ${comment.comment}</div>`).join('')}
</div>
<br>
<input id="commentInput${indexBooks}"type="text" placeholder="kommentar"><button onclick= addComment(${indexBooks})>hinzufügen</button>
</div>`

  };
}

function renderLiked() {

  for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
    let status = books[indexBooks].liked;
    if (status === true) {
      document.getElementById(`heart${indexBooks}`).src = './img/heart_full.png';
    } else {
      document.getElementById(`heart${indexBooks}`).src = './img/heart_border.png';
    }
  };
}


function likeBook(indexBooks) {

  if (books[indexBooks].liked === true) {
    books[indexBooks].liked = false;
    books[indexBooks].likes--;
  } else {
    books[indexBooks].liked = true;
    books[indexBooks].likes++;
  }
  saveToLocalStorage();
  render_all();
};


function addComment(indexBooks) {
  let newComment = document.getElementById(`commentInput${indexBooks}`).value;
  if (newComment == "") {
    alert("bitte Kommentar eingeben");
  }
  else{
  books[indexBooks].comments.push({name:"User", comment: newComment});
  document.getElementById(`comments${indexBooks}`).innerHTML += `<b>User</b> : ${newComment}`;
  saveToLocalStorage();
  document.getElementById(`commentInput${indexBooks}`).value = "";
  }
}


function saveToLocalStorage() {
  localStorage.setItem("savedBooks", JSON.stringify(books));
}


function loadFromLocalStorage() {
  let loadedBooks = localStorage.getItem('savedBooks');
  books = JSON.parse(loadedBooks);
}