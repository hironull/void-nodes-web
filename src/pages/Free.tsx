import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Cpu, HardDrive, Users, Zap } from "lucide-react";

export default function Free() {
  const boostRewards = [
    {
      boost: "2x Boost",
      specs: {
        ram: "12GB RAM",
        cores: "4 cores",
        disk: "100GB disk"
      }
    },
    {
      boost: "4x Boost",
      specs: {
        ram: "24GB RAM",
        cores: "6 cores",
        disk: "150GB disk"
      }
    },
    {
      boost: "6x Boost",
      specs: {
        ram: "32GB RAM",
        cores: "8 cores",
        disk: "200GB disk"
      }
    }
  ];

  const inviteRewards = [
    {
      invites: "8x Invites",
      specs: {
        ram: "12GB",
        cores: "4c",
        disk: "50GB"
      }
    },
    {
      invites: "12x Invites",
      specs: {
        ram: "24GB",
        cores: "6c",
        disk: "100GB"
      }
    },
    {
      invites: "16x Invites",
      specs: {
        ram: "28GB",
        cores: "6c",
        disk: "150GB"
      }
    },
    {
      invites: "20x Invites",
      specs: {
        ram: "32GB",
        cores: "8c",
        disk: "200GB"
      }
    },
    {
      invites: "24x Invites",
      specs: {
        ram: "38GB",
        cores: "8c",
        disk: "250GB"
      }
    },
    {
      invites: "28x Invites",
      specs: {
        ram: "42GB",
        cores: "12c",
        disk: "300GB"
      }
    },
    {
      invites: "36x Invites",
      specs: {
        ram: "56GB",
        cores: "12c",
        disk: "350GB"
      }
    }
  ];

  const gameBoostRewards = [
    {
      boost: "2x Boost",
      specs: {
        ram: "12GB RAM",
        cores: "2 cores",
        disk: "25GB disk"
      }
    },
    {
      boost: "4x Boost",
      specs: {
        ram: "16GB RAM",
        cores: "4 cores",
        disk: "50GB disk"
      }
    },
    {
      boost: "6x Boost",
      specs: {
        ram: "24GB RAM",
        cores: "8 cores",
        disk: "100GB disk"
      }
    }
  ];

  const gameInviteRewards = [
    {
      invites: "8x Invites",
      specs: {
        ram: "8GB",
        cores: "1.5c",
        disk: "10GB"
      }
    },
    {
      invites: "12x Invites",
      specs: {
        ram: "12GB",
        cores: "1.72c",
        disk: "20GB"
      }
    },
    {
      invites: "16x Invites",
      specs: {
        ram: "16GB",
        cores: "2.5c",
        disk: "50GB"
      }
    },
    {
      invites: "20x Invites",
      specs: {
        ram: "20GB",
        cores: "3c",
        disk: "60GB"
      }
    },
    {
      invites: "24x Invites",
      specs: {
        ram: "24GB",
        cores: "3c",
        disk: "100GB"
      }
    },
    {
      invites: "28x Invites",
      specs: {
        ram: "30GB",
        cores: "6c",
        disk: "150GB"
      }
    },
    {
      invites: "36x Invites",
      specs: {
        ram: "50GB",
        cores: "12c",
        disk: "175GB"
      }
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="pixel-font text-4xl md:text-6xl mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          FREE VPS
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Earn free VPS resources by boosting our Discord server or inviting friends. 
          Get lifetime access to powerful hosting!
        </p>
      </div>

      {/* VPS Boost Rewards */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <Zap className="mr-3 text-primary" size={32} />
            VPS Boost Rewards
          </h2>
          <p className="text-muted-foreground">Boost our Discord server to unlock free VPS resources</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {boostRewards.map((reward, index) => (
            <Card key={index} className="glass-card rounded-2xl border-0">
              <CardHeader className="text-center">
                <Badge className="mb-2 w-fit mx-auto bg-primary text-primary-foreground">
                  {reward.boost}
                </Badge>
                <CardTitle className="text-xl">VPS Hosting</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Server size={20} className="text-primary" />
                  <span>{reward.specs.ram}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Cpu size={20} className="text-primary" />
                  <span>{reward.specs.cores}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <HardDrive size={20} className="text-primary" />
                  <span>{reward.specs.disk}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="glass-card rounded-2xl border-0 max-w-4xl mx-auto">
          <CardContent className="py-6">
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong>Notice:</strong></p>
              <ul className="space-y-1 ml-4">
                <li>• Alt boosts can be done</li>
                <li>• The VPS will be for lifetime even if boosts end</li>
                <li>• We reserve the right to take it anytime fairly if the VPS provided is free</li>
                <li>• Comes with Intel Xeon CPU, No IPv4 and infinite dedicated IPv6s</li>
                <li>• Open a ticket to claim your rewards</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* VPS Invite Rewards */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <Users className="mr-3 text-primary" size={32} />
            VPS Invite Rewards
          </h2>
          <p className="text-muted-foreground">Invite friends to earn increasingly powerful VPS resources</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {inviteRewards.map((reward, index) => (
            <Card key={index} className="glass-card rounded-2xl border-0">
              <CardHeader className="text-center pb-3">
                <Badge className="mb-2 w-fit mx-auto bg-accent text-accent-foreground">
                  {reward.invites}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-2 pt-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Server size={16} className="text-primary" />
                    <span className="text-sm">{reward.specs.ram}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Cpu size={16} className="text-primary" />
                    <span className="text-sm">{reward.specs.cores}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <HardDrive size={16} className="text-primary" />
                    <span className="text-sm">{reward.specs.disk}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="glass-card rounded-2xl border-0 max-w-4xl mx-auto">
          <CardContent className="py-6">
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong>Notice:</strong></p>
              <ul className="space-y-1 ml-4">
                <li>• Invite rewards can be combined</li>
                <li>• We reserve the right to take it anytime fairly if the VPS provided is free</li>
                <li>• Comes with Intel Xeon CPU, No IPv4 and infinite dedicated IPv6s</li>
                <li>• Open a ticket to claim your rewards</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Game/Web/Bot Hosting Boost Rewards */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <Gift className="mr-3 text-primary" size={32} />
            Game/Web/Bot Hosting - Boost Rewards
          </h2>
          <p className="text-muted-foreground">Boost rewards for specialized hosting services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {gameBoostRewards.map((reward, index) => (
            <Card key={index} className="glass-card rounded-2xl border-0">
              <CardHeader className="text-center">
                <Badge className="mb-2 w-fit mx-auto bg-primary text-primary-foreground">
                  {reward.boost}
                </Badge>
                <CardTitle className="text-lg">Game/Web/Bot</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Server size={20} className="text-primary" />
                  <span>{reward.specs.ram}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Cpu size={20} className="text-primary" />
                  <span>{reward.specs.cores}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <HardDrive size={20} className="text-primary" />
                  <span>{reward.specs.disk}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Game/Web/Bot Hosting Invite Rewards */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Game/Web/Bot Hosting - Invite Rewards</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {gameInviteRewards.map((reward, index) => (
            <Card key={index} className="glass-card rounded-2xl border-0">
              <CardHeader className="text-center pb-3">
                <Badge className="mb-2 w-fit mx-auto bg-accent text-accent-foreground">
                  {reward.invites}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-2 pt-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Server size={16} className="text-primary" />
                    <span className="text-sm">{reward.specs.ram}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Cpu size={16} className="text-primary" />
                    <span className="text-sm">{reward.specs.cores}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <HardDrive size={16} className="text-primary" />
                    <span className="text-sm">{reward.specs.disk}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How to Claim */}
      <Card className="glass-card rounded-2xl border-0 max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl mb-4">🎯 How to Claim Your Rewards</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-primary">For Boost Rewards</h3>
              <p className="text-muted-foreground">
                Boost our Discord server and open a ticket to claim your free VPS resources.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-primary">For Invite Rewards</h3>
              <p className="text-muted-foreground">
                Invite friends to our Discord and track your progress. Open a ticket when you reach the required count.
              </p>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="rounded-xl px-12"
            onClick={() => window.open("https://discord.gg/vdx", "_blank")}
          >
            Join Discord & Start Earning
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

const Gift = ({ size, className }: { size: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20,12 20,22 4,22 4,12" />
    <rect width="20" height="5" x="2" y="7" />
    <path d="m12 22 0-15" />
    <path d="m12 7 0-3" />
    <path d="m5 7 3-3 3 3" />
    <path d="m19 7-3-3-3 3" />
  </svg>
);