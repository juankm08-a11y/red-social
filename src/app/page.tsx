"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const handleMensajes = () => {
    alert("Has recibido un mensaje");
  };

  const handleNotificaciones = () => {
    alert("Has recibido una notificacion");
  };

  const handlePerfil = () => {
    alert("Has creado tu perfil");
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
        <form>
          <label>
            <input
              type="text"
              placeholder="Que estas pensando......"
              className="border-2 w-49 h-10"
            />
          </label>
        </form>
      </section>
      <section>
        <p>Lorem ipsum</p>
      </section>
    </main>
  );
}
