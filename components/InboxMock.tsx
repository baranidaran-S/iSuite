import {
  InstagramMark,
  MessengerMark,
  WebsiteMark,
  WhatsAppMark,
} from "@/components/ui/brand";

/* ==========================================================================
   HERO VISUAL — build spec §7.1 + §8
   --------------------------------------------------------------------------
   A hand-built light-UI mock of the unified inbox, standing in until real
   product screenshots are supplied. Light UI against the dark hero is exactly
   the contrast §7.1 asks for.

   §8 IMAGERY RULES observed:
     - no stock photography, no AI-robot graphics
     - NO invented metrics, counts, prices or dashboard numbers anywhere
     - costs zero image requests, so nothing here delays the hero (§9)

   The live typing indicator shows real product behaviour — the assistant
   composing a reply — rather than asserting any statistic.

   TO SWAP IN A REAL SCREENSHOT: replace this whole component with a
   <next/image>, wide crop for desktop and portrait/square for mobile.
   ========================================================================== */

const channels = [
  { name: "WhatsApp", Mark: WhatsAppMark, active: true },
  { name: "Instagram", Mark: InstagramMark, active: false },
  { name: "Messenger", Mark: MessengerMark, active: false },
  { name: "Website", Mark: WebsiteMark, active: false },
];

const conversations = [
  { name: "Anand Kumar", preview: "Is the showroom open today?", active: true },
  { name: "Priya S.", preview: "Can I book an appointment?", active: false },
  {
    name: "Rahul M.",
    preview: "What are your service options?",
    active: false,
  },
];

export function InboxMock() {
  return (
    <div
      className="overflow-hidden rounded-card border border-line bg-white shadow-2xl"
      role="img"
      aria-label="The iSuite AI shared inbox, showing WhatsApp, Instagram, Messenger and website conversations in one place, with the AI sales assistant replying and booking an appointment."
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-line bg-offwhite px-4 py-2">
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="ml-2 text-[11px] font-semibold text-slate">
          Shared Inbox
        </span>
      </div>

      <div className="grid grid-cols-[112px_1fr] md:grid-cols-[136px_176px_1fr]">
        {/* Channel rail — real logos */}
        <div className="border-r border-line bg-offwhite p-4">
          <p className="text-[10px] font-semibold tracking-wide text-slate uppercase">
            Channels
          </p>
          <ul className="mt-4 space-y-2">
            {channels.map(({ name, Mark, active }) => (
              <li
                key={name}
                className={`flex items-center gap-2 rounded-btn px-2 py-2 text-[11px] ${
                  active
                    ? "bg-white font-semibold text-forest shadow-sm"
                    : "text-slate"
                }`}
              >
                <Mark className="h-4 w-4 shrink-0" />
                {name}
              </li>
            ))}
          </ul>
        </div>

        {/* Conversation list — hidden on mobile so the crop stays readable */}
        <div className="hidden border-r border-line md:block">
          {conversations.map((c) => (
            <div
              key={c.name}
              className={`border-b border-line p-4 ${c.active ? "bg-offwhite" : ""}`}
            >
              <p className="text-[11px] font-semibold text-forest">{c.name}</p>
              <p className="mt-2 truncate text-[11px] text-slate">
                {c.preview}
              </p>
            </div>
          ))}
        </div>

        {/* Conversation thread */}
        <div className="flex flex-col gap-4 p-4">
          <div className="flex items-center gap-2 border-b border-line pb-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-offwhite text-[10px] font-semibold text-forest">
              AK
            </span>
            <span className="text-[11px] font-semibold text-forest">
              Anand Kumar
            </span>
            <span className="ml-auto inline-flex h-6 items-center gap-1 rounded-full bg-offwhite px-2 text-[10px] text-slate">
              <WhatsAppMark className="h-3 w-3" />
              WhatsApp
            </span>
          </div>

          {/* Incoming */}
          <div className="max-w-[80%] rounded-card rounded-tl-none bg-offwhite px-4 py-2">
            <p className="text-[11px] leading-relaxed text-charcoal">
              Hi, is the showroom open today?
            </p>
          </div>

          {/* AI assistant reply */}
          <div className="ml-auto max-w-[85%] rounded-card rounded-tr-none border border-line bg-white px-4 py-2 shadow-sm">
            <p className="text-[10px] font-semibold text-slate">
              AI Sales Assistant
            </p>
            <p className="mt-2 text-[11px] leading-relaxed text-charcoal">
              Yes, we are open today. Would you like me to book a time for your
              visit?
            </p>
          </div>

          {/* Customer replying — live typing indicator */}
          <div className="flex max-w-[80%] items-center gap-2 rounded-card rounded-tl-none bg-offwhite px-4 py-2">
            <span className="typing inline-flex items-center gap-1 text-slate">
              <span />
              <span />
              <span />
            </span>
          </div>

          <div className="mt-auto flex items-center gap-2 rounded-btn border border-line px-4 py-2">
            <span className="text-[11px] text-slate">Reply to Anand…</span>
          </div>
        </div>
      </div>
    </div>
  );
}
