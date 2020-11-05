import requestManager from './utils/requestManager'

export default {
  desks: {
    get: () => requestManager.request(''),
    post: (desk: any) => requestManager.request('', 'POST', desk),
    delete: (desk: any) => requestManager.request(`/${desk.id}`, 'DELETE'),
    update: (desk: any) => requestManager.request(`/${desk.id}`, 'PUT', desk),
  },
  tasks: {
    get: (deskId: any) => requestManager.request(`/${deskId}/tasks`),
    post: (body: any) => requestManager.request(`/${body.deskId}/tasks`, 'POST', body.data),
    update: (data: any) => requestManager.request(`/${data.deskId}/tasks/${data.taskId}`, 'PUT', data.body),
    delete: (body: any) => requestManager.request(`/${body.deskId}/tasks/${body.taskId}`, 'DELETE'),
  },
}
