import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

import Home from "@/pages/Home";
import OQueEKiro from "@/pages/OQueEKiro";
import Instalacao from "@/pages/Instalacao";
import PrimeiroUso from "@/pages/PrimeiroUso";
import CLIBasico from "@/pages/CLIBasico";
import Chat from "@/pages/Chat";
import Contexto from "@/pages/Contexto";
import Modelos from "@/pages/Modelos";
import Specs from "@/pages/Specs";
import Requisitos from "@/pages/Requisitos";
import Design from "@/pages/Design";
import Tasks from "@/pages/Tasks";
import AgentHooks from "@/pages/AgentHooks";
import Steering from "@/pages/Steering";
import Subagentes from "@/pages/Subagentes";
import Ferramentas from "@/pages/Ferramentas";
import AwsIntegration from "@/pages/AwsIntegration";
import GitWorkflow from "@/pages/GitWorkflow";
import Seguranca from "@/pages/Seguranca";
import Configuracao from "@/pages/Configuracao";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    document.getElementById("main-content")?.scrollTo(0, 0);
  }, [location]);
  return null;
}

function AppContent() {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main id="main-content" className="flex-1 p-6 overflow-y-auto">
          <ScrollToTop />
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/o-que-e-kiro" component={OQueEKiro} />
            <Route path="/instalacao" component={Instalacao} />
            <Route path="/primeiro-uso" component={PrimeiroUso} />
            <Route path="/cli-basico" component={CLIBasico} />
            <Route path="/chat" component={Chat} />
            <Route path="/contexto" component={Contexto} />
            <Route path="/modelos" component={Modelos} />
            <Route path="/specs" component={Specs} />
            <Route path="/requisitos" component={Requisitos} />
            <Route path="/design" component={Design} />
            <Route path="/tasks" component={Tasks} />
            <Route path="/agent-hooks" component={AgentHooks} />
            <Route path="/steering" component={Steering} />
            <Route path="/subagentes" component={Subagentes} />
            <Route path="/ferramentas" component={Ferramentas} />
            <Route path="/aws-integration" component={AwsIntegration} />
            <Route path="/git-workflow" component={GitWorkflow} />
            <Route path="/seguranca" component={Seguranca} />
            <Route path="/configuracao" component={Configuracao} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter hook={useHashLocation}>
        <AppContent />
      </WouterRouter>
    </QueryClientProvider>
  );
}
