import Slider from "react-slick";
import reviews from "../../data/review.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "../../components/common/SectionTitle";
import ShowStarRating from "../../components/common/ShowStarRating";
import Container from "../../components/common/Container";

const Reviews = () => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" bg-[#f9f9fb] py-28">
      <Container>
        <SectionTitle>
          What Our <span className=" text-primary">User</span> Says
        </SectionTitle>
        <div className="mt-10 md:mt-24">
          <Slider {...settings}>
            {reviews?.map((item, index) => (
              <div key={index} className=" p-2 xl:p-5 ">
                <div className=" bg-white p-5">
                  <div className=" flex justify-start gap-3">
                    <img
                      src={item.img}
                      alt="avatar"
                      className=" h-14 w-14 rounded-full"
                    />
                    <div className="">
                      <h1 className=" font-semibold text-lg">{item.name}</h1>
                      <h3 className=" text-xs">{item.profession}</h3>
                    </div>
                  </div>
                  <h5 className=" mt-2 font-semibold">{item.review}</h5>
                  <div className=" mt-2">
                    <ShowStarRating rating={item.rating} />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Reviews;
