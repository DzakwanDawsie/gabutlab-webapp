interface AddCommentRequest {
  post_id: number;
  customer_id: number;
  parent_id?: number;
  content: string;
}

interface UpdateCommentRequest extends AddCommentRequest {
  id: number;
}