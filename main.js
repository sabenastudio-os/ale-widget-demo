// Importa tu widget desde Framer (la versión compilada)
import Chat_widget from "https://framer.com/m/Chat-widget-BXta.js@sFdHTLPKtTUWrctMXXMn";

// Espera a que el DOM cargue antes de montar el widget
window.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Cargando widget...");

  // Crea un contenedor si no existe
  const root = document.getElementById("chat-widget-root") || document.body;

  // Inicializa el widget con tus parámetros
  Chat_widget({
    backendUrl: "https://alex-backend.vercel.app", // tu backend real
    accentColor: "#3B82F6",
    position: "bottom-right",
    fontFamily: "Inter, sans-serif",
    backgroundColor: "#FAFAFA",
    borderRadius: 20,
  });

  console.log("💬 Widget insertado correctamente.");
});
