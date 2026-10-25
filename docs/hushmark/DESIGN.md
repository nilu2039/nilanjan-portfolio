# HushMark preview reference

Source: [HushMark](https://hush-mark.nilanjan.xyz/), fetched live on 26 October 2026 with caching disabled. Desktop viewport: 1440 × 1000; full-page capture: 1440 × 1351. The screenshot was visually inspected and saved as `src/assets/images/hushmark.jpg`.

## Observed design

- White header with the purple H mark, lowercase wordmark, tagline, and source links.
- Two-column hero: “Less personal. More shareable.” alongside a protected-message example.
- Privacy workspace below, with a step-by-step sidebar, Text / Document / Audio tabs, and a rounded editor panel.
- Quiet footer with the mark, tagline, and review reminder.

## Extracted values

Firecrawl branding reports Inter typography, a 72px desktop hero heading, primary purple `#5B50C8`, dark ink `#24263D`, muted text `#626A80`, page background `#F8F9FC`, and input borders `#DFE2ED`. The primary button has a 12px radius. Visually, panels use larger rounded corners, thin pale borders, and generous spacing.

Logo asset: [hushmark-mark.svg](https://hush-mark.nilanjan.xyz/hushmark-mark.svg). The captured page uses interface graphics rather than photography.

## Portfolio use

Use the actual screenshot through the existing static Next.js image import. The pale lavender preview surround (`#E9E7F4`) is a portfolio styling choice based on the new purple palette. Existing card dimensions and responsive behavior determine the visible crop.

This reference covers the desktop default Text view. Mobile layouts, interactive states, and exact panel spacing were not extracted.
