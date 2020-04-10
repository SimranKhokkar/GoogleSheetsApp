
$('#getData').on('click', (e) => {
    e.preventDefault();
    let formdata = $('#linkform').serialize();
    $.ajax({
        'url': '/sheetData',
        'type': 'POST',
        'data': formdata,
        'dataType': 'json',
    success: (result) => {
        $('#modalForm').hide();
        var resultData = result.result.values;
        var headers = "";
        var rows = "";
        var sum = 0;

        var rowHeaders = resultData[0];
        for(var i = 0; i < rowHeaders.length; i++) {
            headers += `<th>${rowHeaders[i]}</th>`;           
        }
        $(headers).appendTo("#sheetData thead");
        var indexOfColumn = rowHeaders.indexOf($('#columnName').val()); 
        
        for (var i = 1; i < resultData.length; i++) {
            var rowlength = resultData[i].length;
            rows += "<tr>";
            for(var j = 0; j < rowlength; j++) {
                if(j === indexOfColumn){
                    sum = sum + parseFloat(resultData[i][j]);
                }
            rows += `<td>${resultData[i][j]}</td>`;
            }
            rows += "</tr>";
            }
            $(rows).appendTo("#sheetData tbody");   
            
            if($('#columnName').val() !== '') {
                $('#sum').show();
                $('#sum').append(`Sum: ${sum}`);
                $('#average').show();
                $('#average').append('Average: ' +sum/(resultData.length - 1));
            }
    },
    error: () => {
        $('#formError').show().html('Retrieval of data failed, Please try again');        
    }
});
});