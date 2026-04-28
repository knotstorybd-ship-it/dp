import { Link } from "react-router";
import { Home, Search } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-9xl font-bold text-primary/10 mb-4">404</div>
        <h1 className="text-3xl font-bold text-foreground mb-4">পেজ পাওয়া যায়নি</h1>
        <p className="text-muted-foreground mb-8">
          দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি। হয়তো পেজটি সরানো হয়েছে বা মুছে ফেলা হয়েছে।
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
          >
            <Home className="w-5 h-5" />
            হোমপেজে ফিরুন
          </Link>
          <Link
            to="/browse"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-primary/20 text-primary rounded-xl hover:bg-primary/5 transition-colors"
          >
            <Search className="w-5 h-5" />
            বই খুঁজুন
          </Link>
        </div>
      </div>
    </div>
  );
}
