import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Mail, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="pixel-font text-4xl md:text-6xl mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          CONTACT US
        </h1>
        <p className="text-xl text-muted-foreground">
          Get in touch with our team for support, questions, or partnerships.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="glass-card rounded-2xl border-0">
          <CardHeader className="text-center">
            <MessageCircle size={48} className="text-primary mx-auto mb-4" />
            <CardTitle className="text-2xl">Discord Community</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              Join our Discord community for instant support, updates, and to connect with other users.
            </p>
            <Button 
              size="lg" 
              className="w-full rounded-xl"
              onClick={() => window.open("https://discord.gg/vdx", "_blank")}
            >
              <MessageCircle size={20} className="mr-2" />
              Join Discord
            </Button>
          </CardContent>
        </Card>

        <Card className="glass-card rounded-2xl border-0">
          <CardHeader className="text-center">
            <ExternalLink size={48} className="text-primary mx-auto mb-4" />
            <CardTitle className="text-2xl">Documentation</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              Access our comprehensive documentation for setup guides, tutorials, and technical information.
            </p>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full rounded-xl"
              onClick={() => window.open("https://voidhost.pro/docs", "_blank")}
            >
              <ExternalLink size={20} className="mr-2" />
              View Docs
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}