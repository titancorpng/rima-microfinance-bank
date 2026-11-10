'use client'

import Link from 'next/link'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/lib/language'

export const productGroups = [
  {
    number: '01',
    title: 'Savings accounts',
    hausa: 'Asusun ajiya',
    group: 'ACCOUNTS',
    summary: 'Accounts for setting money aside and managing everyday personal savings.',
    summaryHausa: 'Asusu don ajiye kuɗi da sarrafa ajiyar mutum ta yau da kullum.',
    details: [
      'Ask which savings options are currently available and who can open them.',
      'Compare the opening amount, minimum balance, access rules, applicable charges and any return terms.',
      'Prepare identification and verification details requested for the account you choose.',
    ],
    detailsHausa: [
      'Tambayi zaɓuɓɓukan ajiyar da ake da su yanzu da waɗanda za su iya buɗe su.',
      'Kwatanta kuɗin buɗewa, mafi ƙarancin ma’auni, ƙa’idojin amfani, kuɗaɗe da sharuɗɗan duk wata riba.',
      'Shirya takardun shaida da bayanan tantancewa da ake buƙata don asusun da ka zaɓa.',
    ],
  },
  {
    number: '02',
    title: 'Current accounts',
    hausa: 'Asusun yanzu',
    group: 'ACCOUNTS',
    summary: 'A banking account category commonly used to organise frequent personal or business transactions.',
    summaryHausa: 'Nau’in asusun banki da ake amfani da shi wajen tsara mu’amaloli na mutum ko kasuwanci akai-akai.',
    details: [
      'Confirm the eligible customer types, transaction access and documentation for the account.',
      'Ask about transaction limits, fees, authorised users and account operating conditions.',
      'For a business, ask which registration, ownership and signatory documents are required.',
    ],
    detailsHausa: [
      'Tabbatar da nau’in abokan ciniki da suka cancanta, damar mu’amala da takardun asusun.',
      'Tambayi iyakokin mu’amala, kuɗaɗe, masu izini da sharuɗɗan tafiyar da asusun.',
      'Ga kasuwanci, tambayi takardun rajista, mallaka da masu sa hannu da ake buƙata.',
    ],
  },
  {
    number: '03',
    title: 'Fixed-term deposits',
    hausa: 'Ajiyar wa’adin ƙayyadadde',
    group: 'SAVING',
    summary: 'An option that places a sum aside for an agreed term under written access and return conditions.',
    summaryHausa: 'Zaɓin ajiye wani adadi na tsawon lokacin da aka amince da shi bisa sharuɗɗan amfani da riba da aka rubuta.',
    details: [
      'Confirm the minimum placement, term choices and how any return is calculated and paid.',
      'Understand whether early access is permitted and what conditions or charges may apply.',
      'Keep a copy of the placement confirmation and agreed maturity date.',
    ],
    detailsHausa: [
      'Tabbatar da mafi ƙarancin adadi, zaɓin wa’adi da yadda ake lissafa ko biyan ribar.',
      'Fahimci ko ana iya cire kuɗi da wuri da sharuɗɗa ko kuɗaɗen da za su iya tasowa.',
      'Ajiye kwafin tabbacin ajiyar da ranar cikar wa’adin da aka amince da ita.',
    ],
  },
  {
    number: '04',
    title: 'Qard Hasan',
    hausa: 'Lamunin alheri',
    group: 'ISLAMIC FINANCE',
    summary: 'A benevolent-loan structure in which repayment and eligibility are governed by the written agreement.',
    summaryHausa: 'Tsarin lamunin alheri inda biya da cancanta ke bin yarjejeniyar da aka rubuta.',
    details: [
      'Ask about eligibility, the amount offered and the repayment schedule.',
      'Read the agreement to understand permitted fees, repayment responsibilities and what happens if circumstances change.',
      'Do not commit until the complete terms are clear to you.',
    ],
    detailsHausa: [
      'Tambayi game da cancanta, adadin da aka bayar da jadawalin biya.',
      'Karanta yarjejeniya don fahimtar kuɗaɗen da aka yarda da su, nauyin biya da abin da zai faru idan yanayi ya canza.',
      'Kada ka amince har sai ka fahimci cikakken sharuɗɗa.',
    ],
  },
  {
    number: '05',
    title: 'Murabaha finance',
    hausa: 'Kuɗin Murabaha',
    group: 'ISLAMIC FINANCE',
    summary: 'A cost-plus sale arrangement where the asset, purchase sequence and agreed sale price should be documented.',
    summaryHausa: 'Tsarin sayarwa da ƙarin riba inda ake rubuta kaya, jerin saye da farashin sayarwa da aka amince da shi.',
    details: [
      'Confirm the asset being financed, its disclosed cost and the total sale price.',
      'Understand how ownership transfers, when each payment is due and what the contract requires.',
      'Compare the full written terms before agreeing to the arrangement.',
    ],
    detailsHausa: [
      'Tabbatar da kayan da ake samar wa kuɗi, farashin sayensa da jimillar farashin sayarwa.',
      'Fahimci yadda mallaka ke sauyawa, lokacin kowane biya da abin da kwangilar ta tanada.',
      'Kwatanta cikakken sharuɗɗan rubuce kafin amincewa da tsarin.',
    ],
  },
  {
    number: '06',
    title: 'Micro and SME financing',
    hausa: 'Kuɗin ƙananan sana’o’i da matsakaitan kasuwanci',
    group: 'BUSINESS',
    summary: 'Financing enquiries for traders, farmers, artisans, cooperatives and small enterprises.',
    summaryHausa: 'Tambayoyin samun kuɗi ga ’yan kasuwa, manoma, masu sana’a, ƙungiyoyin haɗin gwiwa da ƙananan kamfanoni.',
    details: [
      'Describe what the funds will support and how the business earns and uses money.',
      'Prepare basic sales, costs, stock and cash-flow information for an eligibility discussion.',
      'Compare total repayment, payment timing, any security requirement and consequences of missed payments.',
    ],
    detailsHausa: [
      'Bayyana abin da kuɗin zai tallafa wa da yadda kasuwanci ke samun kuɗi da amfani da shi.',
      'Shirya muhimman bayanan tallace-tallace, kashe-kuɗe, kaya da kuɗin da ke zagayawa domin tattauna cancanta.',
      'Kwatanta jimillar biya, lokacin biya, duk wani jingina da sakamakon rashin biya.',
    ],
  },
  {
    number: '07',
    title: 'USSD and mobile banking',
    hausa: 'Bankin USSD da wayar hannu',
    group: 'DIGITAL',
    summary: 'Digital access can include phone-based menus and app features, depending on the services made available.',
    summaryHausa: 'Damar dijital na iya haɗawa da menu na waya da ayyukan manhaja, gwargwadon sabis ɗin da aka samar.',
    details: [
      'Use only a USSD code or app link published by Rima through its verified channels.',
      'Check which functions are enabled for your account and mobile network.',
      'Keep your PIN, password and one-time passcodes private.',
    ],
    detailsHausa: [
      'Yi amfani da lambar USSD ko hanyar manhaja da Rima ta wallafa ta hanyoyin da aka tabbatar kawai.',
      'Duba ayyukan da aka kunna wa asusunka da hanyar sadarwar wayarka.',
      'Ka ɓoye PIN, kalmar sirri da lambobin OTP.',
    ],
  },
  {
    number: '08',
    title: 'Agent banking and POS',
    hausa: 'Bankin wakilai da POS',
    group: 'DIGITAL',
    summary: 'Local agent and payment-terminal services can help extend access to selected banking and merchant functions.',
    summaryHausa: 'Ayyukan wakilai na yankin da na’urorin biyan kuɗi na iya taimaka faɗaɗa samun wasu ayyukan banki da kasuwanci.',
    details: [
      'Confirm whether a nearby agent or terminal is officially operating and what transactions it supports.',
      'Check any fee shown before confirming a transaction and keep its receipt or reference.',
      'Never disclose your PIN or approve a transaction you did not initiate.',
    ],
    detailsHausa: [
      'Tabbatar ko wakili ko na’ura kusa da kai na aiki a hukumance da mu’amalolin da yake tallafawa.',
      'Duba kuɗin da aka nuna kafin tabbatar da mu’amala, sannan ka ajiye rasit ko lambar ta.',
      'Kada ka bayyana PIN ko amince da mu’amalar da ba kai ka fara ba.',
    ],
  },
  {
    number: '09',
    title: 'Bill payments and collections',
    hausa: 'Biyan kuɗaɗe da tattara kuɗi',
    group: 'PAYMENTS',
    summary: 'Payment and merchant collection options may support routine bills, airtime or business receipts.',
    summaryHausa: 'Zaɓuɓɓukan biyan kuɗi da tattara na iya tallafa wa kuɗaɗen yau da kullum, kati ko kuɗin kasuwanci.',
    details: [
      'Confirm the biller or merchant, supported payment channel and transaction amount.',
      'Review the fee, reference and final confirmation before closing the session.',
      'If a payment is delayed or unclear, keep the reference and use a verified support channel.',
    ],
    detailsHausa: [
      'Tabbatar da mai karɓar kuɗi ko ɗan kasuwa, hanyar biyan da ake tallafawa da adadin mu’amala.',
      'Duba kuɗin sabis, lambar mu’amala da tabbacin ƙarshe kafin rufe zaman.',
      'Idan biya ya jinkirta ko bai bayyana ba, ajiye lambar mu’amala ka yi amfani da hanyar taimako da aka tabbatar.',
    ],
  },
]

