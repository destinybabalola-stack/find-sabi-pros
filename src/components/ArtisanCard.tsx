import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Phone, MessageCircle, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArtisanCardProps {
  name: string;
  trade: string;
  rating: number;
  reviewCount: number;
  location: string;
  profileImage: string;
  isVerified: boolean;
  experience: string;
  className?: string;
}

export const ArtisanCard = ({ 
  name, 
  trade, 
  rating, 
  reviewCount, 
  location, 
  profileImage, 
  isVerified, 
  experience,
  className 
}: ArtisanCardProps) => {
  return (
    <Card className={cn("p-6 bg-gradient-card border border-border hover:shadow-medium transition-all duration-200", className)}>
      <div className="flex items-start space-x-4">
        <div className="relative">
          <img 
            src={profileImage} 
            alt={name}
            className="w-16 h-16 rounded-full object-cover"
          />
          {isVerified && (
            <div className="absolute -top-1 -right-1">
              <div className="flex items-center justify-center w-6 h-6 bg-verified-badge rounded-full">
                <ShieldCheck className="w-4 h-4 text-white" />
              </div>
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-foreground truncate">{name}</h3>
            {isVerified && (
              <Badge variant="secondary" className="bg-verified-badge/10 text-verified-badge border-verified-badge/20">
                Sabi Verified
              </Badge>
            )}
          </div>
          
          <p className="text-sm text-muted-foreground">{trade}</p>
          <p className="text-sm text-muted-foreground">{experience} • {location}</p>
          
          <div className="flex items-center space-x-1 mt-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={cn(
                    "w-4 h-4",
                    i < Math.floor(rating) ? "fill-rating-gold text-rating-gold" : "text-muted-foreground/30"
                  )} 
                />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">{rating}</span>
            <span className="text-sm text-muted-foreground">({reviewCount} reviews)</span>
          </div>
        </div>
      </div>
      
      <div className="flex space-x-2 mt-4">
        <Button className="flex-1 bg-primary hover:bg-primary-hover">
          <Phone className="w-4 h-4 mr-2" />
          Call Now
        </Button>
        <Button variant="outline" className="flex-1">
          <MessageCircle className="w-4 h-4 mr-2" />
          WhatsApp
        </Button>
      </div>
    </Card>
  );
};