function dispararLigacao() {
            
    var numero = document.getElementById('numero').value;
    var qtdVezes = document.getElementById('qtdVezes').value;
    
    var i = 0;

    while (i < qtdVezes) {
        
        console.log("Entrou aqui pela " + i + "º vez" );
        
        var settings = {
        "url": "https://api-v2.nvoip.com.br/v2/calls",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json",
            "Authorization":  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MjI1NzU3ODMsInVzZXJfbmFtZSI6ImdhYnJpZWwuZHV0cmFAdmlhbm5hc2VtcHJlLmNvbS5iciIsImF1dGhvcml0aWVzIjpbIkNMSUVOVEUiXSwianRpIjoiNzA1ODliNDEtZTg1ZS00ODlhLWIwMjktYjc0MWUyNGE3MmQyIiwiY2xpZW50X2lkIjoiTnZvaXBBcGlWMiIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdfQ.I8zvghT8jSDd7yKV4i7trpyvAZMNrh-0Toxml-weUDA"
        },
        "data": JSON.stringify({
            "caller": "37575001",
            "called": numero
        }),
        };

        $.ajax(settings).done(function (response) {
        console.log(response);
        });

       i++;
    }
}