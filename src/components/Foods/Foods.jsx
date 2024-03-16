import { useEffect, useState } from "react";
import Food from "../Food/Food";


const Foods = () => {
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
                key={food.recipe_id} food={food}>
                </Food>)
            }












              {/* {blogs.map(blog => <Blog 
                key={blog.id}
                blog={blog}
                > </Blog>)} */}
        </div>
    );
};

export default Foods;