import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, Clock, DollarSign, Users, Headphones, Server, Globe, CheckCircle, Gift, Monitor, Gamepad2, Bot, Mail, MessageSquare, FileText, Scale } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    setMounted(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Get your VPS running in seconds with our automated deployment system."
    },
    {
      icon: Shield,
      title: "DDoS Protected",
      description: "Enterprise-grade DDoS protection keeps your services online 24/7."
    },
    {
      icon: Clock,
      title: "99.9% Uptime",
      description: "Reliable infrastructure with guaranteed uptime and monitoring."
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden fees or surprise charges. Crypto payments only."
    },
    {
      icon: Users,
      title: "Invite & Boost Rewards",
      description: "Earn free VPS resources by inviting friends or boosting our Discord."
    },
    {
      icon: Headphones,
      title: "Discord Support",
      description: "Get instant help from our responsive support team on Discord."
    }
  ];

  const vpsPlans = [
    { name: "Nano", price: "$2", ram: "8GB", cores: "2 Core", disk: "30GB" },
    { name: "Basic", price: "$4", ram: "16GB", cores: "4 Cores", disk: "50GB" },
    { name: "Standard", price: "$6", ram: "24GB", cores: "6 Cores", disk: "100GB" },
    { name: "Pro", price: "$12", ram: "32GB", cores: "8 Cores", disk: "256GB" },
    { name: "Elite", price: "$14", ram: "48GB", cores: "12 Cores", disk: "384GB" },
    { name: "Extreme", price: "$16", ram: "64GB", cores: "24 Cores", disk: "512GB" }
  ];

  const boostRewards = [
    { boost: "2x Boost", ram: "12GB", cores: "4 core", disk: "100GB" },
    { boost: "4x Boost", ram: "24GB", cores: "6 core", disk: "150GB" },
    { boost: "6x Boost", ram: "32GB", cores: "8 core", disk: "200GB" }
  ];

  const inviteRewards = [
    { invites: "8x", ram: "12GB", cores: "4c", disk: "50GB" },
    { invites: "12x", ram: "24GB", cores: "6c", disk: "100GB" },
    { invites: "16x", ram: "28GB", cores: "6c", disk: "150GB" },
    { invites: "20x", ram: "32GB", cores: "8c", disk: "200GB" },
    { invites: "24x", ram: "38GB", cores: "8c", disk: "250GB" },
    { invites: "28x", ram: "42GB", cores: "12c", disk: "300GB" },
    { invites: "36x", ram: "56GB", cores: "12c", disk: "350GB" }
  ];

  return (
    <Layout>
      {/* Shooting Stars Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="shooting-star" />
        ))}
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6">
          <div className="container mx-auto text-center">
            <div className={`transition-all duration-1500 ${mounted ? 'smooth-entrance' : 'opacity-0'}`}>
              <h1 className="quirky-font text-7xl md:text-9xl mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                VOID NODES
              </h1>
              <p className="text-2xl md:text-3xl mb-4 text-muted-foreground max-w-3xl mx-auto font-semibold">
                Next-Gen VPS Hosting Platform
              </p>
              <p className="text-xl mb-8 text-foreground/80 max-w-2xl mx-auto">
                Experience the future of hosting with lightning-fast VPS at unbeatable prices
              </p>
            </div>
            
            <div className={`glass-card rounded-3xl p-6 mb-8 inline-block transition-all duration-1000 delay-300 hover-glow ${mounted ? 'bounce-in' : 'opacity-0'}`}>
              <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <Zap size={16} className="text-accent animate-float" />
                  <span>Instant Setup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield size={16} className="text-accent animate-float" style={{animationDelay: '0.5s'}} />
                  <span>DDoS Protected</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Server size={16} className="text-accent animate-float" style={{animationDelay: '1s'}} />
                  <span>99.9% Uptime</span>
                </div>
              </div>
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
              <Button 
                size="lg" 
                className="rounded-2xl px-8 py-4 text-lg font-semibold hover-glow animate-float"
                onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Paid Plans
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-2xl px-8 py-4 text-lg font-semibold hover-glow animate-float" 
                style={{animationDelay: '0.3s'}}
                onClick={() => document.getElementById('free')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Try Free VPS
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="rounded-2xl px-8 py-4 text-lg font-semibold hover-glow animate-float" 
                style={{animationDelay: '0.6s'}}
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Discover More
              </Button>
            </div>
          </div>
        </section>

        {/* VPS Plans Section */}
        <section id="plans" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="quirky-font text-5xl md:text-6xl mb-6 text-primary animate-slide-in-left">
                VPS Plans
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Choose from our powerful VPS plans designed for every need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {vpsPlans.map((plan, index) => (
                <Card 
                  key={index} 
                  className="glass-card border-primary/20 hover-glow animate-scale-in transition-all duration-500"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-primary mb-2">
                      {plan.name}
                    </CardTitle>
                    <div className="text-4xl font-bold text-accent mb-4">{plan.price}<span className="text-lg text-muted-foreground">/mo</span></div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span>RAM:</span>
                      <span className="font-semibold">{plan.ram}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CPU:</span>
                      <span className="font-semibold">{plan.cores}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Storage:</span>
                      <span className="font-semibold">{plan.disk}</span>
                    </div>
                    <Button className="w-full mt-4 rounded-xl hover-glow">
                      Choose Plan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="glass-card border-primary/20 hover-glow max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">All Plans Include</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "✅ Full Root Access",
                    "✅ DDoS Protection", 
                    "✅ 99.9% Uptime Guarantee",
                    "✅ Flexible Billing Options",
                    "✅ IPv6 Support",
                    "❌ IPv4",
                    "❌ Lifetime Plans",
                    "❌ No Refunds"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Free VPS Section */}
        <section id="free" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="quirky-font text-5xl md:text-6xl mb-6 text-primary">
                Free VPS Rewards
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Earn free VPS resources by boosting our Discord or inviting friends
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Boost Rewards */}
              <Card className="glass-card border-primary/20 hover-glow">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-primary">
                    <Users className="inline-block mr-2" />
                    Boost Rewards
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {boostRewards.map((reward, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-secondary/20 rounded-lg">
                      <span className="font-semibold">{reward.boost}</span>
                      <span>{reward.ram} RAM • {reward.cores} • {reward.disk} disk</span>
                    </div>
                  ))}
                  <p className="text-sm text-muted-foreground mt-4">
                    Alt boosts can be done. The VPS will be for lifetime even if boosts end.
                  </p>
                </CardContent>
              </Card>

              {/* Invite Rewards */}
              <Card className="glass-card border-primary/20 hover-glow">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-primary">
                    <Gift className="inline-block mr-2" />
                    Invite Rewards
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {inviteRewards.map((reward, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-secondary/20 rounded-lg text-sm">
                      <span className="font-semibold">{reward.invites}</span>
                      <span>{reward.ram} • {reward.cores} • {reward.disk}</span>
                    </div>
                  ))}
                  <p className="text-sm text-muted-foreground mt-4">
                    Invite rewards can be combined. We reserve the right to take it anytime fairly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="quirky-font text-5xl md:text-6xl mb-6 text-primary">
                What is Void Nodes?
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Void Nodes is a modern hosting solution offering free and paid VPS servers to power your projects, 
                Minecraft servers, bots, and more. Whether you're a developer or hobbyist, we've got unbeatable deals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card 
                    key={index} 
                    className="glass-card border-primary/20 hover-glow animate-scale-in transition-all duration-500"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-2xl w-fit">
                        <Icon size={32} className="text-primary animate-float" style={{animationDelay: `${index * 0.2}s`}} />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center text-muted-foreground">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="quirky-font text-5xl md:text-6xl mb-6 text-primary">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Have questions or need support? Reach out to our friendly team through the channels below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="glass-card border-primary/20 hover-glow">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    <Mail className="inline-block mr-2" />
                    Email Support
                  </CardTitle>
                  <CardDescription className="text-center">
                    Get help with your VPS, account, or payment issues via email.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="rounded-xl hover-glow">
                    Email Us
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card border-primary/20 hover-glow">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    <MessageSquare className="inline-block mr-2" />
                    Discord Community
                  </CardTitle>
                  <CardDescription className="text-center">
                    Join our Discord community for instant support and updates.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button 
                    className="rounded-xl hover-glow"
                    onClick={() => window.open("https://discord.gg/vdx", "_blank")}
                  >
                    Join Discord
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Legal Section */}
        <section id="legal" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="quirky-font text-5xl md:text-6xl mb-6 text-primary">
                Legal Information
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="glass-card border-primary/20 hover-glow">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    <FileText className="inline-block mr-2" />
                    Terms of Service
                  </CardTitle>
                  <CardDescription className="text-center">
                    Read our terms and conditions for using VoidNodes services.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="glass-card border-primary/20 hover-glow">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    <Scale className="inline-block mr-2" />
                    Privacy Policy
                  </CardTitle>
                  <CardDescription className="text-center">
                    Learn how we protect and handle your personal information.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}