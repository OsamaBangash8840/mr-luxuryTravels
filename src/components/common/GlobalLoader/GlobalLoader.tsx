import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import loaderVideo from '@/assets/home/loader.mp4';

export const GlobalLoader = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    
    // Fallback: hide loader after 10s if the video fails to end or load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Handle initial page load scroll jumping by locking the body scroll
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [loading]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#fdfdfd] flex items-center justify-center">
      <video
        src={loaderVideo}
        autoPlay
        muted
        playsInline
        onEnded={() => setLoading(false)}
        onError={() => setLoading(false)}
        className="w-full h-[60%] object-cover lg:w-[50%] lg:h-[50%]"
      />
    </div>
  );
};
