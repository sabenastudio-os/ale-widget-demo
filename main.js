// 1️⃣ Importa React y ReactDOM desde un CDN compatible
import * as React from "https://cdn.skypack.dev/react@18.2.0"
import * as ReactDOMClient from "https://cdn.skypack.dev/react-dom@18.2.0/client"

// 2️⃣ Importa el componente del widget desde Framer
import Chat_widget from "https://framer.com/m/Chat-widget-BXta.js@sFdHTLPKtTUWrctMXXMn"

// 3️⃣ Espera a que el DOM esté cargado antes de montarlo
window.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("chat-widget-root")
  if (!rootElement) {
    console.error("❌ No se encontró el contenedor #chat-widget-root")
    return
  }

  // 4️⃣ Monta el componente en el div
  const root = ReactDOMClient.createRoot(rootElement)
  root.render(React.createElement(Chat_widget))
})
