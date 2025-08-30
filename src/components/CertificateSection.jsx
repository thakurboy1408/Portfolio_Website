// import React, { useState } from "react";
// import webdev from "../images/webdev.png";
// import oops from "../images/oops.png";
// import node from "../images/node.png";
// import java from "../images/java.png";
// import data from "../images/data.png";
// import algo from "../images/algo.png";

// // Certificate data
// const certificates = [
//   {
//     title: "Web Development",
//     issuer: "Coursera",
//     date: "Oct 17, 2022",
//     image: webdev,
//   },
//   {
//     title: "Object Oriented Programming In Java",
//     issuer: "Coursera",
//     date: "Jan 13, 2022",
//     image: oops,
//   },
//   {
//     title: "Developing Cloud Apps Using Node.js and React",
//     issuer: "Coursera",
//     date: "Mar 16, 2023",
//     image: node,
//   },
//   {
//     title: "Programming using Java",
//     issuer: "Infosys",
//     date: "Aug 29, 2022",
//     image: java,
//   },
//   {
//     title: "Data Structures",
//     issuer: "Coursera",
//     date: "Apr 06, 2022",
//     image: data,
//   },
//   {
//     title: "Algorithmic Toolbox",
//     issuer: "Coursera",
//     date: "Apr 09, 2022",
//     image: algo,
//   },
// ];

// const CertificateSection = () => {
//   const [modalImage, setModalImage] = useState(null);

//   return (
//     <section
//       id="certificates"
//       className="py-12 px-4 bg-[#0c0c0c] text-white"
//     >
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
//           Certifications
//         </h2>
//         <p className="text-sm sm:text-base text-gray-400 mb-10 max-w-2xl mx-auto">
//           Here are some of the certifications I’ve earned to enhance my technical expertise.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {certificates.map((cert, index) => (
//             <div
//               key={index}
//               className="bg-black/80 rounded-lg border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.08)] p-4 flex flex-col items-center"
//             >
//               <img
//                 src={cert.image}
//                 alt={cert.title}
//                 onClick={() => setModalImage(cert.image)}
//                 className="cursor-pointer w-full h-48 object-contain rounded-md mb-4 border hover:scale-105 transition-transform duration-300"
//               />
//               <h3 className="text-base font-semibold text-white text-center">
//                 {cert.title}
//               </h3>
//               <p className="text-xs text-gray-400">{cert.issuer}</p>
//               <p className="text-xs text-gray-400">{cert.date}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal */}
//       {modalImage && (
//         <div
//           className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-4"
//           onClick={() => setModalImage(null)}
//         >
//           <img
//             src={modalImage}
//             alt="Certificate Preview"
//             className="max-w-full max-h-[90vh] rounded-md shadow-2xl"
//           />
//           <button
//             className="absolute top-6 right-6 text-white text-3xl font-bold"
//             onClick={() => setModalImage(null)}
//           >
//             &times;
//           </button>
//         </div>
//       )}
//     </section>
//   );
// };

// export default CertificateSection;