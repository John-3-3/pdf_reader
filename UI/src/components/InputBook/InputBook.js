import './InputBook.css'
import React, { useState } from "react";

const Inputbook =(props)=>{
    
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publication_date, setDate] = useState("");
    //const [file, setFile] = useState();

    const SubmitForm = async(event)=>{
        event.preventDefault();

        try {
            const body = {title, author, publication_date};
            const response = await fetch("http://localhost:5000/books",
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                }
            );
            window.location ='/';
            console.log(response)    
        } 
        catch (error) {
            console.log(error.message);    
        }
    }

    return((props.trigger) ? (
    
        <div className='inputbook'>
        
            <button className='close-button' onClick={()=>props.setTrigger(false)}>x</button>

            <h1>REGISTRAR LIVRO</h1>    

            <form className='formulary' onSubmit={SubmitForm}>
                
                <label>Titulo</label>
                <input type='text' placeholder='Titulo do livro' value={title} onChange={event=>setTitle(event.target.value)}/>

                <label>Autor</label>    
                <input type='text' placeholder='Nome do Autor' value={author} onChange={event=>setAuthor(event.target.value)}/>
    
                <label>Data de lançamento</label>
                <input type='date' className='DatePicker'  onChange={event =>setDate(event.target.value)}/>
                {/* 
                <label>Selecione o livro</label> 
                <input type='file' 
                    onChange={
                        (event)=>{
                            setFile(e.target.value);
                        }
                    }
                />    
                */}
                <input type='submit' value='Registrar'/>
            </form>
        </div>
    ) : ""
)}
export default Inputbook