// import { loadGetInitialProps } from "next/dist/shared/lib/utils";
// import useFirestore from "../hooks/useFirestore";
// import { motion } from "framer-motion";

// const ImageGrid = ({ setSelectedImg }) => {
//   const { docs } = useFirestore("images");

//   console.log("............",docs);

//   return (
//     <div className="img-grid">
//       {console.log(docs)}
//       {docs ? (
//         docs.map((doc) =>
//           doc ? (
//             <motion.div
//               className="img-wrap"
//               key={doc.id}
//               layout
//               whileHover={{ opacity: 1 }}
//               s
//               onClick={() => setSelectedImg(doc)}
//             >
//               <motion.div className="img-container">
//                 <motion.img
//                   src={doc.url}

//                   alt="uploaded pic"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 1 }}
//                 />
//               </motion.div>
//               <motion.p
//                 className="img-title"
//                 initial={{ opacity: 1 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1 }}
//               >

//                 {doc.imageTitle}

//               </motion.p>
//             </motion.div>
//           ) : (
//             <h1>Loading</h1>
//           )
//         )
//       ) : (
//         <h1>Loading</h1>
//       )}
//     </div>
//   );
// };

// export default ImageGrid;




// ..............new code format........////////////
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
//import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg }) => {
  const docs = [
    {
      title:"KG",
      imageUrl: "/Asset/image1.jpg",
    },
    {
      title:"hand over the memento to Muhammed Hisham",
      imageUrl: "/Asset/image2.jpg",
    },
    {
      title:"General Secretary Mr.Kunjimohammed Panthavoor hand over the memento to Muhammed Irfan",
      imageUrl: "/Asset/image3.jpg",
    },

    {
      title:"Group photo with MVM Hero's",
      imageUrl: "/Asset/image4.jpg",
    },

    {
      title:"MUHAMMED IRFAN AND MUHAMMED HISHAM With General Secretary Kunjimohammed Panthavoor",
      imageUrl: "/Asset/image5.jpg",
    },

    {
      title:"Congratulations to the heroes of MVM",
      imageUrl: "/Asset/image6.jpg",
    },

    {
      title:"presentation for winners",
      imageUrl: "/Asset/image7.jpg",
    },

    {
      title:"appreciate the children's in front of their parents",
      imageUrl: "/Asset/image8.jpg",
    },

    {
      title:"celebration",
      imageUrl: "/Asset/image9.jpg",
    },

    {
      title:"just a snap with A+ Winners",
      imageUrl: "/Asset/image10.jpg",
    },

    {

      imageUrl: "/Asset/image11.jpg",
    },

    {

      imageUrl: "/Asset/image12.jpg",
    },

    {

      imageUrl: "/Asset/image13.jpg",
    },

    {

      imageUrl: "/Asset/image14.jpg",
    },

    {

      imageUrl: "/Asset/image15.jpg",
    },

    {

      imageUrl: "/Asset/image16.jpg",
    },

  ];

  console.log("............", docs);

  return (
    <div className="img-grid">
      {console.log(docs)}
      {docs ? (
        docs.map((doc) =>
          doc ? (
            <motion.div
              className="img-wrap"
              key={doc.id}
              layout
              whileHover={{ opacity: 1 }}
              s
              onClick={() => setSelectedImg(doc)}
            >
              <motion.div className="img-container">
                <motion.img
                  // src={doc.url}
                  src={doc.imageUrl}
                  //  src='/Asset/images2.jpg'

                  alt="uploaded pic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                />
              </motion.div>
              <motion.p
                className="img-title"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {/* //TITLE */}
                {/* {doc.imageTitle} */}
                {/* // NEWTitle */}
                {doc.title}
              </motion.p>
            </motion.div>
          ) : (
            <h1>Loading</h1>
          )
        )
      ) : (
        <h1>Loading</h1>
      )}
      
    </div>
  );
};

export default ImageGrid;
