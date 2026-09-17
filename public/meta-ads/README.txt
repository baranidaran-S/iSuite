iSuite AI - Meta Ads section screenshots
========================================

Drop the screenshots for the "Connect Your Ads to the Enquiries They
Generate." carousel in this folder, then point lib/content.ts at them.

1. Save the file here, e.g.  lead-ads.png
2. Open lib/content.ts, find `metaAdsShots`, and fill in that slot:

     { src: "/meta-ads/lead-ads.png",
       alt: "The iSuite AI inbox showing a lead that arrived from a Meta ad",
       caption: "Meta lead ads in the inbox" },

`alt` is read aloud by screen readers - describe what the screen shows,
not "screenshot 1".

Any slot left with src: "" keeps showing its placeholder, so they can go
in one at a time. Add or remove slots freely - the carousel and its dots
follow the array.

SIZE   1200 x 900 (4:3), PNG or WebP.
       Displayed around 460px wide, so this is 2x for retina.

BEFORE YOU ADD ONE
  - Blank or blur any real client name, phone number or spend figure.
  - No invented dashboard figures (build spec section 8).
