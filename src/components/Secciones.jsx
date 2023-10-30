import { Image } from "primereact/image";
import PropTypes from "prop-types";

export default function Secciones({ imageUrl, description }) {
  return (
    <div className="mt-4">
      <div className="text-center">
        <div className="section-container p-2">
          <Image src={imageUrl} width="70" height="70" />
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

Secciones.propTypes = {
  imageUrl: PropTypes.string.isRequired, // imageUrl es requerido y debe ser un string
  description: PropTypes.string.isRequired, // description es requerido y debe ser un string
};
