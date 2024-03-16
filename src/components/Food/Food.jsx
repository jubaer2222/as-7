import PropTypes from 'prop-types';
import { IoMdTime } from "react-icons/io";
import { IoFlameSharp } from "react-icons/io5";


const Food = ({ food }) => {
    const { recipe_img, ingredients, recipe_name, short_description, recipe_id, time, cal } = food;

    return (
        <div className=''>
            <div className="card w-96 h-[620px] shadow-xl">
  <figure><img src={recipe_img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{recipe_name}</h2>

    <p className='text-[#878787]'>{short_description}</p>
    
        <div>
        <div>
            <p className='flex justify-start mb-3'>Ingredients:6</p>
        <p>{ingredients}</p>
        </div>
        <div className='flex gap-16 items-center'>
            <div className='flex gap-2'>
            <p><IoMdTime /></p>
            <p>{time}</p>
            </div>
            <div className='flex gap-2'>
                <p><IoFlameSharp /></p>
                <p>{cal}</p>
            </div>
        </div>
        
    <div className="card-actions ">
      <button className="btn glass btn-primary justify-start px-9 mt-5 rounded-full bg-[#0BE58A] border-none">Want to Cook</button>
    </div>
    
        </div>
  </div>
</div>

        </div>
    );
};
Food.PropTypes = {
    blog: PropTypes.object.isRequired
}
export default Food;