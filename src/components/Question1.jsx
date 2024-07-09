import QuestionText from './QuestionText.jsx'
const Question1 = () => {
    return (
      <div class="question">
            <QuestionText text="Вопрос 1: Сколько будет 2 + 2?"/>
            <div class="options">
              <label><input type="radio" name="q1" value="a" /> 3</label>
              <label><input type="radio" name="q1" value="b" /> 4</label>
              <label><input type="radio" name="q1" value="c" /> 5</label>
            </div>
          </div>
    )
  }
export default Question1;