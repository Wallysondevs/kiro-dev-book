import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Kiro Dev Book</span>
      </div>
      <button onClick={toggleTheme} className="p-2 rounded-md hover:bg-muted">
        {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>
    </header>
  );
}
