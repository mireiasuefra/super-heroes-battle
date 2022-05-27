import imageLanding from "../../images/img-landing.jpg";

function Land() {
  return (
    <div className="landing">
      <img
        className="landing__img"
        src={imageLanding}
        alt="imagen landing"
      ></img>
      <p className="landing__text">
        Aquí podrás conocer que super héroe es mas fuerte, mas inteligente, etc.
        Lo puedes hacer haciendo que peleen o viendo la lista de super héroes.
      </p>
    </div>
  );
}

export default Land;
