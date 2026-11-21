'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
const lines = ['mrrp!', 'ship it ✦', 'need more pixels', 'hello, human!'];
export function PixelCat() {
 const [mood,setMood]=useState(0); const [talk,setTalk]=useState(false);
 function pet(){setMood(v=>(v+1)%4);setTalk(true);window.setTimeout(()=>setTalk(false),1500);}
 return <div className="cat-stage"><AnimatePresence>{talk&&<motion.div className="cat-bubble" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0}}>{lines[mood]}</motion.div>}</AnimatePresence>
 <motion.button className={`pixel-cat mood-${mood}`} onClick={pet} aria-label="Pet the pixel cat" animate={{y:[0,-6,0]}} transition={{duration:2.2,repeat:Infinity,ease:'easeInOut'}}><i className="ear left"/><i className="ear right"/><span className="cat-head"><i className="eye left-eye"/><i className="eye right-eye"/><i className="nose"/></span><span className="cat-body"/><span className="cat-tail"/></motion.button><small>CLICK TO PET</small></div>;
}
