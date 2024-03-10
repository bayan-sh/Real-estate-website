import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import HouseContextProvider  from "./components/HouseContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <HouseContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </HouseContextProvider>
)
