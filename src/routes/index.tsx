import { FC, LazyExoticComponent, Suspense, lazy } from 'react'
import { BrowserRouter, Routes as BaseRoutes, Route, Navigate } from 'react-router-dom'
import Loading from '@/components/Loading'
import NotFoundPage from '@/pages/NotFoundPage'

interface LazyModuleType {
  component: LazyExoticComponent<FC>
}

function ApplicationRoutes(): JSX.Element {
  const LazyModule: FC<LazyModuleType> = ({ component: Component }) => (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  )

  return (
    <>
      <BaseRoutes>
        <Route path="/" element={<LazyModule component={lazy(() => import('@/pages/Home'))} />} />
        <Route
          path="/posts"
          element={<LazyModule component={lazy(() => import('@/pages/Posts'))} />}
        />
        <Route path="/*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFoundPage />} />
      </BaseRoutes>
    </>
  )
}

export default ApplicationRoutes
