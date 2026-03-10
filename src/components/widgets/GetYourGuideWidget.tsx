'use client';

import { useEffect, useRef } from 'react';

interface GetYourGuideWidgetProps {
  location?: string;
  partnerId?: string;
}

/**
 * GetYourGuide Affiliate Widget
 * 
 * TODO - AFTER GETYOURGUIDE APPROVAL:
 * 1. Apply at: https://affiliate.getyourguide.com/
 * 2. Get your Partner ID after approval
 * 3. Replace the partnerId default value below with your actual Partner ID
 * 4. Update the widget configuration with your affiliate tracking parameters
 * 
 * Current Status: Using placeholder Partner ID (250882 - Travelpayouts)
 * After approval, replace with your GetYourGuide Partner ID
 */

const GetYourGuideWidget: React.FC<GetYourGuideWidgetProps> = ({ 
  location = '',
  partnerId = '250882' // TODO: Replace with your GetYourGuide Partner ID after approval
}) => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GetYourGuide widget script
    const script = document.createElement('script');
    script.src = 'https://widget.getyourguide.com/dist/pa.umd.production.min.js';
    script.async = true;
    script.setAttribute('data-gyg-partner-id', partnerId);
    
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [partnerId]);

  return (
    <div className="w-full">
      <div 
        ref={widgetRef}
        className="min-h-[600px] w-full overflow-hidden"
        data-gyg-widget="activities"
        data-gyg-partner-id={partnerId}
        data-gyg-q={location}
        data-gyg-currency="USD"
        data-gyg-locale-code="en-US"
        data-gyg-number-of-items="8"
        data-gyg-cmp="tours_widget"
      >
        <div className="flex items-center justify-center h-[600px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-500">Loading tours and activities...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetYourGuideWidget;
