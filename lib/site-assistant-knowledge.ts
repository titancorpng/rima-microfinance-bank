import { directorProfiles } from '@/components/leadership-data'
import { learningArticles } from '@/lib/learning-articles'

export type SiteFaq = {
  id?: string
  question: string
  answer: string
  aliases?: string[]
  hausaAnswer?: string
}

const ignoredSearchTerms = new Set([
  'rima', 'mfb', 'website', 'site', 'bank', 'the', 'a', 'an', 'and', 'or', 'but',
  'how', 'what', 'when', 'where', 'why', 'who', 'which', 'do', 'does', 'did',
  'can', 'could', 'would', 'should', 'is', 'are', 'was', 'were', 'be', 'to',
  'for', 'of', 'in', 'on', 'at', 'with', 'from', 'my', 'me', 'i', 'we', 'you',
  'your', 'our', 'it', 'this', 'that', 'please', 'tell', 'about', 'need',
  'halin', 'yanzu', 'ana', 'iya', 'kuma', 'don', 'dan', 'menene', 'yaya',
  'ina', 'zan', 'wannan',
])

function searchTerms(value: string): Set<string> {
  const singularize: Record<string, string> = {
    accounts: 'account',
    applications: 'application',
    charges: 'charge',
    complaints: 'complaint',
    fees: 'fee',
    limits: 'limit',
    payments: 'payment',
    transfers: 'transfer',
  }
  return new Set(
    (value
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .toLocaleLowerCase()
      .match(/[\p{L}\p{N}]{2,}/gu)
      ?.map((term) => singularize[term] ?? term)
      .filter((term) => !ignoredSearchTerms.has(term)) ?? []),
  )
}

export function rankSiteFaqs(query: string, limit = 3): { faq: SiteFaq; score: number; matchedTerms: number }[] {
  const queryTerms = searchTerms(query)
  if (!queryTerms.size) return []

  const normalizedQuery = query.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLocaleLowerCase()
  return siteFaqs
    .map((faq) => {
      const questionTerms = searchTerms(faq.question)
      const aliasTerms = searchTerms((faq.aliases ?? []).join(' '))
      let score = 0
      let matchedTerms = 0
      for (const term of queryTerms) {
        if (questionTerms.has(term)) {
          score += 3
          matchedTerms += 1
        } else if (aliasTerms.has(term)) {
          score += 2
          matchedTerms += 1
        }
      }

      const phrases = [faq.question, ...(faq.aliases ?? [])]
      const exactPhraseMatch = phrases.some((phrase) => {
        const normalizedPhrase = phrase.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLocaleLowerCase()
        return normalizedQuery.length >= 4
          && (normalizedPhrase.includes(normalizedQuery) || normalizedQuery.includes(normalizedPhrase))
      })
      if (exactPhraseMatch) score += 5

      return { faq, score, matchedTerms }
    })
    .filter((match) => match.score > 0)
    .sort((left, right) => right.score - left.score || right.matchedTerms - left.matchedTerms)
    .slice(0, limit)
}

