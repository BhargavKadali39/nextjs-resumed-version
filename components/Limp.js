export default function NameUs({ a, b, c }) {
  return (
    <ul>
      <li>{a}</li>
      <li>{b}</li>
      <li>{c}</li>
      <button onclick="setCl('{a}')">copy</button>
    </ul>
  );
  function setCl(value) {
    var tempInput = document.createElement('input');
    tempInput.style = 'position: absolute; left: -1000px; top: -1000px';
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Copied');
  }
}
