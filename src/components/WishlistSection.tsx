import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const WishlistSection = () => {
  const handleJoinWishlist = () => {
    const url = 'https://forms.zohopublic.in/smatrsm1/form/JoinWaitlist/formperma/CKuC-PeS9hmKqy4L46nrWuURa286Ie3Bik1W0YKiJXg';
    const height = 648;
    const width = 700;
    let leftPos = 0;
    let topPos = 0;
    if (screen) {
      leftPos = (screen.width - width) / 2;
      topPos = (screen.height - height) / 2;
      window.open(url, null, `width=${width},height=${height},left=${leftPos},top=${topPos}, toolbar=0, location=0, status=1, scrollbars=1, resizable=1`);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-urbanist font-bold text-primary mb-6">
            Join the Wishlist
          </h2>
          <p className="text-lg text-muted font-inter mb-12 max-w-xl mx-auto">
            Be the first to experience the future of digital productivity. Get early access and exclusive updates.
          </p>

          <Card className="p-8 md:p-12 border-0 shadow-2xl bg-gradient-card">
            <div className="text-center space-y-6">
              <Button
                onClick={handleJoinWishlist}
                className="bg-smatr-coral hover:bg-smatr-coral/90 text-white font-urbanist font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                Join Wishlist
              </Button>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Early beta access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Exclusive updates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>No spam, ever</span>
                </div>
              </div>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default WishlistSection;