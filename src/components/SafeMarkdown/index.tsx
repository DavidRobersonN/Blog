// Importa o componente principal responsável por converter Markdown em HTML
import clsx from "clsx";
import ReactMarkdown from "react-markdown";

// Importa o plugin de sanitização, que remove HTML perigoso do conteúdo convertido
import rehypeSanitize from "rehype-sanitize";

// Importa o plugin que permite o uso de sintaxe estendida do GitHub Flavored Markdown (GFM),
// como tabelas, listas de tarefas e marcações de código inline
import remarkGfm from "remark-gfm";

// Define o tipo das props aceitas pelo componente SafeMarkdown
// Espera receber uma string chamada `markdown` com o conteúdo em Markdown
type SafeMarkdownProps = {
  markdown: string;
};

// Componente que renderiza conteúdo Markdown com segurança, evitando riscos de XSS
export function SafeMarkdown({ markdown }: SafeMarkdownProps) {
  return (
    <div
      className={clsx(
        "prose prose-slate",
        "w-full max-w-none",
        "overflow-hidden",
        "prose-a:transition",
        "prose-a:no-underline",
        "prose-a:text-blue-500",
        "prose-a:hover:text-blue-700",
        "prose-a:hover:underline",
        "prose-img:mx-auto",
        "lg:prose-lg"
      )}
    >
      <ReactMarkdown
        // Aplica o plugin remarkGfm para permitir sintaxes extras do GitHub Markdown
        remarkPlugins={[remarkGfm]}
        // Aplica o plugin rehypeSanitize para limpar o HTML gerado de qualquer código malicioso
        rehypePlugins={[rehypeSanitize]}
        components={{
          table: ({ node, ...props }) => {
            if (!node?.children) return "";

            return (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]" {...props} />
              </div>
            );
          },
        }}
      >
        {/* Renderiza o conteúdo Markdown recebido via props */}
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
