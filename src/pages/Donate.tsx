import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SponsorAChild from "@/components/SponsorAChild";
import Accreditations from "@/components/Accreditations";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Phone, ArrowRight } from "lucide-react";
import { photos } from "@/data/images";
import { donateWhatsAppUrl, telHref, LOCAL_PHONE } from "@/lib/contact";

const Donate = () => {
  useEffect(() => {
    document.title = "Donate — Arsenal Fund Uganda";
  }, []);

  return (
    <Layout>
      <PageHero
        tag="Donate"
        title="Your Gift Becomes Hope"
        subtitle="Reach out directly on WhatsApp or by phone — we'll guide you through the safest way to send your support."
        image={photos.happy}
      />
      <section className="py-16 sm:py-20 bg-secondary/40">
        <div className="container max-w-2xl">
          <Reveal className="bg-card rounded-3xl p-6 sm:p-8 md:p-10 shadow-elevated border border-border">
            <Heart className="h-10 w-10 text-primary fill-primary mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold">Talk to us — donate in 1 message</h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              Tap below to send us a WhatsApp message or call directly. We'll personally share secure donation channels, confirm where your gift is going, and send you proof of impact.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              <Button asChild className="rounded-full bg-primary hover:bg-primary-glow text-primary-foreground h-13 py-4 font-semibold shadow-glow">
                <a href={donateWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" /> Donate via WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full h-13 py-4 font-semibold">
                <a href={telHref}>
                  <Phone className="mr-2 h-5 w-5" /> Call {LOCAL_PHONE}
                </a>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-6">
              Prefer email or to ask questions first?{" "}
              <Link to="/contact" className="text-primary font-semibold inline-flex items-center gap-1">
                Visit our contact page <ArrowRight className="h-3 w-3" />
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <SponsorAChild />
      <Accreditations />
    </Layout>
  );
};

export default Donate;
