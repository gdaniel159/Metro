import { Carousel } from "primereact/carousel";
import PropTypes from "prop-types";

export default function CardProduct({ imgSrcSecction, descProductSection, product }) {

  const productTemplate = (product) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="mb-3">
          <img src={product.src} alt="product" className="w-6 shadow-2" />
        </div>
        <div>
          <p className="mb-1 text-muted">{product.name}</p>
          <h6 className="mt-0 mb-3">${product.price}</h6>
          <button className="btn btn-warning form-control">Agregar</button>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 d-flex">
          <div className="col-md-4">
            <img
              src={imgSrcSecction}
              alt="pc-icon"
              className="img-fluid"
              width="70"
            />
            <p>{descProductSection}</p>
            <button>Ver Todo</button>
          </div>
          <div className="col-md-8">
            <div className="card">
              <Carousel
                value={product}
                numVisible={3}
                numScroll={3}
                itemTemplate={productTemplate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CardProduct.propTypes = {
  imgSrcSecction: PropTypes.string.isRequired,
  descProductSection: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
};
