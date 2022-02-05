import imageLanding from "../../images/img-landing.jpg";

function Land() {
  return (
    <div className="LandImg">
      <img
        className="LandImg__img"
        src={imageLanding}
        alt="imagen landing"
      ></img>
    </div>
  );
}

export default Land;
