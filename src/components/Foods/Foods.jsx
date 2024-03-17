import { useEffect, useState } from "react";
import Food from "../Food/Food";
import PropTypes from 'prop-types';

const Foods = ({handleCook}) => {
    const [foods,setFoods]=useState([]);
    

    useEffect(()=>{
        fetch('fake.json')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])

    






    return (
        <div className="w-3/5 grid grid-cols-1 lg:grid-cols-2 gap-14">
            {
                foods.map(food=> <Food 
                key={food.recipe_id} food={food}
                handleCook={handleCook}
                > </Food>)
            }












              {/* {blogs.map(blog => <Blog 
                key={blog.id}
                blog={blog}
                > </Blog>)} */}
        </div>
    );
};

Foods.propTypes={
    handleCook:PropTypes.func
}
export default Foods;