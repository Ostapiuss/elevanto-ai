import { Layout } from '@components/layout';
import { NotFoundPage } from '@pages/not-found-page';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router';

const MainPageLazy = lazy(() => import('@pages/main'));
const FeaturesPageLazy = lazy(() => import('@pages/features'));
const SignInPage = lazy(() => import('@pages/sign-in-page'));
const ContacUsPage = lazy(() => import('@pages/contact-us'));
const AboutUsPage = lazy(() => import('@pages/about-us'));
const PrivacyPage = lazy(() => import('@pages/privacy'));
const TermsPage = lazy(() => import('@pages/terms'));
const BlogPage = lazy(() => import('@pages/blog'));
const AiAssistant = lazy(() => import('@pages/ai-assistant'));

export function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/login" element={<SignInPage />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<MainPageLazy />} />
          <Route path="features" element={<FeaturesPageLazy />} />
          <Route path="contact-us" element={<ContacUsPage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="ai-assistants" element={<AiAssistant />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
