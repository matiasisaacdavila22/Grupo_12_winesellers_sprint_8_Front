import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

let product = {
    name: 'No Title',
    color: 'success',
    cuantity: '25',
    icon: 'fa-award'
}

function LastMovieInDb(){
    const [cartProps, setCardProps] = useState({product});
   
    useEffect(() => {
        fetch("http://localhost:3002/api/products/last")
          .then((Response) => Response.json())
          .then((data) => {
            console.log(data);
            setCardProps(data);
          })
          .catch((error) => console.log(error));
      }, []);
    
      useEffect(() => {
        console.log("actualizo el componete");
      }, [cartProps]);
    
      useEffect(() => {
        return () => console.log("se desmonto el componente");
      }, []);

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">New Product</h5>
                </div>
                <div className="card-body">
                <h6 className="m-0 font-weight-bold text-gray-800">{cartProps.product.name}</h6>
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40% +'rem'}} src={cartProps.url} alt={cartProps.product.name}/>
                    </div>
                    <p>{cartProps.product.description}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                </div>
            </div>
        </div>
    )
}

LastMovieInDb.defaultProps = {
    name: 'No Title',
    color: 'success',
    cuantity: '25',
    icon: 'fa-award'
}

/* PROPTYPES */

LastMovieInDb.propTypes = {
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

export default LastMovieInDb;
