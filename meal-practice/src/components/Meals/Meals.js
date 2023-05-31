import MealsList from "../MealsList/MealsList"
import MealsSummary from "../MealsSumary/MealsSummary"

const Meals = props => {
    return (
        <>
            <MealsSummary />
            <section>
                <MealsList />
            </section>
        </>
    )
}

export default Meals