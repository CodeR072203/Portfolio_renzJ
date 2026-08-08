import { MapPin } from "lucide-react";
import { SocialLinks } from "@/components/contact/SocialLinks";
import { PROFILE } from "@/lib/data";

export function ContactCard() {
  return (
    <div>
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4 leading-snug">
        Interested in working together?
      </h3>
      <p className="text-text-muted leading-relaxed mb-8 max-w-md">
        I&apos;m looking for an Associate Software Engineer role where I can keep shipping full stack products. The
        fastest way to reach me is directly — I read every message.
      </p>

      <SocialLinks variant="list" />

      <div className="flex items-center gap-3 text-sm text-text-muted mt-3">
        <MapPin className="w-4 h-4 text-amber" strokeWidth={1.75} />
        {PROFILE.location}
      </div>
    </div>
  );
}
