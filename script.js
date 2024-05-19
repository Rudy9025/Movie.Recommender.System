const users = document.querySelector('.user-list');
const userName = document.querySelector("#user");
const ratingSelect = document.querySelector("#rating");
const countrySelect = document.querySelector("#origin-country");
const typeSelect = document.querySelector("#type");
const languageSelect = document.querySelector("#language");

const userArr = [];

const getUserData = async () => {
    try {
        const res = await fetch('https://raw.githubusercontent.com/yuvarajrm/sample-datasets/main/fulljson.json');
        const data = await res.json();
        console.log(data);

        if (data) {
            users.innerHTML = "";
        }

        data.forEach((movie) => {
            const li = document.createElement('li');

            userArr.push({
                element: li,
                title: movie.title,
                summary: movie.summary,
                rating: movie.rating, // Assuming the movie object contains a rating property
                country: movie.orign_country, // Assuming the movie object contains a country property
                type: movie.type, // Assuming the movie object contains a type property
                language: movie.language
            });

            li.insertAdjacentHTML('afterbegin',
                `
                <div class="user-data">
                    <img src="${movie.image_url}" alt="${movie.title}">
                    <div>
                        <h3>${movie.title}</h3>
                        <p>${movie.summary}</p>
                    </div>
                 </div>
                `
            );

            users.appendChild(li);
        });

    } catch (error) {
        console.log(error);
    }
}

const filterBySearch = () => {
    const val = userName.value.toLowerCase();

    userArr.forEach(({ element, title }) => {
        title.toLowerCase().includes(val) ? element.classList.remove('hide') : element.classList.add('hide');
    });
}

const filterByRating = () => {
    const rating = ratingSelect.value;

    userArr.forEach(({ element, rating: movieRating }) => {
        let matchesRating = false;

        if (rating === "all") {
            matchesRating = true;
        } else if (rating === "top" && movieRating >= 7) {
            matchesRating = true;
        } else if (rating === "average" && movieRating >= 4 && movieRating < 7) {
            matchesRating = true;
        } else if (rating === "poor" && movieRating < 4) {
            matchesRating = true;
        }

        matchesRating ? element.classList.remove('hide') : element.classList.add('hide');
    });
}

const filterByCountry = () => {
    const country = countrySelect.value;

    userArr.forEach(({ element, country: movieCountry }) => {
        country === "all" || country === movieCountry ? element.classList.remove('hide') : element.classList.add('hide');
    });
}

const filterByType = () => {
    const type = typeSelect.value.toLowerCase();

    userArr.forEach(({ element, type: movieType }) => {
        const lowerCaseMovieType = movieType.toLowerCase();
        const lowerCaseSelectedType = type.toLowerCase();

        lowerCaseSelectedType === "all" || lowerCaseSelectedType === lowerCaseMovieType ? element.classList.remove('hide') : element.classList.add('hide');
    });
}

const filterByLanguage = () => {
    const language = languageSelect.value;

    userArr.forEach(({ element, language: movieLanguage }) => {
        if (language === "all" || language === movieLanguage) {
            element.classList.remove('hide');
        } else {
            element.classList.add('hide');
        }
    });
}

userName.addEventListener('input', filterBySearch);
ratingSelect.addEventListener('change', filterByRating);
countrySelect.addEventListener('change', filterByCountry);
typeSelect.addEventListener('change', filterByType);
languageSelect.addEventListener('change', filterByLanguage);

getUserData();
