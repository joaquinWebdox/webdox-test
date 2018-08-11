const baseUrl = "http://localhost:8080/api/admin/users";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1LCJleHAiOjE1MzQwMTc5MDN9.RLFaUFAJAP8Bi-CE7DvUQhOdgiO5PaiGtAqX1RdVMFQ";

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
