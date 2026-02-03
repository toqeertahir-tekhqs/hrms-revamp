import { useEffect, useState } from 'react';

export default function useLocalIP() {
  const [ip, setIp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    const getLocalIP = async () => {
      try {
        const pc = new RTCPeerConnection({ iceServers: [] });
        pc.createDataChannel('');

        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);

        pc.onicecandidate = (event) => {
          if (!event || !event.candidate || !event.candidate.candidate) return;

          const ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/;
          const match = ipRegex.exec(event.candidate.candidate);

          if (match && !isCancelled) {
            setIp(match[1]);
            setLoading(false);
            pc.close();
          }
        };

        // Fallback if no IP found within 2 seconds
        setTimeout(() => {
          if (!ip && !isCancelled) {
            setError('Could not determine local IP (browser blocked access)');
            setLoading(false);
            pc.close();
          }
        }, 2000);
      } catch (err) {
        if (!isCancelled) {
          setError(err.message || 'Unknown error');
          setLoading(false);
        }
      }
    };

    getLocalIP();

    return () => {
      isCancelled = true;
    };
  }, []);

  return { ip, loading, error };
}
