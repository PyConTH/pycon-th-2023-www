import { useEffect, useRef, useState } from 'react'

import CookieConsent from 'react-cookie-consent'

export default function CookieConsentBanner() {
  const [showModal, setShowModal] = useState(false)
  const [isLoad, setIsLoad] = useState(false)
  const modalRef = useRef<HTMLDialogElement | null>(null)

  const closeModal = () => {
    setShowModal(false)
  }

  const onCookieConsentAccept = (acceptedByScrolling: boolean) => {
    if (acceptedByScrolling) {
      // triggered if user scrolls past threshold
      setShowModal(true)
    } else {
      if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
          ad_storage: 'granted',
          analytics_storage: 'granted',
        })
      }
    }
  }

  useEffect(() => {
    setIsLoad(true)
  }, [])

  useEffect(() => {
    if (showModal && modalRef.current) {
      modalRef.current.showModal()
    }
  }, [showModal])

  return (
    <>
      {/* Cookie Consent */}

      {/* TODO: Fix this */}
      {
        isLoad && (
          <CookieConsent
            location='bottom'
            buttonText='Accept'
            cookieName='pyconth'
            disableStyles
            expires={150}
            containerClasses={`md:w-3/4 w-10/12 fixed flex justify-between gap-x-2 left-1/2 -translate-x-1/2 mb-4 px-4 py-4 bg-slate-300/50 backdrop-blur-md rounded`}
            buttonWrapperClasses={`flex flex-col justify-center`}
            buttonClasses={`bg-slate-500 hover:bg-slate-700 text-white px-8 py-2 rounded`}
            contentClasses={`flex items-center`}
            onAccept={onCookieConsentAccept}
          >
            <div className='mr-2'>
              <p>
                <span className='mr-2'>🍪</span>This website uses cookies to enhance the user experience.
              </p>
              <p className='cursor-pointer lg:ml-6 text-primary' onClick={() => setShowModal(true)}>
                Click here to learn more
              </p>
            </div>
          </CookieConsent>
        )
      }

      {/* Cookie modal */}
      {
        showModal && (
          <dialog id='my_modal_2' ref={modalRef} className='modal'>
            <form method='dialog' className='modal-box bg-slate-50'>
              <div>
                <p className='font-bold text-lg'>บริษัท บางกอก ดอท อาร์บี</p>
                <p className='font-bold text-lg'>BANGKOK DOT RB CO., LTD.</p>

                {/* Close Button */}
                <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>✕</button>
              </div>

              <div className='w-5/6 h-px my-2 bg-gradient-to-r from-black to-black/0'></div>

              <div>
                <div className='py-2'>
                  <h3 className='font-bold text-lg'>นโยบายความเป็นส่วนตัวสำหรับลูกค้า</h3>

                  <div className='px-2 grid gap-y-2'>
                    <div>
                      <h3 className='font-bold'>การเก็บรวบรวมข้อมูลส่วนบุคคล</h3>
                      <p>
                        เราจะเก็บข้อมูลส่วนบุคคลที่ได้รับผ่าน Google Analytics
                        โดยใช้ข้อมูลจากคุกกี้ที่ได้รับจากผู้ใช้งานที่เข้ามาในเว็บไซต์
                      </p>
                    </div>

                    <div>
                      <h3 className='font-bold'>ประเภทข้อมูลของผู้ใช้งาน</h3>
                      <p>ประเทศที่อยู่ เมืองที่อยู่ เพศ อายุ ภาษา ความสนใจ</p>
                      <p>ข้อมูลอ่อนไหวที่จัดเก็บ: เพศ อายุ</p>
                    </div>

                    <div>
                      <h6 className='font-bold'>การนำข้อมูลไปใช้</h6>
                      <p>เพื่อดูภาพรวมของผู้เข้าชมเว็บไซต์</p>
                    </div>

                    <div>
                      <h3 className='font-bold'>การโฆษณาและการตลาด</h3>
                      <ul className='list-disc pl-6'>
                        <li>มีการรวบรวมข้อมูลผู้ใช้เพื่อวิเคราะห์และทำการตลาด</li>
                        <li>ไม่มีการแสดงโฆษณาจากบุคคลที่สาม</li>
                        <li>มีการส่งจดหมายข่าว (Newsletter) ทางอีเมลของผู้ใช้</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='py-2'>
                  <h5 className='font-bold text-lg'>รายละเอียดการติดต่อ</h5>

                  <div className='px-2'>
                    <div>
                      <h6 className='font-bold'>ผู้ควบคุมข้อมูลส่วนบุคคล (Data Controller)</h6>
                      <div>
                        <p>บริษัท บางกอก ดอท อาร์บี</p>
                        <p>36/1-3 Pan Road, Silom, Bangrak, Bangkok 10500</p>
                        <p>อีเมล : coreteam@pyconthailand.org</p>
                        <p>หมายเลขโทรศัพท์ : +66826626191</p>
                      </div>
                    </div>

                    <div>
                      <p className='pt-4 font-bold '>เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล (Data Protection Officer: DPO)</p>
                      <p>คณิน เครือพิมาย</p>
                      <p>Kanin Kearpimy</p>

                      <div className='my-2'>
                        <p>47/4 ม. 4 ต. บางสีทอง อ. บางกรวย จ. นนทบุรี</p>
                        <p>47/4 village no. 4, BangSriThong, BangKrui, Nonthaburi</p>
                      </div>

                      <p>อีเมล : kanink@pyconthailand.org</p>
                    </div>
                  </div>
                </div>
              </div>
            </form>

            <form method='dialog' className='modal-backdrop'>
              <button onClick={closeModal}>Close</button>
            </form>
          </dialog>
        )
      }
    </>
  )
}
