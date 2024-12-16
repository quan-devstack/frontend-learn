const apiUrl = "http://localhost:8000";
window.addEventListener("DOMContentLoaded", () => getTodos());
let currentId = 0;

const getTodos = async () => {
  try {
    const response = await fetch(`${apiUrl}/todos`);
    if (!response.ok) {
      console.error("Render error");
    } else {
      const todo = await response.json();
      if (todo.length > 0) {
        currentId = Math.max(...todo.map((td) => td.id));
      }
      const todoList = document.querySelector(".todo__list ul");
      todoList.innerHTML = `
      ${todo
        .map(
          ({ id, name, completed }) => `
            <li>
                <div class="todo__content" data-id="${id}" onclick="toggleStatus(${id})">
                    <p style="text-decoration: ${
                      completed ? "line-through" : "none"
                    }; color: ${completed ? "#cacfd2" : "#000"};">
                      ${id}. ${name}
                    </p>
                </div>
                <div class="todo__actions">
                    <i class="fa-solid fa-pen" onclick="getUpdate(${id})"></i>
                    <i class="fa-solid fa-trash" onclick="deleteTodo(${id})"></i>
                </div>
            </li>
        `
        )
        .join(" ")}
        `;
    }
  } catch (error) {
    console.error("Render todo error: " + error);
  }
};

const filterTodo = async () => {
  const filter = document.querySelector("#filter").value;
  try {
    const response = await fetch(`${apiUrl}/todos`);
    if (!response.ok) {
      console.error("Failed to fetch todos.");
      return;
    }

    const todo = await response.json();
    const filteredTodos = todo.filter((todo) => {
      if (filter === "done") {
        return todo.completed === true;
      }

      if (filter === "todo") {
        return todo.completed === false;
      }
      return true;
    });
    const todoList = document.querySelector(".todo__list ul");
    todoList.innerHTML = filteredTodos
      .map(
        ({ id, name, completed }) => `
            <li>
                <div class="todo__content" data-id="${id}" onclick="toggleStatus(${id})">
                    <p style="text-decoration: ${
                      completed ? "line-through" : "none"
                    }; color: ${completed ? "#cacfd2" : "#000"};">
                      ${id}. ${name}
                    </p>
                </div>
                <div class="todo__actions">
                    <i class="fa-solid fa-pen" onclick="getUpdate(${id})"></i>
                    <i class="fa-solid fa-trash" onclick="deleteTodo(${id})"></i>
                </div>
          </li>
      `
      )
      .join(" ");
  } catch (error) {
    console.error("Filter error: " + error);
  }
};

const addTodo = async () => {
  currentId += 1;
  const inputName = document.querySelector(".todo__form-ip");
  try {
    const response = await fetch(`${apiUrl}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: String(currentId),
        name: inputName.value,
        completed: false,
      }),
    });
    if (!response.ok) {
      console.error("Add todo error");
    } else {
      const newUser = await response.json();
      const todoList = document.querySelector(".todo__list ul");
      const li = document.createElement("li");
      li.innerHTML = `
        <div class="todo__content">
            <p>${newUser.id}. ${newUser.name}</p>
            <div class="todo__actions">
                <i class="fa-solid fa-pen"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
      `;
      todoList.appendChild(li);
    }
  } catch (error) {
    console.error("Add todo error: " + error);
  }
};

const getUpdate = async (id) => {
  const inputName = document.querySelector(".todo__form-ip");
  const saveBtn = document.querySelector(".todo__form-btn");

  const response = await fetch(`${apiUrl}/todos/${id}`);
  if (!response.ok) {
    console.error("Not found todo");
    return false;
  } else {
    const todo = await response.json();
    inputName.value = todo.name;
    saveBtn.innerText = "Save";
    saveBtn.setAttribute("onclick", `updateTodo(${id})`);
  }
};

const updateTodo = async (id) => {
  const inputName = document.querySelector(".todo__form-ip");
  try {
    const response = await fetch(`${apiUrl}/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: currentId,
        name: inputName.value,
        completed: false,
      }),
    });
    if (!response.ok) {
      console.error("Update user error");
    } else {
      getTodos();
      currentId = null;
      todoInput.value = "";
      saveBtn.innerText = "Add";
    }
  } catch (error) {
    console.error("Update user error: " + error);
  }
};

const toggleStatus = async (id) => {
  const content = document.querySelector(`[data-id="${id}"] p`);
  console.log(content);

  try {
    const todoResponse = await fetch(`${apiUrl}/todos/${id}`);
    if (!todoResponse.ok) {
      console.error("Failed to fetch current status.");
      return;
    }
    const todo = await todoResponse.json();

    // Toggle trạng thái (đảo ngược giá trị completed)
    const newStatus = !todo.completed;

    const response = await fetch(`${apiUrl}/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: newStatus,
      }),
    });

    if (response.ok) {
      getTodos();
    } else {
      console.error("Failed to update the status.");
    }
  } catch (error) {
    console.error("Update status error: " + error);
  }
};

const deleteTodo = async (id) => {
  const confirm = window.confirm("Are you sure want to delete this todo ?");
  if (confirm) {
    try {
      const response = await fetch(`${apiUrl}/todos/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        console.error("Delete user error");
      } else {
        getTodos();
      }
    } catch (error) {
      console.error("Delete todo error: " + error);
    }
  }
};
