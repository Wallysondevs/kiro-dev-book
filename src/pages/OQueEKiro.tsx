export default function OQueEKiro() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>O que é o Kiro</h1>
      <p className="text-lg text-muted-foreground mb-6">Entenda o que é o Kiro, por que ele existe e como ele se diferencia de outras ferramentas de IA para desenvolvimento.</p>

      <h2>Definição</h2>
      <p>O Kiro é um <strong>agente de IA para desenvolvimento de software</strong> que opera diretamente no terminal do desenvolvedor. Diferente de chatbots comuns que apenas respondem perguntas, o Kiro é um agente — ele <em>age</em>. Ele lê seus arquivos, executa comandos, cria código, roda testes e verifica se tudo funciona, sem que você precise copiar e colar nada.</p>
      <p className="mt-3">Pense nele como um desenvolvedor par (pair programmer) que está sempre disponível, conhece seu projeto inteiro, e pode executar qualquer ação que você faria no terminal.</p>

      <h2>Por que um CLI e não uma IDE?</h2>
      <p>A escolha do terminal como interface não é acidental. O terminal é:</p>
      <ul className="list-disc list-inside space-y-2 my-4 ml-4">
        <li><strong>Universal</strong> — funciona em qualquer máquina, servidor remoto, container ou VM via SSH. Não precisa de interface gráfica.</li>
        <li><strong>Leve</strong> — não consome recursos de um IDE pesado. Roda até em servidores com 512MB de RAM.</li>
        <li><strong>Composível</strong> — integra com pipes, scripts e automações existentes do seu workflow.</li>
        <li><strong>Não-intrusivo</strong> — não modifica seu editor, suas extensões ou sua configuração. Funciona ao lado de qualquer IDE que você já usa.</li>
      </ul>

      <h2>O que diferencia o Kiro de um ChatGPT/Claude na web?</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead className="bg-muted"><tr><th className="p-3 text-left">Aspecto</th><th className="p-3 text-left">Chat na Web</th><th className="p-3 text-left">Kiro CLI</th></tr></thead>
          <tbody>
            <tr className="border-t border-border"><td className="p-3 font-medium">Contexto</td><td className="p-3">Você cola trechos manualmente</td><td className="p-3">Lê o projeto inteiro automaticamente</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-medium">Execução</td><td className="p-3">Você copia o código e roda</td><td className="p-3">Executa direto no seu terminal</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-medium">Verificação</td><td className="p-3">Você testa manualmente</td><td className="p-3">Roda build/testes automaticamente após cada mudança</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-medium">Persistência</td><td className="p-3">Perde contexto ao fechar aba</td><td className="p-3">Sessões salvas, knowledge bases, memória entre sessões</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-medium">Multi-arquivo</td><td className="p-3">Impraticável colar vários arquivos</td><td className="p-3">Navega, lê e edita qualquer arquivo do projeto</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-medium">Ferramentas</td><td className="p-3">Só texto</td><td className="p-3">Git, AWS, Docker, qualquer CLI instalado</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Arquitetura: Como funciona por dentro</h2>
      <p>Quando você inicia o Kiro com <code className="bg-muted px-1.5 py-0.5 rounded font-mono text-sm">kiro-cli chat</code>, acontece o seguinte:</p>
      <ol className="list-decimal list-inside space-y-3 my-4 ml-4">
        <li><strong>Detecção de contexto</strong> — o Kiro identifica o diretório atual, linguagem do projeto (via package.json, Cargo.toml, go.mod, etc), configurações de build e teste, e carrega qualquer arquivo <code className="bg-muted px-1 rounded font-mono text-xs">.kiro/</code> existente.</li>
        <li><strong>Sessão de chat</strong> — uma conversa persistente é iniciada. Cada mensagem sua é enviada ao modelo de IA junto com o contexto do projeto e o histórico da conversa.</li>
        <li><strong>Ciclo de ação</strong> — o modelo pode decidir usar ferramentas: ler um arquivo, executar um comando, editar código. Cada ação é executada e o resultado volta para o modelo decidir o próximo passo.</li>
        <li><strong>Verificação</strong> — após mudanças no código, o Kiro automaticamente roda o build e testes relevantes. Se algo quebra, ele tenta corrigir antes de apresentar o resultado.</li>
        <li><strong>Compactação</strong> — quando a conversa fica muito longa, o contexto é compactado automaticamente (resumido) para liberar espaço sem perder informações importantes.</li>
      </ol>

      <h2>Modelo mental correto</h2>
      <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg my-4">
        <p className="font-medium">O Kiro não é um autocompletar glorificado.</p>
        <p className="text-sm mt-2">Autocompletar (como Copilot) sugere a próxima linha. O Kiro é um agente que entende o objetivo inteiro, planeja uma abordagem, executa múltiplos passos, e verifica o resultado. Ele é melhor usado para tarefas que levam minutos ou horas, não segundos.</p>
      </div>

      <h2>Casos de uso ideais</h2>
      <ul className="space-y-3 my-4">
        <li className="p-3 border border-border rounded-lg"><strong>"Implemente autenticação JWT neste projeto"</strong> — o Kiro analisa a stack atual, instala dependências, cria middleware, rotas, testes, tudo de uma vez.</li>
        <li className="p-3 border border-border rounded-lg"><strong>"Por que este teste está falhando?"</strong> — ele lê o teste, lê o código testado, executa com output verboso, identifica a causa raiz e corrige.</li>
        <li className="p-3 border border-border rounded-lg"><strong>"Migre este projeto de Express para Fastify"</strong> — analisa todas as rotas, middlewares, cria equivalentes no Fastify, adapta testes.</li>
        <li className="p-3 border border-border rounded-lg"><strong>"Configure CI/CD com GitHub Actions para deploy na AWS"</strong> — cria workflows, configura secrets, testa o pipeline.</li>
        <li className="p-3 border border-border rounded-lg"><strong>"Documente todas as APIs deste projeto"</strong> — lê cada endpoint, gera documentação Swagger/OpenAPI com exemplos.</li>
      </ul>

      <h2>Limitações honestas</h2>
      <ul className="list-disc list-inside space-y-2 my-4 ml-4">
        <li>Não é omnisciente — pode errar em lógica complexa de negócios que não está documentada no código.</li>
        <li>Consome tokens (API) — cada interação tem custo. Tarefas grandes custam mais.</li>
        <li>Precisa de verificação humana — especialmente para lógica de negócios, segurança e decisões de arquitetura.</li>
        <li>Performance depende do modelo — Opus é mais preciso mas lento; Haiku é rápido mas pode errar mais.</li>
        <li>Não substitui entender o código — use o Kiro para acelerar, não para evitar aprender.</li>
      </ul>
    </div>
  );
}
