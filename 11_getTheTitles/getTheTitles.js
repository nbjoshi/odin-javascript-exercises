const getTheTitles = function(books) {
    let result = [];
    for (book of books) {
        result.push(book["title"])
    }
    return result;

    /* Another solution
    return array.map((book) => book.title);
    */

};

// Do not edit below this line
module.exports = getTheTitles;
