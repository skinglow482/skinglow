function hexToRgb(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(h => h + h).join('');
  const bigint = parseInt(hex, 16);
  return [ (bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255 ];
}

function srgbToLinear(c) {
  c = c / 255;
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function luminance(hex) {
  const [r,g,b] = hexToRgb(hex);
  const R = srgbToLinear(r);
  const G = srgbToLinear(g);
  const B = srgbToLinear(b);
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

function contrastRatio(hex1, hex2) {
  const L1 = luminance(hex1);
  const L2 = luminance(hex2);
  const lighter = Math.max(L1, L2);
  const darker = Math.min(L1, L2);
  return (lighter + 0.05) / (darker + 0.05);
}

const colors = {
  salmon: '#fa8072',
  salmon_light: '#fff0ee',
  salmon_dark: '#8f3b2e',
  color_on_salmon: '#2b1b17',
  white: '#ffffff',
  black: '#000000'
};

const pairs = [
  { a: 'salmon_dark', b: 'salmon_light', usage: 'texto (salmon_dark) sobre fundo (salmon_light)' },
  { a: 'color_on_salmon', b: 'salmon', usage: 'texto escuro sobre botão (salmon)' },
  { a: 'white', b: 'salmon_dark', usage: 'texto branco sobre salmão escuro' },
  { a: 'salmon_dark', b: 'white', usage: 'texto (salmon_dark) sobre fundo branco' },
  { a: 'salmon_dark', b: 'salmon_light', usage: 'link/elemento salmão escuro sobre fundo claro' }
];

console.log('Verificando contraste (WCAG) das cores principais:\n');

pairs.forEach(({a,b,usage}) => {
  const ratio = contrastRatio(colors[a], colors[b]);
  const passAA = ratio >= 4.5;
  const passLarge = ratio >= 3;
  console.log(`${usage}: ${colors[a]} on ${colors[b]} -> contraste ${ratio.toFixed(2)} (AA texto normal: ${passAA ? 'OK' : 'FAIL'}, AA grande: ${passLarge ? 'OK' : 'FAIL'})`);
});

console.log('\nRecomendações:');
console.log('- Para texto normal, buscamos ratio >= 4.5. Para texto grande (>=18px ou 14px bold) >=3.');
console.log('- Se alguma combinação falhar, posso ajustar `--color-salmon-dark` para torná-lo mais escuro ou usar texto preto/escuro onde necessário.');
console.log('- Posso também gerar sugestões automáticas de cores alternativas com contraste aceitável se quiser.');
