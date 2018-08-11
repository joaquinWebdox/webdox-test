const baseUrl = "http://localhost:8080/api/sessions";

export const login = data => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
};
