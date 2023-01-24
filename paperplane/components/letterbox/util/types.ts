export interface letter {
  content: string;
  date: string;
  id: number;
  likeCount: number;
  postColor: string;
  title: string;
}

export interface letterDetail {
  postId: number;
  isReport: boolean;
  isRead: boolean;
  isLike: boolean;
  isReply: boolean;
}
