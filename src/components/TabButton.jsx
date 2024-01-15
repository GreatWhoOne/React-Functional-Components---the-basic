export default function TabButton({ btnName, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {btnName}
      </button>
    </li>
  );
}
