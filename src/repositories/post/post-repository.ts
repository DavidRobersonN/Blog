import { PostModel } from "@/models/post/post-model";

// Esse findAll nao sera usado, ele vai servir apenas para definir que findAll
// retorna ou seja é uma tipagem
export interface PostRepository {
  findAll(): Promise<PostModel[]>;
  findAllPublic(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
  findBySlugPublic(slug: string): Promise<PostModel>;
}
