import brand1 from "../assets/img/brand1.jpg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import brand3 from "../assets/img/brand3.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Brands = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="brands" id="brands">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Clients</h2>
              <p>
                I’ve forged deep, trust-based partnerships with brands,
                creators, and organizations—relationships that fuel creativity
                and drive our shared success.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={brand1} alt="Image" />
                  <h5>Team Atlas</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Vantage Logistics</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Prestige Fitness</h5>
                </div>
                <div className="item">
                  <img src={brand3} alt="Image" />
                  <h5>Benny's barbership</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
