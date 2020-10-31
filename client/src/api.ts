import requestManager from './utils/requestManager'

// export const getDesks = async () => {
//   return fetch('/api/v1/desks').then((res) => res.json())
// }

// Got some bug`s with post will investigate WIP

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
}

export default {
  desks: {
    get: () => requestManager.request(''),
    // post: (body: any) => requestManager.request('', 'POST', body)
  },
}

export const createDesk = async (desk: any): Promise<string> => {
  return fetch('/api/v1/desks', {
    method: 'POST',
    headers,
    body: JSON.stringify(desk),
  }).then((res) => res.json())
}

export const deleteDeskReq = async (desk: any): Promise<string> => {
  return fetch(`/api/v1/desks/${desk.id}`, {
    method: 'DELETE',
    headers
  }).then((res) => res.json())
}

export const editDeskReq = async (desk: any): Promise<string> => {
  return fetch(`/api/v1/desks/${desk.id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(desk),
  }).then((res) => res.json())
}
