export default function Design() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Design Docs</h1>
      <p className="text-lg text-muted-foreground mb-6">A segunda fase: COMO implementar os requisitos.</p>
      <h2>Conteudo de um Design Doc</h2>
      <ul className="list-disc list-inside space-y-1 my-4 ml-4">
        <li>Arquitetura de alto nivel</li>
        <li>Fluxos de dados</li>
        <li>Decisoes tecnicas (stack, libs, patterns)</li>
        <li>Interfaces e contratos (APIs, types)</li>
        <li>Trade-offs e alternativas consideradas</li>
      </ul>
    </div>
  );
}
