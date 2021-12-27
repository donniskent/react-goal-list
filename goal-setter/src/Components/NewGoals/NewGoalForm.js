//set the description, title and date of a new goal 
import React, {useState} from 'react';


const NewGoalForm = (props) => {

    //need states for description and date 
    const [enteredDate, setEnteredDate] = useState('');
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }



    const [enteredDescription, setEnteredDescription] = useState('');
    
    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
    };



    const submitHandler = (event) => {
        event.preventDefault();
        
        const goalsData = {
            message: enteredDescription,
            date: new Date(enteredDate)
        };
        
        
        
        
        
        
        
        props.onSaveExpenseData(goalsData)
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    };







    
    
    
    return (
        <div>
            <div>
                <form onSubmit={submitHandler}>
                    <input type="text" value={enteredDescription} onChange={descriptionChangeHandler}></input>

                    <input type="date" value={enteredDate} onChange={dateChangeHandler}></input>

                    <button type="submit">Submit</button>
                </form>


            </div>
            <button onClick={props.onCancel} type="button">Cancel</button>
        </div>
    )

}
export default NewGoalForm