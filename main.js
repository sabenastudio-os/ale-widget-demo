// Importa tu widget desde Framer (ya compilado)
import Chat_widget from "https://framer.com/m/Chat-widget-BXta.js@sFdHTLPKtTUWrctMXXMn";

// Espera a que el DOM esté listo
window.addEventListener("DOMContentLoaded", async () => {
  const root = document.getElementById("chat-widget-root") || document.body;

  // Verificamos si el módulo cargó
  const status = document.createElement("p");
  status.style.textAlign = "center";
  status.style.marginTop = "40px";
  status.style.color = "#666";

  try {
    if (typeof Chat_widget === "function") {
      status.innerText = "✅ Widget detectado. Iniciando...";
      root.appendChild(status);

      Chat_widget({
        backendUrl: "https://alex-backend.vercel.app",
        accentColor: "#3B82F6",
        position: "bottom-right",
        fontFamily: "Inter, sans-serif",
        backgroundColor: "#FAFAFA",
        borderRadius: 20,
      });
    } else {
      status.innerText = "❌ El widget no se pudo importar desde Framer.";
      root.appendChild(status);
    }
  } catch (err) {
    status.innerText = "💥 Error al iniciar el widget: " + err.message;
    root.appendChild(status);
  }
});
