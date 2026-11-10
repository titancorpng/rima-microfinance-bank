# Rima MFB Website and App Launch Readiness

Internal implementation and sign-off checklist. This is not website copy or legal advice. Do not treat an item as verified just because a page or link exists.

## Completed in this repository

- [x] Added RC 235458 to the site footer, using the number supplied for this task.
- [x] Replaced the unrelated fitness-app privacy policy with a notice scoped to this informational website; `/privacy-policy` redirects to `/privacy`.
- [x] Added general website terms at `/terms`; banking product/account terms are still separate and not supplied.
- [x] Added public routes for `/account-deletion`, `/support`, `/privacy`, and `/terms`. The deletion and support pages disclose that their request/reporting workflows are not operational.
- [x] Added `/about`, `/contact`, `/complaints`, `/help-centre`, `/cookies`, `/service-updates`, and `/accessibility` routes; aliases lead to existing pages and status/policy pages disclose their limits.
- [x] Removed the unsupplied fee, transaction-limit, and NDIC coverage figures from the fees page.
- [x] Replaced the homepage trust-strip text marks with the supplied CBN, NDIC, and Rima logo assets. Regulatory status claims have been removed pending verification.
- [x] Rebuilt the mobile menu as a glass dropdown, with an outside-click dismiss layer, compact rows, internal scrolling, and a single active-link underline.
- [x] Centered the mobile menu under the navbar; removed the duplicate desktop active underline.
- [x] Redesigned support and deletion layouts; set Security cards to a 2-by-2 desktop/tablet grid and a single mobile column. Body copy is justified and layouts were measured at desktop, iPad, and phone sizes.
- [x] Removed the upper homepage marquee; the lower logo marquee repeats its three supplied logos three times without borders or dividers.
- [x] Added Open Graph and Twitter share metadata using only `/RIMAMFB_mainlogo.jpg` (637 × 629), with a site-specific title and description.
- [x] Added the requested TITAN-TECH LTD credit, website link, and tap-to-call number at the bottom of the footer.

## Website content questionnaire

Use this list to track the 17 requested content areas. A draft page or an asset in the repository is not proof that the underlying bank fact is approved or current.

1. **Full MFB name — pending verification.** Confirm the exact CAC-registered name against the current certificate before presenting it as the verified legal identity.
2. **Address — pending.** Confirm registered, branch, postal and public-facing addresses plus customer opening hours.
3. **Official logo — in use; formal approval pending.** Supplied Rima logo artwork is already used on the site. Confirm the correct master asset and permitted variants with the bank.
4. **Mission — draft present; approval pending.** Confirm the current wording with the bank before treating it as approved.
5. **Vision — draft present; approval pending.** Confirm the current wording with the bank before treating it as approved.
6. **Corporate colours — draft in use; approval pending.** The site uses its existing green-and-gold palette; confirm the official palette and contrast requirements.
7. **Shareholders — pending.** Obtain the approved current shareholder names, disclosure wording and publication permission.
8. **Board of directors and introductions — CV profiles added.** Six supplied and user-confirmed accepted staff CVs are summarised on `/leadership?tab=board-of-directors`, with an individual career page for each. Titles are kept to those supported by the materials; Aliyu Zaki Garba's CV describes a non-executive director nomination awaiting clearance. No personal contact details or private information are published. Initials are used where approved portraits were not supplied; Mustapha S. Fodio's supplied portrait is shown in full.
9. **Management and introductions — pending.** The supplied folder is titled Directors CV's and contains no separate management roster. The Management Team tab is present and explains that accepted management CVs are still required.
10. **Products and descriptions — draft pages present; catalogue approval pending.** Confirm available products, eligibility, terms, features, charges and limits before describing them as live.
11. **Contact details — pending.** Supply verified public email, telephone numbers, Facebook, X/Twitter, Instagram and postal address; test every published channel.
12. **Photo gallery — concept gallery added; real gallery pending.** The current gallery labels supplied artwork as illustrative. Replace or supplement it only with approved, accurately captioned photographs and releases.
13. **History — draft page present; factual verification pending.** Verify dates and institutional claims against bank records before publication.
14. **Electronic products — app holding page present; service confirmation pending.** Public app-download links remain withheld. Confirm the operational status and approved descriptions for USSD, POS, card issuance and each app feature.
15. **Partners — pending.** Obtain an approved current partner list, relationship descriptions and logo/publication permissions.
16. **Account-opening form — not added.** Supply the approved form and secure submission/handling process, privacy notice, responsible team and customer response process first.
17. **Loan and advance request forms — not added.** Supply approved loan/advance products, eligibility and terms, secure application handling, privacy information and the responsible review process first.

