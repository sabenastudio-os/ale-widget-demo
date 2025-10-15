// ✅ React 18 desde esm.sh (funciona en Vercel y navegadores modernos)
import * as React from "https://esm.sh/react@18.2.0"
import * as ReactDOMClient from "https://esm.sh/react-dom@18.2.0/client"

// ✅ Tu componente del widget en Framer
import Chat_widget from "https://framer.com/m/Chat-widget-BXta.js@sFdHTLPKtTUWrctMXXMn"

// ✅ Espera que cargue el DOM y monta el componente
window.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("chat-widget-root")
  if (!rootElement) {
    console.error("❌ No se encontró el contenedor #chat-widget-root")
    return
  }

  const root = ReactDOMClient.createRoot(rootElement)
  root.render(React.createElement(Chat_widget))
})
