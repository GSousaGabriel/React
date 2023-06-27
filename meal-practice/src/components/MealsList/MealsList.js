import { useEffect, useState } from "react"
import MealItem from "../MealItem/MealItem"
import Card from "../UI/Card/Card"
import classes from './MealsList.module.css'

const MealsList = props => {
  const [meals, setMeals] = useState([])

  useEffect(() => {
    const fetchMeals = async () => {
      const mealsToAdd = []
      const response = await fetch("https://reacthttp-65347-default-rtdb.firebaseio.com/meals.json")

      if (!response.ok) {
        throw new Error('Error, please fix.')
      }

      const unformatedMeals = await response.json()

      for (const key in unformatedMeals) {
        mealsToAdd.push({
          id: key,
          name: unformatedMeals[key].name,
          description: unformatedMeals[key].description,
          price: unformatedMeals[key].price
        })
      }
      setMeals(mealsToAdd)
    }

    fetchMeals()
  }, [])

  const mealsList = meals.map(meal => <MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price} />)

  return (
    <Card className={`${classes.meals} ${classes.card}`}>
      <ul>
        {mealsList}
      </ul>
    </Card>
  )
}

export default MealsList