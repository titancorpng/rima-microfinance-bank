export type LeadershipProfile = {
  slug: string
  name: string
  title: string
  initials: string
  portraitSrc?: string
  portraitFit?: 'cover' | 'contain'
  portraitFocus?: 'upper' | 'top'
  disciplines: string[]
  biography: string[]
  profileSections?: {
    heading: string
    paragraphs?: string[]
    items?: string[]
  }[]
  education: string[]
  appointmentNote?: string
}

const abubakarNuhuProfile: LeadershipProfile = {
  slug: 'abubakar-nuhu',
  name: 'Abubakar Nuhu',
  title: 'Managing Director',
  initials: 'AN',
  portraitSrc: '/staff/MD.jpg',
  disciplines: ['Microfinance banking', 'Bank operations', 'Accounting and finance'],
  biography: [
    'Abubakar Nuhu is a microfinance banking professional whose career in community banking began in 1996. He joined Rima Microfinance Bank in Goronyo in 2008.',
    'He went on to serve as Clerical Officer, Receiving and Payment Cashier, Accounting Officer and Head of Operations. He was appointed Acting Managing Director in 2015 and Managing Director in 2016.',
    'His professional development includes training in microfinance regulation, CBN returns using CuteBanker, deposit insurance, credit-data reporting and anti-money-laundering requirements.',
  ],
  education: [
    'Higher Diploma in Accounting, Polytechnic of Sokoto State (2012)',
    'Diploma in Computer Studies, Shehu Shagari College of Education (2008)',
    'Diploma in Business Administration, Polytechnic Birnin Kebbi (2003)',
    'SSCE, Government Secondary School Wurno (1989)',
    'Primary Certificate, Town Primary School (1983)',
  ],
}

