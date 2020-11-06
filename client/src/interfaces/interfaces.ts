export interface DeskFormInterface {
  name: string
}

export interface DeskFormProps {
  loading: boolean
  createDesk(form: DeskFormInterface): void
  error: string
  edit: boolean
  desk: DeskRespItem | undefined
  close(): void
  editDesk(form: DeskFormInterface): void
}

export interface Action {
  type: string
  payload: [] | string | object
}

export interface DeskRespItem {
  id: number
  name: string
  created_at?: string
  updated_at?: string
}

export interface SelectFormProps {
  desks: DeskRespItem[]
  value: number
  onSelectDesk(node: any): void
}

export interface Desk {
  id: number
  name: string
  created_at?: string
  updated_at?: string
}

export interface TaskFormProps {
  onSend(data: any, edit: boolean): void
  formData: any
}

export interface Task {
  id: number
  name: string
  priority: number
  isDone: boolean
  desk_id: number
  progress: number
  created_at: string
  updated_at: string
}

export interface StoreState {
  desks: DesksState
  tasks: TasksState
}

export interface TasksAreaProps {
  tasks: Task[]
  createTask(data: any): void
  editTask(data: any): void
  toogleTask(task: Task): void
  deleteTask(id: number): void
}

export interface TaskCardProps {
  task: Task
  editTask(task: Task): void
  toogleTask(task: Task): void
  deleteTask(id: number): void
}

export interface DesksState {
  desks: Desk[]
  activeDesk: DeskRespItem | undefined
  loading: boolean
  errorDesks: string
  errorCreateDesk: string
  errorDeleteDesk: string
}

export interface TasksTableProps {
  tasks: Task[]
  onEditTask(task: Task): void
  toogleTask(task: Task): void
  onDeleteTask(id: number): void
}

export interface Task {
  name: string
  priority: number
  isDone: boolean
  desk_id: number
  created_at: string
  updated_at: string
}

export interface TasksState {
  tasks: Task[]
  loading: boolean
  errorLoadTasks: string
  errorCreateTask: string
  errorDeleteTask: string
  errorEditTask: string
}

export interface ErrorAlertProps {
  error: string
  onClose(): void
}
