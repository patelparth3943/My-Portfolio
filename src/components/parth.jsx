// import React, { useEffect, useRef} from "react";
// import {motion, useAnimation, useInView, } from "framer-motion";

// interface Props {
// children: JSX.Element;
// width?: "fit-content" | "100%";
// }

 
// export const Parth = ({ children, width = "fit-content" }: Props) => {
//     const ref = useRef(null);
//     // eslint-disable-next-line no-undef
//     const isInView = useInView(ref,{once: true});
//     const mainControls = useAnimation();
//     const slideControls = useAnimation();

    
//     useEffect(()=>{
//       if(isInView){
//         mainControls.start("visible");
//         slideControls.start("visible");

//       }
//     },[isInView, mainControls, slideControls]);
    
//   return (
//     <div ref={ref} style={{position:"relative",width}}>
//        <motion.div 
//         variants={{ hidden:{
//           opacity:0,
//           y:75
//         },
//         visible:{
//           opacity:1,
//           y:0,},
//         }}
//           initial="hidden"
//           whileInView ={mainControls}  
//           transition={{
//             type:'spring', 
//             stiffness:30,
//             delay:0.5,
//             duration:1}}
//           >
//             {children}
//             </motion.div>
//             <motion.div
//             variants={{
//             hidden: { left: 0 },
//             visible: { left: "100%" },
            
//             }}
//             initial="hidden"
//             whileInView={slideControls}
//             transition={{ duration: 0.5, ease: "easeIn" }}
//             style={{
//             position: "absolute",
//             top: 4,
//             bottom: 4,
//             left: 0,
//             right: 0,
//             backgroundColor:"blue",
//             zIndex: 20,
//               }}
//             />
            



//     </div>
//   )
// }

