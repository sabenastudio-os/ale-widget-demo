// Importamos tu widget de Framer (ya compilado)
import Chat_widget from "https://framer.com/m/Chat-widget-BXta.js@sFdHTLPKtTUWrctMXXMn";

// Creamos el contenedor donde se insertará el chat
const widgetContainer = document.createElement("div");
widgetContainer.style.position = "fixed";
widgetContainer.style.bottom = "20px";
widgetContainer.style.right = "20px";
document.body.appendChild(widgetContainer);

// Iniciamos el widget
Chat_widget({
  backendUrl: "https://alex-backend.vercel.app", // tu backend real
  accentColor: "#3B82F6",
  position: "bottom-right",
});
