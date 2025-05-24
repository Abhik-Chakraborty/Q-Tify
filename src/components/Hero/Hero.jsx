import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <>  
        <section className={styles.Hero}>
            <div className={styles.HeroTitle}>
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
                <img 
                    className={styles.HeroImage} 
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60" 
                    alt="headphone"
                />
        </section>
    </>
  )
}

export default Hero