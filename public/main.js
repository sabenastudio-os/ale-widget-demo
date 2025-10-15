// ✅ Importa React y ReactDOM desde JSPM (resuelve jsx-runtime)
import * as React from "https://ga.jspm.io/npm:react@18.2.0/index.js"
import * as ReactDOMClient from "https://ga.jspm.io/npm:react-dom@18.2.0/client.js"

// ✅ Importa tu widget de Framer
import Chat_widget from "https://framer.com/m/Chat-widget-BXta.js@sFdHTLPKtTUWrctMXXMn"

// ✅ Monta el widget una vez cargado el DOM
window.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("chat-widget-root")
  if (!rootElement) {
    console.error("❌ No se encontró el contenedor #chat-widget-root")
    return
  }

  const root = ReactDOMClient.createRoot(rootElement)
  root.render(React.createElement(Chat_widget))
})
