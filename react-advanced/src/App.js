import { useState } from "react";

import Counter from "./DemoUseStateAndUseEffect/Counter";
import Issues from "./DemoUseStateAndUseEffect/Issues";
import IssuesFc from "./DemoUseStateAndUseEffect/IssuesFc";
import TodoApp from "./DemoMemoization/Todo/App";
import TodoAppMemo from "./DemoMemoization/TodoMemo/App";
import DemoHOC from "./DemoHOC";
import DemoCustomHook from "./DemoCustomHook";
import DemoContext from "./DemoContext/components";
import DemoUseRef from "./DemoUseRef";
import DemoUseReducer from "./DemoUseReducer";
import DemoSuspenseSwr from "./DemoSuspenseSwr/components";
import DemoLazyLoading from "./DemoLazyLoading";
import DemoPortal from "./DemoPortal";
import DemoTesting from "./DemoTesting/ShowInfo";

const components = [
  { label: "Counter", component: <Counter /> },
  { label: "Issues", component: <Issues /> },
  { label: "IssuesFc", component: <IssuesFc /> },
  { label: "TodoApp", component: <TodoApp /> },
  { label: "TodoAppMemo", component: <TodoAppMemo /> },
  { label: "High Order Component", component: <DemoHOC /> },
  { label: "Hook personnalisé", component: <DemoCustomHook /> },
  { label: "DemoContext", component: <DemoContext /> },
  { label: "DemoUseRef", component: <DemoUseRef /> },
  { label: "Hook useReducer", component: <DemoUseReducer /> },
  { label: "Suspense & Swr", component: <DemoSuspenseSwr /> },
  { label: "Lazy Loading", component: <DemoLazyLoading /> },
  { label: "Portal", component: <DemoPortal /> },
  { label: "Testing", component: <DemoTesting /> },
]

// composant racine
function App() {

  const [selectedComponent, setSelectedComponent] = useState(null)

  const handleChange = e => {
    let componentIndex = 
      e.target.value === "void" ? null : Number(e.target.value)
    
    setSelectedComponent(componentIndex)
  }

  let label = ""
  let component = <div />
  if (selectedComponent !== null) {
    label = components[selectedComponent].label
    component = components[selectedComponent].component
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>React concepts avancés</h1>
 
      <select onChange={handleChange}>
        <option value="void">Choix du composant à charger</option>
        { components.map((c, i) => (
          <option key={i} value={i}>{c.label}</option>
        )) }
      </select>
      
      <div style={{marginTop: 20}}>
        <h2 style={{color: "#45aef5"}}>{ label }</h2>
        <div>{ component }</div>
      </div>
  
    </div>
  );
}

export default App;
