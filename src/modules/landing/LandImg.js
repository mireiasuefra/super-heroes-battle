import imageLanding from "../../images/img-landing.jpg";

function Land() {
  return (
    <div className="landing">
      <img
        className="landing__img"
        src={imageLanding}
        alt="imagen landing"
      ></img>
    </div>
  );
}

export default Land;
