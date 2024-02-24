import React from 'react';
import CodyImg from '@site/static/img/Cody.png'

export default function Cody({children}) {
  return (
    <div className={'cody'}>
        <img src={CodyImg} style={{maxWidth: '20px'}}></img>
        <span style={{fontSize: '1.3rem', fontWeight: 'bold'}}>CODY</span>
        {children}
    </div>
  );
}