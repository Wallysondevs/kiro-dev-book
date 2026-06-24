import { Link } from "wouter";
export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto text-center py-20">
      <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
      <p className="text-lg text-muted-foreground mt-4">Pagina nao encontrada</p>
      <Link href="/" className="text-primary hover:underline mt-4 inline-block">Voltar ao inicio</Link>
    </div>
  );
}
