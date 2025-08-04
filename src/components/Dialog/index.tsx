"use client"; // Indica que este componente roda no cliente (Next.js App Router)

import clsx from "clsx"; // Utilitário para condicionalmente juntar classes CSS

// Define os tipos esperados para as props do componente Dialog
type DialogProps = {
  isVisible?: boolean; // Controla se o diálogo deve ser exibido
  title: string; // Título do diálogo
  content: React.ReactNode; // Conteúdo do corpo do diálogo (pode ser texto, elementos, etc.)
  onConfirm: () => void; // Função chamada ao confirmar
  onCancel: () => void; // Função chamada ao cancelar
  disabled: boolean; // Controla se os botões devem estar desabilitados
};

// Componente funcional Dialog
export function Dialog({
  isVisible = false,
  title,
  content,
  onCancel,
  onConfirm,
  disabled,
}: DialogProps) {
  // Se o diálogo não estiver visível, retorna null (nada é renderizado)
  if (!isVisible) return null;

  // Função para cancelar o diálogo. Evita execução se estiver desabilitado
  function handleCancel() {
    if (disabled) return;
    onCancel();
  }

  return (
    // Camada de fundo semitransparente cobrindo a tela inteira
    <div
      className={clsx(
        "fixed z-50 inset-0 bg-black/50 backdrop-blur-xs", // Estiliza o fundo escuro e desfoca o conteúdo atrás
        "flex items-center justify-center" // Centraliza o diálogo na tela
      )}
      onClick={handleCancel} // Fecha o diálogo ao clicar fora dele
    >
      {/* Container do conteúdo do diálogo */}
      <div
        className={clsx(
          "bg-slate-100 p-6 rounded-lg max-w-2xl mx-6", // Aparência do diálogo
          "flex flex-col gap-6", // Layout vertical com espaçamento
          "shadow-lg shadow-black/30 text-center" // Sombra e alinhamento do texto
        )}
        role="dialog" // Acessibilidade: identifica como um diálogo
        aria-modal={true} // Acessibilidade: modal impede interação fora dele
        aria-labelledby="dialog-title" // Aponta o título para leitores de tela
        aria-describedby="dialog-description" // Aponta a descrição
        onClick={(e) => e.stopPropagation()} // Evita que o clique dentro do modal feche ele
      >
        {/* Título do diálogo */}
        <h3 id="dialog-title" className="text-xl font-extrabold">
          {title}
        </h3>

        {/* Conteúdo principal do diálogo */}
        <div id="dialog-description">{content}</div>

        {/* Botões de ação */}
        <div className="flex items-center justify-around">
          {/* Botão de cancelar */}
          <button
            className={clsx(
              "bg-slate-200 hover:bg-slate-300 transition text-slate-950",
              "flex items-center justify-center",
              "py-2 px-4 rounded-lg cursor-pointer",
              "disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed"
            )}
            autoFocus // Recebe o foco automaticamente ao abrir
            onClick={handleCancel}
            disabled={disabled}
          >
            Cancelar
          </button>

          {/* Botão de confirmação */}
          <button
            className={clsx(
              "bg-blue-500 hover:bg-blue-600 transition text-blue-50",
              "flex items-center justify-center",
              "py-2 px-4 rounded-lg cursor-pointer",
              "disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed"
            )}
            onClick={onConfirm}
            disabled={disabled}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}
