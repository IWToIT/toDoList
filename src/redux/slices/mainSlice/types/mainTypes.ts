export const enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type ToDo = {
  id: string;
  title: string;
  error: string | null;
  status: Status;
};