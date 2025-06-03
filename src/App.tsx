
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Publikasi from "./pages/Publikasi";
import LembagaPelatihan from "./pages/LembagaPelatihan";
import TipsBekerja from "./pages/TipsBekerja";
import Artikel from "./pages/Artikel";
import TanyaJawab from "./pages/TanyaJawab";
import Mitra from "./pages/Mitra";
import Daftar from "./pages/Daftar";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/publikasi" element={<Publikasi />} />
          <Route path="/lembaga-pelatihan" element={<LembagaPelatihan />} />
          <Route path="/tips-bekerja" element={<TipsBekerja />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/tanya-jawab" element={<TanyaJawab />} />
          <Route path="/mitra" element={<Mitra />} />
          <Route path="/daftar" element={<Daftar />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
