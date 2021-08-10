import React from 'react';
import PropTypes from 'prop-types';

function ProductCard(props){
    return(
        <div className="col-sm-6 col-md-3 my-4">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">{props.name}</h5>
            </div>
            <div className="card-body">
                <div className="text-center">
                    <img 
                        className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
                      src={props.url}
                        alt={props.name} 
                        style={{ width: '100%', objectFit: 'cover' }} 
                    />
                </div>
                <p>{props.category}</p>
            </div>
        </div>
    </div>
        
    )
}

/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

ProductCard.defaultProps = {
    id: 'x',
    name: 'No Title',
    color: 'success',
    category: 'No cuatity',
    icon: 'fa-clipboard-list'
}

/* PROPTYPES */

ProductCard.propTypes = {
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



export default ProductCard;