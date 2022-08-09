import './App.css';
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
function App() {
  return (
    <div className="html">
      <Header></Header>

      <div className="body">
        <div className="filter">
          <select name="selectFilter">
            <option value="viewAll" defaultValue="selected">탈곡기</option>
            <option value="">다했다!</option>
            <option value="">해야한다..</option>
            <option value="">언제시켰냐?</option>
          </select>
        </div>
        <div className="itemContainer">
          <TodoItem></TodoItem>
        </div>
      </div>
    </div>
  )
}

export default App;
