class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        // Check if rating is provided, otherwise set it to "PG"
        this.rating = rating || "PG";
    }

    // Method to get movies with rating "PG"
    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }

    // Other methods and getters can be added here as needed
}

const movies = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "PG-13"),
    new Movie("Movie3", "Studio3", "R"),
    new Movie("Movie4", "Studio4", "PG"),
    new Movie("Movie5", "Studio5", "G"),
];
const pgMovies = Movie.getPG(movies);
console.log(pgMovies);


const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Printing the details using console.log
console.log("Title: " + casinoRoyale.title);
console.log("Studio: " + casinoRoyale.studio);
console.log("Rating: " + casinoRoyale.rating);