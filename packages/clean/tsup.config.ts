import { defineConfig } from 'tsup'
import tsconfig from './tsconfig.json'

export default defineConfig({
  entry: ['./index.tsx'],
  format: 'esm',
  dts: true,
  name: '@next-theme/clean',
  outExtension: () => ({ js: '.js' }),
  target: tsconfig.compilerOptions.target as 'es2016',
  external: ['react', 'react-dom', 'next', 'nextra', 'next-themes'],
})
