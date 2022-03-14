import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/search';

const items =[
    {
        title:'what is react ?',
        content:'React is javascript library.'
    },
    {
        title:'why we use react ?',
        content:'Because it very easy to use frontend application using reusable componensts.'
    },
    {
        title:'Advantages of react ?',
        content:'user friendly and also use virtual dom and also helps in seo.'
    }
]

export default ()=>{
   return (
       <div>
           
           <Accordion items={items}/>
           {/* <Search/> */}
       </div>
   )
};