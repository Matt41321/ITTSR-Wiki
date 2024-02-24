import React from 'react';
import MayImg from '@site/static/img/May.png'

export default function May({children}) {
  return (
    <div className={'may'}>
        <img src={MayImg} style={{maxWidth: '20px'}}></img>
        <span style={{fontSize: '1.3rem', fontWeight: 'bold'}}>MAY</span>
        {children}
    </div>
    
  );
}