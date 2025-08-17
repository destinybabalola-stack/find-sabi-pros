import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export const SearchBar = ({ onSearch, placeholder = "What service do you need?" }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="flex space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="pl-10 h-12 text-base border-2 border-border focus:border-primary"
          />
        </div>
        <Button 
          type="submit" 
          className="h-12 px-6 bg-primary hover:bg-primary-hover"
        >
          <Search className="w-5 h-5" />
        </Button>
      </div>
      
      <div className="flex items-center justify-center mt-3 text-sm text-muted-foreground">
        <MapPin className="w-4 h-4 mr-1" />
        <span>Lagos, Nigeria</span>
      </div>
    </form>
  );
};