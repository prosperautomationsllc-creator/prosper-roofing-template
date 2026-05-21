import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";
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

    console.log("FORM DATA:", formData);

    if (!formData.fullName || !formData.email) {
      toast({
        variant: "destructive",
        title: "Missing required fields",
        description: "Please fill in your name and email.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // 1. Save to Supabase DB
      const { error } = await supabase.from("contacts").insert([
        {
          full_name: formData.fullName.trim(),
          phone_number: formData.phone.trim(),
          email_address: formData.email.trim(),
          property_address: formData.address.trim(),
          service_type: formData.serviceType || null,
          additional_details: formData.message.trim() || null,
        },
      ]);

      if (error) {
        console.log("Supabase error:", error);

        toast({
          variant: "destructive",
          title: "Could not send your request",
          description: error.message,
        });

        return;
      }

      // 2. CALL EDGE FUNCTION (PRODUCTION SAFE)
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

      if (functionError) {
        console.log("Function error:", functionError);

        toast({
          variant: "destructive",
          title: "Could not send confirmation email",
          description:
            "Your request was saved, but email notification failed.",
        });

        return;
      }

      console.log("EMAIL FUNCTION RESPONSE:", data);

      // 3. SUCCESS MESSAGE
      toast({
        title: "Request Submitted!",
        description:
          "We'll contact you within 24 hours to schedule your free estimate.",
      });

      // 4. RESET FORM
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
            Request a Free Roofing Estimate
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours
            to schedule your free, no-obligation estimate.
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
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting
                    ? "Submitting..."
                    : "Get My Free Estimate"}
                </Button>
              </form>
            </div>

            {/* Contact Info unchanged */}
            <div>
              <div className="bg-secondary rounded-2xl p-8 lg:p-10 mb-8">
                <h3 className="text-xl font-bold mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Phone />
                    <div>
                      <p className="font-semibold">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail />
                    <div>
                      <p className="font-semibold">
                        info@summitpeakroofing.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;