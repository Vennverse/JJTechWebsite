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
import AboutUs from "@/pages/about-us";
import Contact from "@/pages/contact";
import Partnerships from "@/pages/partnerships";
import IntegratedPlatform from "@/pages/integrated-platform";
import BusinessConsulting from "@/pages/business-consulting";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/it-services" component={ITServices} />
      <Route path="/it-training" component={ITTraining} />
      <Route path="/pmo-services" component={PMOServices} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/contact" component={Contact} />
      <Route path="/partnerships" component={Partnerships} />
      <Route path="/consulting" component={ServicesPage} />
      <Route path="/platform" component={IntegratedPlatform} />
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
