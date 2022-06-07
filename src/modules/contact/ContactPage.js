function ContactPage() {
  return (
    <form
      action="https://formspree.io/"
      method="post"
      className="form"
    >
      <label htmlFor="name" className="form__label">
        Nombre y Apellidos
      </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Ejm: Mireia Suero"
        required
      ></input>

      <label htmlFor="email" className="form__label">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        required
        placeholder="nombre.apellidos@mail.com"
      />
      <label htmlFor="message" className="form__label">
        Mensaje
      </label>
      <textarea name="message" id="message" required></textarea>

      <button className="form__btn" type="submit" name="submit" id="submit ">
        Enviar
      </button>
    </form>
  );
}

export default ContactPage;
