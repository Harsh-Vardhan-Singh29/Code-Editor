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



html.value = localStorage.getItem("html") || "";
css.value = localStorage.getItem("css") || "";
js.value = localStorage.getItem("js") || "";


function saveCode() {
  localStorage.setItem("html", html.value);
  localStorage.setItem("css", css.value);
  localStorage.setItem("js", js.value);
}

html.addEventListener("input", saveCode);
css.addEventListener("input", saveCode);
js.addEventListener("input", saveCode);
updateOutput();