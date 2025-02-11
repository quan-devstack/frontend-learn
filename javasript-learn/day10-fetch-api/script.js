/*
- API: Application Programming Interface
- Giao diện: HTML, CSS, JS
- Dữ liệu: PLs (Programming Language) + Database => (Back-End) 
- Giao tiếp giữa FE (Front-End) và BE (Back-End): 
    + HTTP Protocols
    + Back-End: Xây dựng API để thao tác: CRUD (C - Create, R - Read, U - Update, D - Delete)
    + Front-End: Gọi (Call) API để lấy dữ liệu, thực hiện các hành động
- API chuẩn RESTful
    + URL: Server API + Resource (Ví dụ: https:://api.fullstack.edu.vn/users)
    + HTTP Method: 
        GET: Lấy dữ liệu
        POST: Tạo dữ liệu
        PUT: Cập nhật dữ liệu (Ghi đè)
        PATH: Cập nhật dữ liệu (Không ghi đè)
        DELETE: Xóa dữ liệu
    + Endpoint: HTTP Method + Resource (GET/users, POST/users, GET/users/{id}, DELETE/users)
    + HTTP Status Code: 
        Success: 200,
        Created: 201, 
        Not Found: 404,
    + HTTP Responsec Message (Dữ liệu trả về từ API): 
        => JSON Data
- Lấy API, dữ liệu ở đâu ?
    + Tự viết =))
    + Sử dụng API của bên thứ 3 (Third Party API) => JSON Server
- Cách để Call API từ Front-End ?
    + Sử dụng Fetch API => Trả về Promises
    + Sử dụng thư viện: Axios, jQuery, etc. 
    + Sử dụng XMLHTTPRequest (Cổ xưa) => Không trả về Promises
*/

//call api with fetch() and async/await
const api_url = "http://localhost:3000";
window.addEventListener("DOMContentLoaded", () => getUsers());
const getUsers = async () => {
  try {
    const response = await fetch(`${api_url}/users`);
    const users = await response.json();
    const tableData = document.querySelector(".dashboard__table");
    tableData.innerHTML = `
    <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Actions</th>
          <th></th>
        </tr>
    </thead>
    <tbody>
        ${users
          .map(
            ({ id, name, email }) => `
          <tr>
            <td>${name}</td>
            <td>${email}</td>
            <td>
              <button class="edit-btn" onClick="updateUser('${id}')">Edit</button>
            </td>
            <td>
              <button class="delete-btn" onClick="deleteUser('${id}')">Delete</button>
            </td>
          </tr>
        `
          )
          .join("")}
    </tbody>
    `;
  } catch (error) {
    console.log(error);
  }
};

const addUser = async () => {
  const userName = prompt("Enter user name");
  const userEmail = prompt("Enter user email");

  try {
    const response = await fetch(`${api_url}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        email: userEmail,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to add user");
    } else {
      await response.json();
      window.alert("A new user is added, refresh page to see");
    }

    const tbody = document.querySelector("tbody");
    const tr = document.createElement("tr");
    tr.setAttribute("data-id", newUser.id);
    tr.innerHTML = `
        <td>${newUser.name}</td>
        <td>${newUser.email}</td>
        <td>
          <button class="edit-btn" onClick="updateUser(${id})">Edit</button>
        </td>
        <td>
          <button class="delete-btn" onClick="deleteUser(${id})">Delete</button>
        </td>
      `;
    tbody.appendChild(tr);
  } catch (error) {
    console.log("Create user error: " + error);
  }
};

const updateUser = async (id) => {
  const newUserName = window.prompt("Enter new user name");
  const newUserEmail = window.prompt("Enter new user email");

  if (newUserName && newUserEmail) {
    try {
      const response = await fetch(`${api_url}/users/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newUserName,
          email: newUserEmail,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to update user");
      }
      window.alert("User is updated");
      getUsers();
    } catch (error) {
      console.log("User update error: " + error);
    }
  }
};

const deleteUser = async (id) => {
  const confirm = window.confirm(`Are you sure want to delete user ${id} ?`);
  if (confirm) {
    try {
      const response = await fetch(`${api_url}/users/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete user");
      }
      window.alert("User is deleted");
      getUsers();
    } catch (error) {
      console.log("Delete user error: " + error);
    }
  }
};
