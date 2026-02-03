import { useEffect, useState } from 'react';

const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktopModeOnMobile, setIsDesktopModeOnMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;

    const mobileUserAgent = /android|iphone|ipad|ipod/i.test(userAgent);
    const screenWidth = window.innerWidth;

    // Case 1️⃣: Normal mobile browser
    if (mobileUserAgent && isTouchDevice) {
      setIsMobile(true);
      setIsDesktopModeOnMobile(false);
    }

    // Case 2️⃣: Desktop mode on mobile (UA spoofed but touch still available)
    else if (
      !mobileUserAgent && // UA looks desktop
      isTouchDevice && // but still a touch device
      screenWidth < 1024 // and not a real desktop resolution
    ) {
      setIsMobile(true);
      setIsDesktopModeOnMobile(true);
    }

    // Case 3️⃣: Real desktop
    else {
      setIsMobile(false);
      setIsDesktopModeOnMobile(false);
    }
  }, []);

  return { isMobile, isDesktopModeOnMobile };
};

export default useDeviceDetect;
