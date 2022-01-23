import path from 'path'
import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { getScopedName } from './src/build/getScopedName.js'

export default defineConfig(({ mode }) => {
  return {
    plugins: [preact()],
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
