import { BrainCircuit, Terminal, Zap, Rocket, FileText, Bot } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <BrainCircuit className="w-16 h-16 text-primary mx-auto mb-4" />
        <h1 className="text-5xl font-bold mb-4 border-0">Kiro Dev Book</h1>
        <p className="text-xl text-muted-foreground">Documentação completa do Kiro — AI-powered development direto no terminal</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {[
          { icon: Terminal, title: "CLI Poderoso", desc: "Chat interativo, execução de comandos e automação direto do terminal", path: "/cli-basico" },
          { icon: FileText, title: "Specs System", desc: "Planeje antes de codar — requisitos, design e tasks estruturados", path: "/specs" },
          { icon: Bot, title: "Agent Hooks", desc: "Automação com hooks que rodam antes/depois de ações do agente", path: "/agent-hooks" },
          { icon: Zap, title: "Multi-modelo", desc: "Claude, GPT, Gemini — escolha o modelo ideal para cada tarefa", path: "/modelos" },
          { icon: Rocket, title: "AWS Nativo", desc: "Integração direta com serviços AWS via CLI tools", path: "/aws-integration" },
          { icon: BrainCircuit, title: "Contexto Inteligente", desc: "Knowledge bases, memória persistente e contexto automático", path: "/contexto" },
        ].map(card => (
          <Link key={card.path} href={card.path} className="block p-6 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
            <card.icon className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-1 border-0 pb-0 mt-0 text-base">{card.title}</h3>
            <p className="text-sm text-muted-foreground">{card.desc}</p>
          </Link>
        ))}
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-3 border-0 pb-0 mt-0">Quick Start</h2>
        <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
{`# Instalar
npm install -g @anthropic-ai/kiro-cli

# Autenticar
kiro-cli auth

# Iniciar chat
kiro-cli chat

# Ver ajuda
kiro-cli --help`}
        </pre>
      </div>
    </div>
  );
}
