// Function to show data API in console
async function fetchData() {
    try {
        const response = await fetch('https://6527c717931d71583df15db8.mockapi.io/api/v1/articles');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to render data in cards
async function renderData() {
    const container = document.querySelector('.container');
    const data = await fetchData();

    if (!data) {
        return;
    }

    data.forEach(article => {
        const card = document.createElement('section');
        card.classList.add('card');

        const boximage = document.createElement('div');
        boximage.classList.add('boximage');

        const boxtext = document.createElement('div');
        boxtext.classList.add('boxtext');

        const category = document.createElement('h6');
        category.textContent = article.category

        const date = document.createElement('h6');
        date.textContent = article.datePublish

        const image = document.createElement('img');
        image.src = article.image

        const title = document.createElement('h2');
        title.textContent = article.title;

        const body = document.createElement('p');
        body.textContent = article.shortText;

        const avatar = document.createElement('img');
        avatar.src = article.avatar;

        const name = document.createElement('h5');
        name.textContent = article.name;

        const jobTitle = document.createElement('h6');
        jobTitle.textContent = article.jobTitle;

        const showDetails = document.createElement('a');
        showDetails.textContent = 'show details';
        showDetails.href = `article-content.html?id=${article.id}`;
    
        boximage.appendChild(image);
        card.appendChild(boximage);
        boxtext.appendChild(category);
        boxtext.appendChild(date);
        boxtext.appendChild(title);
        boxtext.appendChild(body);
        boxtext.appendChild(avatar);
        boxtext.appendChild(name);
        boxtext.appendChild(jobTitle);
        boxtext.appendChild(showDetails);
        card.appendChild(boxtext);
        container.appendChild(card);
    });
}

// Call the renderData function to display data
renderData();

//search filter
textBox.oninput = filterData;
function filterData() {
    const sectionElements = document.querySelectorAll('section');
    for (let section of sectionElements) {
    const currentName = section.innerHTML.toLowerCase();
    const searchText = this.value.toLowerCase();
    if (!currentName.includes(searchText))
    section.setAttribute('hidden',true);
    else section.removeAttribute('hidden');
    }
}

//