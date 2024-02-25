import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'SEO Title',
  description: 'SEo description',
  keywords: ['Contact Page', 'Ricahard','Información']
};


export default function ContactPage(){
  return(
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  )
}