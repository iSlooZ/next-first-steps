import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'SEo pricing',
  keywords: ['Pricing Page', 'Anuel','Información']
};


export default function PricingPage(){
  return(
    <>
      <span className="text-7xl">Pricing Page</span>
    </>
  )
}