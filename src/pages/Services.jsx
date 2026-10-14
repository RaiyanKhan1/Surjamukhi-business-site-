import PageHeader from '../components/ui/PageHeader'
import { servicesHeader } from '../data/services'
import Faq from '../sections/services/Faq'
import ProcessTimeline from '../sections/services/ProcessTimeline'
import ServiceCards from '../sections/services/ServiceCards'
import Sustainability from '../sections/services/Sustainability'
import TermsQuality from '../sections/services/TermsQuality'
import CtaBanner from '../sections/shared/CtaBanner'

export default function Services() {
  return (
    <>
      <PageHeader {...servicesHeader} breadcrumb="Services" />
      <ServiceCards />
      <ProcessTimeline />
      <TermsQuality />
      <Sustainability />
      <Faq />
      <div className="bg-white pt-4">
        <CtaBanner />
      </div>
    </>
  )
}
