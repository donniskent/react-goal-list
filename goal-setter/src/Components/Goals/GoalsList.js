//gets passed all the goals as a prop
import GoalsItem from "./GoalItem"
const GoalsList = (props) => {


    return (
        <ul>

            {props.items.map((goal) => (
            <GoalsItem
            
            key={goal.id}
            message={goal.message}
            date={goal.date}


            
            />
            
            
            ))}




        </ul>
    )
}
export default GoalsList