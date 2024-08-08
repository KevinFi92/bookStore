let books = [
  {
    "name": "Die Geheimnisse des Ozeans",
    "author": "Clara Meer",
    "likes": 1250,
    "liked": true,
    "price": 19.99,
    "publishedYear": 2018,
    "genre": "Fantasy",
    "comments": [
      {
        "name": "Leser123",
        "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
      },
      {
        "name": "Bookworm84",
        "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
      },
      {
        "name": "FantasyFanatic",
        "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
      },
      {
        "name": "SciFiGuru",
        "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
      },
      {
        "name": "NovelLover",
        "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
      }
    ]
  },
  {
    "name": "Der vergessene Pfad",
    "author": "Maximilian Schwarz",
    "likes": 980,
    "liked": false,
    "price": 14.50,
    "publishedYear": 2021,
    "genre": "Fantasy",
    "comments": []
  },
  {
    "name": "Die Farben des Himmels",
    "author": "Laura Blau",
    "likes": 1520,
    "liked": true,
    "price": 22.95,
    "publishedYear": 2019,
    "genre": "Romantik",
    "comments": [
      {
        "name": "LeserPeter",
        "comment": "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."
      },
      {
        "name": "BookLover21",
        "comment": "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat."
      },
      {
        "name": "FantasyNerd",
        "comment": "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"
      },
      {
        "name": "SciFiEnthusiast",
        "comment": "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht."
      },
      {
        "name": "ReadingAddict",
        "comment": "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat."
      }
    ]
  },
  {
    "name": "Das Rätsel der Zeit",
    "author": "Alexander Weiss",
    "likes": 750,
    "liked": false,
    "price": 18.00,
    "publishedYear": 2020,
    "genre": "Science-Fiction",
    "comments": [
      {
        "name": "BuchKenner",
        "comment": "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat."
      },
      {
        "name": "LeseWurm",
        "comment": "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben."
      }
    ]
  },
  {
    "name": "Der letzte Wächter",
    "author": "Sabine Grün",
    "likes": 1300,
    "liked": true,
    "price": 16.75,
    "publishedYear": 2017,
    "genre": "Fantasy",
    "comments": []
  },
  {
    "name": "Im Schatten des Mondes",
    "author": "Philipp Silber",
    "likes": 890,
    "liked": false,
    "price": 12.30,
    "publishedYear": 2022,
    "genre": "Science-Fiction",
    "comments": [
      {
        "name": "BücherLiebhaber",
        "comment": "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd."
      },
      {
        "name": "Leseratte",
        "comment": "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat."
      }
    ]
  },
  {
    "name": "Jenseits der Sterne",
    "author": "Oliver Schwarz",
    "likes": 1450,
    "liked": true,
    "price": 21.00,
    "publishedYear": 2015,
    "genre": "Science-Fiction",
    "comments": [
      {
        "name": "Leser123",
        "comment": "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat."
      }
    ]
  },
  {
    "name": "Das verborgene Königreich",
    "author": "Elena Gold",
    "likes": 920,
    "liked": false,
    "price": 17.50,
    "publishedYear": 2020,
    "genre": "Fantasy",
    "comments": [
      {
        "name": "Bookworm92",
        "comment": "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat."
      }
    ]
  },
  {
    "name": "Liebe in Zeiten des Krieges",
    "author": "Emilia Rot",
    "likes": 1800,
    "liked": true,
    "price": 19.99,
    "publishedYear": 2016,
    "genre": "Romantik",
    "comments": [
      {
        "name": "Bibliophile23",
        "comment": "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen."
      },
      {
        "name": "StorySeeker",
        "comment": "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat."
      },
      {
        "name": "SciFiExplorer",
        "comment": "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig."
      }
    ]
  }
];



function render_all() {
  loadFromLocalStorage()
  render_content();
  renderLiked();


}


function render_content() {
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
  else {
    books[indexBooks].comments.push({ name: "User", comment: newComment });
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
if (loadedBooks == null) {
  render_content();
}
else{
  books = JSON.parse(loadedBooks);
}
}




  
