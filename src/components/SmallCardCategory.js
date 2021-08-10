import React from 'react';
import PropTypes from 'prop-types';

function SmallCardCategory(props){
    return(    
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{props.category.name}</div>
                <div className="col-auto">
                 <div className="h5 mb-0 font-weight-bold text-white-800">{props.count}<i className={`fas ${props.icon} fa-2x text-gray-300`}></i></div>  
                 <div className="col-auto">
                            
                 </div> 
              </div>
              </div>

            </div>      
    )
}

/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

SmallCardCategory.defaultProps = {
    name: 'No Title',
    color: 'success',
    cuantity: '25',
    icon: 'fa-award'
}

/* PROPTYPES */

SmallCardCategory.propTypes = {
    atritutes: PropTypes.shape({
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        cuantity: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        icon: PropTypes.string.isRequired
    })
}



export default SmallCardCategory;