const baseUrl = "http://localhost:8080/api/users";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1MzUxNTYzMjh9.W0Zu_ptt71nuQOSyhJ1qT2f5lXHlSlTM7qjwgmmCaGE";

export const getUsers = () => {
  return fetch(baseUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `${token}`
    }
  }).then(res => res.json());
};

export const getUser = id => {
  return fetch(`${baseUrl}/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `${token}`
    }
  }).then(res => res.json());
};

export const createUser = user => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `${token}`
    },
    body: JSON.stringify(user)
  }).then(res => res.json());
};

export const updateUser = user => {
  return fetch(`${baseUrl}/${user.id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `${token}`
    },
    body: JSON.stringify(user)
  }).then(res => res.json());
};

export const destroyUser = id => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `${token}`
    }
  });
};
