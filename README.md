
# <img src="https://github.com/Rudy9025/Movie.Recommender.System/assets/95328967/6a0d213b-73a9-4b06-bac4-4554b62a4678" width="120" height="85" > Movie Recommender System
Welcome to the Movie Recommender System repository! This system allows users to browse and filter through a collection of movies based on various criteria such as title search, rating, country of origin, type, and language.

## Features
### 1. Movie Data Display
The system fetches movie data from a JSON file hosted at [sample-datasets](https://raw.githubusercontent.com/yuvarajrm/sample-datasets/main/movies.json) and displays it dynamically on the webpage. Each movie is represented with its title, summary, and an image.

### 2. Filtering Functionality
**Search by Title
Functionality:** Users can search for movies by typing the title in the search box.

Implementation: The system filters movies based on the title entered by the user, dynamically showing or hiding movies that match the search criteria.

**Filter by Rating
Functionality:** Users can filter movies based on their rating categories: "Top" (rating >= 7), "Average" (rating >= 4 and < 7), "Poor" (rating < 4), or "All".

Implementation: Movies are filtered based on their rating category, updating the display in real-time as the user selects different options.

**Filter by Country of Origin
Functionality:** Users can filter movies based on their country of origin.

Implementation: Movies are filtered based on the selected country or "All", updating the display to show only movies that match the selected country.

**Filter by Type
Functionality:** Users can filter movies based on their type (e.g., action, drama).

Implementation: Movies are filtered based on the selected type or "All", updating the display to show only movies that match the selected type.

**Filter by Language
Functionality:** Users can filter movies based on their language.

Implementation: Movies are filtered based on the selected language or "All", updating the display to show only movies that match the selected language.
### Usage
Clone the repository to your local machine:

```

git clone https://github.com/Rudy9025/Movie.Recommender.System.git

 ```
Open index.html in your web browser.

**Explore and interact with the Movie Recommender System:**

Enter a movie title in the search box to filter by title.
Use the dropdown menus to filter movies by rating, country of origin, type, and language.
Technologies Used
HTML, CSS: Structuring and styling the web page.
JavaScript: Fetching data asynchronously, dynamically updating the DOM, and implementing filtering functionalities.
JSON: Data format for storing movie information.
Contributing
Contributions are welcome! If you have any suggestions, enhancements, or bug fixes, feel free to open an issue or create a pull request.

