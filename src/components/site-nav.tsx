'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
const links=[['About','about'],['Projects','projects'],['Skills','skills'],['Experience','experience'],['Contact','contact']];
export function SiteNav(){const [open,setOpen]=useState(false);return <header className="site-nav"><a className="wordmark" href="#home">SINAR<span>✳</span></a><nav className={open?'nav-links open':'nav-links'}>{links.map(([name,id])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}>{name}</a>)}</nav><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button></header>}
