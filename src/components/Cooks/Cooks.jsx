import PropTypes from 'prop-types'
import Cook from '../Cook/Cook';

const Cooks = ({cooks}) => {
    return (
        <div>
            <h3 className="text-2xl font-semibold mt-5">Want to cook:{cooks.length}</h3>
            {
                cooks.map(cook => <Cook key={cook.id}
                cook ={cook}></Cook>)
            }
        </div>
    );
};
Cooks.propTypes={
    cooks:PropTypes.array
}
export default Cooks;