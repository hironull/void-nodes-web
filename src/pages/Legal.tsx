import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Shield, AlertTriangle } from "lucide-react";

export default function Legal() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="pixel-font text-4xl md:text-6xl mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          LEGAL
        </h1>
        <p className="text-xl text-muted-foreground">
          Important legal information, terms of service, and privacy policies for Void Nodes services.
        </p>
      </div>

      {/* Legal Documents */}
      <Tabs defaultValue="tos" className="max-w-6xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8 glass rounded-2xl p-2">
          <TabsTrigger value="tos" className="rounded-xl">
            <FileText size={20} className="mr-2" />
            Terms of Service
          </TabsTrigger>
          <TabsTrigger value="privacy" className="rounded-xl">
            <Shield size={20} className="mr-2" />
            Privacy Policy
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tos">
          <Card className="glass-card rounded-2xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <FileText className="mr-3" size={32} />
                Terms of Service
              </CardTitle>
              <p className="text-muted-foreground">Last updated: January 2025</p>
            </CardHeader>
            <CardContent className="space-y-6 text-sm leading-relaxed">
              <section>
                <h3 className="text-lg font-semibold mb-3 text-primary">1. Acceptance of Terms</h3>
                <p className="text-muted-foreground">
                  By accessing or using Void Nodes services, you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations. If you do not agree with any of these terms, 
                  you are prohibited from using or accessing our services.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-primary">2. Service Description</h3>
                <p className="text-muted-foreground">
                  Void Nodes provides Virtual Private Server (VPS) hosting, game server hosting, bot hosting, 
                  and web hosting services. Our services are provided "as is" and we reserve the right to 
                  modify, suspend, or discontinue any part of our services at any time.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-primary">3. Payment Terms</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>• <strong>Payment Method:</strong> We accept cryptocurrency payments only.</p>
                  <p>• <strong>No Refunds:</strong> All payments are final and non-refundable.</p>
                  <p>• <strong>Billing:</strong> Services are billed monthly unless otherwise specified.</p>
                  <p>• <strong>Late Payments:</strong> Failure to pay may result in service suspension or termination.</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-primary">4. Acceptable Use Policy</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>You agree not to use our services for:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Illegal activities or content</li>
                    <li>• Spamming or sending unsolicited emails</li>
                    <li>• Hosting malware, viruses, or malicious content</li>
                    <li>• Activities that may harm our infrastructure or other users</li>
                    <li>• Copyright infringement or intellectual property violations</li>
                    <li>• Adult content or gambling services</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-primary">5. Service Availability</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>• We strive to provide 99.9% uptime but do not guarantee uninterrupted service.</p>
                  <p>• Scheduled maintenance will be announced in advance when possible.</p>
                  <p>• We are not liable for service interruptions beyond our control.</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-primary">6. Free Services and Rewards</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>• Free VPS services obtained through boost or invite rewards are subject to availability.</p>
                  <p>• We reserve the right to terminate free services at any time with reasonable notice.</p>
                  <p>• Free services are provided without warranty or guarantee.</p>
                  <p>• Abuse of reward systems may result in immediate termination.</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-primary">7. Data and Backups</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>• You are responsible for backing up your data.</p>
                  <p>• We are not liable for data loss, corruption, or damage.</p>
                  <p>• We may perform regular backups but do not guarantee data recovery.</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-primary">8. Limitation of Liability</h3>
                <p className="text-muted-foreground">
                  In no event shall Void Nodes be liable for any indirect, incidental, special, consequential, 
                  or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, 
                  or any loss of data, use, goodwill, or other intangible losses.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-primary">9. Termination</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>• Either party may terminate services at any time.</p>
                  <p>• We may terminate services immediately for violations of these terms.</p>
                  <p>• Upon termination, you must cease all use of our services.</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-primary">10. Changes to Terms</h3>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. Changes will be effective 
                  immediately upon posting. Your continued use of our services constitutes acceptance 
                  of the modified terms.
                </p>
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy">
          <Card className="glass-card rounded-2xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Shield className="mr-3" size={32} />
                Privacy Policy
              </CardTitle>
              <p className="text-muted-foreground">Last updated: January 2025</p>
            </CardHeader>
            <CardContent className="space-y-6 text-sm leading-relaxed">
              <section>
                <h3 className="text-lg font-semibold mb-3 text-primary">1. Information We Collect</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>Account Information:</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• Discord username and ID (for support and community access)</li>
                    <li>• Service usage data and logs</li>
                    <li>• Payment information (cryptocurrency transaction details)</li>
                  </ul>
                  
                  <p><strong>Technical Information:</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• IP addresses and connection logs</li>
                    <li>• Server usage statistics</li>
                    <li>• Error logs and diagnostic information</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-primary">2. How We Use Your Information</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>We use collected information to:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Provide and maintain our hosting services</li>
                    <li>• Process payments and manage billing</li>
                    <li>• Provide customer support</li>
                    <li>• Monitor service performance and security</li>
                    <li>• Communicate service updates and important notices</li>
                    <li>• Prevent fraud and abuse</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-primary">3. Information Sharing</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>We do not sell, trade, or share your personal information with third parties except:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• When required by law or legal process</li>
                    <li>• To protect our rights and prevent fraud</li>
                    <li>• With service providers who assist in operations (under strict confidentiality)</li>
                    <li>• In case of business transfer or merger</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-primary">4. Data Security</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>We implement appropriate security measures to protect your information:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Encrypted data transmission and storage</li>
                    <li>• Regular security audits and updates</li>
                    <li>• Access controls and authentication systems</li>
                    <li>• Monitoring for unauthorized access</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-primary">5. Cryptocurrency Payments</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>• We accept only cryptocurrency payments for enhanced privacy</p>
                  <p>• Transaction details are recorded for billing purposes</p>
                  <p>• We do not store private keys or wallet information</p>
                  <p>• Payment information is retained for compliance and support purposes</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-primary">6. Data Retention</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>• Account information is retained while your account is active</p>
                  <p>• Service logs are retained for up to 12 months</p>
                  <p>• Payment records are kept for compliance purposes</p>
                  <p>• Data may be retained longer if required by law</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-primary">7. Your Rights</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>You have the right to:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Access your personal information</li>
                    <li>• Request correction of inaccurate data</li>
                    <li>• Request deletion of your data (subject to legal requirements)</li>
                    <li>• Object to data processing in certain circumstances</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-primary">8. Cookies and Tracking</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>• We use minimal cookies for essential website functionality</p>
                  <p>• No third-party tracking or analytics cookies are used</p>
                  <p>• You can disable cookies in your browser settings</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-primary">9. Changes to Privacy Policy</h3>
                <p className="text-muted-foreground">
                  We may update this privacy policy from time to time. We will notify you of any 
                  changes by posting the new privacy policy on this page and updating the "last updated" date.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-primary">10. Contact Information</h3>
                <p className="text-muted-foreground">
                  If you have any questions about this privacy policy or our data practices, 
                  please contact us through our Discord server or support channels.
                </p>
              </section>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Important Notice */}
      <Card className="glass-card rounded-2xl border-0 max-w-4xl mx-auto mt-12">
        <CardContent className="py-8">
          <div className="flex items-start space-x-4">
            <AlertTriangle size={24} className="text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Important Notice</h3>
              <p className="text-muted-foreground text-sm">
                These legal documents are binding agreements between you and Void Nodes. 
                Please read them carefully and contact us if you have any questions. 
                By using our services, you acknowledge that you have read, understood, 
                and agree to be bound by these terms and policies.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}