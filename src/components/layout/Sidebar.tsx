import React from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import {
  BookOpen, Terminal, Settings, Cpu, Zap, Code2,
  Search, X, Layers, Rocket, FileText, Wrench,
  GitBranch, Bot, Workflow, Shield, Cloud, Puzzle,
  MessageSquare, Lightbulb, BrainCircuit, Cog
} from "lucide-react";

const NAVIGATION = [
  {
    title: "Introdução",
    items: [
      { path: "/", label: "Início", icon: BookOpen },
      { path: "/o-que-e-kiro", label: "O que é o Kiro", icon: BrainCircuit },
      { path: "/instalacao", label: "Instalação", icon: Rocket },
      { path: "/primeiro-uso", label: "Todos os Comandos", icon: Zap },
    ]
  },
  {
    title: "CLI & Comandos",
    items: [
      { path: "/cli-basico", label: "CLI Básico", icon: Terminal },
      { path: "/chat", label: "Chat Interativo", icon: MessageSquare },
      { path: "/contexto", label: "Contexto & Memória", icon: Layers },
      { path: "/modelos", label: "Modelos Disponíveis", icon: Cpu },
    ]
  },
  {
    title: "Specs & Planejamento",
    items: [
      { path: "/specs", label: "Sistema de Specs", icon: FileText },
      { path: "/requisitos", label: "Requisitos", icon: Lightbulb },
      { path: "/design", label: "Design Docs", icon: Code2 },
      { path: "/tasks", label: "Tasks & Workflow", icon: Workflow },
    ]
  },
  {
    title: "Agentes & Hooks",
    items: [
      { path: "/agent-hooks", label: "Agent Hooks", icon: Bot },
      { path: "/steering", label: "Steering Rules", icon: Cog },
      { path: "/subagentes", label: "Sub-Agentes", icon: Puzzle },
      { path: "/ferramentas", label: "Ferramentas", icon: Wrench },
    ]
  },
  {
    title: "Avançado",
    items: [
      { path: "/aws-integration", label: "AWS Integration", icon: Cloud },
      { path: "/git-workflow", label: "Git Workflow", icon: GitBranch },
      { path: "/seguranca", label: "Segurança", icon: Shield },
      { path: "/configuracao", label: "Configuração", icon: Settings },
    ]
  }
];

export function Sidebar() {
  const [location] = useLocation();
  const [search, setSearch] = React.useState("");
  const [open, setOpen] = React.useState(true);

  const filtered = NAVIGATION.map(section => ({
    ...section,
    items: section.items.filter(item =>
      item.label.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  return (
    <aside className={cn("h-screen sticky top-0 border-r border-border bg-card overflow-y-auto transition-all", open ? "w-72" : "w-0 border-0")}>
      {open && (
        <div className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <BrainCircuit className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg">Kiro Dev Book</span>
          </div>
          <div className="relative mb-4">
            <Search className="absolute left-2 top-2.5 w-4 h-4 text-muted-foreground" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Buscar..."
              className="w-full pl-8 pr-8 py-2 rounded-md border border-input bg-background text-sm"
            />
            {search && <X className="absolute right-2 top-2.5 w-4 h-4 cursor-pointer text-muted-foreground" onClick={() => setSearch("")} />}
          </div>
          <nav className="space-y-4">
            {filtered.map(section => (
              <div key={section.title}>
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">{section.title}</h4>
                <ul className="space-y-1">
                  {section.items.map(item => (
                    <li key={item.path}>
                      <Link href={item.path} className={cn("flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors", location === item.path ? "bg-primary/10 text-primary font-medium" : "text-foreground hover:bg-muted")}>
                        <item.icon className="w-4 h-4" />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      )}
    </aside>
  );
}

