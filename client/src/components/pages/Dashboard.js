import {  useEffect } from "react";
import { useDispatch,useSelector} from 'react-redux';
import { getAllBooks,deleteBook} from '../../redux/books/bookActions';
import {booksFeatureKey} from '../../redux/books/bookReducer'
import {Link,useNavigate} from 'react-router-dom';


const Dashboard = () => {
    let dispatch = useDispatch();

    let bookInfo = useSelector((state)=>{
        return state[booksFeatureKey];
    
      });

      let {books} = bookInfo;

      useEffect(() => {
        dispatch(getAllBooks())
      }, []);

      const handleDeleteBook = (bookId) => {
        dispatch(deleteBook(bookId))
      }

    return(
        <>
        <pre>{JSON.stringify(books)}</pre>

        <div className="container text-center">
            <div className="row">
                <div className="col">
 
                <h1 className="text-dark text-center">Manage Books</h1>

                <div className="border border-dark text-center m-2 p-3">
                    <p className="text-info h4">Admin dashboard to manage books</p>

                    <Link to="/addbook" className="btn btn-success p-2 btn-outline-dark text-white">Add Books</Link>

                </div>

                <div className="row">
        <div className="col">
          {books.length > 0 ? (
            <>
              {books.map((book) => {
                return (
                  <div className="card m-3 p-2" key={book._id}>
                    <div className="card-header bg-danger text-white text-uppercase fw-bold">{book.title}</div>
                    <div className="card-body">
                      <h5 className="card-title text-dark"><span className="fw-bold text-dark">About:</span>  {book.subTitle}</h5>
                       <p className="card-text"><span className="fw-bold text-dark">ISBN:</span>
                         {book.isbn}
                      </p>
                      <p className="card-text"><span className="fw-bold text-dark">Author:</span>
                         {book.author}
                      </p>
                      <p className="card-text">
                      <span className="fw-bold text-dark">Description:</span>
                        {book.description}
                      </p>
                      <p className="card-text">
                      <span className="fw-bold text-dark">Published On:</span>
                         {book.publishDate}
                      </p>
                      <p>
                      <span className="fw-bold text-dark">Pages:</span>
                         {book.pages}
                      </p>
                      <p>
                      <span className="fw-bold text-dark">Price:</span>
                         {book.price}
                      </p>
                      <Link to={`/books/${book._id}`} className="btn btn-info m-3 p-2">
                        Update
                      </Link>

                      <button onClick={handleDeleteBook.bind(this,book._id)} className="btn btn-danger m-3 p-2">Delete</button>
                    </div>
                  </div>
                );
              })}
            </>
          ) : null}
        </div>
      </div>
                    

                </div>
            </div>
        </div>
        </>

    );

}

export default Dashboard;