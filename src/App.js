import "./App.css"
import Pages from "./components/pages/Pages"
import { DataProvider } from "./components/dataContext"

function App() {
  return(
    <DataProvider>
       <Pages />
    </DataProvider>
      
  ) 
}

export default App
