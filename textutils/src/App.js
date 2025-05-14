
import './App.css';
//import Counter from './Components/counter/Counter'
import TodoApp from './Components/todo/Todoapp'

function App() {
 
  return (
    <div className="App">
      <TodoApp />
      {/* <LoginComponent /> */}
    </div>
  );
    function palyingwithProps({property1,property2})
    {
      console.log(property1)
      console.log(property2)
      return (
        <div>Props</div>
      )
    }
  
}

export default App;
