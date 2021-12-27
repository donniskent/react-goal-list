//render based on if editing or not. 
import { useState } from "react";
import NewGoalForm from '../NewGoals/NewGoalForm'
const NewGoal = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const editingHandler = () => {
        setIsEditing(true);
    }
    
    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    //adds the goal to the goals list (ultimately)
    const saveGoalDataHandler = (enteredGoalData) => {

        const expenseData = {
            ...enteredGoalData,
            id: Math.random.toString(),
        }


        props.onAddGoal(expenseData);
        setIsEditing(false);

    }


    let editingShow = <button onClick={editingHandler}>Add New Goal</button>;
    
    if(isEditing) {
        editingShow = <NewGoalForm onCancel={stopEditingHandler} onSaveExpenseData={saveGoalDataHandler} />;
    }

    
    
    return (
        <div>

        {editingShow}

        </div>

    );

}
export default NewGoal;