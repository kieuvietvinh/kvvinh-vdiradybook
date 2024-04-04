import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MySlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src="https://ocopmart.org/static/media/files/banners/s800_800/889_1672726212_22463b3c6c441315.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://ocopmart.org/static/media/files/banners/s800_800/815_1672725428_22663b3c3b428b25.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://ocopmart.org/static/media/files/banners/s800_800/874_1672725493_90363b3c3f5e2b85.jpg"
          alt=""
        />
      </div>
    </Slider>
  );
}
export default MySlider;
