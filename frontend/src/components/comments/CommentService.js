const baseUrl = "http://localhost:8080/api/admin/comments";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1LCJleHAiOjE1MzQwMTc5MDN9.RLFaUFAJAP8Bi-CE7DvUQhOdgiO5PaiGtAqX1RdVMFQ";

export const getComments = () => {
  return fetch(baseUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `${token}`
    }
  }).then(res => res.json());
};

export const createComment = comment => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `${token}`
    },
    body: JSON.stringify(comment)
  }).then(res => res.json());
};
