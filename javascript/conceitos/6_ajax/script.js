
// AJAX

const xhttp = new XMLHttpRequest()

// método
xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(this.responseText)
      console.log(response[0])
   }
}

// forma de abrir a conexão
xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true )

// forma de enviar a requisição
xhttp.send()