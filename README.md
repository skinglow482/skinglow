# SkinGlow

Um aplicativo web moderno e feminino para auxiliar mulheres no cuidado com a pele, utilizando React e Vite.

## Funcionalidades

- **Home**: Apresentação acolhedora com botões para login e cadastro.
- **Login/Cadastro**: Autenticação simulada com validação básica.
- **Questionário**: Wizard interativo para avaliar o tipo de pele.
- **Resultado**: Análise personalizada com rotina de skincare recomendada.

## Tecnologias

- React com Hooks
- Vite
- React Router
- Framer Motion para animações
- CSS Modules
- Context API para estado

## Como executar

1. Instale as dependências: `npm install`
2. Execute o servidor de desenvolvimento: `npm run dev`
3. Abra o navegador em `http://localhost:5173`

## Estrutura do Projeto

- `src/components/`: Componentes reutilizáveis (Button, Input, Card)
- `src/pages/`: Páginas da aplicação
- `src/styles/`: Estilos CSS Modules
- `src/data/`: Dados simulados
- `src/utils/`: Funções utilitárias
- `src/context/`: Contextos para estado global

## Notas de Design (últimas alterações)

- Substituí as cores roxo/lilás pela paleta **salmão** usando variáveis CSS (`--color-salmon`, `--color-salmon-light`, `--color-salmon-dark`).
- Convertemos ilustrações SVG para **componentes React inline** (em `src/components/illustrations/`) para melhorar carregamento, acessibilidade e permitir estilização direta.
- Os arquivos SVG originais foram movidos para **`src/assets/legacy/`** como backup.
- Adicionei ícones com `react-icons` e melhorei transições/hover com `framer-motion` e CSS.

> Observação: se for trabalhar nas ilustrações, prefira editar os componentes em `src/components/illustrations/` para manter a consistência com o projeto.