export const directorProfiles: LeadershipProfile[] = [
  {
    slug: 'mustapha-s-fodio',
    name: 'Mustapha Shehu Fodio',
    title: 'Chairman of Rima Microfinance Bank',
    initials: 'MF',
    portraitSrc: '/staff/mustapha_s_fodio.jpg',
    disciplines: ['Upstream oil and gas', 'Oilfield servicing', 'Industry and enterprise development'],
    biography: [],
    profileSections: [
      {
        heading: 'Professional Profile',
        paragraphs: [
          'Mustapha Shehu Fodio is a Nigerian businessman and industrialist with business interests in upstream oil and gas and oilfield servicing. He is the Chairman of Rima Microfinance Bank, where he leads the Board’s oversight of the bank’s strategic direction and governance.',
          'His business activities encompass the upstream oil and gas sector and an oil servicing company. This background gives him a perspective on enterprise development, the operating needs of businesses and the importance of access to financial services.',
          'At Rima Microfinance Bank, his priorities include digital transformation, stronger customer service and the development of banking channels that respond to the needs of individuals and small businesses. His approach combines the bank’s community roots with a forward-looking commitment to technology and responsible growth.',
        ],
      },
      {
        heading: 'Banking Leadership',
        paragraphs: [
          'Chairman, Rima Microfinance Bank',
          'Board oversight of strategy and governance, with a focus on the bank’s digital transformation and customer service.',
        ],
      },
      {
        heading: 'Business Interests',
        items: ['Upstream oil and gas', 'Oilfield servicing', 'Industry and enterprise development'],
      },
      {
        heading: 'Public Service',
        paragraphs: [
          'Previously served as Senior Special Adviser on Energy to Aminu Waziri Tambuwal, former Executive Governor of Sokoto State.',
        ],
      },
      {
        heading: 'Regional Background',
        paragraphs: [
          'A native of Wurno Local Government Area, Sokoto State, he is based in Abuja and maintains a close connection to the communities and business environment of northern Nigeria.',
        ],
      },
    ],
    education: ['Executive MBA, International Oil & Gas Management, University of Dundee', 'BBA, American InterContinental University'],
  },
  {
    slug: 'kalu-chukwuma-eduma-obuba',
    name: 'Kalu Chukwuma Eduma Obuba',
    title: 'Director',
    initials: 'KC',
    portraitSrc: '/staff/kalu_chukwuma.jpg',
    portraitFit: 'cover',
    disciplines: ['Accounting', 'Climate finance', 'Microinsurance'],
    biography: [
      'Kalu Chukwuma Eduma Obuba is a chartered accountant and financial-services leader with more than a decade of senior management experience across banking, climate finance, climate-risk insurance and agribusiness value chains.',
      'His work includes developing microinsurance and parametric agricultural insurance initiatives, supporting technical-assistance programmes, and building partnerships with local and international development organisations. This experience connects financial services with the needs and risks faced by agricultural communities.',
      'His areas of expertise include financial inclusion, green value-chain finance and business development, alongside mentoring and coaching.',
    ],
    education: ['Fellow of the Association of Chartered Certified Accountants (FCCA)'],
  },
  abubakarNuhuProfile,
  {
    slug: 'muhammed-bello-usman',
    name: 'Muhammed Bello Usman',
    title: 'Board Director / Chairman, Compliance Committee',
    initials: 'MB',
    portraitSrc: '/staff/muhammad_bello_usman.jpg',
    portraitFit: 'cover',
    disciplines: ['Economics', 'Banking and finance', 'Governance and compliance'],
    biography: [
      'Muhammed Bello Usman is an economist and financial-services professional whose experience spans public-sector finance, banking, stockbroking, public policy and microfinance governance.',
      'His career across banking and capital markets is complemented by work in public finance and government advisory roles. He brings this broad institutional perspective to his board responsibilities at Rima Microfinance Bank.',
      'As Chairman of the Board Compliance Committee, he supports oversight of compliance and governance matters.',
    ],
    education: ['M.Sc., Banking and Finance, Usmanu Danfodiyo University, Sokoto', 'B.Sc., Economics, Usmanu Danfodiyo University, Sokoto'],
  },
  {
    slug: 'yakolo-indimi-babangida',
    name: 'Yakolo Indimi Babangida',
    title: 'Director',
    initials: 'YB',
    portraitSrc: '/staff/yakolo_indimi.jpg',
    disciplines: ['Strategic leadership', 'Business development', 'Community impact'],
    biography: [
      'Yakolo Indimi Babangida is a business leader with more than two decades of managerial and director-level experience, including work in energy resources and business development.',
      'Her leadership experience centres on strategy, organisational development and operational efficiency, with a focus on building resilient organisations and supporting sustainable business growth.',
      'Alongside her commercial work, she has a strong interest in philanthropy and community development. Her perspective combines long-term business planning with a commitment to positive local impact.',
    ],
    education: [],
  },
  {
    slug: 'endy-chiakpo',
    name: 'Endy Chiakpo',
    title: 'Director',
    initials: 'EC',
    portraitSrc: '/staff/endy_chiakpo.jpg',
    portraitFit: 'cover',
    portraitFocus: 'upper',
    disciplines: ['Technology', 'Cybersecurity', 'Business leadership'],
    biography: [
      'Endy Chiakpo is an executive and technology leader whose experience spans business management, cybersecurity, consulting and enterprise technology. His career includes leadership roles in Nigeria’s technology sector and extensive experience with IBM.',
      'He has worked across strategic planning, technology services, organisational development and business growth. This combination of technical and commercial experience informs his approach to technology leadership and organisational performance.',
      'His academic background combines business administration, electrical engineering and physics, complementing his experience at the intersection of technology and business.',
    ],
    education: ['MBA, Columbia University', 'M.S., Electrical Engineering, Syracuse University', 'B.S., Physics, minor in Mathematics, Texas Southern University'],
  },
  {
    slug: 'aliyu-zaki-garba',
    name: 'Aliyu Zaki Garba',
    title: 'Non-Executive Director nominee',
    initials: 'AG',
    portraitSrc: '/staff/aliyu_zaki_garba.jpg',
    portraitFit: 'cover',
    portraitFocus: 'top',
    disciplines: ['Public service', 'Customs and trade', 'Risk and compliance'],
    biography: [
      'Aliyu Zaki Garba is a public-service and security professional with more than 35 years of service in the Nigeria Customs Service, including service as a Comptroller of Customs.',
      'His experience spans public-sector oversight, fiscal compliance, international trade and institutional governance. His customs-service career brings a practical understanding of trade processes, regulatory responsibilities and public accountability.',
    ],
    education: [],
    appointmentNote: 'His nomination as a non-executive director remains subject to clearance.',
  },
  {
    slug: 'ibrahim-umar',
    name: 'Ibrahim Umar, Esq., LLB, LLM, BL',
    title: 'Company Secretary',
    initials: 'IU',
    portraitSrc: '/staff/ibrahim_umar.jpg',
    portraitFit: 'cover',
    disciplines: ['Corporate governance', 'Financial regulation', 'Litigation'],
    biography: [
      'Ibrahim Umar, Esq., LLB, LLM, BL is a Nigerian legal practitioner with experience in corporate governance, regulatory compliance, financial-sector advisory and litigation. He is a Barrister and Solicitor of the Supreme Court of Nigeria and currently serves as Legal Counsel at Compass, advising public institutions, financial institutions and private clients on complex legal and regulatory matters.',
      'He has significant experience in corporate governance and institutional structuring, including serving as Company Secretary to Rima Microfinance Bank Limited and other corporate entities. His professional interests include corporate governance, financial regulation, emerging technology, international law and sustainable institutional development.',
    ],
    education: [
      'LLB and LLM in International Law, Middlesex University',
      'BL, Nigerian Law School, Abuja',
      'PhD in Law (Corporate Governance), Nile University of Nigeria (in progress)',
    ],
  },
]

