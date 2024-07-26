import './App.css';

export default function Todo({ item, handleCancelfn }) {
  function handleCancel() {
    handleCancelfn(item);
  }

  return (
    <div className="todo">
      <h3>{item}</h3>
      <span className="cancel-button" onClick={handleCancel}>
        &times;
      </span>
    </div>
  );
}
