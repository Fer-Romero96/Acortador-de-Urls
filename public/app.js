function storeUrl() {
  console.log('Stores the urls');
  // Javascript
  let urlDescription = document.getElementById('url_description').value;
  console.log('url Description', urlDescription);

  let payload = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ description: urlDescription })
  };
  fetch('/urls', payload)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw "Error en la llamada Ajax";
      }
    })
    .then(url => {
      document.getElementById('url_description').value = '';
      addUrl(url);
    })
    .catch(error => {
      console.log('Error: ', error);
    })
}

function addUrl(url) {
  let html =
  `
    <div id="url${url.id}" class="card my-3">
      <div class="card-body">
      <p class="card-text">Url Original: ${url.description}</p>
      <p class="card-text">New Url: ${url.newDescription}</p>
      </div>
  </div>
  `;
  let node = document.createRange().createContextualFragment(html);
  document.getElementById('url_list').prepend(node);
}