export function ProductsPage() {
  const { language } = useLanguage()
  const isHausa = language === 'ha'

  return (
    <article className="products-page">
      <header className="products-hero">
        <p className="rima-eyebrow">RIMA / PRODUCTS &amp; SERVICES</p>
        <h1>{isHausa ? 'Zaɓuɓɓukan banki, ' : 'Banking options, '}<span>{isHausa ? 'a sarari.' : 'made clearer.'}</span></h1>
        <p>
          {isHausa
            ? 'Duba nau’ukan asusu, kuɗin Musulunci, hanyoyin dijital da ayyukan biyan kuɗi. Buɗe kowane sashe don ƙarin bayani.'
            : 'Explore account types, Islamic finance, digital access and payment services. Open a section to learn what to ask before choosing.'}
        </p>
      </header>
      <div className="products-index" aria-hidden="true">
        <span>PRODUCTS / SERVICES</span><strong>01—09</strong><span>YOUR NEED / YOUR NEXT STEP</span>
      </div>
      <section className="products-list" aria-label={isHausa ? 'Nau’ukan samfur da sabis' : 'Product and service categories'}>
        {productGroups.map((product) => (
          <details className="product-disclosure" id={`product-${product.number}`} key={product.number}>
            <summary>
              <span className="product-disclosure-number">{product.number}</span>
              <span className="product-disclosure-copy">
                <small>{product.group}</small>
                <strong>{isHausa ? product.hausa : product.title}</strong>
                <em>{isHausa ? product.summaryHausa : product.summary}</em>
              </span>
              <ChevronDown aria-hidden="true" />
            </summary>
            <div className="product-disclosure-panel">
              <ul>
                {(isHausa ? product.detailsHausa : product.details).map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
              <Link href="/contact">{isHausa ? 'Tuntuɓi Rima' : 'Contact Rima'} <ArrowUpRight aria-hidden="true" /></Link>
            </div>
          </details>
        ))}
      </section>
    </article>
  )
}
