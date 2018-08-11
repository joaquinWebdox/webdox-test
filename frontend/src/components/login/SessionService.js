const baseUrl = "http://localhost:8080/api";

export const login = data => {
  return fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
};

export const logout = () => {
  return fetch(`${baseUrl}/logout`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
};
