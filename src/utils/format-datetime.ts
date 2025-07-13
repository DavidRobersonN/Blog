// Importa a função `format` para formatar datas em string (ex: 11/07/2025 às 14h30)
// Importa `formatDistanceToNow` e renomeia como `dateFnsFormatDistanceToNow`
// Isso evita conflito com o nome da função personalizada abaixo
import {
  format,
  formatDistanceToNow as dateFnsFormatDistanceToNow,
} from "date-fns";

// Importa o locale pt-BR (português do Brasil) para que a formatação esteja no idioma correto
import { ptBR } from "date-fns/locale";

/**
 * Formata uma data ISO (string) para um formato completo legível em português.
 * Exemplo de saída: "11/07/2025 às 14h30"
 *
 * @param rawDate - Data bruta no formato string (ISO 8601)
 * @returns Data formatada como "dd/MM/yyyy às HHhmm"
 */
export function formatDatetime(rawDate: string): string {
  // Converte a string em um objeto Date do JavaScript
  const date = new Date(rawDate);

  // Usa a função `format` do date-fns para formatar a data no padrão desejado
  return format(date, "dd/MM/yyyy 'às' HH'h'mm", {
    locale: ptBR, // Define o idioma como português do Brasil
  });
}

/**
 * Retorna a distância entre a data fornecida e o momento atual,
 * em formato relativo (ex: "há 5 minutos", "há 2 dias").
 *
 * @param rawDate - Data bruta em formato string (ISO 8601)
 * @returns String com o tempo relativo até agora (com sufixo "há")
 */
export function formatDistanceToNow(rawDate: string): string {
  // Converte a string em um objeto Date
  const date = new Date(rawDate);

  // Usa a função renomeada `dateFnsFormatDistanceToNow` para obter o tempo relativo
  return dateFnsFormatDistanceToNow(date, {
    locale: ptBR, // Localização em português
    addSuffix: true, // Adiciona sufixos como "há", "em", etc.
  });
}
