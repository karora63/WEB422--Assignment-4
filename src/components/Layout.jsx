import React from 'react'
import MainNav from './MainNav';
import {useRouter} from 'next/router';


export default function Layout(props) {
    const router=useRouter();
    const {sName} = router.query;
  return (
    <div><MainNav sName={sName} />
    {props.children}
    </div>
  )
}

 