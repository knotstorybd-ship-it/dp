import { useRouteError, isRouteErrorResponse, Link } from "react-router";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  let errorMessage = "দুঃখিত, একটি অপ্রত্যাশিত সমস্যা হয়েছে।";
  
  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText || errorMessage;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-10 shadow-2xl border border-destructive/10 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-destructive"></div>
        
        <div className="w-24 h-24 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
          <AlertTriangle className="w-12 h-12 text-destructive" />
        </div>

        <h1 className="text-3xl font-bold text-foreground mb-4">ভুল হয়েছে!</h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          {errorMessage}
        </p>

        <div className="space-y-4">
          <button 
            onClick={() => window.location.reload()}
            className="w-full py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            আবার চেষ্টা করুন
          </button>
          
          <Link 
            to="/"
            className="w-full py-4 bg-primary/5 text-primary rounded-xl font-bold hover:bg-primary/10 transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            হোমপেজে ফিরে যান
          </Link>
        </div>

        <p className="mt-8 text-xs text-muted-foreground italic">
          Error Code: {isRouteErrorResponse(error) ? error.status : "CLIENT_RUNTIME_ERROR"}
        </p>
      </div>
    </div>
  );
}
