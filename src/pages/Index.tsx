import { SearchBar } from "@/components/SearchBar";
import { ServiceCard } from "@/components/ServiceCard";
import { ArtisanCard } from "@/components/ArtisanCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Star, Users, CheckCircle } from "lucide-react";
import heroElectrician from "@/assets/hero-electrician.jpg";
import customerTestimonial from "@/assets/customer-testimonial.jpg";

const Index = () => {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  const services = [
    { title: "Electrician", icon: "⚡" },
    { title: "Plumber", icon: "🔧" },
    { title: "AC Repair", icon: "❄️" },
    { title: "Generator Tech", icon: "🔌" },
    { title: "Cleaner", icon: "🧽" },
    { title: "Carpenter", icon: "🔨" },
    { title: "Painter", icon: "🎨" },
    { title: "Tailor", icon: "✂️" },
  ];

  const featuredArtisans = [
    {
      name: "Dele Okoro",
      trade: "Electrician",
      rating: 4.8,
      reviewCount: 127,
      location: "Surulere",
      profileImage: "/placeholder.svg",
      isVerified: true,
      experience: "10+ years"
    },
    {
      name: "Kemi Adebayo",
      trade: "Cleaner",
      rating: 4.9,
      reviewCount: 89,
      location: "Lekki",
      profileImage: "/placeholder.svg",
      isVerified: true,
      experience: "5+ years"
    },
    {
      name: "Ibrahim Hassan",
      trade: "Generator Technician",
      rating: 4.7,
      reviewCount: 156,
      location: "Ikeja",
      profileImage: "/placeholder.svg",
      isVerified: true,
      experience: "8+ years"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white">
        <div className="absolute inset-0">
          <img 
            src={heroElectrician} 
            alt="Professional Nigerian artisan at work"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find People Wey <span className="text-accent">Sabi</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Nigeria's most trusted platform for verified local artisans
            </p>
            
            <div className="mb-8">
              <SearchBar onSearch={handleSearch} />
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <ShieldCheck className="w-4 h-4 mr-1" />
                All Verified
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Star className="w-4 h-4 mr-1" />
                Peer Reviewed
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Users className="w-4 h-4 mr-1" />
                10,000+ Artisans
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Popular Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                icon={service.icon}
                onClick={() => handleSearch(service.title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artisans */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Top-Rated Artisans
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredArtisans.map((artisan, index) => (
              <ArtisanCard key={index} {...artisan} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Why Nigerians Trust Sabi
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-verified-badge rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Sabi Verified Professionals</h3>
                    <p className="text-muted-foreground">Every artisan goes through our rigorous identity verification process.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-rating-gold rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Peer-Reviewed Ratings</h3>
                    <p className="text-muted-foreground">Real reviews from real customers help you make informed decisions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Quality Guaranteed</h3>
                    <p className="text-muted-foreground">No wahala - find skilled professionals who deliver quality work every time.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={customerTestimonial}
                alt="Happy Sabi customer"
                className="rounded-2xl shadow-strong w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-medium max-w-sm">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-rating-gold text-rating-gold" />
                  ))}
                </div>
                <p className="text-sm text-foreground mb-2">
                  "Found the perfect electrician in minutes. No wahala at all!"
                </p>
                <p className="text-xs text-muted-foreground">- Bisi A., Lagos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Find Your Perfect Artisan?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of Nigerians who trust Sabi for all their service needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Browse All Services
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Are You an Artisan?
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Sabi
          </h3>
          <p className="text-white/70 mb-4">
            Find People Wey Sabi - Nigeria's trusted artisan marketplace
          </p>
          <p className="text-white/50 text-sm">
            © 2024 Sabi. Building trust, one service at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;