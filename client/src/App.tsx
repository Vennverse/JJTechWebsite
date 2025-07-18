import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "@/pages/home";
import ServicesPage from "@/pages/services";
import ITServices from "@/pages/it-services";
import ITTraining from "@/pages/it-training";
import PMOServices from "@/pages/pmo-services";
import AISolutions from "@/pages/ai-solutions";
import StaffingRecruiting from "@/pages/staffing-recruiting";
import AboutUs from "@/pages/about-us";
import Contact from "@/pages/contact";


import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/it-services" component={ITServices} />
      <Route path="/it-training" component={ITTraining} />
      <Route path="/pmo-services" component={PMOServices} />
      <Route path="/ai-solutions" component={AISolutions} />
      <Route path="/staffing-recruiting" component={StaffingRecruiting} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/contact" component={Contact} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="jj-tech-theme">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
