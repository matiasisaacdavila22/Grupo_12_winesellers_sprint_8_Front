import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
//import noPoster from '../assets/images/no-poster.jpg';

function SearchMovies(){
	const [cartProps, setCardProps] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/api/products")
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

	const keyword = 'ESPUMANTES';


	return(
		<div className="container-fluid">
		
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET">
								<div className="form-group">
									<label htmlFor="">Buscar por título:</label>
									<input type="text" className="form-control" />
								</div>
								<button className="btn btn-info">Search</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Productos para la palabra: {keyword}</h2>
						</div>
						{cartProps.length === 0 && <p>Cargando...</p>}
						
						{cartProps.length > 0 && cartProps.map((card, i) => {
								return <ProductCard {...card} key={i} />;
							})
						}
					</div>			
		</div>
	)
}

export default SearchMovies;
