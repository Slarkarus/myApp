const Question = ({text, v1, v2, v3, name}) => {
    return (
        <div class="question">
              <h2>{text}</h2>
              <div class="options">
                <label><input type="radio" name={name} value="a" /> {v1}</label>
                <label><input type="radio" name={name} value="b" /> {v2}</label>
                <label><input type="radio" name={name} value="c" /> {v3}</label>
              </div>
            </div>
      )
}
export default Question;