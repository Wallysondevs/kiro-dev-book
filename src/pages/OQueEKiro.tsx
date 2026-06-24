import { BrainCircuit, CheckCircle } from "lucide-react";

export default function OQueEKiro() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>O que é o Kiro</h1>
      <p className="text-lg text-muted-foreground mb-6">Kiro é um agente de IA para desenvolvimento que roda direto no seu terminal, transformando a forma como você escreve, testa e mantém código.</p>

      <h2>Visão Geral</h2>
      <p>O Kiro é um IDE inteligente em formato CLI desenvolvido pela Anthropic. Ele combina o poder do Claude com ferramentas de desenvolvimento para criar um assistente que entende seu código, executa comandos, gerencia arquivos e integra com serviços cloud.</p>

      <h2>Principais Características</h2>
      <ul className="space-y-3 my-4">
        {[
          "Chat interativo com contexto persistente entre sessões",
          "Leitura e escrita de arquivos com verificação automática",
          "Execução de comandos shell com análise de output",
          "Sistema de Specs para planejamento estruturado (requisitos → design → tasks)",
          "Agent Hooks para automação de workflows",
          "Steering Rules para personalizar o comportamento do agente",
          "Integração nativa com AWS CLI",
          "Suporte a múltiplos modelos (Claude Opus, Sonnet, Haiku)",
          "Knowledge bases com busca semântica",
          "Sub-agentes para pipelines paralelos",
        ].map((item, i) => (
          <li key={i} className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>{item}</span></li>
        ))}
      </ul>

      <h2>Como Funciona</h2>
      <p>O Kiro roda como um processo CLI no seu terminal. Quando você inicia um chat, ele:</p>
      <ol className="list-decimal list-inside space-y-2 my-4 ml-4">
        <li>Carrega o contexto do projeto (arquivos, git, configuração)</li>
        <li>Conecta ao modelo de IA selecionado</li>
        <li>Processa suas mensagens e executa ações (ler/escrever arquivos, rodar comandos)</li>
        <li>Verifica resultados automaticamente (build, testes)</li>
        <li>Mantém histórico para continuidade entre sessões</li>
      </ol>

      <h2>Quando Usar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0 text-green-500">✓ Ideal para</h3>
          <ul className="text-sm space-y-1 mt-2">
            <li>• Desenvolvimento de features completas</li>
            <li>• Refactoring e code review</li>
            <li>• Debugging e troubleshooting</li>
            <li>• Automação de tarefas DevOps</li>
            <li>• Documentação e análise de código</li>
          </ul>
        </div>
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0 text-primary">⚡ Diferencial</h3>
          <ul className="text-sm space-y-1 mt-2">
            <li>• Não precisa de IDE pesado</li>
            <li>• Funciona via SSH em servidores remotos</li>
            <li>• Contexto inteligente automático</li>
            <li>• Executa e verifica em tempo real</li>
            <li>• Persistência entre sessões</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
