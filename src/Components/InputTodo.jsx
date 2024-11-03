/* eslint-disable react/prop-types */
function InputTodo({ text, handleInput, handleSubmit }) {
  return (
    <div className="input-todo">
      <label>
        <input
          type="text"
          value={text}
          onChange={(e) => handleInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.keyCode === 13) handleSubmit();
          }}
        />
        <button onClick={handleSubmit}>Add todo</button>
      </label>
    </div>
  );
}

export default InputTodo;
