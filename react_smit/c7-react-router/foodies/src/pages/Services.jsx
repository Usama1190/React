import Banner from "../components/Banner/Banner"
import { BannerText1, BannerText2, BannerText3 } from "../utils/constant/bannerText"

const Services = () => {
  return (
    <div>
      <Banner data={BannerText1} />
      <Banner isrotate data={BannerText2} />
      <Banner data={BannerText3} />
    </div>
  )
}

export default Services
