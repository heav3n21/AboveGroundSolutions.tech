import React from "react";
import styles from "./style";
import './index.css';

import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from "./components";

const App = () => (

  <div className="bg-primary w-full text-lg overflow-hidden  shadow-xl" >
    <div className={`${styles.paddingX} ${styles.flexCenter} shadow-xl bg-primary `}>
      <div className={`${styles.boxWidth} `}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX}  ${styles.flexStart} herobg`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />

        <Stats />
      </div>

    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} `}>
      <div className={`${styles.boxWidth}`}>
        <Business />


      </div>

    </div>
    <div className=" --test">
      <Billing />
        <div className={`${styles.paddingX}  ${styles.flexCenter} ${styles.boxWidth} shadow-xl `}>
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} `}>
      <div className={`${styles.boxWidth}`}>
      <CTA />
      {/* <CardDeal />
      <Testimonials />
      <Clients /> */}
      

      </div>

    </div>
      <Footer />
  </div>
);


export default App;
