class nutrikidHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="navigation bar">
    <nav class="navbar fixed-top navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img class="logo" src="assets/images/Logo.png" alt="logo"/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse  justify-content-between" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">Program</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Konsultasi</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">Artikel</a>
            </li>
          </ul>
          <div class="buttonbox">
            <div class="login">Login</div>
            <div class="signup">Sign Up</div>
        </div>
        </div>
      </div>
    </nav>
  </header>`;
  }
}

customElements.define("nutrikid-header", nutrikidHeader);
