// Ngambil Data Form

let form = document.getElementById("login-form");

form.addEventListener("submit", getForm)
function getForm(e) {

    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // console.log(email, password)
    getProfiles(email, password);
}

// Fungsi Fetch Filter

function getProfiles(a, b ) {
    const url = new URL('https://652941f955b137ddc83e77e5.mockapi.io/api/v1/users');

    url.searchParams.append('email', `${a}`);

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

        })
        .then((products) => {
            if (products.length === 0) {
                alert("email tidak terdaftar")
            } else if (products[0].email !== a ) {
                alert("email salah")
            } else if (products[0].password !== b) {
                alert("password salah")
            } else if (products[0].email === a && products[0].password === b) {
                form.submit();
                localStorage.setItem("profile", products);
                console.log(localStorage);
            }

        })
        .catch((error) => {
          console.log(error);
        })

        
}


// function listingUsers(users) {
//     users.forEach((list) => {

//     })
// }
// OK

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     // const url = new URL('https://652941f955b137ddc83e77e5.mockapi.io/api/v1/users');
// });

// url.searchParams.append('email', `${email}`);

//     fetch(url, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       })
//         .then((res) => {
//           if (res.ok) {
//             return res.json();
//           }
//         //   throw new Error('Failed to fetch products');
//         })
//         .then((products) => {
//         // if (products === []) {
//           console.log(products[0].password)
//         //   alert("email tidak sesuai")
//         // } elseif (product.email) {

//         // }
//         })
//         .catch((error) => {
//           console.log(error);
//         })


// BAD


// const url = "https://652941f955b137ddc83e77e5.mockapi.io/api/v1/users"

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     let data = JSON.stringify({
//             'email' : email,
//             'password' : password,
//         });
    
//         url.searchParams.append('email',`${email}`);

//     fetch(url, {
//             method: 'GET',
//             headers: {
//                 'content-type':'application/json',
//             },

//         }).then(res => {
//             if (res.ok) {
//                 return res.json();
//             } else {
//                 alert('Email tidak ditemukan!');
//             }
//         }).then(profile => console.log(profile))
//         .catch((error) => {
//             console.log(error);
//             })
// });