import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { ImageCarousel } from "./sections/ImageCarousel";
import { Benefits } from "./sections/Benefits";
import { SocialProof } from "./sections/SocialProof";
import { Rewards } from "./sections/Rewards";
import { Signup } from "./sections/Signup";
import { Footer } from "./sections/Footer";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <ImageCarousel />
      <SocialProof />
      <Benefits />
      <Rewards />
      <Signup />
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
