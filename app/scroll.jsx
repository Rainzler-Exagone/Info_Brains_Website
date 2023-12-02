// import { useEffect } from "react";
// import {React} from "react";

// export function reveal() {
//     var reveals = document.querySelectorAll(".reveal");
//     for (var i = 0; i < reveals.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = reveals[i].getBoundingClientRect().top;
//       var elementVisible = 150;
//       if (elementTop < windowHeight - elementVisible) {
//         reveals[i].classList.add("active");
//       } else {
//         reveals[i].classList.remove("active");
//       }
//     }
//   }
// // // window.addEventListener("scroll",reveal);
// // useEffect(() => {
// //     window.addEventListener("scroll",reveal);
// //   })



// //  useLayoutEffect(() => {
//   window.addEventListener('scroll', onScroll)
//   return () => window.removeEventListener('scroll', onScroll)
// }, [])
// const topPosition = ourRef.current.getBoundingClientRect().top
// const onScroll = () => {
//   const scrollPosition = window.scrollY + window.innerHeight
//   if (topPosition < scrollPosition) {
//     // trigger animation
//   }
// }