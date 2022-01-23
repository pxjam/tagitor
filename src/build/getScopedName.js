import incstr from 'incstr'

const createUniqueIdGenerator = (alphabet) => {
  const uniqIds = {}

  const generateNextId = incstr.idGenerator({ alphabet })

  return (name) => {
    if (!uniqIds[name]) {
      uniqIds[name] = generateNextId()
    }

    return uniqIds[name]
  }
}

const componentNameIdGenerator = createUniqueIdGenerator('ABCEFGHJKLMNOPQRSTUVWXYZ')
const localNameIdGenerator = createUniqueIdGenerator('abcefghijklmnopqrstuvwxyz0123456789')

export const getScopedName = (pathName, localName) => {
  const componentName = pathName
    .split('/')
    .slice(-2, -1)[0]

  const localId = localNameIdGenerator(localName)
  const componentId = componentNameIdGenerator(componentName)

  return `${componentId}${localId}`
}
