let tbody = d3.select("tbody");

var tableData = data;

function buildTable(data){
    tbody.html("");
    
    data.forEach((dataRow) => {
        
        let row = tbody.append("tr");
        
        Object.values(dataRow).forEach((val) => {
            
            let cell = row.append("td");
            cell.text(val);
        });
    })
}

buildTable(tableData);