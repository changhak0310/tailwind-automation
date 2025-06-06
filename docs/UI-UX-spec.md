# Streaming Crew UI/UX Spec

This document outlines the design and interaction specification for a streaming crew portal. It summarizes the user scenarios, information architecture, components and interactions described in the "UI/UX 명세서" provided in the repository's conversation.

## Overview

The portal promotes live streams for a crew of seventeen creators. Fans can quickly see who is live, watch streams, or set notifications for offline members. The design emphasizes clarity, efficient use of space, and consistent Tailwind CSS classes.

## Sections

1. **Header** – logo, search, and profile/notification controls.
2. **Highlight Section** – carousel that automatically cycles through prominent live streams with overlay details and call-to-action buttons.
3. **Live Section** – grid or list of currently live streamers with thumbnails, viewer counts, and categories.
4. **Offline Section** – scrollable list of offline members with a simple profile view and notification option.
5. **Footer** – links to crew social accounts and legal pages.

## Component Notes

- **HighlightStreamCard** – shows a featured live stream with thumbnail background, viewer count, elapsed time, and follow/watch buttons. Includes optional chat summary on hover.
- **LiveCard** – card used in the "Live Section" with a LIVE badge, viewer count, avatar, category, and truncated title.
- **OfflineCard** – small card for offline members with a grayscale avatar and "알림 받기" button.

## Interaction Highlights

- Highlight carousel auto-advances every 10 seconds, pauses on hover, and supports swipe or keyboard navigation.
- Live cards scale slightly on hover and open the respective stream page when clicked.
- Offline cards open a modal for notification subscription.
- All interactive elements include appropriate `aria-label`s and focus styles.

## Responsive Behavior

- **Desktop** – highlight height `60vh`, live cards displayed in four columns, offline cards show in a horizontal scroll.
- **Tablet** – highlight height `40vh`, two or three live-card columns, offline cards scaled down.
- **Mobile** – highlight height `25vh`, single-column list for live and offline sections.

## Accessibility

- Use `aria-live="polite"` for carousel announcements.
- Provide keyboard access and focus rings for all interactive elements.
- Ensure color contrast ratios meet WCAG AA standards.

For full details and the original specification, refer to the project's conversation history.
