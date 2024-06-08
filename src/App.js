import React from "react";


<<<<<<< HEAD
// TODO input value two way binding4




export const App = () => {
  const [shouldShowText, setShouldShowText] = useState(false);

  const onChange = (e) => {
    console.log(e.target.value);
  };

  const show = () => {
    setShouldShowText((prevShowText) => !prevShowText);
  };

  return (
    <>
      <button onClick={show}>show</button>
      {shouldShowText && <span>text</span>}
      <input type="text" onChange={onChange} />
      <Playstation />
      <Eggs />
      <Ground />
    </>
  );
};


// 
=======

export const App = () => {
    return <div>hello world!</div>
}
>>>>>>> 9050ccc125471c7719c98eafbd3527df654c9def
