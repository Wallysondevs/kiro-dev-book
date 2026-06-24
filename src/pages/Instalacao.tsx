export default function Instalacao() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Instalacao e Autenticacao</h1>
      <p className="text-lg text-muted-foreground mb-6">Como instalar o Kiro CLI e configurar a autenticacao. O Kiro suporta multiplos metodos de login para diferentes cenarios.</p>

      <h2>Instalacao</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Instalacao global via npm
npm install -g @anthropic-ai/kiro-cli

# Verificar
kiro-cli --version`}</pre>

      <h2>Autenticacao: kiro-cli login</h2>
      <p>O Kiro suporta 4 metodos de autenticacao:</p>

      <h3>1. Builder ID (gratuito)</h3>
      <p>Conta pessoal gratuita da AWS. Ideal para uso individual.</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`kiro-cli login
# Abre o navegador para criar/logar com Builder ID`}</pre>

      <h3>2. IAM Identity Center (pro)</h3>
      <p>Para organizacoes com SSO corporativo via AWS IAM Identity Center.</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`kiro-cli login --license pro \
  --identity-provider https://minha-org.awsapps.com/start \
  --region us-east-1`}</pre>

      <h3>3. Social Login (Google/GitHub)</h3>
      <p>Login rapido via conta Google ou GitHub existente.</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Via Google
kiro-cli login --social google

# Via GitHub
kiro-cli login --social github`}</pre>

      <h3>4. Device Flow (SSH/remoto)</h3>
      <p>Para ambientes sem navegador (servidores via SSH, containers). Mostra um codigo que voce digita em outro dispositivo.</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`kiro-cli login --use-device-flow

# Output:
# Device code: ABCD-EFGH
# Open: https://device.sso.region.amazonaws.com/
# Enter the code above to authenticate`}</pre>

      <h2>Como funciona a deteccao de ambiente</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead className="bg-muted"><tr><th className="p-3 text-left">Ambiente</th><th className="p-3 text-left">Comportamento</th></tr></thead>
          <tbody>
            <tr className="border-t border-border"><td className="p-3 font-medium">Local (com navegador)</td><td className="p-3">Abre portal unificado no browser. Flags de metodo sao ignoradas — voce escolhe no portal.</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-medium">Remoto (SSH/terminal)</td><td className="p-3">Detecta automaticamente e usa device flow. Mostra codigo + URL para autenticar em outro dispositivo.</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Opcoes do login</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead className="bg-muted"><tr><th className="p-3 text-left">Flag</th><th className="p-3 text-left">Descricao</th></tr></thead>
          <tbody>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">--license pro|free</td><td className="p-3">Tipo: pro (Identity Center) ou free (Builder ID, Social)</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">--identity-provider URL</td><td className="p-3">URL do Identity Center da organizacao</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">--region REGION</td><td className="p-3">Regiao AWS do Identity Center</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">--social google|github</td><td className="p-3">Provider para social login</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">--use-device-flow</td><td className="p-3">Forcar device flow (util quando redirect nao funciona)</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">--verbose</td><td className="p-3">Mais detalhes no output (repetivel para mais verbosidade)</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Verificar sessao</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`kiro-cli whoami

# Output para Builder ID:
# Logged in with Builder ID
# Profile: seu-username

# Output para Identity Center:
# Logged in with IAM Identity Center (https://org.awsapps.com/start)
# Profile: Q-Dev-Amazon-Profile
# arn:aws:codewhisperer:us-east-1:...:profile/...

# Formato JSON:
kiro-cli whoami --format json`}</pre>

      <h2>Logout</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`kiro-cli logout`}</pre>

      <h2>Troubleshooting</h2>
      <div className="space-y-3 my-4">
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">Navegador nao abre</h3>
          <p className="text-sm text-muted-foreground mt-1">Ambiente detectado como remoto. Use <code className="bg-muted px-1 rounded">--use-device-flow</code>.</p>
        </div>
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">"Already logged in"</h3>
          <p className="text-sm text-muted-foreground mt-1">Ja tem sessao ativa. Use <code className="bg-muted px-1 rounded">kiro-cli logout</code> primeiro.</p>
        </div>
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">Identity Center falha</h3>
          <p className="text-sm text-muted-foreground mt-1">Verifique URL e regiao com o admin. O formato e <code className="bg-muted px-1 rounded">https://org.awsapps.com/start</code>.</p>
        </div>
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">Timeout na autenticacao</h3>
          <p className="text-sm text-muted-foreground mt-1">Nao completou a tempo. Reinicie com <code className="bg-muted px-1 rounded">kiro-cli login</code>.</p>
        </div>
      </div>

      <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg my-4">
        <p className="text-sm"><strong>Nota:</strong> So uma sessao ativa por vez. A sessao expira apos periodo de inatividade. Credenciais sao armazenadas em banco de dados local seguro.</p>
      </div>
    </div>
  );
}
