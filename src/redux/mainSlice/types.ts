export type TMainError = {
  message: string;
  code: string;
} | null;

export interface IMainSlice {
  loading: boolean;
  error: TMainError;
}
