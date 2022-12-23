import "./App.css";

function App() {
  let data = "myFirstAssignment";
  function test() {
    alert("hello");
  }
  return (
    <>
      <div classname="App">
        <h1>My first assignment</h1>
        <button onClick={test}>Click me</button>
      </div>
    </>
  );
}

export default App;
