import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { trackEvent } from "@/lib/analytics";
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
import { siteConfig } from "@/config/site";

const ContactPage = () => {
  const { contactPage } = siteConfig;
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      serviceType: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Save form submission to Supabase DB (UNCHANGED)
      const { error } = await supabase.from("contacts").insert([
        {
          full_name: formData.fullName,
          phone_number: formData.phone,
          email_address: formData.email,
          property_address: formData.address,
          service_type: formData.serviceType || null,
          additional_details: formData.message || null,
        },
      ]);

      if (error) {
        console.log("Supabase error:", error);

        toast({
          variant: "destructive",
          title: "Could not send your request",
          description: error.message,
        });

        setIsSubmitting(false);
        return;
      }

      // 2. SEND EMAIL VIA SUPABASE EDGE FUNCTION (FIXED + IMPROVED ERROR HANDLING)
      const { data, error: functionError } =
        await supabase.functions.invoke("send-contact-email", {
          body: {
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            serviceType: formData.serviceType,
            message: formData.message,
          },
        });

      // 🔥 FIX: detect BOTH Supabase errors + internal function errors
      if (functionError || data?.error) {
        console.log("Function error:", functionError);
        console.log("Function data:", data);

        toast({
          variant: "destructive",
          title: "Request saved but email failed",
          description:
            data?.error?.message ||
            "We received your submission, but confirmation email could not be sent.",
        });

        setIsSubmitting(false);
        return;
      }

      console.log("Email function response:", data);

      trackEvent(
        "contact_form_submitted",
        "lead_generation",
        formData.serviceType || "unknown_service"
      );

      // 3. SUCCESS MESSAGE (UNCHANGED)
      toast({
        title: "Request Submitted!",
        description:
          "We'll contact you within 24 hours to schedule your free estimate.",
      });

      // 4. RESET FORM (UNCHANGED)
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        address: "",
        serviceType: "",
        message: "",
      });
    } catch (err) {
      console.log("Unexpected error:", err);

      toast({
        variant: "destructive",
        title: "Could not send your request",
        description: "Unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-primary">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-display-md font-bold text-primary-foreground mb-6">
            {contactPage.hero.headline}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            {contactPage.hero.subheadline}
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
                  <Select
                    value={formData.serviceType}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {contactPage.serviceTypes.map((service) => (
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
                  {isSubmitting ? "Submitting..." : contactPage.form.submitButton}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  {contactPage.form.disclaimer}
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-secondary rounded-2xl p-8 lg:p-10 mb-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-4">
                  <a
                    href={siteConfig.phoneHref}
                    onClick={() =>
                      trackEvent(
                        "phone_click",
                        "lead_generation",
                        siteConfig.phone
                      )
                    }
                    className="flex items-start gap-4 text-foreground hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{siteConfig.phone}</p>
                      <p className="text-sm text-muted-foreground">Call us anytime</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    onClick={() =>
                      trackEvent(
                        "email_click",
                        "lead_generation",
                        siteConfig.email
                      )
                    }
                    className="flex items-start gap-4 text-foreground hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{siteConfig.email}</p>
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
                        {siteConfig.serviceAreas.join(" • ")}
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
                        {siteConfig.businessHours.weekdays}
                        <br />
                        {siteConfig.businessHours.saturday}
                        <br />
                        {siteConfig.businessHours.sunday}
                        <br />
                        <span className="text-accent font-medium">
                          24/7 Emergency Service Available
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary rounded-2xl p-8 lg:p-10 text-primary-foreground">
                <h3 className="text-xl font-bold mb-4 text-primary-foreground">
                  What Happens Next?
                </h3>

                <ul className="space-y-3">
                  {contactPage.whatHappensNext.map((step) => (
                    <li key={step} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <span>{step}</span>
                    </li>
                  ))}
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
