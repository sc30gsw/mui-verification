/**
 * React Router ルーティング定義
 * cf. https://reactrouter.com/en/main/routers/create-browser-router
 */
import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
import { MainLayout } from '../components/layouts/MainLayout'
import { NotFoundPage } from '../components/pages/NotFoundPage'
import { EstimateListPage } from '../features/estimates/estimate-list/components'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <App />
      </MainLayout>
    ),
  },
  {
    path: '/estimates',
    element: (
      <MainLayout>
        <EstimateListPage />
      </MainLayout>
    ),
    children: [{}],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export default router