## Requested site features

- [x] Add grouped desktop navigation and collapsible mobile navigation using existing Rima routes.
- [x] Add site search for current pages and selected FAQ topics; FAQ destinations have matching IDs.
- [x] Add Jaiz-inspired quick links with subtle CSS depth and press feedback; links lead only to existing informational pages.
- [x] Add a rotating homepage image panel without removing the existing hero copy or phone mockups. Supplied concept images are explicitly described as illustrative.
- [x] Add a gallery page with an illustrative-image disclosure.
- [x] Add a privacy-choice banner and a footer control to reopen preferences; analytics are not active and the stored preference does not enable tracking.
- [x] Describe browser storage and the consent preference in the Cookie and Privacy policies.
- [x] Browser-test the navigation, search, carousel, quick links, gallery, consent flow and policy routes at desktop/mobile sizes and with reduced motion.
- [x] Add About dropdown links for Board of Directors and Management Team, with both hover-open and click-to-pin interactions.
- [x] Add CV-derived board cards with linked individual biographies; keep the Management Team tab explicit about missing source profiles.
- [x] Verify all six leadership cards, their profile links, the full-frame supplied portrait, and the Management Team disclosure in Playwright at desktop and mobile widths.
- [x] Move the homepage phone mockups below the hero and above Quick Access with explanatory, not-yet-released copy; verify section order, phone placement, and no horizontal overflow at 360, 390, 768, 1024, and 1440 px.

## Bank evidence and regulatory sign-off

- [ ] Match the exact CAC-registered legal name, RC 235458, and registered address against the current CAC certificate. The 2009 CBN letter names “Rima Microfinance Bank Limited”; that alone does not establish the current CAC record.
- [ ] Obtain the actual CBN operating licence, confirm the current licence category and permitted territory/branch, and verify Rima's current status directly with CBN before using “licensed by CBN” or equivalent claims.
- [ ] Confirm current NDIC membership and approved wording before making deposit-insurance claims.
- [ ] Confirm whether the bank is connected to CBN e-FASS and close any outstanding regulatory requirements recorded in its correspondence.
- [ ] Confirm the approved Goronyo branch address, registered address, and public opening hours. Do not substitute a town or LGA for a street address.
- [ ] Confirm the final legal entity and app publisher identity across CAC, CBN, NDIC, Apple, Google Play, and the website.

### Attached CBN document

The supplied scan is a letter dated 10 August 2009 approving the grant of a final microfinance-bank licence after conversion from a community bank. It states that the original licence would be issued in due course. It is therefore not the original operating-licence certificate and must not be presented or uploaded as one. Obtain and verify the actual issued licence and current status first; have the bank approve any public copy or scan.

CBN's official [Reforms and Initiatives page](https://www.cbn.gov.ng/AboutCBN/Reforms.html) reports that 46 MFB operating licences were revoked effective 1 July 2026. That general notice does not establish Rima's status either way. Resolve Rima's current status with CBN and the current official institution list before launch.

CBN's official [circulars feed](https://www.cbn.gov.ng/RSS/CircularsRSS.html) lists a circular titled “Requirement to Display Corporate Names on Websites, Portals, Applications and Other Online Business Platforms.” CBN also publishes a notice on conspicuously displaying licences. Confirm the complete current requirements and applicability with the bank's compliance/legal team. Once verified, display the exact CAC corporate name and the actual current licence/status wording required by CBN; do not use the 2009 approval letter or a regulator logo as proof of a current licence.

## CBN Licence Publication Checklist

