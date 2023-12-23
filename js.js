// js.js

// Function to extract Lua code snippet from HTML content
function extractLuaCode(htmlContent) {
  var beginComment = "<!-- BEGIN LUA CODE -->";
  var endComment = "<!-- END LUA CODE -->";

  var startIndex = htmlContent.indexOf(beginComment) + beginComment.length;
  var endIndex = htmlContent.indexOf(endComment);

  if (startIndex !== -1 && endIndex !== -1) {
    return htmlContent.substring(startIndex, endIndex);
  } else {
    return "Code snippet not found.";
  }
}

// Fetch the HTML content and display Lua code
fetch("index.html")
  .then(response => response.text())
  .then(htmlContent => {
    var luaCode = extractLuaCode(htmlContent);
    document.getElementById("luaCodePlaceholder").textContent = luaCode;

    // You can perform further actions with the Lua code here
  })
  .catch(error => console.error("Error fetching HTML:", error));
