import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const presets = [25, 50, 100, 250];

const Donate = () => {
  const [amount, setAmount] = useState<number>(50);
  const [custom, setCustom] = useState("");

  const handleDonate = () => {
    const value = custom ? Number(custom) : amount;
    if (!value || value < 1) {
      toast({ title: "Enter an amount", description: "Please choose or enter a donation amount.", variant: "destructive" });
      return;
    }
    toast({ title: "Thank you 💚", description: `Your $${value} donation will change lives — payment integration coming soon.` });
  };

  return (
    <Layout>
      <PageHero
        tag="Donate"
        title="Your Gift Becomes Hope"
        subtitle="100% of your donation reaches the field. Choose an amount and join thousands of changemakers."
        image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=2000&q=80"
      />
      <section className="py-20 bg-secondary/40">
        <div className="container max-w-2xl">
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-elevated border border-border">
            <Heart className="h-10 w-10 text-primary fill-primary mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold">Make a one-time donation</h2>
            <p className="text-muted-foreground mt-2">Every contribution, large or small, multiplies on the ground.</p>

            <div className="mt-8 grid grid-cols-4 gap-3">
              {presets.map((p) => (
                <button
                  key={p}
                  onClick={() => { setAmount(p); setCustom(""); }}
                  className={`rounded-2xl py-4 font-bold text-lg transition-all ${
                    amount === p && !custom
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "bg-secondary hover:bg-secondary/70"
                  }`}
                >
                  ${p}
                </button>
              ))}
            </div>

            <div className="mt-5">
              <Input
                type="number"
                min={1}
                placeholder="Custom amount (USD)"
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                className="rounded-full h-12 px-5 bg-secondary border-transparent"
              />
            </div>

            <Button onClick={handleDonate} className="mt-6 w-full rounded-full bg-primary hover:bg-primary-glow text-primary-foreground h-13 py-3 font-semibold shadow-glow">
              Donate Now
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
