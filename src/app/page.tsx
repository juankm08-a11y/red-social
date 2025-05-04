"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [contenido, setContenido] = useState("");
  const handleMensajes = () => alert("Has recibido un mensaje");

  const handleNotificaciones = () => alert("Has recibido una notificacion");

  const handlePerfil = () => alert("Has creado tu perfil");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/publicaciones`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contenido }),
      }
    );

    if (res.ok) {
      alert("Publicacion enviada correctamente");
      setContenido("");
    } else {
      alert("Error al enviar publicación");
    }
  };
  return (
    <main className="w-full h-full bg-white flex flex-col justify-center items-center">
      <header>
        <nav className="gap-4 flex flex-wrap">
          <h1 className="font-bold">Red Social</h1>
          <Link href="/">Home</Link>
          <button onClick={handleMensajes} className="cursor-pointer">
            Mensajes
          </button>
          <button onClick={handleNotificaciones} className="cursor-pointer">
            Notificaciones
          </button>
          <button onClick={handlePerfil} className="cursor-pointer">
            Perfil
          </button>
        </nav>
      </header>
      <section>
        <h2 className="font-semibold text-center">Publish</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="Que estas pensando......"
              className="border-2 w-49 h-10"
              value={contenido}
              onChange={(e) => setContenido(e.target.value)}
            />
          </label>
          <button type="submit">Publicar</button>
        </form>
      </section>
      <section>
        <h2 className="font-semibold">Juan Muñoz</h2>
      </section>
    </main>
  );
}
