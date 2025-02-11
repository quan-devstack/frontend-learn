/*
Seperate fetch() logic in own folder then call it 
*/
import { service } from "../service/service.js";
const render = (users) => {
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
          ({ name, email }) => `
        <tr>
          <td>${name}</td>
          <td>${email}</td>
          <td>
            <button class="edit-btn">Edit</button>
          </td>
          <td>
            <button class="delete-btn">Delete</button>
          </td>
      </tr>
      `
        )
        .join("")}
    </tbody>
  `;
};

const getUsers = async () => {
  const { data: users } = await service.get(`/users`);
  render(users);
};
getUsers();

const postUser = async () => {
  const { data: user } = await service.post(`/users`, {
    name: "User 05",
    email: "user05@gmail.com",
  });
  console.log(user);
};
