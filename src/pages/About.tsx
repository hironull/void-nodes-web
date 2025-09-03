import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Shield, Clock, DollarSign, Users, Globe, CheckCircle, Target, Award } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years of Experience", value: "5+", icon: Award },
    { label: "Satisfied Customers", value: "1000+", icon: Users },
    { label: "Server Uptime", value: "99.9%", icon: Clock },
    { label: "Countries Served", value: "50+", icon: Globe }
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize the security and privacy of your data with enterprise-grade protection and encryption."
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden fees, no surprise charges. Our pricing is clear and competitive with crypto-only payments."
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "With 99.9% uptime guarantee and 24/7 monitoring, your services stay online when you need them most."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by developers, for developers. We understand your needs and provide solutions that work."
    }
  ];

  const team = [
    {
      name: "Technical Team",
      role: "Infrastructure & Development",
      description: "Experts in cloud infrastructure, networking, and security ensuring optimal performance."
    },
    {
      name: "Support Team",
      role: "Customer Success",
      description: "Dedicated support specialists available on Discord to help you succeed with your projects."
    },
    {
      name: "Community Team",
      role: "Community Management",
      description: "Active community managers fostering growth and engagement in our Discord ecosystem."
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="pixel-font text-4xl md:text-6xl mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          ABOUT VOID NODES
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Empowering developers and businesses with cutting-edge hosting solutions since our inception. 
          We're more than just a hosting provider – we're your technology partner.
        </p>
      </div>

      {/* Our Story */}
      <section>
        <Card className="glass-card rounded-2xl border-0 max-w-6xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl mb-4">Our Story</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-lg leading-relaxed">
            <p className="text-muted-foreground">
              Void Nodes was born from a simple vision: to democratize access to powerful hosting solutions. 
              Our founders, experienced developers themselves, recognized the need for affordable, reliable, 
              and feature-rich VPS hosting that doesn't compromise on quality.
            </p>
            <p className="text-muted-foreground">
              What started as a project to solve our own hosting challenges has grown into a platform trusted 
              by thousands of developers, gamers, and businesses worldwide. We've built our infrastructure 
              with enterprise-grade hardware while maintaining the flexibility and affordability that 
              startups and individual developers need.
            </p>
            <p className="text-muted-foreground">
              Today, Void Nodes continues to innovate in the hosting space, offering not just traditional 
              VPS solutions, but also specialized hosting for game servers, Discord bots, web applications, 
              and more. Our commitment to the community drives everything we do.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Stats */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Void Nodes by the Numbers</h2>
          <p className="text-muted-foreground">Our growth reflects the trust our community places in us</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="glass-card rounded-2xl border-0 text-center">
                <CardContent className="py-8">
                  <Icon size={48} className="text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Our Values */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Drives Us</h2>
          <p className="text-muted-foreground">The core values that guide every decision we make</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="glass-card rounded-2xl border-0">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                    <Icon size={24} className="text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Our Team */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground">Dedicated professionals committed to your success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="glass-card rounded-2xl border-0">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <Badge variant="secondary" className="w-fit mx-auto">
                  {member.role}
                </Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center">
                  {member.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="glass-card rounded-2xl border-0">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Target size={24} className="text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground text-center text-base">
                To provide accessible, reliable, and powerful hosting solutions that enable developers, 
                gamers, and businesses to bring their ideas to life without technical barriers or 
                prohibitive costs.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="glass-card rounded-2xl border-0">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Globe size={24} className="text-accent-foreground" />
              </div>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground text-center text-base">
                To become the world's most trusted and innovative hosting platform, fostering a global 
                community of creators and entrepreneurs while maintaining our commitment to transparency, 
                security, and excellence.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Infrastructure */}
      <Card className="glass-card rounded-2xl border-0 max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl md:text-3xl mb-4">
            <Server className="inline-block mr-3" size={32} />
            Our Infrastructure
          </CardTitle>
          <CardDescription className="text-lg">
            Built on enterprise-grade hardware for maximum performance and reliability
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Hardware Specifications</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0" />
                  <span>700GB DDR4 RAM (256GB + 512GB Swap)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0" />
                  <span>32 Cores Intel Xeon Processors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0" />
                  <span>1.5TB High-Performance Storage</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Network & Security</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0" />
                  <span>Enterprise DDoS Protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0" />
                  <span>99.9% Uptime SLA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0" />
                  <span>Saudi Arabia Data Center</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}