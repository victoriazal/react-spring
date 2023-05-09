import './App.css';
import { animated, useSpring } from '@react-spring/web';
function App() {
  const springs = useSpring({
    from: { x: 0 },
    to: {
      x: 300,
    }
  })

  return (
    <animated.div style={{...springs}} className="brick">
    </animated.div>
  );
}

export default App;
