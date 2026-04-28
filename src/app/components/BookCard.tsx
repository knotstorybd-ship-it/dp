import { Star, ShoppingCart } from "lucide-react";
import { Link } from "react-router";
import { useStore, Book } from "../store/useStore";

interface BookCardProps extends Book {}

export function BookCard(book: BookCardProps) {
  const { addToCart } = useStore();
  const { id, title, author, price, cover, rating, category } = book;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(book);
    alert(`${title} কার্টে যোগ করা হয়েছে!`);
  };

  return (
    <Link to={`/book/${id}`} className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-primary/5 hover:border-primary/20 transform hover:-translate-y-1 h-full flex flex-col">
        <div className="aspect-[2/3] overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
          <img
            src={cover}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <div className="text-xs text-secondary mb-1">{category}</div>
          <h3 className="font-bold text-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.location.href = `/author/${encodeURIComponent(author)}`;
            }}
            className="text-sm text-muted-foreground mb-2 hover:text-primary transition-colors cursor-pointer inline-block"
          >
            {author}
          </div>
          <div className="mt-auto">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-secondary text-secondary" />
                <span className="text-sm font-medium">{rating}</span>
              </div>
              <div className="text-lg font-bold text-primary">৳{price}</div>
            </div>
            <button
              onClick={handleAddToCart}
              className="w-full py-2 bg-primary/5 text-primary rounded-lg hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2 group/btn"
            >
              <ShoppingCart className="w-4 h-4" />
              কিনুন
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
