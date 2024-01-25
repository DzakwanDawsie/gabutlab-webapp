interface Post {
  id: number;
  user_admin_id: number;
  title: string;
  content: string;
  status: "active" | "inactive";
  photo: string;
  created_at: string;
  update_at: string;
  topics: PostTopic[];
  comments: PostComment[];
  likes_count: number;
}