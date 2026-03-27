import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Engagement from "./pages/Engagement";
import Centres from "./pages/Centres";
import Carrieres from "./pages/Carrieres";
import JobDetail from "./pages/JobDetail";
import Contact from "./pages/Contact";
import Declaration from "./pages/Declaration";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import NotFound from "./pages/NotFound";

// Admin
import AdminLayout from "./admin/layouts/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
import PagesAdmin from "./admin/pages/PagesAdmin";
import SectionsAdmin from "./admin/pages/SectionsAdmin";
import MediaLibrary from "./admin/pages/MediaLibrary";
import CentersAdmin from "./admin/pages/CentersAdmin";
import ClaimsAdmin from "./admin/pages/ClaimsAdmin";
import MessagesAdmin from "./admin/pages/MessagesAdmin";
import JobsAdmin from "./admin/pages/JobsAdmin";
import ApplicationsAdmin from "./admin/pages/ApplicationsAdmin";
import SpontaneousAdmin from "./admin/pages/SpontaneousAdmin";
import FaqAdmin from "./admin/pages/FaqAdmin";
import TestimonialsAdmin from "./admin/pages/TestimonialsAdmin";
import SiteSettings from "./admin/pages/SiteSettings";
import UsersAdmin from "./admin/pages/UsersAdmin";
import ActivityLog from "./admin/pages/ActivityLog";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Public */}
            <Route path="/" element={<Index />} />
            <Route path="/institution" element={<About />} />
            <Route path="/engag" element={<Engagement />} />
            <Route path="/centres" element={<Centres />} />
            <Route path="/carrieres" element={<Carrieres />} />
            <Route path="/carrieres/:id" element={<JobDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/declaration" element={<Declaration />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />

            {/* Admin */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="pages" element={<PagesAdmin />} />
              <Route path="sections" element={<SectionsAdmin />} />
              <Route path="media" element={<MediaLibrary />} />
              <Route path="centers" element={<CentersAdmin />} />
              <Route path="claims" element={<ClaimsAdmin />} />
              <Route path="messages" element={<MessagesAdmin />} />
              <Route path="jobs" element={<JobsAdmin />} />
              <Route path="applications" element={<ApplicationsAdmin />} />
              <Route path="spontaneous" element={<SpontaneousAdmin />} />
              <Route path="faq" element={<FaqAdmin />} />
              <Route path="testimonials" element={<TestimonialsAdmin />} />
              <Route path="settings" element={<SiteSettings />} />
              <Route path="users" element={<UsersAdmin />} />
              <Route path="activity" element={<ActivityLog />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
