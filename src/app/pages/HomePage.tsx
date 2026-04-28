import { ArrowRight, TrendingUp, Clock, Award, Star, Zap } from "lucide-react";
import { Link } from "react-router";
import { BookCard } from "../components/BookCard";
import { motion } from "motion/react";
import { useStore } from "../store/useStore";
import { PromoPopup } from "../components/PromoPopup";
import heroBook1 from "../../images/image.png";
import heroBook2 from "../../images/image copy 2.png";

const categories = [
  { name: "উপন্যাস", count: 350, icon: "📚" },
  { name: "কবিতা", count: 280, icon: "✍️" },
  { name: "ইতিহাস", count: 150, icon: "🏛️" },
  { name: "শিশু সাহিত্য", count: 200, icon: "🎨" },
];

export function HomePage() {
  const { books, user } = useStore();
  const featuredBooks = books.slice(0, 6);
  const isWriterMode = user?.isWriter && user?.subscription;

  return (
    <div className="min-h-screen">
      <PromoPopup />
      <section className="relative bg-white pt-20 pb-32 overflow-hidden">
        {/* Subtle Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50/40 skew-x-6 origin-top-right -z-0"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-100/30 rounded-full blur-[100px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left z-10"
          >
            <div className="text-emerald-600 font-black text-sm uppercase tracking-[0.3em] mb-6">
              বাংলাদেশের #১ ডিজিটাল বুক প্ল্যাটফর্ম
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] text-emerald-950 tracking-tight">
              বইয়ের নতুন <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">
                এক দিগন্ত
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-emerald-900/70 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              হাজারো বাংলা বই এখন আপনার হাতের মুঠোয়। <br className="hidden md:block" /> 
              পড়ুন, শিখুন, এবং নিজেকে সমৃদ্ধ করুন।
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              {isWriterMode ? (
                <Link
                  to="/writer"
                  className="px-10 py-5 bg-emerald-600 text-white rounded-2xl font-black shadow-[0_20px_50px_rgba(5,150,105,0.3)] hover:shadow-[0_20px_50px_rgba(5,150,105,0.5)] hover:-translate-y-1 transition-all flex items-center gap-3 group text-lg"
                >
                  <TrendingUp className="w-6 h-6" />
                  ড্যাশবোর্ডে যান
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <>
                  <Link
                    to="/browse"
                    className="px-10 py-5 bg-emerald-600 text-white rounded-2xl font-black shadow-[0_20px_50px_rgba(5,150,105,0.3)] hover:shadow-[0_20px_50px_rgba(5,150,105,0.5)] hover:-translate-y-1 transition-all flex items-center gap-3 group text-lg"
                  >
                    বই পড়তে শুরু করুন
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <Link
                    to="/writer"
                    className="px-10 py-5 bg-white text-emerald-900 border-2 border-emerald-100 rounded-2xl font-black hover:bg-emerald-50 hover:border-emerald-200 transition-all text-lg shadow-sm"
                  >
                    লেখক হিসেবে যোগ দিন
                  </Link>
                </>
              )}
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-12 mt-16 pt-12 border-t border-emerald-100/50">
              <div>
                <div className="text-4xl font-black text-emerald-950">5K+</div>
                <div className="text-sm text-emerald-600/70 font-bold uppercase tracking-widest mt-1">বই</div>
              </div>
              <div className="w-px h-10 bg-emerald-100"></div>
              <div>
                <div className="text-4xl font-black text-emerald-950">2K+</div>
                <div className="text-sm text-emerald-600/70 font-bold uppercase tracking-widest mt-1">লেখক</div>
              </div>
              <div className="w-px h-10 bg-emerald-100"></div>
              <div>
                <div className="text-4xl font-black text-emerald-950">50K+</div>
                <div className="text-sm text-emerald-600/70 font-bold uppercase tracking-widest mt-1">পাঠক</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative hidden lg:block"
          >
            <div className="relative group">
              {/* Decorative element behind books */}
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-[3rem] -rotate-3 transition-transform group-hover:rotate-0 duration-700"></div>
              
              <div className="relative grid grid-cols-2 gap-4 p-4">
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-3xl shadow-2xl overflow-hidden border-8 border-white translate-y-8 relative group/img"
                >
                  <img src={heroBook1} alt="Book 1" className="w-full aspect-[2/3] object-cover" />
                  <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover/img:opacity-100 transition-opacity"></div>
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="rounded-3xl shadow-2xl overflow-hidden border-8 border-white relative group/img"
                >
                  <img src={heroBook2} alt="Book 2" className="w-full aspect-[2/3] object-cover" />
                  <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover/img:opacity-100 transition-opacity"></div>
                </motion.div>

                {/* Marketing Label for Plan 3 */}
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: -12 }}
                  className="absolute -top-6 -left-6 bg-black text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl z-20 border-2 border-emerald-500 animate-pulse"
                >
                  Limited Slot: Plan 3
                </motion.div>
              </div>
              
              {/* Floating review card for sleekness */}
              <motion.div 
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-1/2 bg-white p-5 rounded-2xl shadow-2xl border border-emerald-50 max-w-[200px]"
              >
                <div className="flex gap-1 mb-2">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-xs font-bold text-emerald-950 leading-relaxed italic">
                  "অসাধারণ প্ল্যাটফর্ম! সব প্রিয় বই এখন এক জায়গায়।"
                </p>
                <div className="mt-3 text-[10px] font-black text-emerald-600 uppercase tracking-widest">— সুমি আক্তার</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subscription Plans Section */}
      <section className="bg-white py-32 relative overflow-hidden">
        {/* Subtle Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50 rounded-full blur-[120px] pointer-events-none opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
              {/* Plan 1 */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-[3rem] p-12 border border-emerald-100 shadow-xl shadow-emerald-900/5 relative group transition-all"
            >
              <h3 className="text-xl font-black text-emerald-950 mb-2 uppercase tracking-widest">প্ল্যান ১</h3>
              <p className="text-emerald-600 font-bold text-xs mb-8 uppercase tracking-widest">Starter Package</p>
              <div className="text-5xl font-black text-emerald-950 mb-12">৳৪২০</div>
              
              <ul className="text-left space-y-6 mb-12">
                {["৩ মাসে ৩টি বই প্রদর্শন", "বিক্রয় বৃদ্ধির সহায়তা", "১৯% কমিশন"].map((f) => (
                  <li key={f} className="flex items-center gap-4 text-emerald-900/70 font-bold">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    {f}
                  </li>
                ))}
              </ul>

              <Link to="/checkout?plan=plan1&price=420" className="block w-full py-5 bg-white text-emerald-900 border-2 border-emerald-100 rounded-2xl font-black hover:bg-emerald-50 transition-all text-center">
                আপনার বই প্রকাশ করুন
              </Link>
            </motion.div>

            {/* Plan 2 - Medium Emerald */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-emerald-600 rounded-[3rem] p-12 border-2 border-emerald-500 shadow-xl shadow-emerald-900/20 relative group transition-all text-white"
            >
              <h3 className="text-xl font-black text-white mb-2 uppercase tracking-widest">প্ল্যান ২</h3>
              <p className="text-emerald-100 font-bold text-xs mb-8 uppercase tracking-widest">Growth Package</p>
              <div className="text-5xl font-black text-white mb-12">৳৬২০</div>
              
              <ul className="text-left space-y-6 mb-12">
                {["৬ মাসে ৬টি বই প্রদর্শন", "প্রোমোশন + মার্কেটিং", "১৫% কমিশন"].map((f) => (
                  <li key={f} className="flex items-center gap-4 text-emerald-50/80 font-bold">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    {f}
                  </li>
                ))}
              </ul>

              <Link to="/checkout?plan=plan2&price=620" className="block w-full py-5 bg-white text-emerald-600 rounded-2xl font-black hover:bg-emerald-50 transition-all text-center shadow-lg">
                এখনই শুরু করুন
              </Link>
            </motion.div>

            {/* Plan 3 - Darkest Emerald */}
            <motion.div
              whileHover={{ scale: 1.08, y: -10 }}
              className="bg-emerald-950 rounded-[3rem] p-12 border-4 border-black shadow-[0_30px_70px_rgba(0,0,0,0.4)] relative group transition-all transform lg:scale-105 lg:z-20 text-white"
            >
              <div className="absolute -inset-1 bg-emerald-500 rounded-[3rem] blur opacity-10 group-hover:opacity-20 transition-opacity"></div>
              
              <div className="relative">
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 px-8 py-3 bg-black text-emerald-400 text-xs font-black uppercase tracking-[0.3em] rounded-full shadow-xl shadow-black/40 whitespace-nowrap border border-emerald-900">
                  🔥 ১২ মাসের সুবিধা - HOT 🔥
                </div>
                
                <h3 className="text-xl font-black text-emerald-50 mb-2 uppercase tracking-widest">প্ল্যান ৩</h3>
                <p className="text-emerald-400 font-bold text-xs mb-8 uppercase tracking-widest">Premium 12-Month Access</p>
                <div className="text-6xl font-black text-white mb-12">৳৮২০</div>
                
                <ul className="text-left space-y-6 mb-12">
                  {[
                    "৬ মাসে ১২টি বই প্রদর্শন", 
                    "প্রিমিয়াম ফিচারিং সাপোর্ট", 
                    "১২% সর্বনিম্ন কমিশন",
                    "১২ মাসের প্রোফাইল প্রচার"
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-4 text-emerald-100/80 font-bold">
                      <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,1)]"></div>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link to="/checkout?plan=plan3&price=820" className="block w-full py-6 bg-emerald-500 text-emerald-950 rounded-2xl font-black hover:bg-emerald-400 transition-all text-center shadow-2xl shadow-emerald-950/30 text-lg">
                  🚀 এখনই অফারটি নিন
                </Link>
              </div>
            </motion.div>
�০</div>
                
                <ul className="text-left space-y-6 mb-12">
                  {[
                    "৬ মাসে ১২টি বই প্রদর্শন", 
                    "প্রিমিয়াম ফিচারিং সাপোর্ট", 
                    "১২% সর্বনিম্ন কমিশন",
                    "আজীবন লেখক প্রোফাইল প্রচার"
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-4 text-emerald-100/80 font-bold">
                      <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,1)]"></div>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link to="/checkout?plan=plan3&price=820" className="block w-full py-6 bg-emerald-500 text-emerald-950 rounded-2xl font-black hover:bg-emerald-400 transition-all text-center shadow-2xl shadow-emerald-950/30 text-lg">
                  🚀 এখনই লাইফটাইম নিন
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground flex items-center gap-2">
              <TrendingUp className="w-8 h-8 text-primary" />
              জনপ্রিয় বই
            </h2>
            <p className="text-muted-foreground mt-1">এই মাসের সবচেয়ে পড়া বই</p>
          </div>
          <Link
            to="/browse"
            className="text-primary hover:text-primary/80 font-medium flex items-center gap-1 group"
          >
            সব দেখুন
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {featuredBooks.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <BookCard {...book} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground flex items-center gap-2">
              <Award className="w-8 h-8 text-primary" />
              সেরা লেখকগণ
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useStore().authors.map((author, index) => (
              <motion.div
                key={author.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  to={`/author/${encodeURIComponent(author.name)}`}
                  className="bg-white rounded-2xl p-6 flex items-center gap-6 hover:shadow-xl transition-all border border-primary/5 hover:border-primary/20 group"
                >
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-primary/10 group-hover:border-primary transition-colors"
                  />
                  <div>
                    <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                      {author.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2 line-clamp-1">
                      {author.bio}
                    </p>
                    <div className="flex items-center gap-4 text-xs font-medium text-primary">
                      <span>{author.bookCount}টি বই</span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-secondary text-secondary" />
                        {author.rating}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            বিভাগসমূহ
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={`/browse?category=${encodeURIComponent(cat.name)}`}
                  className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all border border-primary/5 hover:border-primary/20 group block"
                >
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cat.count}টি বই</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
          </div>
          <div className="relative">
            <Award className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              লেখক হিসেবে যোগ দিন
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              আপনার লেখা প্রকাশ করুন এবং ৮৩% পর্যন্ত রয়্যালটি পান। আমরা লেখকদের সম্মান করি।
            </p>
            <Link
              to="/writer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-medium hover:bg-white/90 transition-all shadow-lg"
            >
              এখনই শুরু করুন
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
