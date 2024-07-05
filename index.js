const todos = {
    "results": [
        {
            "title": "Estudiar Js",
            "priority": "alta",
            "isDone": false
        },
        {
            "title": "Estudiar CSS",
            "priority": "alta",
            "isDone": true
        },
        {
            "title": "Estudiar OOP",
            "priority": "media",
            "isDone": false
        },
        {
            "title": "Estudiar IA",
            "priority": "baja",
            "isDone": false
        }
    ]
  };
  
  // Parte 1: Imprimir la lista de títulos en la consola
  todos.results.forEach(todo => {
    console.log(todo.title);
  });
  
  // Parte 2: Crear una tabla con todos los elementos 'Todos' y sus propiedades
  function createTable(todos) {
    const table = document.createElement('table');
    table.classList.add('table', 'table-bordered', 'table-striped');
  
    // Crear encabezado de la tabla
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
  
    const headers = ['Title', 'Priority', 'Is Done'];
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
  
    thead.appendChild(headerRow);
    table.appendChild(thead);
  
    // Crear cuerpo de la tabla
    const tbody = document.createElement('tbody');
  
    todos.results.forEach(todo => {
        const row = document.createElement('tr');
  
        const titleCell = document.createElement('td');
        titleCell.textContent = todo.title;
        row.appendChild(titleCell);
  
        const priorityCell = document.createElement('td');
        priorityCell.textContent = todo.priority;
        row.appendChild(priorityCell);
  
        const isDoneCell = document.createElement('td');
        isDoneCell.textContent = todo.isDone ? 'Yes' : 'No';
        row.appendChild(isDoneCell);
  
        tbody.appendChild(row);
    });
  
    table.appendChild(tbody);
  
    return table;
  }
  
  // Insertar la tabla en el documento
  document.getElementById('todosTable').appendChild(createTable(todos));