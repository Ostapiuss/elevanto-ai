import { Layout } from '@components/layout';
import { NotFoundPage } from '@pages/not-found-page';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router';

const MainPageLazy = lazy(() => import('@pages/main'));
const FeaturesPageLazy = lazy(() => import('@pages/features'));

export function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPageLazy />} />
          <Route path="features" element={<FeaturesPageLazy />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
