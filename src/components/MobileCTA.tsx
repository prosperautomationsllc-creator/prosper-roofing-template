import { Phone } from "lucide-react";

const MobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 lg:hidden z-40 bg-accent shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.2)]">
      <a
        href="tel:+15551234567"
        className="flex items-center justify-center gap-2 py-4 text-accent-foreground font-semibold"
      >
        <Phone className="h-5 w-5" />
        Call Now - (555) 123-4567
      </a>
    </div>
  );
};

export default MobileCTA;