export const siteFaqs: SiteFaq[] = [
  {
    id: 'account-opening',
    question: 'How do I open an account?',
    answer:
      'Choose the account that matches your needs, review its terms, provide the required identification details, complete verification and confirm the channels available to you. Requirements may include BVN, NIN, accepted identity documents and proof of address depending on the account and current product rules.',
    aliases: ['bude asusu', 'asusun bude', 'asusun banki'],
    hausaAnswer:
      'Zaɓi asusun da ya dace da bukatunka, ka karanta sharuɗɗansa, sannan ka bayar da bayanan tantancewa da ake buƙata. Abubuwan da ake buƙata na iya haɗawa da BVN, NIN, takardar shaida da aka amince da ita ko shaidar adireshi, gwargwadon asusu da ƙa’idojin samfurin na yanzu.',
  },
  {
    question: 'What do I need to open a savings account?',
    answer:
      'The documents and minimum requirements depend on the account available at the time. Before you open an account, review the minimum opening amount, minimum balance, withdrawal conditions and any charges. Our team can explain the terms and eligibility before you proceed.',
    aliases: ['asusun ajiya', 'bude asusun ajiya'],
    hausaAnswer:
      'Takardu da mafi ƙarancin buƙatu sun danganta da asusun da ake da shi a lokacin. Kafin ka buɗe asusu, ka duba mafi ƙarancin kuɗin buɗewa, mafi ƙarancin ma’auni, sharuɗɗan cire kuɗi da duk wani caji. Ka tabbatar da cancanta da sharuɗɗan da suka shafe ka kafin ka ci gaba.',
  },
  {
    question: 'Is the Rima app available now?',
    answer:
      'Official download links are published on this website only when the app is approved for public release. Until then, the app is not available for public download and should be accessed only through verified official channels.',
    aliases: ['manhajar rima', 'sauke manhaja', 'app available'],
    hausaAnswer:
      'A halin yanzu, manhajar Rima ba ta samuwa ga jama’a su sauke. Za a wallafa hanyar sauke manhajar ta hukuma a wannan shafi idan an amince da sakin ta ga jama’a. Kada ka sauke manhaja daga hanyar haɗin da ba a tabbatar da ita ba.',
  },
  {
    question: 'What services are available in the app?',
    answer:
      'Eligible customers may use the services that are enabled for their verified account, such as balance and transaction history, selected transfers, airtime purchases on supported networks and profile support. Features depend on account eligibility and current service availability.',
    aliases: ['ayyukan manhaja', 'manhaja tana da'],
    hausaAnswer:
      'Abokan ciniki da suka cancanta za su iya amfani da ayyukan da aka kunna wa asusunsu, kamar duba ma’auni da tarihin mu’amaloli, wasu canja kuɗi, sayen kati a hanyoyin sadarwar da ake tallafawa, da taimakon bayanin martaba. Ayyukan da ake samu sun danganta da cancantar asusu da yanayin sabis na yanzu.',
  },
  {
    id: 'pending-payment',
    question: 'What should I do if a payment is pending?',
    answer:
      'Check the transaction status in your account. If it remains pending or you notice an unfamiliar debit, contact Rima through a verified support channel and keep your transaction reference available. Never share your PIN, password or OTP with anyone.',
    aliases: ['biyan kudi yana jira', 'canja wuri bai shiga ba', 'muamala'],
    hausaAnswer:
      'Duba matsayin mu’amalar a asusunka. Idan har yanzu tana jiran kammalawa ko ka ga cire kuɗin da ba ka gane ba, ka tuntuɓi Rima ta hanyar banki da ka tabbatar da ita, sannan ka ajiye lambar mu’amalar. Kada ka ba kowa PIN, kalmar sirri ko OTP.',
  },
  {
    question: 'What are my account limits?',
    answer:
      'Limits depend on your verified account category, the service being used and current product rules. See the Fees & Limits page or contact Rima for the limits that apply to your account.',
    aliases: ['iyakar asusu', 'iyaka', 'kudin caji', 'kudin canja wuri'],
    hausaAnswer:
      'Iyakokin asusu sun danganta da nau’in asusun da aka tantance, sabis ɗin da ake amfani da shi da ƙa’idojin samfurin na yanzu. Duba shafin Kuɗaɗe da Iyakoki, sannan ka tabbatar da iyakar da ta shafi asusunka ta hanyar banki da ka tabbatar.',
  },
  {
    question: 'I forgot my password or changed my phone. What next?',
    answer:
      'Use the available password-recovery or device-verification process. If you cannot access your registered contact details, contact support for identity verification and never share your OTP, PIN or password with another person.',
    aliases: ['na manta kalmar sirri', 'na canza waya', 'otp', 'kalmar sirri'],
    hausaAnswer:
      'Yi amfani da tsarin dawo da kalmar sirri ko tantance sabuwar waya idan akwai. Idan ba ka da damar amfani da bayanan tuntuɓar da aka yi rajista da su, tuntuɓi banki ta hanyar da ka tabbatar domin a tantance kai. Kada ka ba wani OTP, PIN ko kalmar sirrinka.',
  },
  {
    id: 'loans-and-cards',
    question: 'Are loans or cards available through the app?',
    answer:
      'Digital loan applications are not part of the initial app release. Cards, POS terminals, USSD and other modules are only offered where the bank has formally approved and published them as available services.',
    aliases: ['rance', 'katin banki', 'pos', 'ussd'],
    hausaAnswer:
      'Ba a haɗa neman rancen dijital cikin sakin farko na manhajar ba. Ana bayar da katuna, POS, USSD da sauran ayyuka ne kawai idan bankin ya amince da su a hukumance kuma ya wallafa cewa suna samuwa.',
  },
  {
    question: 'How do I delete my app account or data?',
    answer:
      'In the RIMA app, open Profile or Settings, select Delete Account, and follow the on-screen prompts to submit a deletion request. Selecting the option starts a request; it does not mean deletion is immediate or that your bank account is closed. Wait for confirmation, as the bank may need to verify the request and retain some records where required by law. Uninstalling the app does not delete your account.',
    aliases: ['share bayanai', 'goge asusu', 'goge bayanai'],
    hausaAnswer:
      'A cikin manhajar Rima, buɗe Profile ko Settings, zaɓi Delete Account, sannan ka bi umarnin da ke allon domin aika buƙatar gogewa. Zaɓin yana fara buƙata ne; ba yana nufin za a goge bayanan nan take ko a rufe asusun bankinka ba. Jira tabbaci, domin banki na iya buƙatar tantance buƙatar da kuma riƙe wasu bayanai bisa doka. Cire manhajar daga waya ba ya goge asusunka.',
  },
  {
    question: 'How do I make a complaint?',
    answer:
      'Use the Complaints page or a verified Rima support channel. Keep your complaint reference, transaction details and any supporting screenshots or receipts. If the matter remains unresolved, you may follow the escalation steps published by the bank and relevant regulator.',
    aliases: ['korafi', 'korafe korafe', 'şikayya'],
    hausaAnswer:
      'Duba shafin Korafe-korafe ko tuntuɓi Rima ta hanyar taimako da ka tabbatar. Ajiye lambar korafinka, bayanan mu’amala da rasit ko hoton allo da suka dace. Idan ba a warware matsalar ba, bi matakan ɗaukaka ƙorafin da bankin ko hukumar da ta dace ta wallafa.',
  },
  {
    id: 'account-security',
    question: 'How can I protect my account?',
    answer:
      'Keep your login credentials private, use official contact channels and app links, secure your phone with a screen lock, and never share your PIN, password or OTP. Verify payment details before sending money and report suspected fraud through a verified channel immediately.',
    aliases: ['tsaron asusu', 'zamba', 'tsaro', 'sirri'],
    hausaAnswer:
      'Ka ɓoye bayanan shiga asusunka, yi amfani da hanyoyin tuntuɓa da manhajoji na hukuma, kuma ka kulle wayarka. Kada ka ba kowa PIN, kalmar sirri ko OTP. Tabbatar da bayanan wanda za ka aika wa kuɗi kafin aikawa. Idan kana zargin zamba, sanar da banki nan take ta hanyar da ka tabbatar.',
  },
]

