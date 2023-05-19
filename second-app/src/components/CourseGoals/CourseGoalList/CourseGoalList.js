import CourseGoalItem from "../CourseGoalItem/CourseGoalItem"

const CourseGoalList = props => {

  return (
    <ul className="goal-list">
      {
        props.data.map(goal => {
          return (<CourseGoalItem key={goal.id} text={goal.text} />)
        })
      }
    </ul>
  )
}

export default CourseGoalList