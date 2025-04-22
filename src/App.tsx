import Page from "./components/page"
import { CustomRoutes } from "./types"


function App({routes}: {routes:CustomRoutes[]}) {
  return (
    <>
      <div className="absolute inset-0 h-screen bg-[url(./assets/map.svg)] -z-1" title="Maps simulator"></div>    
      <Page routes={routes}/>
    </>
  )
}

export default App
