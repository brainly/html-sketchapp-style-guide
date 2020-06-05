import React from 'react';
import Dropdown from 'brainly-style-guide/src/components/dropdowns/Dropdown';
import {ICON_COLOR, TYPE} from 'brainly-style-guide/src/components/icons/Icon';
import {getValues} from '../utils/getValues';

const DropdownsPage = () => {
  const variations = [];
  const links = [
    {label: 'brainly.in', url: 'brainly.in'},
    {label: 'brainly.com.br', url: 'brainly.in'},
    {label: 'brainly.pl', url: 'brainly.in'},
  ];

  const siteName = 'brainly.com';

  [false, true].forEach(opened => {
    ['default', 'white'].forEach(color => {

      const name =
        `Dropdown/${color}/${opened ? 'opened' : 'closed'}`;

      const dropdown = <Dropdown links={links} name={siteName} color={color} initiallyOpened={opened} />;

      variations.push(<div title={name} className='inline-item'>{dropdown}</div>);
    });
  });
  //   const containerClassName = opened ? 'sg-dropdown sg-dropdown--full-width sg-dropdown--opened' : 'sg-dropdown sg-dropdown--full-width';

  //   variations.push(<div title={name} className='inline-item'>

  //     <div className={containerClassName}>
  //       <div className="sg-dropdown__item-text">Pick one…</div>
  //       <div className="custom__icon">
  //         {opened ?
  //           <svg className="sg-dropdown__icon" width="9px" height="6px" viewBox="0 0 9 6" version="1.1">
  //             <g transform="translate(-89.000000, -12.000000)" fill="#9FA6B5">
  //               <polygon points="93.5 12 98 18 89 18"></polygon>
  //             </g>
  //           </svg> :
  //           <svg className="sg-dropdown__icon" width="8px" height="6px" viewBox="0 0 8 6" version="1.1">
  //             <g transform="translate(-82.000000, -12.000000)" fill="#9FA6B5">
  //               <polygon transform="translate(86.000000, 15.000000) scale(1, -1) translate(-86.000000, -15.000000) " points="86 12 90 18 82 18"></polygon>
  //             </g>
  //           </svg>
  //         }
  //       </div>
  //       {opened ?
  //         <div className="sg-dropdown__items">
  //           <div className="sg-dropdown__item-hole">
  //             <div className="sg-dropdown__item-text">1st item</div>
  //           </div>
  //           <div className="sg-dropdown__item-hole">
  //             <div className="sg-dropdown__item-text">2nd item</div>
  //           </div>
  //           <div className="sg-dropdown__item-hole">
  //             <div className="sg-dropdown__item-text">3rd item</div>
  //           </div>
  //         </div> : null
  //       }
  //     </div>
  //   </div>);
  //   variations.push(<br/>);
  // });

  return <section>
    {variations}
  </section>;
};

export default DropdownsPage;
