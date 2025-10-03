import { memo, useCallback, useEffect, useState } from 'react';
import './App.css';
import Child1 from './components/Child1';
import Child4 from './components/Child4';
// import { StyledComponents } from './components/StyledComponents';
// import { StyledJsx } from './components/StyledJsx';
// import { ColoredMessage } from './components/ColoredMessage';
// import { CssModules } from "./components/CssModules";

export const App = memo(() => {
  console.log("App Rendering");
  
  const [num, setNum] = useState(0);

  // useEffect(() => {
  //   console.log("副作用");
  // },[num]);

  const onClickButton = () => {
    setNum(num + 1);
    // console.log("レンダリング");
  };

  const onClickReset = useCallback(() => {
    setNum(0);
  }, []);

  return (
    <>
      <button onClick={onClickButton}>Button</button>
      <p>{num}</p>
      <Child1 onClickReset={onClickReset} />
      <Child4 />
      {/* {console.log("test")} */}
      {/* <h1 style={{color: "red"}}>こんにちは！</h1>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p> */}
      {/* <CssModules /> */}
      {/* <StyledJsx /> */}
      {/* <StyledComponents /> */}
    </>
  );
});

export default App;
