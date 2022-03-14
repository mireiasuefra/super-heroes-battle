import imageLanding from "../../images/img-landing.jpg";

function Land() {
  return (
    <div className="landImg">
      <img
        className="landImg__img"
        src={imageLanding}
        alt="imagen landing"
      ></img>
    </div>
  );
}

export default Land;
