import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileOrderBar } from "@/components/MobileOrderBar";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Menu from "@/pages/Menu";
import Gallery from "@/pages/Gallery";
import Franchise from "@/pages/Franchise";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contact from "@/pages/Contact";
import Admin from "@/pages/Admin";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      {/* Admin — standalone, no site chrome */}
      <Route path="/admin" component={Admin} />

      {/* All public pages share the Navbar/Footer layout */}
      <Route>
        <div className="flex flex-col min-h-[100dvh] w-full">
          <Navbar />
          <main className="flex-1">
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/menu" component={Menu} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/franchise" component={Franchise} />
              <Route path="/blog" component={Blog} />
              <Route path="/blog/:slug" component={BlogPost} />
              <Route path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
          <MobileOrderBar />
        </div>
      </Route>
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
