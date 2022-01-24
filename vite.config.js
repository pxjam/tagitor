import path from 'path'
import { defineConfig } from 'vite'
import { getScopedName } from './src/build/getScopedName.js'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: '',
    css: {
      modules: {
        generateScopedName: (exportedName, filePath) => {
          const filePathTrimmed = filePath.split('?')[0]
          const moduleName = path.basename(filePathTrimmed, '.module.css')

          return (mode === 'production')
            ? getScopedName(moduleName, exportedName)
            : `${moduleName}__${exportedName}`
        }
      }
    }
  }
})
