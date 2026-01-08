// Rotinas de skincare baseadas no tipo de pele
export const routines = {
  oleosa: {
    manha: ['limpeza', 'tratamento', 'hidratacao', 'protecaoSolar'],
    noite: ['limpeza', 'tratamento', 'hidratacao'],
  },
  seca: {
    manha: ['limpeza', 'hidratacao', 'protecaoSolar'],
    noite: ['limpeza', 'tratamento', 'hidratacao'],
  },
  mista: {
    manha: ['limpeza', 'tratamento', 'hidratacao', 'protecaoSolar'],
    noite: ['limpeza', 'tratamento', 'hidratacao'],
  },
  sensivel: {
    manha: ['limpeza', 'hidratacao', 'protecaoSolar'],
    noite: ['limpeza', 'hidratacao'],
  },
};