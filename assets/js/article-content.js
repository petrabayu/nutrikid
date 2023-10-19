document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get("id");

  async function fetchArticle() {
    try {
      const response = await fetch(
        `https://6527c717931d71583df15db8.mockapi.io/api/v1/articles/${articleId}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function fetchComments() {
    try {
      const response = await fetch(
        `https://6527c717931d71583df15db8.mockapi.io/api/v1/articles/${articleId}/comments`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function renderArticle() {
    const articleData = await fetchArticle();
    const commentsData = await fetchComments();

    const articleTitle = document.querySelector("title");
    articleTitle.innerHTML = articleData.title;

    const articleContainer = document.getElementById("articleContainer");
    articleContainer.innerHTML = `
        <main>
        <div class="container nutrikid-container d-flex my-2">
          <button class="fs-4 nutrikid-no-btn" href="" onclick="history.back()"
            ><i
              class="nutrikid-icon-size bi bi-arrow-left p-0"
              style="font-size: 3rem"
            ></i
          ></button>
        </div>
        <section id="article-content">
          <article class="container nutrikid-container">
            <h1 class="fw-bold">
              ${articleData.title}
            </h1>
            <div class="time-desctiption"><h6>${articleData.datePublish}</h6></div>
            <div class="container p-0 my-3 d-flex justify-content-end">
              <a href=""
                ><i class="bi bi-whatsapp mx-2 nutrikid-icon-size"></i
              ></a>
              <a href=""
                ><i class="bi bi-instagram mx-2 nutrikid-icon-size"></i
              ></a>
              <a href=""
                ><i class="bi bi-twitter-x mx-2 nutrikid-icon-size"></i
              ></a>
              <a href=""
                ><i class="bi bi-facebook mx-2 nutrikid-icon-size"></i
              ></a>
            </div>
            <figure class="text-center">
              <img src="${articleData.image}" alt="" class="img-fluid" />
              <figcaption class="text-center fw-semibold nutrikid-caption">
                (Illustrasi oleh: Unsplash)
              </figcaption>
            </figure>
            <p>
              ${articleData.longText}
            </p>
          </article> 
        </section>
      </main>
      <section id="article-comment" class="container nutrikid-container mt-5">
        <form>
          <h1>Komentar</h1>
          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
            ></textarea>
            <label for="floatingTextarea">Comments</label>
          </div>
          <div class="d-flex flex-row-reverse">
            <button type="submit" class="btn btn-primary my-3 disabled">Submit</button>
          </div>
        </form> 
      </section>
      <section class="container nutrikid-container">
        <div class="card text-bg-light mb-3">
          <div class="card-header">User Name</div>
          <div class="card-body">
            <p class="card-text">
              ${articleData.comment}
            </p>
          </div>
        </div>
      </section>
        `;

    const commentList = document.getElementById("commentList");
    commentsData.forEach((comment) => {
      const commentItem = document.createElement("li");
      commentItem.textContent = comment.text;
      commentList.appendChild(commentItem);
    });
  }

  renderArticle();
});
