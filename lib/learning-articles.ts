export type LocalizedCopy = {
  en: string
  ha: string
}

export type LearningArticle = {
  slug: string
  category: LocalizedCopy
  title: LocalizedCopy
  summary: LocalizedCopy
  readingTime: number
  aliases: string[]
  sections: {
    heading: LocalizedCopy
    body: LocalizedCopy
  }[]
}

export const learningArticles: LearningArticle[] = [
  {
    slug: 'bvn-basics',
    category: { en: 'Accounts & identity', ha: 'Asusu da tantancewa' },
    title: { en: 'Your BVN: what it does and how to protect it', ha: 'BVN ɗinka: aikinsa da yadda za ka kare shi' },
    summary: {
      en: 'Understand how the Bank Verification Number supports identity checks, and the simple steps that help keep your banking details safe.',
      ha: 'Fahimci yadda Lambar Tabbatar da Banki ke taimakawa wajen tantancewa da matakan kiyaye bayanan bankinka.',
    },
    readingTime: 4,
    aliases: ['BVN', 'identity', 'verification', 'bank verification number'],
    sections: [
      {
        heading: { en: 'What your BVN is for', ha: 'Amfanin BVN ɗinka' },
        body: {
          en: 'A Bank Verification Number is used by Nigerian financial institutions to help verify a customer’s identity across banking relationships. It is an identity reference, not an account number, password or payment instruction. A bank may still ask for other documents or checks when you open or update an account.',
          ha: 'Lambar Tabbatar da Banki (BVN) tana taimaka wa cibiyoyin kuɗi a Najeriya su tantance mutum a hulɗarsa da bankuna. Lambar tantancewa ce, ba lambar asusu, kalmar sirri ko umarnin biyan kuɗi ba. Banki na iya buƙatar wasu takardu ko bincike lokacin buɗe ko sabunta asusu.',
        },
      },
      {
        heading: { en: 'Keep it out of the wrong hands', ha: 'Kada ta shiga hannun da bai dace ba' },
        body: {
          en: 'Share your BVN only through a bank’s verified process. Never disclose your PIN, password or one-time password (OTP), even to someone claiming to be bank staff. If a message or caller pressures you to reveal a code or approve an unfamiliar request, stop and contact your bank using a channel you independently verified.',
          ha: 'Ka bayar da BVN ne kawai ta tsarin banki da ka tabbatar. Kada ka bayyana PIN, kalmar sirri ko lambar OTP, ko da wani ya ce ma’aikacin banki ne. Idan saƙo ko mai kira ya matsa maka ka bayar da lamba ko amince da buƙatar da ba ka sani ba, dakata ka tuntuɓi bankinka ta hanyar da ka tabbatar da kanka.',
        },
      },
    ],
  },
  {
    slug: 'murabaha-explained',
    category: { en: 'Islamic finance', ha: 'Kuɗi bisa tsarin Musulunci' },
    title: { en: 'Murabaha, explained in plain language', ha: 'Bayani mai sauƙi game da Murabaha' },
    summary: {
      en: 'A practical introduction to a cost-plus sale arrangement and the questions to ask before entering any financing agreement.',
      ha: 'Gabatarwa ga tsarin sayarwa da ƙarin riba da tambayoyin yi kafin shiga yarjejeniyar kuɗi.',
    },
    readingTime: 5,
    aliases: ['Murabaha', 'Islamic finance', 'Shariah', 'financing'],
    sections: [
      {
        heading: { en: 'The basic structure', ha: 'Tsarin asali' },
        body: {
          en: 'In a common Murabaha structure, a financier buys an identified asset requested by a customer and sells it to that customer at a disclosed cost plus an agreed profit. Payment may be made later under the contract. The asset, sequence of ownership, total sale price and payment schedule should be clear in the written agreement.',
          ha: 'A tsarin Murabaha da aka saba, mai bayar da kuɗi yana sayen takamaiman kaya bisa buƙatar abokin ciniki, sannan ya sayar masa da shi a farashin saye tare da ribar da aka amince da ita. Ana iya biya daga baya bisa yarjejeniya. Dole ne kaya, tsarin mallaka, jimillar farashi da jadawalin biya su kasance a sarari a rubuce.',
        },
      },
      {
        heading: { en: 'Read the agreement before you commit', ha: 'Karanta yarjejeniya kafin ka amince' },
        body: {
          en: 'Ask who will purchase and own the asset, what the final price includes, when each instalment is due, and what happens if a payment is late. Do not assume that every product described as Islamic finance has identical terms. Confirm the provider’s current offer, eligibility rules and approved documentation before making a decision.',
          ha: 'Tambayi wanda zai sayi kaya kuma ya mallake shi, abin da ya haɗu a farashin ƙarshe, lokacin kowane biya da abin da zai faru idan an makara. Kada ka ɗauka cewa duk samfurin kuɗin Musulunci yana da sharuɗɗa iri ɗaya. Tabbatar da tayin mai bayarwa na yanzu, ƙa’idodin cancanta da takardun da aka amince da su kafin yanke shawara.',
        },
      },
    ],
  },
  {
    slug: 'saving-irregular-income',
    category: { en: 'Saving & planning', ha: 'Ajiya da tsari' },
    title: { en: 'Saving when your income changes from month to month', ha: 'Yin ajiya idan kuɗin shigarka yana canzawa kowane wata' },
    summary: {
      en: 'A flexible routine for traders, seasonal workers and households whose income does not arrive on a fixed schedule.',
      ha: 'Tsari mai sauƙin daidaitawa ga ’yan kasuwa, ma’aikatan yanayi da iyalan da kuɗinsu ba ya shigowa a lokaci ɗaya.',
    },
    readingTime: 4,
    aliases: ['irregular income', 'savings', 'budget', 'saving'],
    sections: [
      {
        heading: { en: 'Build a plan around your real cash flow', ha: 'Tsara bisa yadda kuɗinka ke shigowa da gaske' },
        body: {
          en: 'Start by listing essential costs such as food, transport, stock, school expenses and existing repayments. Use a conservative estimate of income rather than planning around your best month. When money comes in, separate the amount needed for near-term essentials before deciding what can be saved.',
          ha: 'Fara da rubuta muhimman kashe-kashe kamar abinci, sufuri, jari, kuɗin makaranta da bashin da ake biya. Yi amfani da kiyasin kuɗin shiga mai taka-tsantsan maimakon tsara komai bisa wata mafi kyau. Idan kuɗi ya shigo, ware abin da ake buƙata nan kusa kafin yanke shawarar abin da za a ajiye.',
        },
      },
      {
        heading: { en: 'Make consistency more important than size', ha: 'Ka fifita daidaito fiye da yawan kuɗi' },
        body: {
          en: 'Choose a small amount or proportion you can usually set aside, then review it as your income changes. Keep short-term emergency money accessible and avoid locking away funds you may need for stock, bills or family needs. A simple weekly check of income, spending and savings can reveal where your plan needs adjustment.',
          ha: 'Zaɓi ƙaramin kuɗi ko kaso da za ka iya warewa akai-akai, sannan ka sake duba shi yayin da kuɗin shigarka ke canzawa. Ka bar kuɗin gaggawa na kusa a inda za ka iya samunsa, kuma kada ka kulle kuɗin da za ka buƙata don jari, kuɗaɗe ko iyali. Duba kuɗin shiga, kashewa da ajiya kowane mako zai nuna abin da ya kamata a gyara.',
        },
      },
    ],
  },
  {
    slug: 'ndic-deposit-protection',
    category: { en: 'Protection', ha: 'Kariya' },
    title: { en: 'What deposit insurance is designed to do', ha: 'Abin da inshorar ajiya aka tsara ta yi' },
    summary: {
      en: 'Learn the purpose of deposit insurance in Nigeria and why coverage depends on current rules and the institution involved.',
      ha: 'Koyi manufar inshorar ajiya a Najeriya da dalilin da ya sa kariya ta danganta da ƙa’idoji da cibiyar da abin ya shafa.',
    },
    readingTime: 4,
    aliases: ['NDIC', 'deposit insurance', 'insured deposits', 'protection'],
    sections: [
      {
        heading: { en: 'A safety net with defined rules', ha: 'Kariyar da ke da ƙa’idoji bayyanannu' },
        body: {
          en: 'The Nigeria Deposit Insurance Corporation (NDIC) administers deposit insurance for eligible deposits held with participating insured institutions. The scheme is intended to provide protection under defined conditions; it is not a promise that every financial product, investment or amount is covered without limit.',
          ha: 'Hukumar Inshorar Ajiya ta Najeriya (NDIC) tana kula da inshorar ajiyar kuɗin da suka cancanta a cibiyoyin da ke cikin tsarin. An tsara tsarin ne don bayar da kariya bisa wasu sharuɗɗa; ba alkawari ba ne cewa kowane samfurin kuɗi, jari ko adadi yana da kariya ba tare da iyaka ba.',
        },
      },
      {
        heading: { en: 'Check the current coverage details', ha: 'Duba cikakken bayanin kariya na yanzu' },
        body: {
          en: 'Coverage limits and eligibility can vary by institution category and may change. Confirm the institution’s insured status and the applicable limit through current NDIC information or the institution’s verified channels. Keep account records and understand whether a product is a deposit or another kind of financial arrangement.',
          ha: 'Iyakar kariya da cancanta na iya bambanta bisa nau’in cibiya kuma su canza. Tabbatar da matsayin cibiyar da iyakar da ta shafe ta ta bayanan NDIC na yanzu ko hanyoyin sadarwar cibiyar da aka tabbatar. Ka ajiye bayanan asusu kuma ka fahimci ko samfurin ajiya ne ko wani tsarin kuɗi daban.',
        },
      },
    ],
  },
  {
    slug: 'ussd-safety',
    category: { en: 'Digital banking', ha: 'Bankin dijital' },
    title: { en: 'Using USSD banking more safely', ha: 'Amfani da bankin USSD cikin aminci' },
    summary: {
      en: 'Understand how USSD sessions work and the checks to make before you dial a banking code or approve a transaction.',
      ha: 'Fahimci yadda zaman USSD ke aiki da abin da za ka tabbatar kafin buga lambar banki ko amince da mu’amala.',
    },
    readingTime: 3,
    aliases: ['USSD', 'short code', 'phone banking', 'digital safety'],
    sections: [
      {
        heading: { en: 'Use only a code the bank has confirmed', ha: 'Yi amfani da lambar da banki ya tabbatar kawai' },
        body: {
          en: 'USSD banking uses a short code dialled from a mobile phone to access selected services. Codes and available actions differ by institution and network. Find the correct code in current information published by your bank; do not rely on a code in an unsolicited text, social post or search result.',
          ha: 'Bankin USSD yana amfani da gajeriyar lambar da ake kira daga waya domin samun wasu ayyuka. Lambobi da ayyuka sun bambanta tsakanin bankuna da hanyoyin sadarwa. Nemo lambar da ta dace a bayanan bankinka na yanzu; kada ka dogara da lambar da aka turo maka ba tare da nema ba ko aka wallafa a shafin sada zumunta.',
        },
      },
      {
        heading: { en: 'Read every prompt before confirming', ha: 'Karanta kowane saƙo kafin amincewa' },
        body: {
          en: 'Check the amount, recipient and action shown on screen before you enter your transaction PIN. End the session when finished, especially on a shared phone. Never tell anyone your PIN or OTP. If your phone or SIM is lost, contact your mobile network and bank promptly through verified channels.',
          ha: 'Duba adadi, wanda zai karɓa da aikin da aka nuna kafin shigar da PIN na mu’amala. Rufe zaman idan ka gama, musamman a wayar da mutane da yawa ke amfani da ita. Kada ka gaya wa kowa PIN ko OTP. Idan waya ko SIM ta ɓace, tuntuɓi kamfanin sadarwa da bankinka da wuri ta hanyoyin da ka tabbatar.',
        },
      },
    ],
  },
  {
    slug: 'small-business-finance',
    category: { en: 'Business', ha: 'Kasuwanci' },
    title: { en: 'Preparing your small business for financing', ha: 'Shirya ƙaramar sana’arka don neman kuɗi' },
    summary: {
      en: 'A practical checklist for understanding your funding need, cash flow and repayment ability before applying.',
      ha: 'Jerin abubuwa masu amfani don fahimtar buƙatar jari, yadda kuɗi ke zagayawa da ikon biya kafin nema.',
    },
    readingTime: 5,
    aliases: ['small business', 'SME', 'loan', 'financing', 'trader'],
    sections: [
      {
        heading: { en: 'Be specific about the purpose', ha: 'Bayyana manufar neman kuɗin' },
        body: {
          en: 'Write down what the money will pay for, how it supports the business and when the benefit is expected. Keep basic sales, stock, expense and cash-flow records. A clear picture of seasonal changes and existing obligations helps you estimate an amount that fits the business rather than simply asking for the largest amount available.',
          ha: 'Rubuta abin da kuɗin zai biya, yadda zai tallafa wa sana’ar da lokacin da ake sa ran amfanin zai bayyana. Ajiye bayanan tallace-tallace, kaya, kashe-kashe da yadda kuɗi ke zagayawa. Fahimtar sauyin yanayi da bashin da ake biya yana taimaka wa wajen zaɓar adadin da ya dace da sana’a.',
        },
      },
      {
        heading: { en: 'Test repayment against a quieter month', ha: 'Gwada biya bisa watan da kasuwanci ya yi sanyi' },
        body: {
          en: 'Before accepting an offer, compare the total amount repayable, payment dates, fees, security requirements and consequences of a missed payment. Check whether repayments remain manageable in a slower period. Apply only through a provider’s verified channel and be cautious of anyone requesting an unofficial upfront fee or your secret banking credentials.',
          ha: 'Kafin karɓar tayin, kwatanta jimillar kuɗin biya, ranakun biya, kuɗaɗe, abin da ake nema a matsayin jingina da sakamakon rashin biya. Duba ko za ka iya ci gaba da biya a lokacin da kasuwanci ya yi sanyi. Yi nema ta hanyar mai bayarwa da aka tabbatar, kuma ka yi hattara da mai neman kuɗin farko ba bisa ƙa’ida ba ko bayanan sirrinka na banki.',
        },
      },
    ],
  },
  {
    slug: 'qard-hasan',
    category: { en: 'Islamic finance', ha: 'Kuɗi bisa tsarin Musulunci' },
    title: { en: 'Qard Hasan: the essentials to understand', ha: 'Qard Hasan: muhimman abubuwan fahimta' },
    summary: {
      en: 'A plain-language overview of a benevolent loan and the importance of reading the specific terms offered.',
      ha: 'Bayani mai sauƙi game da rance na alheri da muhimmancin karanta takamaiman sharuɗɗan da aka bayar.',
    },
    readingTime: 3,
    aliases: ['Qard Hasan', 'interest free loan', 'benevolent loan', 'Islamic finance'],
    sections: [
      {
        heading: { en: 'A loan based on benevolence', ha: 'Rance bisa alheri' },
        body: {
          en: 'Qard Hasan is commonly described in Islamic finance as a benevolent loan in which the borrower returns the principal amount. Its purpose and conditions should be explained in the agreement. It is different from a grant: the borrower is generally expected to repay what was borrowed according to the agreed terms.',
          ha: 'A tsarin kuɗin Musulunci, ana bayyana Qard Hasan a matsayin rance na alheri inda mai karɓa ke mayar da ainihin kuɗin da ya karɓa. Ya kamata a bayyana manufarsa da sharuɗɗansa a yarjejeniya. Ya bambanta da kyauta, domin ana sa ran mai karɓa zai mayar da kuɗin bisa sharuɗɗan da aka amince da su.',
        },
      },
      {
        heading: { en: 'Confirm what the agreement requires', ha: 'Tabbatar da abin da yarjejeniya ta tanada' },
        body: {
          en: 'Ask about eligibility, the repayment schedule, any permitted administrative charges and what support is available if circumstances change. Do not assume every provider uses the same structure or that a product is available to every applicant. Review the written terms and ask for clarification before signing.',
          ha: 'Tambayi game da cancanta, jadawalin biya, duk wani kuɗin gudanarwa da aka yarda da shi da taimakon da ake samu idan yanayi ya canza. Kada ka ɗauka cewa duk mai bayarwa yana amfani da tsari iri ɗaya ko cewa samfurin yana samuwa ga kowa. Karanta sharuɗɗan rubuce kuma nemi bayani kafin sa hannu.',
        },
      },
    ],
  },
  {
    slug: 'savings-or-fixed-deposit',
    category: { en: 'Saving & planning', ha: 'Ajiya da tsari' },
    title: { en: 'Savings account or fixed deposit?', ha: 'Asusun ajiya ko ajiyar wa’adin ƙayyadadde?' },
    summary: {
      en: 'Compare access, timing and terms so you can match a savings option to the purpose of your money.',
      ha: 'Kwatanta damar amfani, lokaci da sharuɗɗa domin zaɓar hanyar ajiyar da ta dace da manufar kuɗinka.',
    },
    readingTime: 4,
    aliases: ['savings account', 'fixed deposit', 'term deposit', 'saving'],
    sections: [
      {
        heading: { en: 'Different access, different purpose', ha: 'Damar amfani ta bambanta, haka ma manufa' },
        body: {
          en: 'A savings account is generally designed for holding money with access under the account’s rules. A fixed or term deposit usually commits a specified amount for an agreed period, and early withdrawal may be restricted or affect the return. These are general descriptions; providers’ products and terminology can differ.',
          ha: 'Ana tsara asusun ajiya domin a riƙe kuɗi tare da damar amfani bisa ƙa’idojin asusun. Ajiyar wa’adin ƙayyadadde tana ɗaure wani adadi na kuɗi na tsawon lokacin da aka amince da shi, kuma cirewa da wuri na iya zama da ƙuntatawa ko shafar ribar. Waɗannan bayanai ne na gama-gari; samfura da kalmomin masu bayarwa na iya bambanta.',
        },
      },
      {
        heading: { en: 'Compare the written terms', ha: 'Kwatanta sharuɗɗan da aka rubuta' },
        body: {
          en: 'Before placing money, check the minimum amount, term, access conditions, fees and how any return is calculated and paid. Keep emergency funds separate from money you can leave untouched. Ask the provider to explain the exact account or deposit terms that apply to you, and keep a copy of the agreement.',
          ha: 'Kafin saka kuɗi, duba mafi ƙarancin adadi, wa’adi, sharuɗɗan amfani, kuɗaɗe da yadda ake lissafa ko biyan duk wata riba. Ware kuɗin gaggawa daga kuɗin da za ka iya barin ba tare da taɓawa ba. Nemi mai bayarwa ya bayyana takamaiman sharuɗɗan asusu ko ajiya da suka shafe ka, sannan ka ajiye kwafin yarjejeniya.',
        },
      },
    ],
  },
]

export function getLearningArticle(slug: string) {
  return learningArticles.find((article) => article.slug === slug)
}
