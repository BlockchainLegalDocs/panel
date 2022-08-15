import { Navigate, Route, Routes } from 'react-router-dom'
import { ADD_DOCUMENT, DOCUMENT, REGISTER_OBSERVER } from '../routes'
import AddDocument from './AddDocument'
import Document from './Document'
import RegisterObserver from './RegisterObserver'

export default function Router () {
  return (
    <Routes>
      <Route path={ADD_DOCUMENT} element={<AddDocument />} />
      <Route path={REGISTER_OBSERVER} element={<RegisterObserver />} />
      <Route path={DOCUMENT} element={<Document />} />

      {/* 404 */}
      <Route path="*" element={<Navigate to={ADD_DOCUMENT} replace />} />
    </Routes>
  )
}
