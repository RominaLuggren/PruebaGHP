import React, { useState } from "react";

const Contacto = () => {
  // estado para los campos del formulario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  // función para enviar el formulario
  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log(`Nombre: ${nombre}, Email: ${email}, Mensaje: ${mensaje}`);
    // acá podemos poner la consulta a una BBDD para guardar los datos
  };

  return (
    <section id="contacto" className="contacto">
      <h2>Contáctanos</h2>
      <form onSubmit={manejarEnvio}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre} // valor del estado
          onChange={(e) => setNombre(e.target.value)} // actualizamos el estado al nuevo valor
          required
        />

        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contacto;
