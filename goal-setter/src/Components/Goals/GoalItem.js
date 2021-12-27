// describes a single goal
//goals have a : Title, Description, Date 
const GoalsItem = (props) => {


    return (

        <div>
            {props.message}
            {props.date.toLocaleString()}
        </div>
        
    )
}
export default GoalsItem