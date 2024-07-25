import { useEffect, useState } from 'react';
import { environment } from '../config/enviroments';

interface WebSettings {
  ccySymbol: string;
  ccy: string;
  locale: string;
  timezoneOffset: string
}

const useWebSettings = (): WebSettings | null => {
  const [webSettings, setWebSettings] = useState<WebSettings | null>(null);

  useEffect(() => {
    const webSettingsString = sessionStorage.getItem(environment.localeSettings);
    if (webSettingsString) {
      const settings: WebSettings = JSON.parse(webSettingsString);
      setWebSettings(settings);
    }
  }, []);

  return webSettings;
};

export default useWebSettings;
