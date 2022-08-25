import React from "react";
import Slider from "react-slick";

const Information = ({ repoData, orgData, username }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    className: "mx-4",
    adaptiveHeight: true
  };

  console.log(repoData);
  return (
    <>
      <div className="">
        <h4 className="text-center mb-4">Repositories</h4>
        <Slider {...settings}>
          {repoData.map((cur) => (
            <div className="card" key={cur.url}>
              <div className="card-body">
                <h5 className="card-title">@{username}</h5>
                <p className="card-text">
                  <strong>Repo Name:</strong> {cur.name}
                </p>
                <a href={cur.url} className="btn btn-primary">
                  <strong>Url:</strong> <em>{cur.url}</em>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <br />
      <br />
      <br />
      <div className="">
        <h4 className="text-center mb-4">Organizations</h4>
        <Slider {...settings}>
          {orgData.map((cur) => (
            <div className="card" key={cur.name}>
              <div className="card-body">
                <h5 className="card-title">@{username}</h5>
                <p className="card-text">
                  <strong>ORG Name:</strong> {cur.name}
                </p>
                {/* <a href={cur.url} className="btn btn-primary">
                  <strong>Url:</strong> <em>{cur.url}</em>
                </a> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Information;
