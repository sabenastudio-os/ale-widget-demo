// Importa tu widget directamente desde Framer
import Chat_widget from "https://framer.com/m/Chat-widget-BXta.js@sFdHTLPKtTUWrctMXXMn"

// Importa React y el método createRoot desde un CDN compatible
import React from "https://esm.sh/react@18"
import { createRoot } from "https://esm.sh/react-dom@18/client"

// Busca el div donde se debe montar el chat
const container = document.getElementById("chat-widget-root")

// Crea el “root” de React y monta el componente del widget
const root = createRoot(container)
root.render(React.createElement(Chat_widget))
