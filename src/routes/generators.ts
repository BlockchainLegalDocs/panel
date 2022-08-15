import { generatePath } from 'react-router-dom'
import { DOCUMENT } from './constant'

export function getDocumentRoute (link: string) {
  return generatePath(DOCUMENT, { link })
}
