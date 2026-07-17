import React from 'react'

const privacypolicy = () => {
    return (
        <section className="privacy-main-cont">
            <div className="container pt-10 pb-5 ">
                <div className="row align-items-center justify-content-around ">

                    <div className="col-md-6">
                        <h3>
                            PRIVACY POLICY
                        </h3> 
                        <p>At FH Group, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
                    </div>
                    <div className="col-md-6 ">
                        <img src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1735310776/FHGROUPOC/PRESENTATION/ICONS/ccyrspaucp20l4ozbhkz.png" alt="privacypolicy" />
                    </div>
                </div>
                <div className="privacy-inner-cont">

                    <div className="col-md-12">
                        <h6>Information We Collect</h6>
                        <ol className='ms-4'>

                            <li><span className='fw-semibold'>Personal Information:</span>  Includes your name, email address, phone number, payment details, and any other information you provide when signing up for our services or making a purchase.
                            </li>

                            <li><span className='fw-semibold'>Non-Personal Information: </span>Includes browser type, IP address, pages visited, and other technical information collected automatically when you interact with our website.
                            </li>
                        </ol>
                        <h5>How We Use Your Information</h5>
                        <ol className='ms-4'>

                            <li>To provide and improve our services.</li>
                            <li>To process transactions and send confirmations.</li>
                            <li>To communicate updates, offers, or promotional materials.</li>
                            <li>To enhance website functionality and user experience.</li>
                            <li>To comply with legal obligations.</li>
                        </ol>
                        <p><span className='fw-semibold'>Information Sharing and Disclosure :</span> We do not sell or share your personal information with third parties except as necessary to provide our services, comply with the law, or protect our rights.
                        </p>
                        <p><span className='fw-semibold'>Data Security:</span> We implement appropriate technical and organizational measures to protect your data from unauthorized access, loss, or misuse.
                        </p>

                        <p><span className='fw-semibold'>Cookies:</span> Our website uses cookies to enhance your browsing experience. You can adjust your browser settings to decline cookies if preferred.</p>

                        <p><span className='fw-semibold'>Your Rights: </span>You have the right to access, modify, or delete your personal information. Contact us at [Your Contact Information] for assistance.</p>

                        <p><span className='fw-semibold'>Changes to This Privacy Policy:</span> We may update this policy from time to time. Any changes will be posted on this page with the updated revision date.
                        </p>

                    </div>
                    <div className="border my-4"></div>
                    <div className="col-md-12">
                        <h5>Terms and Conditions</h5>
                        <p><span className='fw-semibold'>Introduction :</span> These Terms and Conditions ("Terms") govern your use of FH Group’s website and services. By accessing or using our services, you agree to be bound by these Terms.</p>

                        <p><span className='fw-semibold'>Eligibility :</span>You must be at least 18 years old to use our services. By using our website, you represent that you meet this age requirement.</p>

                        <h6>Use of Services</h6>
                        <ol className='ms-4'>

                            <li>You agree to use our services for lawful purposes only.</li>
                            <li>You must not use our services to violate any applicable laws or regulations.</li>
                            <li>Unauthorized use of our website may give rise to a claim for damages and/or be a criminal offense.</li>
                        </ol>
                        <p><span className='fw-semibold'>Intellectual Property </span> All content on our website, including text, graphics, logos, and software, is the property of FH Group and is protected by intellectual property laws. Unauthorized use of our content is strictly prohibited.</p>
                        <h6>Payment and Refunds</h6>
                        <ol className='ms-4'>
                            <li>All payments must be made in full at the time of purchase unless otherwise agreed.</li>
                            <li>Refunds will be provided only in accordance with our Refund Policy.</li>
                        </ol>
                        <h6>Project Holding</h6>
                        <ol className='ms-4'>
                            <li>FH Group reserves the right to hold or discontinue any project if the client fails to meet agreed-upon deadlines or payment terms.</li>
                            <li>All project-related deliverables will remain the property of FH Group until full payment has been received.</li>
                            <li>In the event of project termination, clients will be notified in advance, and all pending obligations must be resolved within the specified timeframe.</li>
                            <li>If a client holds payment and does not respond to communications from FH Group for a period of 30 days or more, the project may be suspended or terminated at FH Group's discretion. Any work completed during this time will remain the property of FH Group until payment is received in full. Additionally, FH Group reserves the right to seek legal remedies to recover outstanding payments.
                            </li>
                        </ol>
                        <p><span className='fw-semibold'>Limitation :</span> of Liability FH Group is not liable for any indirect, incidental, or consequential damages arising out of your use of our services.</p>

                        <p><span className='fw-semibold'>Termination :</span> We reserve the right to terminate or suspend your access to our services at our discretion, without prior notice, if you violate these Terms.</p>
{/* 
                        <p><span className='fw-semibold'>Governing  :</span>Law These Terms are governed by the laws of [Your Jurisdiction]. Any disputes will be resolved in the courts of [Your Jurisdiction].</p> */}

                        <p><span className='fw-semibold'>Changes to Terms :</span> We may modify these Terms at any time. Continued use of our services constitutes acceptance of the revised Terms.</p>

                        <p className='contact'><span className='fw-semibold'>Contact Us  :</span>If you have any questions about these Terms or our Privacy Policy, please contact us at <a style={{textDecoration:"underline"}} href="https://www.fhgroupoc.com/contact">FH Group</a>. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default privacypolicy