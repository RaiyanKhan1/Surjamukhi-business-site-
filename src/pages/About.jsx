import PageHeader from '../components/ui/PageHeader'
import { aboutHeader } from '../data/about'
import Locations from '../sections/about/Locations'
import Story from '../sections/about/Story'
import Teams from '../sections/about/Teams'
import Timeline from '../sections/about/Timeline'
import VisionValues from '../sections/about/VisionValues'
import CtaBanner from '../sections/shared/CtaBanner'

export default function About() {
  return (
    <>
      <PageHeader {...aboutHeader} breadcrumb="About" />
      <Story />
      <Timeline />
      <VisionValues />
      <Teams />
      <Locations />
      <div className="bg-white pt-4">
        <CtaBanner />
      </div>
    </>
  )
}
