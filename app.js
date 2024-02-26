document.addEventListener('DOMContentLoaded', function() {
  Papa.parse("amazon_data.csv", {
      download: true,
      header: true,
      complete: function(results) {
          displayData(results.data, "productosAmazon");
      }
  });

  Papa.parse("mercado_data.csv", {
      download: true,
      header: true,
      complete: function(results) {
          displayData(results.data, "productosMercado");
      }
  });

  function displayData(data, containerId) {
      let dataHTML = "<table>";
      dataHTML += "<tr><th>Nombre del Producto</th><th>Precio</th></tr>";
          
      data.forEach(function(row) {
          dataHTML += `<tr><td>${row["producto"]}</td><td>${row["precio"]}</td></tr>`;
      });
      
      dataHTML += "</table>";
      document.getElementById(containerId).innerHTML = dataHTML;
  }
});

