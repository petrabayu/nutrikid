let profile = localStorage.getItem("profile")
let profileBox = document.getElementById("container")
if (profile) {
    profileBox.innerHTML = `<div class="buttonbox dropdown-center">
    <img src="./assets/images/avatarresponden2.png" class="rounded" alt="avatar">
    <a href="#" class="btn btn-sm nav-link dropdown-toggle" id="navbutton" role="button" aria-pressed="true" data-bs-toggle="dropdown">Halo Bunda</a>
    <ul class="dropdown-menu box-profile">
      <li><a class="dropdown-item" href="#">User Setting</a></li>
      <li><a class="dropdown-item" id="exit" href="#">Sign out</a></li>
    </ul>`
} else {
    profileBox.innerHTML = `<div class="buttonbox">
    <div class="login"><a href="login.html">Login</a></div>
    <div class="signup"><a href="signup.html">Sign Up</a></div>
  </div>`
}

let logOut = document.getElementById("exit")

logOut.addEventListener("click", deleteProfile)

function deleteProfile() {
    localStorage.removeItem("profile");
    location.reload();
}