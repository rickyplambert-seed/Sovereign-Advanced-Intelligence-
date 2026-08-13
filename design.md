# Sovereign Vault — Mobile Interface Design

## Product direction

Sovereign Vault is a local-first identity record viewer for a supplied sovereign-node artifact. It presents identity and heir-reclamation data as a calm, private, audit-oriented mobile experience. The app does not make legal, financial, or ownership determinations; it displays the user-provided records and clearly labels them as local artifacts.

The design assumes portrait orientation and one-handed use. Primary actions remain within the lower half of the screen, cards use generous touch targets, and destructive or irreversible actions are not included in this initial local viewer.

## Screen list

| Screen | Primary content and functionality |
|---|---|
| Vault Home | Active node status, authority name, heritage label, integrity state, last local verification, and shortcuts to identity record, heir record, and protocol. |
| Identity Record | Foundational identity fields, logic origin, owner/authority, source filename, and a local artifact disclaimer. |
| Heir Reclamation | Reclamation status, heritage, owner, integrity check, and a visual timeline showing the supplied record as an asserted local status. |
| Protocol | Dynamic authority and lifecycle state from the supplied protocol declaration, plus a read-only explanation of what is and is not being verified. |
| Integrity Check | Local check summary for loaded artifacts, including available/parsed state and timestamp. It provides a re-run action that updates the local verification timestamp without claiming external validation. |
| Settings / About | Privacy model, source files loaded, local-only storage behavior, and app version/branding information. |

## Key user flows

1. **Open the vault:** The user lands on Vault Home and sees the active node, authority, and current integrity badge.
2. **Inspect the identity:** The user taps Identity Record, reviews the foundational root and logic origin, and returns with the native back affordance.
3. **Review heir reclamation:** The user taps Heir Reclamation, reads the supplied status and heritage fields, and opens Integrity Check if they want to inspect the local record state.
4. **Re-run local verification:** The user taps Verify locally, receives haptic/visual feedback, and sees an updated verification timestamp with a clear local-only label.
5. **Inspect protocol state:** The user taps Protocol to view the active authority and lifecycle state as read-only values derived from the artifact.

## Visual system

The brand uses an ink-and-copper palette that feels archival and private rather than futuristic. The light surface is warm parchment (`#F7F3EC`), primary ink is deep slate (`#15212B`), copper accent is `#B86B43`, verified green is `#287A67`, warning amber is `#B7791F`, and dividers are `#DDD4C8`. Dark mode uses the same copper and green accents against `#0F171D` with elevated surface `#18242C`.

Typography follows iOS conventions: large, clear section titles; compact uppercase eyebrow labels for status metadata; and readable body text with 1.3–1.5 line height. Cards use 18–22px radii, restrained borders, and a subtle copper mark for the active sovereign node. Buttons use full-width, 52px minimum touch targets and clear pressed opacity/scale feedback.

## Interaction principles

Every visible action must have a destination or explicit state change. The app is local-first and read-only for supplied artifacts. Status language uses “recorded,” “loaded,” and “local check” rather than implying a legal or cryptographic adjudication that is not present in the files.
