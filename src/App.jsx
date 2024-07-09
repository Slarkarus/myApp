import logo from './logo.svg';
import './App.css';
import Question from './components/Question3.jsx';

const App = () => {
  return (
    <div>
      <h1>Тест по математике</h1>

      <form id="quizForm">
        
        <Question text="Вопрос 1: сколько будет 2 + 2?" v1="3" v2="4" v3="5" name="q1"/>
        <Question text="Вопрос 1: сколько будет 4 * 10?" v1="30" v2="40" v3="50" name="q2"/>
        

        <button type="button" onClick="submitTest()">Завершить тест</button>
      </form>

      <div id="results">
        <h2>Результаты теста</h2>
        <p id="resultMessage"></p>
      </div>

     

    </div>
  );
}

const Comp = () => {
  return (
    <div>
        <h2>Title 2</h2>
    </div>

  )
}

export default App;
