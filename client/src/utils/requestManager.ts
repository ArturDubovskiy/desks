const API_URL = `/api/v1/desks`

export default {
  request: (path?: string, method: string = 'GET', body?: any) => {
    return fetch(`${API_URL}${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    }).then((res) => res.json())
  },
}
