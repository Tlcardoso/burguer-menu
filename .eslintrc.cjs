module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react', 'react-hooks'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'indent': ['error', 2], // Indentação de 2 espaços
    'quotes': ['error', 'single'], // Usar aspas simples
    'semi': ['error', 'always'], // Sempre usar ponto e vírgula
    'eol-last': ['error', 'always'], // Exigir uma linha vazia no final dos arquivos
    'no-trailing-spaces': 'error', // Não permitir espaços em branco no final das linhas
    'comma-dangle': ['error', 'always-multiline'], // Exigir vírgula no final de listas e objetos multilinha
    'object-curly-spacing': ['error', 'always'], // Exigir espaço dentro de chaves de objetos
    'array-bracket-spacing': ['error', 'never'], // Não permitir espaços dentro de colchetes de arrays
    'react/prop-types': 'off', // Desativar validação de PropTypes (usando TypeScript para tipos)
    'react/jsx-uses-react': 'off', // Não necessário com React 17+
    'react/react-in-jsx-scope': 'off', // Não necessário com React 17+
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }], // Permitir JSX em arquivos .jsx e .tsx
    'react/jsx-indent': ['error', 2], // Indentar JSX com 2 espaços
    'react/jsx-indent-props': ['error', 2], // Indentar props de JSX com 2 espaços
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'], // Fechamento de tag JSX alinhado
    'react/self-closing-comp': 'error', // Tags vazias de componentes devem ser auto-fechadas
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }], // Limitar uma prop por linha em JSX quando multiline
    'react/jsx-first-prop-new-line': ['error', 'multiline'], // Primeira prop em nova linha se for multiline
    'react/jsx-equals-spacing': ['error', 'never'], // Espaçamento ao redor do sinal de igualdade em JSX
    'react/jsx-tag-spacing': ['error', { // Espaçamento em torno das tags JSX
      'closingSlash': 'never', // Não permitir espaço antes de /
      'beforeSelfClosing': 'always', // Requer espaço antes de /
      'afterOpening': 'never', // Não permitir espaço após <
      'beforeClosing': 'never' // Não permitir espaço antes de >
    }],
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
  },
}
