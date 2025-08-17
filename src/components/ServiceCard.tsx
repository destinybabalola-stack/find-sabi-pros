import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  icon: string;
  className?: string;
  onClick?: () => void;
}

export const ServiceCard = ({ title, icon, className, onClick }: ServiceCardProps) => {
  return (
    <Card 
      className={cn(
        "p-6 cursor-pointer transition-all duration-200 hover:shadow-medium bg-gradient-card border border-border hover:border-primary/20",
        className
      )}
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="text-4xl">{icon}</div>
        <h3 className="font-semibold text-foreground">{title}</h3>
      </div>
    </Card>
  );
};