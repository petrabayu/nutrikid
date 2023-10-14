let btnSubmit = document.getElementById("btn-submit");
let usersAPI = "https://652941f955b137ddc83e77e5.mockapi.io/api/v1/users";

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  //getting value from form using form
  const newRegisterForm = document.querySelector("#signup-form");
  newName = newRegisterForm.name.value;
  newEmail = newRegisterForm.email.value;
  newPassword = newRegisterForm.password.value;
  retypePassword = newRegisterForm.retypePassword.value;

  const checkPassMessage = document.getElementById("warning-pass-match-msg");
  //check if password and re-type password has same value

  //check apakah password memenuhi syarat
  if (validatePassword(newPassword)) {
    if (newPassword === retypePassword) {
      checkPassMessage.style.display = "none"; //display ketika password sesuai

      //check user apakah emailnya sudah terdaftar atau belum
      checkExistingEmail(newEmail);
    } else {
      checkPassMessage.style.display = "block"; //display ketika password tidak sesuai kriteri
    }
  }
});

function validatePassword(password) {
  //mengambil element p untuk menampilkan pesan peringatan
  const warningMessage = document.getElementById("warning-msg");

  //regex huruf kecil,huruf besar,angka,dan min 8 karakter
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const result = regex.test(password); //cek password apakah sesuai kriteria

  //merubah display p warning
  if (result) {
    warningMessage.style.display = "none"; //display ketika password sesuai kriteria
    return true; //sesuai kriteria
  } else {
    warningMessage.style.display = "block"; //display ketika password tidak sesuai kriteria
    return false; //tidak sesuai kriteria
  }
}

function postUser() {
  //data object untuk dikirim ke API
  let usersObjectData = {
    name: newName,
    email: newEmail,
    password: newPassword,
  };

  //fetch API dengan metode POST
  fetch(usersAPI, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(usersObjectData),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(() => {
      window.location.href = "index.html";
      //pindah halaman setelah proses registrasi sukses/berhasil
      // document.getElementById("form").reset(); //form akan mereset value
    })
    .catch((error) => {
      console.log(error);
    });
}

function checkExistingEmail(email) {
  const userEmailAPI = usersAPI + `?email=${email}`; //mengambil data API dengan keyapi email
  fetch(userEmailAPI, {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((userEmailAPI) => {
      //memastikan bahwa belum ada email terdaftar
      if (userEmailAPI.length != 0) {
        // console.log(userEmailAPI);
        //nanti ditambah alert
        document.getElementById("signup-form").reset();
        alert("Akun sudah terdaftar tidak perlu daftar lagi");
      } else {
        console.log(userEmailAPI);
        postUser(); //melakukan proses POST data
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
