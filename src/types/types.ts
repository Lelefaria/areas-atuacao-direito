export interface IdProps {
  params: {
    productid: string;
    reviewid: string;
  };
}
export type Post = {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  date: Date;
};
type User = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  agree?: boolean | string;
  ok?: null | string;
};


export default User;
