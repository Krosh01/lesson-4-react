import React from 'react'
import imgWomen from '../../assets/aboutUs/women.png'

const AboutUs = () => {
  return (
    <section className='about'>
        <div className='container'>
            <div className='about__blocks'>
                <div className='about__blocks-first'>
                    <h2 className='about__title'><span className='about__title-second'>О</span><br/> нас</h2>
                    <p className='about__content'>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLoreLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumipLorem ipsumLoremLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem </p>
                </div>
                <div className='about__blocks-second'>
                    <img className='about-img' src={imgWomen} alt="" />
                    <svg className='about__svg-first' width="125" height="118" viewBox="0 0 125 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M124 62.5C124 51.6093 121.108 40.914 115.62 31.5073C110.131 22.1007 102.244 14.3201 92.7627 8.96107C83.2818 3.60202 72.5479 0.856701 61.6582 1.00576C50.7686 1.15482 40.1138 4.19292 30.7832 9.80947C21.4525 15.426 13.7807 23.4196 8.55188 32.9729C3.3231 42.5263 0.724952 53.2968 1.02305 64.1834C1.32114 75.0699 4.50479 85.6821 10.2485 94.935C15.9922 104.188 24.09 111.75 33.7141 116.847" stroke="white"/>
                    </svg>
                    <svg className='about__svg-second' width="180" height="265" viewBox="0 0 180 265" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="263.708" width="318.804" height="0.786651" transform="rotate(-55.81 0 263.708)" fill="white"/>
                    </svg>
                </div>
            </div>
        </div>
        <div className='about__bottom'>
        </div>
    </section>
  )
}

export default AboutUs