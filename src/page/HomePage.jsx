import NavBar from "../components/Navigation";
import Carousel from "../components/Carousel";
import Section from "../components/Secciones";
import { Image } from "primereact/image";
import "../styles/main.css";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Carousel />
      <div className="card flex justify-content-center w-11 m-auto">
        <Image
          src="https://metroio.vtexassets.com/assets/vtex.file-manager-graphql/images/602a9fd8-98a1-4ab6-a060-d461f3cda818___ad50dac7724324753447db3e3b2be3bc.jpg"
          alt="Image"
          width="100%"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="flex flex-wrap justify-content-between">
            <Section
              imageUrl="https://cdn-icons-png.flaticon.com/512/114/114734.png"
              description="Tecnologia"
            />
            <Section
              imageUrl="https://cdn-icons-png.flaticon.com/512/1308/1308307.png"
              description="Bebidas"
            />
            <Section
              imageUrl="https://cdn-icons-png.flaticon.com/512/4888/4888268.png"
              description="Frutas y Verduras"
            />
            <Section
              imageUrl="https://cdn-icons-png.flaticon.com/512/6944/6944060.png"
              description="Cuidado del hogar"
            />
            <Section
              imageUrl="https://cdn-icons-png.flaticon.com/512/3050/3050113.png"
              description="Lacteos y Huevo"
            />
            <Section
              imageUrl="https://cdn-icons-png.flaticon.com/512/992/992784.png"
              description="Panaderia"
            />
            <Section
              imageUrl="https://cdn-icons-png.flaticon.com/512/822/822225.png"
              description="Bebes y niños"
            />
            <Section
              imageUrl="https://cdn-icons-png.flaticon.com/512/2600/2600213.png"
              description="Despensa"
            />
            <Section
              imageUrl="https://cdn-icons-png.flaticon.com/512/2372/2372135.png"
              description="Congelados"
            />
            <Section
              imageUrl="https://cdn-icons-png.flaticon.com/512/5484/5484728.png"
              description="Carnes y Chorizos"
            />
          </div>
        </div>
      </div>
    </>
  );
}
