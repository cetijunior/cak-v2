import Link from 'next/link'
import React from 'react'

function ContactSection() {
  return (
    <div>
      <div className="bg-blue-200 opacity-70 w-screen h-[330px]">
        <div className="flex flex-col items-center justify-center space-y-5">
          <h1 className="font-bold text-3xl pt-20">Contact us</h1>
          <p className="text-xl">
            For a successful conversation about creating or improving business
            software,<br></br> contact any of our people or drop us a line at{" "}
            <br></br>
            <Link className="text-blue-600" href={"/"}>
              info@cakwebsolutions.com.
            </Link>
          </p>
        </div>
      </div></div>
  )
}

export default ContactSection