export type KnowledgeDocument = {
  title: string
  href: string
  content: string
  aliases?: string[]
}

const faqDocument: KnowledgeDocument = {
  title: 'Frequently asked questions',
  href: '/faq',
  content: siteFaqs.map(({ question, answer, hausaAnswer }) => [
    `Q: ${question}\nA: ${answer}`,
    hausaAnswer ? `Amsa da Hausa: ${hausaAnswer}` : '',
  ].filter(Boolean).join('\n')).join('\n\n'),
  aliases: siteFaqs.flatMap((faq) => faq.aliases ?? []),
}

const generalDocuments: KnowledgeDocument[] = [
  {
    title: 'About Rima Microfinance Bank',
    href: '/about',
    content:
      'The website presents Rima Microfinance Bank as a Nigerian microfinance bank with roots in Sokoto State. It gives 1993 as its establishment year and RC 235458 as its company registration number. Its mission is to make practical financial services more accessible to individuals and small businesses through responsible banking, clear communication and useful technology. Its vision is to connect community banking with convenient digital financial services. It says it serves individuals and households, traders and microenterprises, eligible salary earners, and properly documented businesses, cooperatives and groups subject to approved products and account-opening requirements. Stated values are trust, inclusion, responsibility and service. Do not infer current regulatory licence or regulatory status from the company number or establishment year; current regulatory confirmation is not published.',
    aliases: ['Rima bank', 'Sokoto', 'microfinance', 'who is Rima'],
  },
  {
    title: 'Rima story and community focus',
    href: '/our-story',
    content:
      'Rima takes its name from the Rima River, described on the website as a familiar part of the North-West landscape and a symbol of sustenance, connection and opportunity. The website connects this heritage with local livelihoods, enterprise and community-focused banking.',
    aliases: ['Rima river', 'history', 'name', 'heritage', 'tarihi'],
  },
  {
    title: 'Personal banking',
    href: '/personal-banking',
    content:
      'Rima invites individuals to ask about savings accounts currently available for household needs, education, business plans or an emergency reserve. Steps are: choose a suitable account, review its terms, then complete required identity verification. Confirm eligibility, opening requirements, minimum balance, withdrawal conditions, applicable charges and account limits before applying. Account availability and terms vary; the website does not publish a complete current schedule.',
    aliases: ['personal account', 'savings', 'ajiya', 'personal banking'],
  },
  {
    title: 'Business banking',
    href: '/business-banking',
    content:
      'Rima invites businesses, registered companies, cooperatives and groups to ask about available accounts that suit their work. Requirements depend on legal structure and may include business registration, ownership details, signatory identification, tax details and an operating resolution. Review the operating mandate, authorised access, transaction limits, charges and current product terms before proceeding. Eligibility, documents, charges and limits depend on the applicable product.',
    aliases: ['business account', 'trader', 'small business', 'kasuwanci', 'company account', 'corporate account'],
  },
  {
    title: 'Fees and limits',
    href: '/fees-and-limits',
    content:
      'The website does not publish fixed account-specific charges or transaction limits. Account opening and maintenance charges depend on approved product terms. Transfer, airtime, data and bill-payment charges are shown at transaction confirmation. Limits depend on verified account category, service and current product rules. Check your current account terms and the final transaction disclosure before authorising payment. The fees page describes eligible deposits at microfinance banks as insured by NDIC up to ₦2,000,000 per depositor per bank, subject to applicable eligibility and coverage rules; it is not insurance against every scam, disputed payment or investment loss.',
    aliases: ['charges', 'fees', 'limits', 'iyaka', 'kudin caji', 'NDIC', 'deposit insurance', 'transfer fee', 'transaction charge', 'account charges'],
  },
  {
    title: 'Mobile banking app',
    href: '/mobile-banking',
    content:
      'The Rima MFB mobile app is being prepared for public release and is not currently available for public download from the website. The screen images are previews, not proof that a service is live. Official download links will be published on the website when the app is released. Planned services may depend on account eligibility, status and enabled features. Do not install an app from an unverified link. In Hausa: A halin yanzu, manhajar Rima ba ta samuwa ga jama’a su sauke. Za a wallafa hanyar sauke manhajar ta hukuma a wannan shafi idan an amince da sakin ta ga jama’a. Kada ka sauke manhaja daga hanyar haɗin da ba a tabbatar da ita ba.',
    aliases: ['app', 'mobile banking', 'manhaja', 'manhajar', 'manhajar rima', 'download', 'airtime', 'data top up', 'install app', 'play store', 'app store'],
  },
  {
    title: 'Security and fraud guidance',
    href: '/security',
    content:
      'Never share a PIN, password or one-time passcode (OTP), including with a person claiming to work for Rima. Verify the recipient name, bank, account number and amount before sending money. Do not rely on a screenshot alone as proof of payment. Use official contacts and app links; be cautious of urgent payment requests, prizes and requests to install remote-access software. If your account may have been hacked, compromised or taken over, or you notice an unfamiliar transaction, contact Rima immediately using a support channel independently verified from official bank documents or a confirmed branch. Ask the bank to help secure your account and report the transaction. This website and its AI assistant cannot access or block accounts and are not urgent fraud-reporting services.',
    aliases: [
      'fraud',
      'scam',
      'zamba',
      'otp',
      'password',
      'pin',
      'account security',
      'hacked account',
      'account hacked',
      'compromised account',
      'account takeover',
      'unauthorized access',
      'unauthorised access',
      'unauthorized transaction',
      'unfamiliar transaction',
      'tsaro',
    ],
  },
  {
    title: 'Support and complaints',
    href: '/support',
    content:
      'RIMA, the AI customer-care assistant, helps visitors with common account-access, pending-payment, app, fee, security and data questions using information published on the website. For account-specific changes, transaction action, formal complaints or urgent fraud concerns, use a bank contact channel independently verified from existing official bank documents or a confirmed branch. Keep a complaint reference and relevant transaction details available when contacting the bank. A verified public support phone number, email address, complaint escalation route and response-time commitment have not been supplied on the website.',
    aliases: ['support', 'complaint', 'korafi', 'customer care', 'contact', 'tallafi'],
  },
  {
    title: 'Common account problems and troubleshooting',
    href: '/faq',
    content:
      'For a forgotten password or a changed phone, use the password-recovery or device-verification process provided by the bank. If you cannot access registered contact details, use a verified bank support channel for identity verification; never share a PIN, password or OTP with another person. For a pending payment, check the transaction status in your account. If it remains pending or there is an unfamiliar debit, contact Rima through a support channel independently verified from official bank documents and keep the transaction reference available. For possible fraud or account takeover, act promptly through a verified bank channel. In Hausa: Idan ka manta kalmar sirri ko ka canza waya, yi amfani da tsarin dawo da kalmar sirri ko tantance na’ura na banki. Idan ba ka da damar amfani da bayanan tuntuɓar da aka yi rajista da su, tuntuɓi banki ta hanyar da ka tabbatar domin tantance kai. Kada ka ba wani PIN, kalmar sirri ko OTP. Idan biyan kuɗi yana jira, duba matsayin mu’amalar a asusunka. Idan ba ta kammala ba ko ka ga cire kuɗin da ba ka gane ba, tuntuɓi Rima ta hanyar banki da ka tabbatar kuma ka ajiye lambar mu’amalar.',
    aliases: [
      'account problem',
      'account problems',
      'account issue',
      'account access',
      'login',
      'log in',
      'cannot log in',
      'can’t log in',
      'forgot password',
      'changed phone',
      'pending payment',
      'payment failed',
      'muamala',
      'biyan kudi',
      'na manta kalmar sirri',
      'na canza waya',
    ],
  },
  {
    title: 'Account and data deletion',
    href: '/account-deletion',
    content:
      'To request deletion in the RIMA app, open Profile or Settings, select Delete Account, and follow the on-screen prompts. Selecting the option submits a request; it does not mean deletion is immediate or that a bank account is closed. Wait for confirmation. The bank may verify the request and retain records where required by law. Uninstalling the app does not delete an account. This website does not receive or process deletion requests.',
    aliases: ['delete account', 'goge asusu', 'delete data', 'share bayanai'],
  },
  {
    title: 'Website privacy',
    href: '/privacy',
    content:
      'The privacy policy covers this informational website, not information handled when opening or operating a bank account or using a future mobile banking app. The site does not provide a customer login, account-opening workflow or banking transactions. Do not enter passwords, PINs, OTPs, BVN or NIN details, identity documents, account numbers, phone numbers, email addresses or other sensitive information into the AI chat. Questions sent to the AI chat are processed by the site server and sent to Hugging Face Inference Providers and DeepInfra, the selected inference provider, to generate a reply. The app does not save chat history in a Rima database; conversation state is kept in session storage for the current browser tab until it is cleared or the tab is closed. It survives refreshes and navigation within that tab. The Hugging Face router says it does not store routed request or response bodies but keeps debugging logs for up to 30 days. DeepInfra’s privacy policy says submitted inference inputs and outputs are not stored, sold or used for training without explicit consent; its own technical logging and privacy terms also apply. Processing locations and retention settings for this specific website deployment have not been independently verified.',
    aliases: ['privacy', 'data protection', 'sirri', 'bvn', 'nin'],
  },
  {
    title: 'Cookies and browser storage',
    href: '/cookies',
    content:
      'The website uses session storage for its short loading animation and local storage for cookie and privacy preferences. The site currently has no active advertising or analytics integration. A preference control does not by itself activate tracking.',
    aliases: ['cookies', 'browser storage', 'kukis'],
  },
  {
    title: 'Website terms',
    href: '/terms',
    content:
      'The Terms page describes use of the informational Rima website. Website information is not a substitute for current product terms, account disclosures or advice from the bank. The site AI assistant provides general information only and does not give financial advice or perform banking services.',
    aliases: ['terms', 'website rules'],
  },
  {
    title: 'Service updates',
    href: '/service-updates',
    content:
      'The Service Updates page explains what verified service notices should contain: the affected service and customer impact, event or maintenance timing, confirmed progress, the next expected update, and restoration or customer next steps. Live updates should come from authorized bank operations or technology staff, supported where available by production service monitoring. Third-party payment provider notices should only be included when verified. This website currently has no monitoring integration or authorized status publishing feed, so it cannot confirm whether a particular service is available or unavailable. The website does not access a customer’s account or transaction status.',
    aliases: ['service unavailable', 'outage', 'status', 'updates'],
  },
  {
    title: 'Website features and languages',
    href: '/',
    content:
      'The public Rima website includes information about the bank and its story, personal and business banking, the mobile app, fees and limits, security, leadership, the image gallery, service updates, FAQs, support and complaints, privacy, cookies, account deletion, website terms and accessibility. The website interface has English and Hausa display options. RIMA, the AI customer-care assistant, can understand and respond in Hausa based on the visitor’s message even when the site language control remains in English. The assistant answers from approved public website information and may not know unpublished or account-specific information.',
    aliases: ['English', 'Hausa', 'language', 'Hausa toggle', 'website pages', 'site'],
  },
  {
    title: 'Accessibility',
    href: '/accessibility',
    content:
      'Rima aims to make the website usable with keyboard navigation, clear page structure, readable text and mobile layouts. The website has not had an independent accessibility audit and does not claim conformance. No verified public accessibility contact has been supplied.',
    aliases: ['accessibility', 'keyboard', 'screen reader'],
  },
  {
    title: 'Rima image gallery',
    href: '/gallery',
    content:
      'The Gallery is a curated collection of Rima-branded imagery centred on community, local enterprise and modern banking.',
    aliases: ['gallery', 'photos', 'images', 'branch photo'],
  },
]

