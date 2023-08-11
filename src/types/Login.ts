export type Login = {
  status: number;
  data: { token: string } | { message: string };
};