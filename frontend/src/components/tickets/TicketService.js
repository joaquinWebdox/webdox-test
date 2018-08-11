const baseUrl = "http://localhost:8080/api/admin/tickets";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1LCJleHAiOjE1MzQwMTc5MDN9.RLFaUFAJAP8Bi-CE7DvUQhOdgiO5PaiGtAqX1RdVMFQ";

export const getTickets = () => {
  return fetch(baseUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `${token}`
    }
  }).then(res => res.json());
};

export const getTicket = id => {
  return fetch(`${baseUrl}/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `${token}`
    }
  }).then(res => res.json());
};

export const createTicket = ticket => {
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

export const updateTicket = ticket => {
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

export const closeTicket = id => {
  return fetch(`${baseUrl}/${id}/close`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `${token}`
    }
  }).then(res => res.json());
};

export const destroyTicket = id => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `${token}`
    }
  });
};
