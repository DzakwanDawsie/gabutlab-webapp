'use server'

import { Config } from "@/configs/config";
import { getBanners } from "@/libs/ApiRequest"

async function Slider() {
  const banners = await getBanners();

  return (
    <div className="slider-container">
      <div className="slider">
        {banners.map(banner => {
          return <div className="slide">
                <img src={banner.photo}/>
              </div>
        })}
      </div>

      <div className="slider-indicators"></div>

      <div className="arrow left">&#10094;</div>
      <div className="arrow right">&#10095;</div>
    </div>
  )
}

export default Slider