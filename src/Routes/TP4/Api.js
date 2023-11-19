import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import './App.css';
import { ThemeContext } from '../Theme/Context/themeContext';

function Api() {
    const [meal, setMeal] = useState([]);

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
            .then((result) => {
                setMeal(result.data.meals);
            })
            .catch((err) => {
                console.log('An error occurred: ', err);
            });
    }, []);
    const { theme } = useContext(ThemeContext);

    return (
        <div className={theme?'light-mode':'dark-mode'}>
            {meal.map((mealdata, index) => (
                <div className={theme ?'meal_holder':'meal_holder-dark'} key={index}>
                    <img src={mealdata.strMealThumb} alt='Randommeal' style={{ height: '250px', width: '500px',borderRadius:'40px'}} />
                    <h1>{mealdata.strMeal} </h1>
                <h3><i>{mealdata.strCategory}</i>  Origin : {mealdata.strArea}</h3>
                    <p>{mealdata.strInstructions}</p>
                </div>
            ))}
        </div>
    );
}

export default Api;
