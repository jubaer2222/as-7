import PropTypes from 'prop-types';
import { IoMdTime } from "react-icons/io";
import { IoFlameSharp } from "react-icons/io5";


const Food = ({ food,handleCook }) => {
    const { recipe_img, ingredients, recipe_name, short_description, time, cal } = food;

    return (
        <div className=''>
            <div className="card w-96 h-[620px] shadow-xl">
  <figure><img src={recipe_img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title justify-start">{recipe_name}</h2>

    <p className='text-[#878787]'>{short_description}</p>
    
        <div>
        <div>
            <p className='flex justify-start mb-3'>Ingredients:6</p>
        <p className='text-[#878787]'>{ingredients}</p>
        </div>
        <div className='flex gap-16 items-center text-[#878787]'>
            <div className='flex gap-2'>
            <p><IoMdTime /></p>
            <p>{time}</p>
            </div>
            <div className='flex gap-2 text-[#878787]'>
                <p><IoFlameSharp /></p>
                <p>{cal}</p>
            </div>
        </div>
        
        {/* BTN */}

    <div className="card-actions ">
      <button onClick={()=>handleCook(food)} className=" btn glass btn-primary justify-start px-9 mt-5 rounded-full bg-[#0BE58A] border-none">Want to Cook</button>
    </div>
    
        </div>
  </div>
</div>

        </div>
    );
};
Food.PropTypes = {
    blog: PropTypes.object.isRequired,
    handleCook:PropTypes.func
}
export default Food;