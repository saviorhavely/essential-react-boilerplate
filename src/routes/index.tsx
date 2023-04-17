import { FC, LazyExoticComponent, Suspense, lazy } from 'react'
import { BrowserRouter, Routes as BaseRoutes, Route, Navigate } from 'react-router-dom'
import Loading from '@/components/Loading'

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
      <BrowserRouter>
        <BaseRoutes>
          <Route path="/" element={<LazyModule component={lazy(() => import('@/pages/Home'))} />} />
          <Route path="/*" element={<Navigate to="/404" />} />
          <Route
            path="/404"
            element={<LazyModule component={lazy(() => import('@/pages/NotFoundPage'))} />}
          />
        </BaseRoutes>
      </BrowserRouter>
    </>
  )
}

export default ApplicationRoutes
