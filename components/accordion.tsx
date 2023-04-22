// components/Accordion.tsx
import React, { useState } from 'react';
import { accordionStyles } from '../ve-styles/accordion.css';

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const contentClassName = isOpen
    ? `${accordionStyles.content} ${accordionStyles.contentOpen}`
    : accordionStyles.content;

  return (
    <div className={accordionStyles.wrapper}>
      <button className={accordionStyles.title} onClick={toggleAccordion}>
        {title}
      </button>
      <div className={contentClassName}>{children}</div>
    </div>
  );
};

export default Accordion;
