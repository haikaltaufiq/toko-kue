// // src/components/scroll/pageTransition.tsx
// 'use client';

// import { motion, AnimatePresence } from 'framer-motion';
// import { usePathname } from 'next/navigation';

// interface PageTransitionProps {
//   children: React.ReactNode;
// }

// export default function PageTransition({ children }: PageTransitionProps) {
//   const pathname = usePathname();

//   return (
//     <AnimatePresence mode="wait">
//       <div key={pathname}>
//         {/* Slide Overlay */}
//         <motion.div
//           className="fixed inset-0 z-50  slate-900 "
//           initial={{ scaleY: 0 }}
//           animate={{ scaleY: 0 }}
//           exit={{ scaleY: 1 }}
//           transition={{
//             duration: 0.5,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           style={{
//             originY: 0,
//           }}
//         />

//         <motion.div
//           className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
//           initial={{ scaleY: 1 }}
//           animate={{ scaleY: 0 }}
//           transition={{
//             duration: 0.5,
//             delay: 0.2,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           style={{
//             originY: 1,
//           }}
//         />

//         {/* Page Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{
//             duration: 0.4,
//             delay: 0.3,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//         >
//           {children}
//         </motion.div>
//       </div>
//     </AnimatePresence>
//   );
// }
