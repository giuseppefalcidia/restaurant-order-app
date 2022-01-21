import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi menu 6 (14 pieces)',
        description: 'with fish and vegetables',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Summer Roll Salmon',
        description: 'with rice noodles, lettuce, cucumber and mint, wrapped in rice paper',
        price: 16.50,
    },
    {
        id: 'm3',
        name: 'Chicken Ramen Soup',
        description: 'with boiled chicken, eggs, ramen noodles, vegetables, dashi and leek',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Salmon Chirashi',
        description: 'with salmon, vegetables, nori, masago and rice',
        price: 18.99,
    },
    {
        id: 'm4',
        name: 'Futo Maki',
        description: 'with surimi, salmon, avocado, cucumber and cream cheese',
        price: 6.20,
    },
    {
        id: 'm4',
        name: 'Sake Temaki',
        description: 'with salmon, avocado and masago',
        price: 5.40,
    },
    {
        id: 'm4',
        name: 'Edamame Salad',
        description: 'with cooked Japanese green beans',
        price: 18.99,
    },
    {
        id: 'm4',
        name: 'Kimchi Salad',
        description: 'with spicy Chinese cabbage',
        price: 18.99,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal =>
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return <section className={classes.meals}>
        <Card>
            <ul>{mealsList}</ul>
        </Card>
    </section>
}

export default AvailableMeals;