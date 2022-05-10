import Axios from "axios";

export const GET_ALL_BOOKS = "GET_ALL_BOOKS";
export const GET_ALL_BOOKS_SUCCESS = "GET_ALL_BOOKS_SUCCESS";
export const GET_ALL_BOOKS_FAILURE = "GET_ALL_BOOKS_FAILURE";


export const GET_BOOK = "GET_BOOK";
export const GET_BOOK_SUCCESS = "GET_BOOK_SUCCESS";
export const GET_BOOK_FAILURE = "GET_BOOK_FAILURE";

export const CREATE_BOOK = "CREATE_BOOK";
export const CREATE_BOOK_SUCCESS = "CREATE_BOOK_SUCCESS";
export const CREATE_BOOK_FAILURE = "CREATE_BOOK_FAILURE";

export const UPDATE_BOOK = "UPDATE_BOOK";
export const UPDATE_BOOK_SUCCESS = "UPDATE_BOOK_SUCCESS";
export const UPDATE_BOOK_FAILURE = "UPDATE_BOOK_FAILURE";

export const DELETE_BOOK = "DELETE_BOOK";
export const DELETE_BOOK_SUCCESS = "DELETE_BOOK_SUCCESS";
export const DELETE_BOOK_FAILURE = "DELETE_BOOK_FAILURE";


export const UPDATE_INPUT = "UPDATE_INPUT";
export const UPDATE_INPUT_SUCCESS ="UPDATE_INPUT_SUCCESS";
export const UPDATE_INPUT_FAILURE = "UPDATE_INPUT_FAILURE";




//get all books

export const getAllBooks = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_BOOKS });
      let dataUrl = `http://localhost:3031/api/books`;
      let response = await Axios.get(dataUrl);
      dispatch({ type: GET_ALL_BOOKS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_ALL_BOOKS_FAILURE, payload: error });
    }
  };
};


//get single book

export const getBook = (bookId) =>{

  return async (dispatch) =>{

    try{


      dispatch({type:GET_BOOK})
      let dataUrl = `http://localhost:3031/api/books/${bookId}`;
      let response = await Axios.get(dataUrl);
      dispatch({type:GET_BOOK_SUCCESS,payload:response.data})
    }
    catch (error) {
      dispatch({ type: GET_BOOK_FAILURE, payload: error });
    }

  }
  
}


//create new book
export const createBook = (book) =>{

  return async(dispatch) =>{

    try{
      dispatch({type:CREATE_BOOK});
      let dataUrl = `http://localhost:3031/api/createbook`;
      let response = await Axios.post(dataUrl,book);
      dispatch({type:CREATE_BOOK_SUCCESS,payload:response.data})


    }
    catch(error)
    {
      dispatch({ type: CREATE_BOOK_FAILURE, payload: error });
      
    }

  }

}

//update input

export const updateInput = (key,value) =>{

  return{
    type: UPDATE_INPUT,
    payload:{key,value}
  }

}

//update book

export const updateBook = (bookId,book) =>{

  return async(dispatch) =>{
    try{

      dispatch({type:UPDATE_BOOK})
      let dataUrl = `http://localhost:3031/api/books/${bookId}`;
      let response = await Axios.put(dataUrl,book);
      dispatch({type:UPDATE_BOOK_SUCCESS,payload:response.data})

    }
    catch(error)
    {
      dispatch({ type: UPDATE_BOOK_FAILURE, payload: error });
    }
    
  }


}


//delete book

export const deleteBook = (bookId) =>{

  return async(dispatch) =>{
    try{

      dispatch({type:DELETE_BOOK})
      let dataUrl = `http://localhost:3031/api/books/${bookId}`;
      let response = await Axios.delete(dataUrl);
      dispatch({type:DELETE_BOOK_SUCCESS,payload:response.data})
      dispatch(getAllBooks())

    }
    catch(error)
    {
      dispatch({ type: DELETE_BOOK_FAILURE, payload: error });
    }
    
  }


}

