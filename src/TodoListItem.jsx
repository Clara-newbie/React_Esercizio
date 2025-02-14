export default function TodoListItem({ item, handleRemove }) {
  return (
    <div>
      <li>{item}</li>
      <button
        type="button"
        onClick={() => {
          handleRemove(item);
        }}
      >
        Remove
      </button>
    </div>
  );
}
