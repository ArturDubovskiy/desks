export interface IDeskForm {
  name: string
}

export interface IDeskFormProps {
  loading: boolean
  createDesk: Function
}

export interface IDeskRespItem {
  id: string
  name: string
  created_at: string
  updated_at: string
}

export interface ISelectFormProps {
  desks: IDeskRespItem[]
  value: string
}
