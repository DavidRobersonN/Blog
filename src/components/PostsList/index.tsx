import { postRepository } from "@/repositories/post";
import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";
// Função assíncrona que renderiza a lista de posts do blog
export async function PostsList() {
  // Busca todos os posts utilizando o repositório (padrão Repository)
  const posts = await postRepository.findAll();

  return (
    // Layout em grid responsivo:
    // - 1 coluna no mobile
    // - 2 colunas no sm (>= 640px)
    // - 3 colunas no lg (>= 1024px)
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        return (
          // Wrapper para cada post individual
          // `group` permite aplicar estilos nos filhos ao passar o mouse aqui
          <div className="flex flex-col gap-4 group" key={post.id}>
            {/* Componente reutilizável que exibe a imagem de capa com link */}
            <PostCoverImage
              // Define a URL de navegação para o post
              linkProps={{
                href: `/post/${post.slug}`, // URL amigável baseada no slug do post
              }}
              // Propriedades da imagem
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl, // URL da imagem
                alt: post.title, // Descrição para acessibilidade
              }}
            />

            {/* Informações textuais do post (data, título e resumo) */}
            <div className="flex flex-col gap-4 sm:justify-center">
              {/* Data de criação do post */}
              <time
                className="text-slate-600 block text-sm/tight"
                dateTime={post.createdAt} // atributo semântico para SEO
              >
                {post.createdAt} {/* Exibição da data no front */}
              </time>

              {/* Título do post (componente reutilizável e semântico) */}
              <PostHeading as="h2" url="#">
                {post.title}
              </PostHeading>

              {/* Pequeno trecho/resumo do conteúdo do post */}
              <p>{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
