function napraviTablicuMnozenja() {
  var velicina = 10;

  document.write("<table>");

  // Zaglavlje kolona
  document.write("<tr>");
  document.write("<th>X</th>");
  for (var j = 1; j <= velicina; j++) {
    document.write("<th>" + j + "</th>");
  }
  document.write("</tr>");

  // Redovi tablice
  for (var i = 1; i <= velicina; i++) {
    if (i % 2 === 0) {
      document.write('<tr class="parni">');
    } else {
      document.write("<tr>");
    }

    document.write("<th>" + i + "</th>");

    for (var j = 1; j <= velicina; j++) {
      document.write("<td>" + (i * j) + "</td>");
    }

    document.write("</tr>");
  }

  document.write("</table>");
}