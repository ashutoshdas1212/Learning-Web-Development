import "./App.css";
function App() {
  let a = 2;

  return (
    <div>
      {a}
      <h1>Hello I am component</h1>
      <p style={{ backgroundColor: "blue", color: "white" }}>
        This is a tutorial of react
      </p>
    </div>
  );
}

export default App;

//inside p you know that {} braces are used for javascript , no to use normal css we have to
//use another curly braces
