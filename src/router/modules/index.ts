import { getRoutes } from '@/utils/common'

export default getRoutes(import.meta.globEager('./*.ts'), './index.ts')
