import { Clock3, Mail, MapPin, MessageCircle, Phone, ArrowUpRight } from 'lucide-react'
import { branches, branchHours, publishedContactDetails } from '@/lib/rima-branch-directory'

export function BranchDirectory() {
  const mapQuery = encodeURIComponent(publishedContactDetails.headOffice)

  return (
    <section className="support-contact-directory" id="branches" aria-labelledby="branch-directory-title">
      <div className="support-contact-heading">
        <div>
          <p className="rima-eyebrow">RIMA / VISIT OR GET IN TOUCH</p>
          <h2 id="branch-directory-title">Branches across <span>Northern Nigeria.</span></h2>
          <p>Headquartered in Gwaranyo, Sokoto State since 1992. Expanding to Kaduna, Kano, and Abuja in Year 1.</p>
        </div>
        <div className="support-office-card">
          <MapPin aria-hidden="true" />
          <div><span>HEAD OFFICE</span><strong>{publishedContactDetails.headOffice}</strong></div>
        </div>
      </div>

      <div className="support-contact-channels">
        <a href={publishedContactDetails.phoneHref}>
          <Phone aria-hidden="true" />
          <span><small>CALL RIMA</small><strong>{publishedContactDetails.phoneLabel}</strong><em>Mon–Sat, 8am–6pm</em></span>
          <ArrowUpRight aria-hidden="true" />
        </a>
        <a href={publishedContactDetails.whatsappHref} target="_blank" rel="noreferrer">
          <MessageCircle aria-hidden="true" />
          <span><small>WHATSAPP</small><strong>{publishedContactDetails.whatsappLabel}</strong><em>Quick responses</em></span>
          <ArrowUpRight aria-hidden="true" />
        </a>
        <a href={publishedContactDetails.emailHref}>
          <Mail aria-hidden="true" />
          <span><small>EMAIL RIMA</small><strong>{publishedContactDetails.email}</strong><em>Reply within 24h</em></span>
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>

      <div className="support-branch-layout">
        <div className="support-branch-list">
          {branches.map((branch, index) => (
            <article className="support-branch-card" key={branch.name}>
              <span className="support-branch-index">0{index + 1}</span>
              <div>
                <h3>{branch.name}</h3>
                <p>{branch.address}</p>
                <a href={`tel:${branch.phone.replace(/[^\d+]/g, '')}`}>{branch.phone}</a>
                <span className="support-branch-hours"><Clock3 aria-hidden="true" /> {branchHours}</span>
              </div>
              <MapPin aria-hidden="true" className="support-branch-marker" />
            </article>
          ))}
        </div>
        <div className="support-branch-map">
          <iframe
            title="Map centred on Rima MFB head office area in Gwaranyo, Sokoto State"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" rel="noreferrer">
            Open head office map <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