export const managementProfiles: LeadershipProfile[] = [
  {
    ...abubakarNuhuProfile,
    slug: 'abubakar-nuhu-management',
  },
  {
    slug: 'al-amin-abdul-hassan',
    name: 'Al-Amin Abdul Hassan',
    title: 'Head of Operations',
    initials: 'AH',
    portraitSrc: '/staff/al_amin_abdul_hassan.jpg',
    portraitFit: 'cover',
    disciplines: ['Bank operations', 'Funds transfer', 'Reconciliation'],
    biography: [
      'Al-Amin Abdul Hassan is a banking professional and currently serves as Head of Operations at Rima Microfinance Bank, a role he has held since July 2026.',
      'Before joining Rima, he spent more than a decade with Access Bank in funds transfers and ATM custody, following an earlier role as a frontline officer and merchant teller at Intercontinental Bank. His responsibilities included domestic and international transfers, clearing, collections, point-of-sale balancing, reconciliation and transaction services.',
      'His professional training includes annual AML/CFT and international money transfer training, alongside customer-service and personal financial-management programmes.',
    ],
    education: [
      'M.Sc. in Accounting and Finance, Usmanu Danfodiyo University, Sokoto (in progress)',
      'B.Sc. in Accounting, Usmanu Danfodiyo University, Sokoto (2015)',
      'Diploma in Banking and Finance, Abubakar Tatari Ali Polytechnic, Bauchi (2005)',
    ],
  },
]

export const leadershipProfiles = [...directorProfiles, ...managementProfiles]

export function getLeadershipProfile(slug: string) {
  const boardProfile = directorProfiles.find((profile) => profile.slug === slug)
  if (boardProfile) return { profile: boardProfile, group: 'board' as const }

  const managementProfile = managementProfiles.find((profile) => profile.slug === slug)
  return managementProfile ? { profile: managementProfile, group: 'management' as const } : undefined
}
