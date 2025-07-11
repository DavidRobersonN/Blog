import clsx from "clsx"; // Utilitário para combinar classes CSS condicionalmente
import Image from "next/image"; // Componente otimizado de imagem do Next.js
import Link from "next/link"; // Componente de link para navegação interna no Next.js

// Tipagem das props esperadas no componente
type PostCoverImageProps = {
  // Propriedades específicas do componente <Image /> do Next
  imageProps: React.ComponentProps<typeof Image>;

  // Propriedades específicas do componente <Link /> do Next
  linkProps: React.ComponentProps<typeof Link>;
};

// Componente que renderiza uma imagem de capa clicável, estilizada e responsiva
export function PostCoverImage({ imageProps, linkProps }: PostCoverImageProps) {
  return (
    // O componente Link envolve toda a imagem, tornando-a clicável
    <Link
      {...linkProps} // Espalha as props recebidas para o Link (ex: href)
      className={clsx(
        "w-full", // Ocupa 100% da largura do container
        "h-full", // Ocupa 100% da altura do container
        "overflow-hidden", // Esconde qualquer conteúdo que ultrapasse os limites
        "rounded-xl", // Bordas arredondadas
        linkProps.className // Permite adicionar classes extras via props
      )}
    >
      {/* Imagem otimizada do Next.js com efeito de zoom on hover */}
      <Image
        {...imageProps} // Espalha todas as props da imagem (ex: src, width, height, etc)
        className={clsx(
          "w-full", // Imagem ocupa toda a largura
          "h-full", // Imagem ocupa toda a altura
          "object-cover", // Cobre todo o espaço mantendo a proporção
          "object-center", // Centraliza a imagem dentro do espaço
          "group-hover:scale-105", // Aumenta levemente a imagem ao passar o mouse (efeito zoom)
          "transition", // Suaviza a transição do efeito
          imageProps.className // Permite aplicar classes extras à imagem via props
        )}
        alt={imageProps.alt} // Texto alternativo obrigatório para acessibilidade
      />
    </Link>
  );
}
