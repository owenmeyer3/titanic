

var filter = {
    Age: localStorage.getItem("age"),
    Sex: localStorage.getItem("sex"),
    Pclass: localStorage.getItem("pclass")
  };

var filtered_data

filtered_data= data.filter(function(item) {
    for (var key in filter) {
      if (item[key] === undefined || item[key] != filter[key])
        return false;
    }
    return true;
  });
  


var table_columns = ["PassengerId", "Survived", "Predicted_Survival", "Pclass", "Name", "Sex", "Age", "SibSp", "Parch", "Fare", "Hometown", "Boarded", "Destination"]



var table = d3.select("tbody");

var pushToTable = (data) => {
    data.forEach(element => {
        var row = table.append("tr");
        table_columns.forEach(column => row.append('td').text(element[column]))
    });
}
pushToTable(filtered_data);