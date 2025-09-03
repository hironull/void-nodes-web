import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X, Server, Cpu, HardDrive, Zap } from "lucide-react";

export default function Plans() {
  const plans = [
    {
      name: "Nano",
      price: "$2",
      popular: false,
      specs: {
        ram: "8GB RAM",
        cores: "2 Cores",
        disk: "30GB disk"
      }
    },
    {
      name: "Basic",
      price: "$4",
      popular: false,
      specs: {
        ram: "16GB RAM",
        cores: "4 Cores",
        disk: "50GB disk"
      }
    },
    {
      name: "Standard",
      price: "$6",
      popular: true,
      specs: {
        ram: "24GB RAM",
        cores: "6 Cores",
        disk: "100GB disk"
      }
    },
    {
      name: "Pro",
      price: "$12",
      popular: false,
      specs: {
        ram: "32GB RAM",
        cores: "8 Cores",
        disk: "256GB disk"
      }
    },
    {
      name: "Elite",
      price: "$14",
      popular: false,
      specs: {
        ram: "48GB RAM",
        cores: "12 Cores",
        disk: "384GB disk"
      }
    },
    {
      name: "Extreme",
      price: "$16",
      popular: false,
      specs: {
        ram: "64GB RAM",
        cores: "24 Cores",
        disk: "512GB disk"
      }
    }
  ];

  const included = [
    { text: "Full Root Access", available: true },
    { text: "DDoS Protection", available: true },
    { text: "99.9% Uptime Guarantee", available: true },
    { text: "Flexible Billing Options", available: true },
    { text: "IPv6", available: true },
    { text: "IPv4", available: false },
    { text: "Lifetime", available: false },
    { text: "Refunds", available: false }
  ];

  const systemInfo = [
    "700GB DDR4 RAM (256GB RAM + 512GB Swap)",
    "32 Cores Intel Xeon",
    "1.5TB HDD",
    "Saudi Arabia Location"
  ];

  const notes = [
    "Crypto payments only",
    "No refunds policy",
    "Not dedicated servers"
  ];

  return (
    <div className="container mx-auto px-6 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="pixel-font text-4xl md:text-6xl mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          VPS PLANS
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Choose the perfect VPS plan for your needs. All plans include enterprise-grade features.
        </p>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <Card 
            key={index} 
            className={`glass-card rounded-2xl border-0 relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-4 py-1 rounded-full">
                  Most Popular
                </Badge>
              </div>
            )}
            
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <div className="text-4xl font-bold text-primary">{plan.price}</div>
              <CardDescription>per month</CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Server size={20} className="text-primary" />
                  <span>{plan.specs.ram}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Cpu size={20} className="text-primary" />
                  <span>{plan.specs.cores}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <HardDrive size={20} className="text-primary" />
                  <span>{plan.specs.disk}</span>
                </div>
              </div>
              
              <Button 
                className="w-full rounded-xl mt-6"
                variant={plan.popular ? "default" : "outline"}
                onClick={() => window.open("https://discord.gg/vdx", "_blank")}
              >
                <Zap size={16} className="mr-2" />
                Get Started
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* What's Included */}
      <Card className="glass-card rounded-2xl border-0 max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl md:text-3xl mb-4">📌 All Plans Include</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {included.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                {item.available ? (
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                ) : (
                  <X size={20} className="text-red-500 flex-shrink-0" />
                )}
                <span className={item.available ? "" : "line-through text-muted-foreground"}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* System Info */}
      <Card className="glass-card rounded-2xl border-0 max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl md:text-3xl mb-4">🖥️ System Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {systemInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Server size={20} className="text-primary flex-shrink-0" />
                <span>{info}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Important Notes */}
      <Card className="glass-card rounded-2xl border-0 max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl mb-4">⚠️ Important Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {notes.map((note, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                <span>{note}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="text-center">
        <Button 
          size="lg" 
          className="rounded-xl px-12 py-4"
          onClick={() => window.open("https://discord.gg/vdx", "_blank")}
        >
          Start Your VPS Journey
        </Button>
      </div>
    </div>
  );
}