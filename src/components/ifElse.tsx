import { useEffect, useState, createContext, useContext } from "react";

// Context for managing the condition state
const IfContext = createContext(false);

export function If({ is, children}:{is: boolean, children: React.ReactNode}) {
  const [isConditionTrue, setIsConditionTrue] = useState(is);

  useEffect(() => {
    setIsConditionTrue(is);
  }, [is]);

  return (
    <IfContext.Provider value={isConditionTrue}>
      {is && children}
    </IfContext.Provider>
  );
}

export function Else({ children }:{children: React.ReactNode}) {
  const isConditionTrue = useContext(IfContext);
  return !isConditionTrue ? children : null;
}

// Usage Example
// function MyComponent() {
//   return (
//     <>
//       <If is={false}>
//         <p>This is visible when true!</p>
//       </If>
//       <Else>
//         <p>This is shown when false.</p>
//       </Else>
//     </>
//   );
// }