import './EditBook.css';


const Edite=(props)=>{
    return((props.trigger)?(
        <div className='editebook'>
            <button className='close-button' onClick={()=>props.setTrigger(false)}>x</button>

            <form className='formulary'>
                <label>Titulo</label>
                <input type='text' placeholder='Titulo do livro' />

                <label>Autor</label>    
                <input type='text' placeholder='Nome do Autor' />
    
                <label>Data de lançamento</label>
                <input type='date' className='DatePicker'  />
            </form>
        </div>
        ): ""
    )
}
export default Edite;