- [x] Review the supplied scan: it is an approval letter dated 10 August 2009, not the original operating-licence certificate.
- [ ] Obtain the original CBN operating licence or a current CBN-verifiable replacement.
- [ ] Independently verify the bank's current licence status, category, approved operating territory/branch, and exact legal name with CBN and the bank's compliance team.
- [ ] Have compliance/legal confirm whether the actual licence scan must be displayed online, the required placement/wording, and the applicable corporate-name disclosure rules.
- [ ] Obtain written bank approval for publishing the original licence image/document. Do not publish the approval letter in its place.
- [ ] If approved, publish a legible accessible copy on a public HTTPS page, label it accurately, and keep its issue/status information current. Do not alter official text or use CBN/NDIC logos to imply unverified approval or coverage.
- [ ] Recheck the public page and licence status during release sign-off; remove or update the document promptly if it expires, is superseded, or its status changes.

## Customer operations required before launch

- [ ] Publish and test the customer-support phone number and support email.
- [ ] Publish and test the complaints channel, complaints email, escalation steps, and response-time commitments.
- [ ] Publish and test a dedicated privacy/DPO contact.
- [ ] Publish and test the urgent fraud-reporting channel and incident-response ownership.
- [ ] Publish the current bank-approved fees and charges, account/transaction limits, and schedule effective date.
- [ ] Implement and staff a working no-login support/complaint route. Do not collect sensitive information until secure handling and routing are ready.
- [ ] Implement and test a no-login account/data deletion request route and the corresponding in-app deletion flow. Document identity verification, staff handling, deletion outcomes, statutory retention exceptions, and completion times. Account closure is a separate process.

## Privacy and app-store evidence required

- [ ] Inventory the released app's actual data collection: account/profile data, BVN/NIN, KYC documents, selfie/facial matching or liveness, biometrics, device identifiers, IP, crash logs, analytics, notifications, camera/photo access, payments, and permissions.
- [ ] Inventory every SDK, hosting provider, identity-verification provider, payment provider, analytics/crash tool, and subprocesser; verify processing/storage countries and contractual safeguards.
- [ ] Set and publish actual retention periods for website logs, app data, KYC records, backups, and deletion requests.
- [ ] Update the mobile-app privacy notice, Google Play Data Safety declarations, and Apple's privacy disclosures to match the verified implementation.
- [ ] Verify website hosting and image-provider logging, retention, and data locations. The website privacy notice currently flags these as unconfirmed.
- [ ] Decide and verify cookie/analytics behavior and publish any required consent controls before enabling non-essential tracking.
- [ ] Publish actual screenshots and version information only for the released app. Keep store buttons as a holding state until approved store URLs exist.

## Deployment and public URLs

- [x] Deployed the current site publicly over HTTPS at [rimamfb.vercel.app](https://rimamfb.vercel.app); Vercel SSO protection is disabled and the homepage plus policy/support routes returned HTTP 200.
- [ ] Deploy the website at a bank-controlled domain over public HTTPS and verify it is reachable without login or geographic restrictions. Update `metadataBase` and canonical/share URLs when that domain is approved.
- [x] Verified the public Privacy Policy, Terms, Account & Data Deletion, Support, Complaints, and Security routes on the Vercel deployment.
- [ ] Confirm the production sitemap, canonical domain, accessibility behavior, and support/deletion links on desktop and mobile.
- [ ] Add real Apple App Store and Google Play listing URLs only after publication and publisher-identity review.

## Verification performed here

- Next.js production build succeeded after the privacy, terms, support, deletion, and fee-page changes.
- Playwright confirmed the mobile menu opens as a bounded glass panel and closes when the backdrop is tapped. Recheck on physical mobile devices and short-height viewports before production.
- Playwright verified that the home carousel spans the desktop and mobile viewport widths, its controls change slides with reduced motion enabled, desktop dropdowns remain open while moving to a menu item and close on outside click, and a selected menu link navigates successfully.
- Playwright verified the search results and FAQ anchor, cookie preference reopening from the footer, mobile navigation, and the illustrative gallery disclosure.
- Playwright verified the search dialog stays inside short and mobile viewports, receives focus on open, restores focus on close, and dismisses with Escape or an outside tap.
- Playwright verified six leadership cards and profile links, the full-frame Mustapha S. Fodio portrait, the Management Team disclosure, and the homepage hero → app preview → Quick Access order at configured widths from 320 to 1440 px with no horizontal overflow.
- The latest local `npm run build` and `npx tsc --noEmit` checks passed.
