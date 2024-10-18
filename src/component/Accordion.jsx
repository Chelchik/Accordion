import { useState } from 'react';

function Accordion() {
    const [accordion, setAccordion] = useState(false);

    function accordionFunc() {
        setAccordion(!accordion);
    }

  return (
    <div className="accordion-box">
      <div className='arrow-and-text-box'>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, iure!</p>
      
      <b onClick={accordionFunc}>{accordion? "-" : "+"}</b>
      </div>

      <div className="accordion" style={{display: accordion ? "block" : "none"}}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, explicabo. Molestiae iusto deserunt, similique nisi explicabo beatae a, maxime quibusdam rem eum, soluta illum. Nihil cupiditate in, doloremque temporibus nobis dignissimos aut pariatur, voluptate commodi eaque possimus repellendus vel fuga ullam accusantium ea quaerat voluptates doloribus esse inventore illum amet!</p>
      </div>
    </div>
  );
}

export default Accordion;
