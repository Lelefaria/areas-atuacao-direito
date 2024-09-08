export interface IdProps {
  params: {
    productid: string;
    reviewid: string;
  };
}
type Post = {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  date: Date;
};

export default Post;
