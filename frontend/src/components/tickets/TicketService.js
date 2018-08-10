const baseUrl = "http://localhost:8080/api/tickets";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1MzUxMTU1MzV9.nelKlJqg_OFGVdYRZtRuMuJvCN34fFgNokS5WOUNTzs";

export const all = () => {
  return fetch(baseUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `${token}`
    }
  }).then(res => res.json());
};

export const create = ticket => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `${token}`
    },
    body: JSON.stringify(ticket)
  }).then(res => res.json());
};

export const update = ticket => {
  return fetch(`${baseUrl}/${ticket.id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `${token}`
    },
    body: JSON.stringify(ticket)
  }).then(res => res.json());
};

export const destroy = id => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `${token}`
    }
  });
};
