// Função para analisar as respostas do questionário e determinar o tipo de pele
export const analyzeSkinType = (answers) => {
  const { tipoPele, acne, manchas, sensibilidade, rotina, idade } = answers;

  // Lógica simples baseada nas respostas
  if (sensibilidade === 'sim' || tipoPele === 'sensivel') {
    return 'sensivel';
  }
  if (acne === 'muito' || tipoPele === 'oleosa') {
    return 'oleosa';
  }
  if (tipoPele === 'seca') {
    return 'seca';
  }
  if (manchas === 'sim' || rotina === 'basica') {
    return 'mista';
  }
  // Default
  return 'mista';
};