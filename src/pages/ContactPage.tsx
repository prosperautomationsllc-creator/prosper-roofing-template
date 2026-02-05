import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const serviceTypes = [
  "Roof Repair",
  "Roof Replacement",
  "Roof Inspection",
  "Storm Damage Assessment",
  "Commercial Roofing",
  "Preventative Maintenance",
  "Other",
];

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    serviceType: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, serviceType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Request Submitted!",
      description: "We'll contact you within 24 hours to schedule your free estimate.",
    });

    setFormData({
      fullName: "",
      phone: "",
      email: "",
      address: "",
      serviceType: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-primary">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-display-md font-bold text-primary-foreground mb-6">
            Request a Free Roofing Estimate
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours to schedule your free, no-obligation estimate.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Property Address *</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123 Main St, City, State ZIP"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serviceType">Type of Service Needed</Label>
                  <Select value={formData.serviceType} onValueChange={handleSelectChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your roofing needs, any visible damage, or questions you have..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Get My Free Estimate"}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  No pressure. No obligation. Just honest roofing advice.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-secondary rounded-2xl p-8 lg:p-10 mb-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+15551234567"
                    className="flex items-start gap-4 text-foreground hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">(555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">Call us anytime</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@summitpeakroofing.com"
                    className="flex items-start gap-4 text-foreground hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">info@summitpeakroofing.com</p>
                      <p className="text-sm text-muted-foreground">Email us anytime</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Service Area</p>
                      <p className="text-sm text-muted-foreground">
                        Metro City • Riverside County • Oak Valley • Summit Heights • Lakeside Township
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Business Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Mon-Fri: 7am - 6pm<br />
                        Sat: 8am - 4pm<br />
                        Sun: Closed<br />
                        <span className="text-accent font-medium">24/7 Emergency Service Available</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary rounded-2xl p-8 lg:p-10 text-primary-foreground">
                <h3 className="text-xl font-bold mb-4">What Happens Next?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span>We'll contact you within 24 hours to confirm your request</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span>We'll schedule a convenient time for your free inspection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span>You'll receive a detailed, no-obligation estimate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span>No pressure—just honest advice about your roofing needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
