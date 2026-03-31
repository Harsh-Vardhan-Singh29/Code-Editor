const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");
const output = document.getElementById("output");

function updateOutput() {
  const code = `
    <html>
    <style>${css.value}</style>
    <body>${html.value}</body>
    <script>${js.value}<\/script>
    </html>
  `;
  output.srcdoc = code;
}

html.addEventListener("input", updateOutput);
css.addEventListener("input", updateOutput);
js.addEventListener("input", updateOutput);
updateOutput();