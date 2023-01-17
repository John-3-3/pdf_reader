import './BookList-Style.css';
import Edite from '../EditBook/EditBook';
import React, {useEffect, useState} from 'react';


const BookList=()=>{

    const [books, setBooks] = useState([]);
    const [state, setState] = useState(false);
    const getBooks=async()=>{
        try {
            const response = await fetch('http://localhost:5000/books');
            const jsonData = await response.json();

            setBooks(jsonData);
        } 
        catch (error) {
            console.log(error.message);
        }
    }

    useEffect(()=>{
        getBooks()
    }, [])

    //Delete function
    const deleteBook = async(isbn)=>{
        try {
            const deleteBook = await fetch(`http://localhost:5000/books/${isbn}`,
            {
                method: "DELETE"
            });

            setBooks(books.filter(book =>book.isbn !== isbn))
        } catch (error) {
            console.log(error.message);
        }
    }



    return(
        <div className='booklist'>
            <h1>Book List</h1>

            <table className="table table-striped">
                <thead className='head'>
                    <tr>
                        <th>Title</th>
                        <th>author</th>
                        <th>publicationdate</th>
                        <th>Read</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
            
                <tbody className='body'>
                {
                    books.map(book=>(
                        <tr key={book.isbn}>
                            
                            <td>{book.title}</td>
                            
                            <td>{book.author}</td>
                            
                            <td>{book.publication_date}</td>
                            
                            <td className='readbt'><button>Read</button></td>

                            <td className='delitebt'><button onClick={()=>deleteBook(book.isbn)}>Delete</button></td>
                            
                            <td className='editebt'><button onClick={()=>setState(true)}>Edite</button></td>
                        </tr>
                        ))
                }
      
      
      
        {/*
                          <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr>
      
                    <tr>
                        <td>Mary</td>
                        <td>Moe</td>
                        <td>mary@example.com</td>
                    </tr>
        
                    <tr>
                        <td>July</td>
                        <td>Dooley</td>
                        <td>july@example.com</td>
                    </tr>
         
        */}
                </tbody>
            </table>

            <Edite trigger={state} setTrigger={setState}/>
        </div>
    )
}
export default BookList;