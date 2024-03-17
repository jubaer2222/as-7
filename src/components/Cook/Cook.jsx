import PropTypes from 'prop-types'
  
const Cook = ({cook}) => {
    const {recipe_name,time, cal} =cook;
    return (
        <div className='text-[#878787] mb-8 sm:flex justify-center items-center'>
             <table>
      <thead >
        <tr>
          <th className='px-7'>Name</th>
          <th className='px-7'>Time</th>
          <th>Calories</th>
        </tr>
      </thead>
      <tbody>
        <tr className='gap-7'>
          <td>{recipe_name}</td>
          <td>{time}</td>
          <td>{cal}</td>
          <button className='btn glass btn-primary justify-start px-9 mt-3 rounded-full bg-[#0BE58A] border-none'>Preparing</button>
        </tr>
        {/* Add more rows here if needed */}
      </tbody>
    </table>
        </div>
    );
};
Cook.propTypes = {
    cooks: PropTypes.obj
}
export default Cook;