#!/bin/zsh
mkdir t$1
mkdir t$1/js
mkdir t$1/css
touch t$1/index.html t$1/js/script.js t$1/css/style.css
echo "<!DOCTYPE html>
<html lang="en">

<head>
  <title>$2</title>
  <meta charset=\"utf-8\">
  <meta name=\"description\" content=\"t$1. $2\">
  <meta name=\"author\" content=\"Oleksiy Nechayev\">
  <meta name=\"keywords\" content=\"front-end, frontend, html,
java script, javascript js, c, css, html5, css3\">
  <meta name=\"viewport\" content=\"width=device-width, initial-scale-1\">
   <link rel=\"stylesheet\" href=\"./css/style.css\">
</head>

<body>
  <h1>$2</h1>
  <script src=\"js/script.js\"></script>
</body>

</html>" >> t$1/index.html

echo '"use strict"\n' >> t$1/js/script.js
