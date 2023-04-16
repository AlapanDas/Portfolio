function tableToCSV() {
 
  // Variable to store the final csv data
  var csv_data = [];

  // Get each row data
  var rows = document.getElementsByTagName('tr');
  for (var i = 0; i < rows.length; i++) {

      // Get each column data
      var cols = rows[i].querySelectorAll('td,th');

      // Stores each csv row data
      var csvrow = [];
      for (var j = 0; j < cols.length; j++) {

          // Get the text data of each cell
          // of a row and push it to csvrow
          csvrow.push(cols[j].innerHTML);
      }

      // Combine each column value with comma
      csv_data.push(csvrow.join(","));
  }

  // Combine each row data with new line character
  csv_data = csv_data.join('\n');

  // Call this function to download csv file 
  downloadCSVFile(csv_data);

}