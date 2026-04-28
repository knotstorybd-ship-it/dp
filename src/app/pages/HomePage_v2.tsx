import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { 
  BookOpen, Zap, TrendingUp, ArrowRight, Star, Shield, Users, Quote, Edit3, Sparkles, ShoppingBag, 
  Rocket, Target, Trophy, CheckCircle2 
} from "lucide-react";
import heroBook1 from "../../images/image copy 2.png";
import heroBook2 from "../../images/image.png";
import heroMain from "../../images/Hero_image.png";
import { PromoPopup } from "../components/PromoPopup";
import { useStore } from "../store/useStore";

export function HomePage() {
  const { books, addToCart, user, authors, orders, siteSettings, testimonials, addTestimonial } = useStore();
  const [newTestimonial, setNewTestimonial] = useState("");
  const [rating, setRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const approvedTestimonials = testimonials.filter(t => t.is_approved);

  const handleSubmitTestimonial = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert("Please login to write a testimonial!");
      return;
    }
    if (!newTestimonial.trim()) return;

    setIsSubmitting(true);
    try {
      await addTestimonial(newTestimonial, rating);
      setNewTestimonial("");
      setRating(5);
      alert("আপনার মতামত পাঠানো হয়েছে! এডমিন অ্যাপ্রুভ করলে এটি সাইটে দেখা যাবে।");
    } catch (error) {
      console.error(error);
      alert("মতামত পাঠাতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।");
    } finally {
      setIsSubmitting(false);
    }
  };
  const popularBooks = [...books].sort((a, b) => b.rating - a.rating).slice(0, 4);

  return (
    <div className="flex flex-col bg-slate-50/30">
      <PromoPopup />
      
      {/* Hero Section */}
      <section className="relative min-h-[75vh] lg:h-[85vh] flex items-center pt-8 pb-8 overflow-hidden bg-white">
        {/* Modern Background: Subtle & Clean */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-50/50 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-50/30 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left Content Column */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-4 py-1.5 bg-emerald-50/80 backdrop-blur-sm border border-emerald-100/50 text-emerald-800 rounded-full"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-5 h-5 rounded-full border-2 border-white bg-emerald-100 overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 543}`} className="w-full h-full" />
                    </div>
                  ))}
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.2em]">{siteSettings.authorsCountText}</span>
              </motion.div>
              
              <div className="space-y-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl md:text-6xl xl:text-7xl font-black text-emerald-950 leading-[1.3] py-2 tracking-tight"
                >
                  {siteSettings.heroTitle} <br />
                  <span className="bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent italic pb-2 inline-block">{siteSettings.heroSubtitle}</span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-slate-500 text-base md:text-lg xl:text-xl max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
                >
                  {siteSettings.heroDescription}
                </motion.p>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
              >
                {user ? (
                  user.isWriter ? (
                    <Link to="/writer" className="group relative px-10 py-4 bg-emerald-950 text-white rounded-2xl font-black shadow-xl hover:bg-emerald-900 transition-all text-lg flex items-center gap-3">
                      ড্যাশবোর্ড
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <Link to="/join-writer" className="group relative px-10 py-4 bg-emerald-600 text-white rounded-2xl font-black shadow-xl hover:bg-emerald-700 transition-all text-lg flex items-center gap-3">
                      লেখক হিসেবে যোগ দিন
                      <Sparkles className="w-5 h-5" />
                    </Link>
                  )
                ) : (
                  <>
                    <Link to="/join-writer" className="group relative px-12 py-5 bg-emerald-600 text-white rounded-3xl font-black shadow-xl hover:bg-emerald-700 transition-all text-xl flex items-center gap-3 active:scale-95">
                      {siteSettings.heroCtaText}
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/browse" className="px-8 py-4 text-emerald-950 font-black hover:bg-slate-50 rounded-xl transition-all border border-slate-100 text-base">
                      {siteSettings.heroSecondaryCtaText}
                    </Link>
                  </>
                )}
              </motion.div>
            </div>

            {/* Right Visual Column */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 w-full max-w-[540px] relative hidden md:block"
            >
              <div className="relative">
                {/* Compact Frame */}
                <div className="relative rounded-[3rem] overflow-hidden p-2 bg-gradient-to-br from-white to-emerald-50 shadow-2xl aspect-[4/5] max-h-[500px]">
                  <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-slate-50">
                    <img 
                      src={heroMain} 
                      alt="Hero Illustration" 
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Compact Info Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/70 backdrop-blur-xl rounded-[2rem] border border-white/50 shadow-xl">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[8px] font-black text-emerald-900/40 uppercase tracking-widest mb-0.5">ফিচার্ড লেখক</p>
                          <p className="text-lg font-black text-emerald-950">{siteSettings.featuredAuthorName}</p>
                        </div>
                        <div className="px-3 py-1.5 bg-emerald-600 rounded-xl flex items-center gap-1.5 shadow-lg">
                          <Star className="w-4 h-4 text-white fill-white" />
                          <span className="font-black text-white text-sm">{siteSettings.featuredAuthorRating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Micro Stats */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -right-6 top-1/4 px-6 py-4 bg-white rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3 z-20"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">পাঠক সংখ্যা</p>
                    <p className="text-base font-black text-emerald-950">{siteSettings.totalReadersCount}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subscription Plans Section */}
      <section className="py-32 bg-[#fafbfc] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-50 rounded-full blur-[150px] -mr-96 -mt-96 opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50 rounded-full blur-[150px] -ml-96 -mb-96 opacity-60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-emerald-600 font-black text-xs uppercase tracking-[0.4em] mb-4 block"
            >
              Subscription Plans
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-emerald-950 tracking-tight leading-tight mb-6"
            >
              আপনার লেখক যাত্রা <br /><span className="text-emerald-600">এখান থেকেই শুরু</span>
            </motion.h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              লেখকদের জন্য আধুনিক ও বিশ্বস্ত প্রকাশনা প্ল্যাটফর্ম। আমাদের ৩টি বিশেষ সাবস্ক্রিপশন প্ল্যান থেকে বেছে নিন।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {[
              {
                id: "plan1",
                name: "নতুন লেখক (Starter)",
                price: "৪৯৯",
                period: "৩ মাস",
                features: [
                  "৫টি বই প্রকাশ করার সুযোগ",
                  "বেসিক এনালিটিক্স",
                  "ডিজিটাল সার্টিফিকেট",
                  "২৪/৭ সাপোর্ট"
                ],
                color: "from-blue-500 to-indigo-600",
                icon: Rocket,
                btnText: "শুরু করুন"
              },
              {
                id: "plan2",
                name: "জনপ্রিয় লেখক (Pro)",
                price: "৯৯৯",
                period: "৬ মাস",
                features: [
                  "আনলিমিটেড বই প্রকাশ",
                  "অ্যাডভান্সড এনালিটিক্স",
                  "প্রচ্ছদ ডিজাইনে সহায়তা",
                  "লেখক সম্মানি বোনাস",
                  "প্রোফাইল ভেরিফিকেশন"
                ],
                color: "from-emerald-500 to-teal-600",
                popular: true,
                icon: Target,
                btnText: "সেরা প্ল্যানটি নিন"
              },
              {
                id: "plan3",
                name: "কিংবদন্তি লেখক (Elite)",
                price: "১৯৯৯",
                period: "আজীবন",
                features: [
                  "আজীবন সদস্যপদ",
                  "ভিআইপি লেখক ইভেন্ট",
                  "বই মেলায় বিশেষ স্টল",
                  "ব্যক্তিগত পিআর ম্যানেজার",
                  "এক্সক্লুসিভ রয়্যালটি রেট"
                ],
                color: "from-amber-500 to-orange-600",
                icon: Trophy,
                btnText: "এলিট মেম্বার হন"
              }
            ].map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -10 }}
                className={`
                  relative flex flex-col p-10 rounded-[3.5rem] transition-all duration-500 bg-white border border-slate-100 shadow-xl shadow-emerald-900/5 group
                  ${plan.popular ? 'ring-4 ring-emerald-600/5 z-10' : ''}
                `}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 px-8 py-3 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest rounded-bl-[2rem] shadow-lg">
                    সবচেয়ে জনপ্রিয়
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-[1.5rem] bg-gradient-to-br ${plan.color} flex items-center justify-center text-white mb-10 shadow-2xl shadow-emerald-900/10 transition-transform duration-500 group-hover:rotate-6`}>
                  <plan.icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-black text-emerald-950 mb-3">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-10">
                  <span className="text-5xl font-black text-emerald-950 tracking-tighter">৳{plan.price}</span>
                  <span className="text-slate-400 font-bold text-lg">/{plan.period}</span>
                </div>

                <div className="space-y-5 mb-12 flex-1">
                  {plan.features.map((f, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-slate-600 font-bold text-sm leading-tight">{f}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to={`/join-writer?plan=${plan.id}`} 
                  className={`
                    w-full py-6 rounded-[1.75rem] font-black transition-all flex items-center justify-center gap-3 text-lg shadow-xl hover:scale-105 active:scale-95
                    ${plan.popular 
                      ? 'bg-emerald-600 text-white shadow-emerald-600/20 hover:bg-emerald-700' 
                      : 'bg-slate-950 text-white hover:bg-black shadow-slate-950/20'}
                  `}
                >
                  {plan.btnText}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Most Popular Books Section */}
      <section className="py-24 relative overflow-hidden bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <span className="text-emerald-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Trending Now</span>
              <h2 className="text-4xl md:text-6xl font-black text-emerald-950 tracking-tight leading-tight">
                সবচেয়ে <span className="text-emerald-600">জনপ্রিয়</span> বই
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/browse" className="group flex items-center gap-3 text-emerald-950 font-black uppercase text-sm tracking-widest hover:text-emerald-600 transition-colors">
                সবগুলো দেখুন
                <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularBooks.map((book, i) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-[2.5rem] p-4 shadow-xl shadow-emerald-900/5 border border-emerald-100/50 hover:border-emerald-200 transition-all"
              >
                {/* Book Cover Container */}
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 shadow-2xl bg-emerald-50">
                  <img 
                    src={book.cover} 
                    alt={book.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <button 
                      onClick={() => {
                        addToCart(book);
                        alert(`${book.title} কার্টে যোগ করা হয়েছে!`);
                      }}
                      className="w-full py-4 bg-white text-emerald-950 rounded-2xl font-black flex items-center justify-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-all shadow-xl"
                    >
                      <ShoppingBag className="w-5 h-5" />
                      কিনুন
                    </button>
                  </div>
                  
                  {/* Badge */}
                  {i < 2 && (
                    <div className="absolute top-4 right-4 bg-emerald-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                      Popular
                    </div>
                  )}
                </div>

                {/* Book Details */}
                <div className="px-2 pb-2">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="text-xs font-black text-amber-700">{book.rating}</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-900/40 uppercase tracking-widest">{book.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-black text-emerald-950 mb-1 line-clamp-1 group-hover:text-emerald-600 transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-emerald-900/60 font-bold text-sm mb-4">{book.author}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-black text-emerald-950">৳{book.price}</div>
                    <Link to={`/book/${book.id}`} className="p-3 rounded-xl bg-emerald-50 text-emerald-600 opacity-0 group-hover:opacity-100 transition-all hover:bg-emerald-600 hover:text-white">
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Testimonials List */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-600/20">
                  <Quote className="w-6 h-6 fill-current" />
                </div>
                <h3 className="text-2xl font-black text-emerald-950">পাঠকদের অভিজ্ঞতা</h3>
              </div>

              {approvedTestimonials.length > 0 ? (
                <div className="grid gap-6">
                  {approvedTestimonials.slice(0, 3).map((t, i) => (
                    <motion.div
                      key={t.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white p-6 rounded-[2rem] shadow-xl shadow-emerald-900/5 border border-emerald-100/50 relative group"
                    >
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < t.rating ? "fill-amber-400 text-amber-400" : "text-slate-200"}`} />
                        ))}
                      </div>
                      <p className="text-emerald-950/70 font-medium italic mb-6 text-sm leading-relaxed">"{t.content}"</p>
                      <div className="flex items-center gap-3">
                        <img src={t.user_avatar} className="w-10 h-10 rounded-xl object-cover shadow-sm" />
                        <div>
                          <div className="font-black text-emerald-950 text-sm">{t.user_name}</div>
                          <div className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest">Verified Reader</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-emerald-50/50 border-2 border-dashed border-emerald-100 rounded-[2.5rem] p-12 text-center">
                  <p className="text-emerald-800/50 font-bold italic">প্রথম মতামতটি আপনার হোক!</p>
                </div>
              )}
            </div>

            {/* Write a Testimonial Section */}
            <div className="lg:mt-20">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-emerald-950 rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                
                <h3 className="text-2xl font-black mb-2 flex items-center gap-3">
                  আপনার মতামত দিন 
                  <Sparkles className="w-6 h-6 text-emerald-400" />
                </h3>
                <p className="text-emerald-200/60 text-sm font-medium mb-8">আমাদের সেবা আপনার কেমন লেগেছে তা জানান।</p>

                <form onSubmit={handleSubmitTestimonial} className="space-y-6">
                  <div className="flex gap-2 p-2 bg-emerald-900/40 rounded-2xl w-fit">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setRating(s)}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${rating >= s ? "bg-amber-400 text-emerald-950 scale-110 shadow-lg shadow-amber-400/20" : "text-emerald-500 hover:bg-emerald-800/50"}`}
                      >
                        <Star className={`w-5 h-5 ${rating >= s ? "fill-current" : ""}`} />
                      </button>
                    ))}
                  </div>

                  <textarea
                    value={newTestimonial}
                    onChange={(e) => setNewTestimonial(e.target.value)}
                    placeholder="আপনার অভিজ্ঞতা শেয়ার করুন..."
                    className="w-full bg-emerald-900/30 border border-emerald-800/50 rounded-2xl p-6 text-sm font-medium focus:ring-4 focus:ring-emerald-500/20 outline-none resize-none h-32 transition-all placeholder:text-emerald-700"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting || !user}
                    className="w-full py-5 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed text-emerald-950 font-black rounded-2xl transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? "পাঠানো হচ্ছে..." : (user ? "মতামত সাবমিট করুন" : "লগইন করে মতামত দিন")}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>��র মোবাইল রিডিং এক্সপেরিয়েন্স অসাধারণ।",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
                },
                {
                  name: "রাফিয়া আহমেদ",
                  role: "বই প্রেমী",
                  text: "নতুন নতুন ক্যাটেগরির বই এখানে সবসময় পাওয়া যায়। আমি এখন আর হার্ডকপি খুঁজি না, এখানেই আমার সব পছন্দের বই আছে।",
                  image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
                }
              ].map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-amber-900/5 border border-amber-100/30 relative group hover:scale-[1.02] transition-transform"
                >
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-200 group-hover:text-amber-500 transition-colors">
                    <Quote className="w-6 h-6 fill-current" />
                  </div>
                  <div className="flex items-center gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-emerald-900/70 font-medium italic mb-8 leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <img src={t.image} className="w-12 h-12 rounded-xl object-cover shadow-md" />
                    <div>
                      <div className="font-black text-emerald-950">{t.name}</div>
                      <div className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "সক্রিয় লেখক", value: `${authors.length}+`, icon: Users },
              { label: "প্রকাশিত বই", value: `${books.length}+`, icon: BookOpen },
              { label: "মোট পাঠক", value: `${orders.length}+`, icon: TrendingUp },
              { label: "রয়্যালটি প্রদান", value: `৳${orders.reduce((sum, o) => sum + o.amount, 0)}`, icon: Shield },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ 
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                className="text-center bg-white p-8 rounded-[2rem] shadow-lg shadow-emerald-900/5 group cursor-pointer"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="inline-flex items-center justify-center w-12 h-12 bg-emerald-50 rounded-2xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors mb-4"
                >
                  <stat.icon className="w-6 h-6" />
                </motion.div>
                <div className="text-3xl font-black text-emerald-950 mb-1">{stat.value}</div>
                <div className="text-sm font-bold text-emerald-900/60 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl -mr-48 -mt-48 opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl -ml-48 -mb-48 opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-emerald-600 rounded-[4rem] p-12 md:p-20 text-center text-white shadow-2xl shadow-emerald-900/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-700"></div>
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-8"
              >
                <Sparkles className="w-4 h-4 text-emerald-200" />
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-100">আজই আপনার যাত্রা শুরু করুন</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tight leading-tight">
                আপনার পাণ্ডুলিপি <br />
                এখনই <span className="text-emerald-200">প্রকাশ করুন</span>
              </h2>
              
              <p className="text-emerald-50/70 text-lg md:text-xl mb-12 font-medium">
                হাজারো লেখক ইতিমধ্যে আমাদের প্ল্যাটফর্মে তাদের সাহিত্যিক ক্যারিয়ার গড়ে তুলেছেন। 
                আপনি কি পিছিয়ে থাকবেন?
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link 
                  to="/join-writer" 
                  className="group px-12 py-6 bg-white text-emerald-700 rounded-3xl font-black text-xl shadow-2xl shadow-black/10 hover:scale-105 transition-all flex items-center gap-3"
                >
                  লেখক হিসেবে যোগ দিন
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/browse" 
                  className="px-12 py-6 bg-emerald-800/40 text-white border-2 border-white/20 backdrop-blur-md rounded-3xl font-black text-xl hover:bg-emerald-800/60 transition-all"
                >
                  বইসমূহ দেখুন
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