const leadershipDocuments: KnowledgeDocument[] = [
  {
    title: 'Leadership directory',
    href: '/leadership',
    content:
      'The public Leadership page has a Board of Directors tab and a Management Team tab. The management tab currently displays its heading but no management profiles. The current board profiles are listed separately on the page. Repeat only public profile information and do not infer private contact details or appointments beyond the published information.',
    aliases: ['board', 'directors', 'management', 'leadership', 'board of directors'],
  },
  ...directorProfiles.map((profile): KnowledgeDocument => ({
    title: `${profile.name} — public board profile`,
    href: `/leadership/${profile.slug}`,
    content: [
      `${profile.name} is listed publicly as ${profile.title}.`,
      ...profile.biography,
      profile.disciplines.length ? `Areas of experience: ${profile.disciplines.join(', ')}.` : '',
      profile.education.length ? `Published education: ${profile.education.join('; ')}.` : '',
      profile.appointmentNote ?? '',
    ].filter(Boolean).join(' '),
    aliases: [profile.name, ...profile.name.split(' '), ...profile.disciplines],
  })),
]

const learningDocuments: KnowledgeDocument[] = learningArticles.map((article) => ({
  title: article.title.en,
  href: `/learn/${article.slug}`,
  content: [
    article.summary.en,
    article.title.ha,
    article.summary.ha,
    ...article.sections.flatMap((section) => [
      section.heading.en,
      section.body.en,
      section.heading.ha,
      section.body.ha,
    ]),
  ].join(' '),
  aliases: [...article.aliases, article.category.en, article.category.ha],
}))

export const siteKnowledge: KnowledgeDocument[] = [
  faqDocument,
  ...generalDocuments,
  ...leadershipDocuments,
  ...learningDocuments,
]

export function retrieveSiteKnowledge(query: string, limit = 4): KnowledgeDocument[] {
  const terms = [...searchTerms(query)]

  if (!terms.length) return []

  return siteKnowledge
    .map((document) => {
      const searchable = searchTerms(`${document.title} ${document.content} ${(document.aliases ?? []).join(' ')}`)
      const title = searchTerms(document.title)
      const aliases = searchTerms((document.aliases ?? []).join(' '))
      let score = 0
      for (const term of terms) {
        if (title.has(term)) score += 3
        else if (aliases.has(term)) score += 2
        else if (searchable.has(term)) score += 1
      }
      return { document, score }
    })
    .filter(({ score }) => score >= 2)
    .sort((left, right) => right.score - left.score)
    .slice(0, limit)
    .map(({ document }) => document)
}
