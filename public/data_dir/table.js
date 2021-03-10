var tableData = data;



var table_columns = ["PassengerId", "Survived", "Predicted_Survival", "Pclass", "Name", "Sex", "Age", "SibSp", "Parch", "Fare", "Hometown", "Boarded", "Destination"]



var table = d3.select("tbody");

var pushToTable = (data) => {
    data.forEach(element => {
        var row = table.append("tr");
        table_columns.forEach(column => row.append('td').text(element[column]))
    });
}
pushToTable(tableData);