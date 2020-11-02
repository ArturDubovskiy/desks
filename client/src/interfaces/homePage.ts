export interface DeskFormInterface {
  name: string
}

export interface DeskFormProps {
  loading: boolean
  createDesk(form: DeskFormInterface): void
  error: string
  edit: boolean
  desk: DeskRespItem | null
  close(): void
  editDesk(form: DeskFormInterface): void
}

export interface Action {
  type: string
  payload: [] | string | object
}

export interface DeskRespItem {
  id: string
  name: string
  created_at?: string
  updated_at?: string
}

export interface SelectFormProps {
  desks: DeskRespItem[]
  value: string
  onSelectDesk(node: any): void
}

export interface Desk {
  id: string
  name: string
}

export interface DesksState {
  desks: Desk[]
  loading: boolean
  errorDesks: string
  errorCreateDesk: string
  errorDeleteDesk: string
}

export interface Task {
  name: string,
  priority: number,
  isDone: boolean,
  desk_id: number,
  created_at: string,
  updated_at: string
}

export interface TasksState {
  tasks: Task[],
  loading: boolean,
  errorLoadTasks: string,
  errorCreateTask: string,
  errorDeleteTask: string,
  errorEditTask: string,
}

export interface ErrorAlertProps {
  error: string
  onClose(): void
}
