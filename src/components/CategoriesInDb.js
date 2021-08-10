import { useState, useEffect } from "react";
import SmallCardCategory from "./SmallCardCategory";

function CategoriesInDb() {
  const [cartProps, setCardProps] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/api/categories")
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

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categories in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="row">
              {cartProps.length === 0 && <p>Cargando...</p>}

              {cartProps.map((card, i) => {
                return <SmallCardCategory {...card} key={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesInDb;
