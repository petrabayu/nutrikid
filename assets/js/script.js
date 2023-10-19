
// User Profile

let profile = localStorage.getItem("profile")
let profileBox = document.getElementById("container")
if (profile) {
    profileBox.innerHTML = `<div class="buttonbox dropdown-center">
    <img src="./assets/images/avatarresponden2.png" class="rounded" alt="avatar">
    <a href="#" class="btn btn-sm nav-link dropdown-toggle" id="navbutton" role="button" aria-pressed="true" data-bs-toggle="dropdown">Halo Bunda</a>
    <ul class="dropdown-menu box-profile">
      <li><a class="dropdown-item" href="#">User Setting</a></li>
      <li><a class="dropdown-item" id="exit" href="#" onclick="logOut()">Sign out</a></li>
    </ul>`
} else {
    profileBox.innerHTML = `<div class="buttonbox">
    <div class="login"><a href="login.html">Login</a></div>
    <div class="signup"><a href="signup.html">Sign Up</a></div>
  </div>`
}

// Logout Function

function logOut() {

  localStorage.removeItem("profile");
  location.reload();
}





// Artikel Section

function getArticles() {

  const url = new URL('https://6527c717931d71583df15db8.mockapi.io/api/v1/articles');
  url.searchParams.append('page', 2);
  url.searchParams.append('limit', 4);

  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Failed to fetch articles');
    })
    .then((articles) => {
      console.log(articles);
      setSmallArt(articles);
    })
    .catch((error) => {
      console.log(error);
    })
}

function getBigArticles() {

  const url = new URL('https://6527c717931d71583df15db8.mockapi.io/api/v1/articles');
  url.searchParams.append('page', 1);
  url.searchParams.append('limit', 1);

  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Failed to fetch bigArt');
    })
    .then((bigArt) => {
      console.log(bigArt);
      setBigArt(bigArt);
    })
    .catch((error) => {
      console.log(error);
    })
}
  


//HTML Component Function


function articleComponent(article) {
  return `
    <div class="col">
      
      <div class="card h-100" style="cursor: pointer;" onclick="window.location='article-content.html?id=${article.id}';">

        <div class="box-row">

          <img src="${article.image}" class="card-img-top img-small" alt="...">

        
          <div class="card-body">
            <h4 id="small-writer" class="card-text">${article.name}</h4>
                <h6 class="card-text small-job">${article.jobTitle}</h6>
                <p class="card-text"><small class="text-body-secondary">${article.datePublish}</small></p>
            <h5 class="card-title">${article.title}</h5>
            <p class="card-text short-text">${article.shortText}</p>
          </div>
          
        
        </div>

      </div>

    </div>
  `;
}

function bigArtComponent(article) {
  
  return `
    <div class="col h-100">
      
      <div class="card h-100" style="cursor: pointer;" onclick="window.location='article-content.html?id=${article.id}';">

        <div class="box-row" >

          <img src="${article.image}" class="card-img-top" alt="...">

        
          <div class="card-body">
            <h2 id="small-writer" class="card-text">${article.name}</h2>
                <h4 class="card-text small-job">${article.jobTitle}</h4>
                <p class="card-text"><small style="font-size: 20px;" class="text-body-secondary">${article.datePublish}</small></p>
            <h1 class="card-title">${article.title}</h1>
            <p style="font-size: 24px;" class="card-text short-text">${article.shortText}</p>
          </div>
          
        
        </div>

      </div>

    </div>
  `;
  
}

//  Build HTML Component Function

function setSmallArt(articles) {
  const articlesContainer = document.getElementById('group-small');
  articles.forEach((article) => {

    const articleHtml = articleComponent(article);
    articlesContainer.innerHTML += articleHtml;
  });
}

function setBigArt(articles) {
  const articlesContainer = document.getElementById('group-big');
  articles.forEach((article) => {
    const articleHtml = bigArtComponent(article);
    articlesContainer.innerHTML += articleHtml;
  });
}


getArticles()
getBigArticles() 






