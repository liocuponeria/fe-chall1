/**
 * @author Antônio Della Flora
 * @description Função que formata para valor monetário
 * @param {number|string} value - Valor a ser convertido
 * @returns {string} String com unidade monetária
 */
export function formatMoney(value) {
  return `R$ ${Number(value).toFixed(2).replace('.', ',')}`;
}
