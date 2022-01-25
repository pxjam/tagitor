import incstr from 'incstr'

function createUniqueIdGenerator(alphabet) {
  const uniqIds = {}

  const generateNextId = incstr.idGenerator({ alphabet })

  return (name) => {
    if (!uniqIds[name]) {
      uniqIds[name] = generateNextId()
    }

    return uniqIds[name]
  }
}

const alphabet = 'abcefghijklmnopqrstuvwxyzABCEFGHJKLMNOPQRSTUVWXYZ'
const classNameGenerator = createUniqueIdGenerator(alphabet)

export function getScopedName(moduleName, localName) {
  return classNameGenerator(`${moduleName}_${localName}`)
}
