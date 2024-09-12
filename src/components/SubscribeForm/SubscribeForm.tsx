import React from 'react'
import data from "../../../data/data";

function SubscribeForm() {
  const emailAddress = 'uveshrajwani786@gmail.com'; // Replace with your email address
  const subject = encodeURIComponent('Contact Request'); // Optional: Pre-fill subject
  const body = encodeURIComponent('Hello, I would like to get in touch with you.'); // Optional: Pre-fill body text

  const {
    newsletterheading,
    hideSubscribeForm,
  } = data;

  return (
    <>
      {hideSubscribeForm === false ? (
        <section className="text-center lg:m-7  w-80 p-3">


          <form className="space-y-6" action="#" method="POST">
            <div>
             
              <div className="mt-2 flex-col flex lg:flex md:flex-row">

                <section className="text-center lg:m-7  w-80 p-3">
                  <a
                    href={`mailto:${emailAddress}?subject=${subject}&body=${body}`}
                    className="inline-block bg-slate-900 border-slate-800 dark:border-slate-100 rounded-none p-2 border-2 dark:text-white hover:bg-slate-950"
                  >
                    Contact Me
                  </a>
                </section>

              </div>
            </div>
          </form>
        </section>
      ) : (
        ""
      )}
    </>
  )
}

export default SubscribeForm