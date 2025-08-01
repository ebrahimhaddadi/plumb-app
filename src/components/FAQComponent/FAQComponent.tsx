// FAQComponent.js
import React, { useState } from 'react';
import styles from './FAQComponent.module.css';

const faqData = [
  {
    question: "What are the projected trends for Dubai's real estate market in 2025?",
    answer: (
      <>
        The Dubai real estate market in 2025 shows mixed projections. Some reports indicate a potential double-digit price fall due to a spike in new property deliveries, with 210,000 units planned for 2025-2026.<grok-card data-id="cc7814" data-type="citation_card"></grok-card>
        However, other forecasts predict price increases of 5-10% driven by rising demand and limited supply in key areas.<grok-card data-id="70efa1" data-type="citation_card"></grok-card>
        Rental growth has decelerated to 8.5% as of May 2025.<grok-card data-id="c7077c" data-type="citation_card"></grok-card>
        Retail sales are expected to grow by 6% from 2025-2027, and the overall market value is anticipated to reach US$693.53bn.<grok-card data-id="ed2185" data-type="citation_card"></grok-card>
        Average property prices per square foot range from AED 1,100 to AED 1,400.<grok-card data-id="0c3fef" data-type="citation_card"></grok-card>
      </>
    ),
  },
  {
    question: "Is Dubai a good place to invest in property?",
    answer: (
      <>
        Dubai is generally considered a strong investment destination for property in 2025, offering high rental yields (often 5-8%), low taxes, and a growing economy fueled by tourism and business.<grok-card data-id="9aff31" data-type="citation_card"></grok-card>
        It ranks among the best countries for real estate investment due to strong demand and property value appreciation.<grok-card data-id="5090d5" data-type="citation_card"></grok-card>
        However, some caution against it due to potential market bubbles, oversupply risks, and economic uncertainties.<grok-card data-id="5e7241" data-type="citation_card"></grok-card>
        Benefits include tax advantages, ease of purchase for foreigners, and opportunities in areas like Dubai Hills Estate and Palm Jumeirah.<grok-card data-id="20614e" data-type="citation_card"></grok-card>
      </>
    ),
  },
  {
    question: "Are there any taxes on buying or owning property in Dubai?",
    answer: (
      <>
        There are no annual property taxes on residential properties in Dubai, no capital gains tax, no income tax on rental yields, and no inheritance tax.<grok-card data-id="e72e7d" data-type="citation_card"></grok-card>
        However, when buying, there is a 4% Dubai Land Department (DLD) transfer/registration fee.<grok-card data-id="708d2a" data-type="citation_card"></grok-card>
        VAT (5%) may apply to commercial properties or certain services, and a 9% corporate tax affects real estate businesses since 2023.<grok-card data-id="45e379" data-type="citation_card"></grok-card>
        Other fees include real estate agent commissions (typically 2%) and mortgage registration fees if applicable.<grok-card data-id="3a4970" data-type="citation_card"></grok-card>
      </>
    ),
  },
  {
    question: "What is DXB Interact?",
    answer: (
      <>
        DXB Interact is an innovative platform providing detailed insights into Dubai's real estate market. It offers comprehensive data on property trends, transaction volumes, market worth by area, daily sales transactions, and rental prices, sourced from the Dubai Land Department. The platform helps investors make informed decisions with reports like the 2024 Dubai real estate market report, highlighting sales value, volume, price changes, and investor returns. Key features include projections for 8-10% price increases in luxury properties in 2025 and emphasis on Dubai's tax-friendly environment.
      </>
    ),
  },
];

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Questions & Answers</h1>
      {faqData.map((item, index) => (
        <div key={index} className={styles.faqItem}>
          <div className={styles.question} onClick={() => toggleAccordion(index)}>
            <span>{item.question}</span>
            <span className={styles.icon}>{openIndex === index ? '-' : '+'}</span>
          </div>
          {openIndex === index && <div className={styles.answer}>{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;