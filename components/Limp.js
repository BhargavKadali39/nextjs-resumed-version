export default function NameUs({ a, b, c }) {
  return (
    <ul>
      <li>{a}</li>
      <li>{b}</li>
      <li>{c}</li>
      <button onclick="setClipboard('{a}'">copy</button>
    </ul>
  );
}
