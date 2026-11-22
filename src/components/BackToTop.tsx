import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 420);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-6 right-5 sm:right-8 z-40 w-11 h-11 rounded-full bg-[#272a32]/90 hover:bg-[#32353d] border border-[#947dff]/45 text-[#e0e2ed] shadow-lg backdrop-blur-md flex items-center justify-center transition-all hover:-translate-y-0.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cabeff]"
    >
      <ArrowUp className="w-4 h-4 text-[#a2e7ff]" aria-hidden="true" />
    </button>
  );
}
