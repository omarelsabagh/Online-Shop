import Header from "./header/header"
import Section2 from "./section2/section2"
import Transition from "./transition/transitions"

 function Homepage() {
  const transitions  = {newArrivals:"NEW ARRIAVALS"}
  return (
    <>
   <Header/>
   <Section2/>
   <Transition transName={transitions.newArrivals}/>
    </>
  )
}

export default Homepage