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
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from "react-bootstrap";
import { Grid } from "@mui/material";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/grid';
// import 'swiper/css/pagination';


const ImageGrid = ({ setSelectedImg }) => {

  const [clickedImage, setClickedImage] = useState()

  console.log("////////////////", clickedImage);

  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const docs = [
    {
      title: "KG",
      imageUrl: "/Asset/image1.jpg",
      children: [
        {
          image: "/Asset/image1.jpg",
          title: "Title1"
        },
        {
          image: "/Asset/image1.jpg",
          title: "Title1"
        },
        {
          image: "/Asset/image1.jpg",
          title: "Title1"
        },
        {
          image: "/Asset/image1.jpg",
          title: "Title1"
        },
        {
          image: "/Asset/image1.jpg",
          title: "Title5"
        },
        {
          image: "/Asset/image1.jpg",
          title: "Title5"
        },
        {
          image: "/Asset/image1.jpg",
          title: "Title5"
        },
      
      ]
    },
    {
      title: "hand over the memento to Muhammed Hisham",
      imageUrl: "/Asset/image2.jpg",
      children: [
        {
          image: "/Asset/image1.jpg",
          title: "Title2"
        },
        {
          image: "/Asset/image1.jpg",
          title: "Title2"
        },
        {
          image: "/Asset/image1.jpg",
          title: "Title2"
        },
        {
          image: "/Asset/image1.jpg",
          title: "Title2"
        }
      ]
    },
    {
      title: "General Secretary Mr.Kunjimohammed Panthavoor hand over the memento to Muhammed Irfan",
      imageUrl: "/Asset/image3.jpg",
      children: [
        {
          image: "/Asset/image1.jpg",
          title: "Title3"
        },
        {
          image: "/Asset/image1.jpg",
          title: "Title3"
        },
        {
          image: "/Asset/image1.jpg",
          title: "Title3"
        },
        {
          image: "/Asset/image1.jpg",
          title: "Title3"
        }
      ]
    },

    {
      title: "Group photo with MVM Hero's",
      imageUrl: "/Asset/image4.jpg",
      children: [
        {
          image: "/Asset/image1.jpg",
          title: "Title4"
        },
        {
          image: "/Asset/image1.jpg",
          title: "Title4"
        },
        {
          image: "/Asset/image1.jpg",
          title: "Title4"
        },
        {
          image: "/Asset/image1.jpg",
          title: "Title4"
        }
      ]
    },

    {
      title: "MUHAMMED IRFAN AND MUHAMMED HISHAM With General Secretary Kunjimohammed Panthavoor",
      imageUrl: "/Asset/image5.jpg",
      children: [
        {
          image: "/Asset/image1.jpg",
          title: "Title5"
        },
        {
          image: "/Asset/image1.jpg",
          title: "Title5"
        },
        {
          image: "/Asset/image1.jpg",
          title: "Title5"
        },
        {
          image: "/Asset/image1.jpg",
          title: "Title5"
        },
        {
          image: "/Asset/image1.jpg",
          title: "Title5"
        },
        {
          image: "/Asset/image1.jpg",
          title: "Title5"
        }
      ]
    },

    {
      title: "Congratulations to the heroes of MVM",
      imageUrl: "/Asset/image6.jpg",
    },

    {
      title: "presentation for winners",
      imageUrl: "/Asset/image7.jpg",
    },

    {
      title: "appreciate the children's in front of their parents",
      imageUrl: "/Asset/image8.jpg",
    },

    {
      title: "celebration",
      imageUrl: "/Asset/image9.jpg",
    },

    {
      title: "just a snap with A+ Winners",
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

  const selectedImages = docs?.filter((data, index) => index === clickedImage) ? docs?.filter((data, index) => index === clickedImage)[0]?.children : ''

  console.log("clickedImage", selectedImages);



  return (
    <div className="img-grid">
      {console.log(docs)}
      {docs ? (
        docs.map((doc, index) =>
          doc ? (
            <motion.div
              className="img-wrap"
              key={doc.id}
              layout
              whileHover={{ opacity: 1 }}
              s
              // onClick={() => setSelectedImg(doc)}
              onClick={() => {
                setClickedImage(index)
                setShow(true)
              }}
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


      <>
        <Grid container justifyContent="center" alignItems="center" sx={{}}>
          <div className="App">
            <Button variant="primary" onClick={handleShow}>
              Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose} centered size="xl">
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>

                <Grid container sx={{ bgcolor: '', height: 400, overflowX: 'hidden', overflowY: 'auto', justifyContent: 'space-around' }}>
                  {
                    selectedImages?.map((data, index) =>
                      <Grid container xs={5} sm={5} marginBlockEnd={3.6} lg={3.5} sx={{ height: { xs: 100, lg: 200 }, bgcolor: 'green', my: 2 }}>
                        <Grid
                          src={data?.image}
                          component="img"
                        />

                      </Grid>
                    )
                  }

                </Grid>

              </Modal.Body>

            </Modal>
          </div>
        </Grid>
      </>

    </div>
  );
};

export default ImageGrid;