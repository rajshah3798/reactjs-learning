import BookShow from "./BookShow";
import useBooksContext from "../hooks/custom";

function BookList() {
    const { books } = useBooksContext();
    
    const renderedBooks = books.map((book) => {
        return <BookShow book={book} key={book.id} />
    })


    return (
        <div className="book-list">
            {renderedBooks}
        </div>
    );
}

export default BookList;