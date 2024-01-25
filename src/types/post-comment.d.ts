interface PostComment {
  id: number;
  post_id: number;
  customer_id: number;
  parent_id: number;
  content: string;
  status: "active" | "inactive";
  created_at: string;
  update_at: string;
  customer: Customer;
  comments: PostComment[]
}