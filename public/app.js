function storeTask() {
  console.log('Stores the tasks');
  // Javascript
  let taskDescription = document.getElementById('task_description').value;
  console.log('task Description', taskDescription);

  let payload = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ description: taskDescription })
  };
  fetch('/tasks', payload)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw "Error en la llamada Ajax";
      }
    })
    .then(task => {
      document.getElementById('task_description').value = '';
      addTask(task);
    })
    .catch(error => {
      console.log('Error: ', error);
    })
}

function addTask(task) {
  let html =
  `
  <div id="task${task.id}" class="card my-3">
      <div class="card-body">
      <p class="card-text">${task.description}</p>
      <input type="button" id="done${task.id}" onclick="doneTask(${task.id})" value="Done" class="btn btn-success">
      <input type="button" id="delete${task.id}" onclick="deleteTask(${task.id})" value="Delete" class="btn btn-danger">
      </div>
  </div>
  `;
  let node = document.createRange().createContextualFragment(html);
  document.getElementById('task_list').prepend(node);
}

function deleteTask( taskId ){
  let body = {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: taskId })
  }

  fetch('/delete', body)
  .then(response => {
      if (response.ok) {
      return response.json();
      } else {
      throw "Error en la llamada Ajax";
      }
  })
  .then(id => {
      deleteTask(id);
  })
  .catch(error => {
      console.log('Error: ', error);
  })

  function deleteTask(data) {
      document.getElementById('task'+data.id).remove()
  }
}

function doneTask( taskId ){
  let body = {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: taskId })
  }

  fetch('/update', body)
  .then(response => {
      if (response.ok) {
      return response.json();
      } else {
      throw "Error en la llamada Ajax";
      }
  })
  .then(id => {
      doneTask(id);
  })
  .catch(error => {
      console.log('Error: ', error);
  })

  function doneTask(data) {
      document.getElementById('task'+data.id).classList.add("bg-secondary")
      document.getElementById('done'+data.id).remove()
  }
}

