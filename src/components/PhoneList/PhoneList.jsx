
import React from 'react'
export  default function PhoneList({list,onDelete}) {
  return(  <ul>
 {list.map(({ id, name, tel}) =>{
     return( <li key={id}>
       <p>{name}</p>
     <p>{tel}</p>
     <button type="button" onClick={()=> onDelete(id)}>Delete contact</button>
     </li>
     )
}
    )}
        </ul>
  )
};