import { lazy, Suspense } from "react"
//import Child from "./Child"

// lazy loading
// => weback génère en sortie un fichier .js distinct (non placé dans bundle.js)
const Child = lazy(() => import("./Child") ) 

const DemoLazyLoading = () => {
  return (
    <Suspense fallback={<h3>Chargement...</h3>}>
      <Child />
    </Suspense>
  )
}

export default DemoLazyLoading