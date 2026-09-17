import {
  InstagramMark,
  MessengerMark,
  WebsiteMark,
  WhatsAppMark,
} from "@/components/ui/brand";
import type { IconName } from "@/components/ui/icons";

/* ==========================================================================
   HERO MOCK DATA
   --------------------------------------------------------------------------
   Shared by the desktop three-pane mock (AppMock) and the interactive phone
   mock (MockPhone), which live in separate files because one is a server
   component and the other needs state. Keeping the data here means the two
   can never drift apart, and there is no import cycle between them.

   §8 IMAGERY RULES: unread counts and timestamps are ordinary chat-UI chrome,
   not performance claims. Nothing here is a business metric.
   ========================================================================== */

export const nav: Array<{
  label: string;
  icon: IconName;
  active: boolean;
  badge?: string;
}> = [
  { label: "Inbox", icon: "inbox", active: true, badge: "12" },
  { label: "Contacts", icon: "team", active: false },
  { label: "Deals", icon: "pipeline", active: false },
  { label: "Appointments", icon: "calendar", active: false },
  { label: "Follow-ups", icon: "bell", active: false },
  { label: "Meta Ads", icon: "megaphone", active: false },
  { label: "Settings", icon: "settings", active: false },
];

export const filters = [
  "All",
  "WhatsApp",
  "Instagram",
  "Messenger",
  "Website",
] as const;

export const threads = [
  {
    name: "Priya S.",
    first: "Priya",
    channel: "WhatsApp",
    preview: "Can I book an appointment…",
    time: "10:24 AM",
    unread: "2",
    Mark: WhatsAppMark,
    active: true,
  },
  {
    name: "Rahul M.",
    first: "Rahul",
    channel: "Instagram",
    preview: "What are your service options?",
    time: "09:48 AM",
    unread: "1",
    Mark: InstagramMark,
    active: false,
  },
  {
    name: "Anand Kumar",
    first: "Anand",
    channel: "Messenger",
    preview: "Is the showroom open today?",
    time: "09:32 AM",
    unread: null,
    Mark: MessengerMark,
    active: false,
  },
  {
    name: "Sneha R.",
    first: "Sneha",
    channel: "Website",
    preview: "Do you have home delivery?",
    time: "Yesterday",
    unread: null,
    Mark: WebsiteMark,
    active: false,
  },
];

/**
 * The AI sales conversation.
 *
 * `{name}` is replaced with the contact's first name, so the phone mock can
 * open any conversation in the list and have the greeting address the right
 * person instead of always saying "Priya".
 */
export const messages = [
  {
    from: "ai",
    text: "Hi {name}, thanks for your interest! Which service are you looking for? I can also help you book an appointment if you would like.",
    time: "10:24 AM",
  },
  {
    from: "customer",
    text: "I am interested in the facial treatment. Do you have availability this week?",
    time: "10:26 AM ✓✓",
  },
  {
    from: "ai",
    text: "We have slots available this Thursday at 11:00 AM and 3:00 PM. Would you like me to book the 3:00 PM slot for you?",
    time: "10:34 AM",
  },
] as const;

export const fillName = (text: string, name: string) =>
  text.replace("{name}", name);
