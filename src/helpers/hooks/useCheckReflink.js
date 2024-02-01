import { useState } from 'react';
import { setCookie, parseCookies } from 'nookies';

export const useCheckReflink = () => {
  const [uplineKey, setUplineKey] = useState(null);

  const checkReflink = () => {
    const refData = new URL(window.location.toString()).searchParams.get('ref');
    if (refData) {
      setUplineKey(refData);
      setCookie(null, 'qornex_upline', refData, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
    } else {
      const parseUpline = parseCookies()?.['qornex_upline'];
      if (!!parseUpline) {
        setUplineKey(parseUpline);
      }
    }
  };

  return {
    uplineKey,
    checkReflink,
  };
};
