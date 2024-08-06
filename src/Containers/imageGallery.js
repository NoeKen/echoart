import { Typography } from "@mui/material";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Search from "../components/search/search";
import { db, dbStorage } from "../firebaseConfig";

function ImageGallery() {
  const [file, setFile] = useState(null);
  const [imgs, setImgs] = useState([]);
  const [imgsUrl, setImgsUrl] = useState([]);
  const [selectedImg, setSelectedImg] = useState({ img: "", name: "", i: 0 });
  const [searchTerm, setSearchTerm] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    // Extraire le nom du fichier
    const fileName = file.name;

    // Créer une référence pour le fichier dans Firebase Storage
    const storageRef = ref(dbStorage, `Images/${Date.now()}_${fileName}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);

    // Enregistrer les détails de l'image dans Firestore
    await addDoc(collection(db, "Images"), {
      imageName: fileName,
      imageUrl: downloadURL,
      createdAt: new Date(),
    });

    // Réinitialiser les valeurs et mettre à jour la liste des images
    setFile(null);
    fetchImages();
  };

  const fetchImages = async () => {
    const querySnapshot = await getDocs(collection(db, "Images"));
    const fetchedImages = [];
    querySnapshot.forEach((doc) => {
      fetchedImages.push({ id: doc.id, ...doc.data() });
    });
    setImgs(fetchedImages);
    setImgsUrl(fetchedImages.map((img) => img.imageUrl));
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const ViewImage = (img, i) => {
    setSelectedImg({ img, i });
  };

  const downloadImage = async () => {
    // saveAs(selectedImg.img, "image.jpg"); // Put your image URL here.
    // const link = document.createElement("a");
    // link.href = selectedImg.img;
    // link.download = "image 1";  // Vous pouvez modifier ce nom si nécessaire
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  const filteredImages = imgs.filter((img) =>
    img?.imageName?.toLowerCase()?.includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {selectedImg?.img && (
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            background: "rgba(0, 0, 0, 0.9)", // Semi-transparent background
            display: selectedImg?.img ? "flex" : "none", // Hide when not selected
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            zIndex: 1000, // Ensure it is on top
          }}
        >
          <button
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() => setSelectedImg({ img: "" })}
          >
            X
          </button>
          {/* <button
            style={{
              position: "absolute",
              top: "20px",
              right: "50px",
              cursor: "pointer",
            }}
            onClick={() => downloadImage()}
          >
            Download
          </button> */}
          {/* <button
            onClick={downloadImage}
            style={{
              position: "absolute",
              bottom: "10px",
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "5px",
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Télécharger
          </button> */}
          <img
            src={selectedImg.img}
            style={{ width: "auto", maxWidth: "90%", maxHeight: "90%" }}
          />
        </div>
      )}
      <div className="App" style={{ padding: 20 }}>
        <div>
          {/* <h3>Welcome</h3> */}
          <Typography
            style={{ color: "#", fontSize: 25, fontFamily: "roboto" }}
            textAlign="center"
          >
            Welcome
          </Typography>
          <Typography
            style={{ color: "#", fontSize: 16, fontWeight:'lighter' , fontFamily: "roboto" }}
            textAlign="center"
          >
            Une vaste bibliothèque d'images de qualité à partager gratuitement
          </Typography>

          <div
            style={{
              padding: "20px",
              textAlign: "center",
              flexDirection: "row",
            }}
          >
            {/* <p style={{fontSize: 16}} >Une vaste bibliothèque d'images de qualité à partager gratuitement</p> */}
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
          {/* <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload Image</button>
          </div> */}
          <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 2, 750: 4, 900: 5 }}
          >
            <Masonry gutter="10px">
              {filteredImages?.map((dataVal, i) => (
                <img
                  key={i}
                  src={dataVal?.imageUrl}
                  alt={dataVal?.imageName}
                  style={{
                    display: "block",
                    cursor: "pointer",
                    borderRadius: 5,
                  }}
                  onClick={() =>
                    ViewImage(dataVal.imageUrl, dataVal.imageName, i)
                  }
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </>
  );
}

export default ImageGallery;

//================================================================================================
//================================================================================================
//================================================================================================
//================================================================================================

// import { Typography } from "@mui/material";
// import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
// import React, { useEffect, useState } from "react";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import Search from "../components/search/search";
// import { dbStorage, db } from "../firebaseConfig";
// import { collection, addDoc, getDocs } from 'firebase/firestore';

// function ImageGallery() {
//   const [file, setFile] = useState(null);
//   const [imgsUrl, setImgsUrl] = useState([]);
//   const [selectedImg, setSelectedImg] = useState({ img: "", i: 0 });

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!file) return;

//     // Extraire le nom du fichier
//     const fileName = file.name;

//     // Créer une référence pour le fichier dans Firebase Storage
//     const storageRef = ref(dbStorage, `Images/${Date.now()}_${fileName}`);
//     await uploadBytes(storageRef, file);
//     const downloadURL = await getDownloadURL(storageRef);

//     // Enregistrer les détails de l'image dans Firestore
//     await addDoc(collection(db, 'Images'), {
//       imageName: fileName,
//       imageUrl: downloadURL,
//       createdAt: new Date()
//     });

//     // Réinitialiser les valeurs et mettre à jour la liste des images
//     setFile(null);
//     fetchImages();
//   };

//   const fetchImages = async () => {
//     const querySnapshot = await getDocs(collection(db, 'Images'));
//     const fetchedImages = [];
//     querySnapshot.forEach((doc) => {
//       fetchedImages.push({ id: doc.id, ...doc.data() });
//     });
//     setImgsUrl(fetchedImages.map(img => img.imageUrl));
//   };

//   useEffect(() => {
//     fetchImages();
//   }, []);

//   const ViewImage = (img, i) => {
//     setSelectedImg({ img, i });
//   };

//   const downloadImage = async () => {
//     const link = document.createElement("a");
//     link.href = selectedImg.img;
//     link.download = "image 1";  // Vous pouvez modifier ce nom si nécessaire
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <>
//       {selectedImg?.img && (
//         <div
//           style={{
//             width: "100%",
//             height: "100%",
//             position: "fixed",
//             background: "rgba(0, 0, 0, 0.9)", // Semi-transparent background
//             display: selectedImg?.img ? "flex" : "none", // Hide when not selected
//             alignItems: "center",
//             justifyContent: "center",
//             overflow: "hidden",
//             zIndex: 1000, // Ensure it is on top
//           }}
//         >
//           <button
//             style={{
//               position: "absolute",
//               top: "20px",
//               right: "20px",
//               cursor: "pointer",
//             }}
//             onClick={() => setSelectedImg({ img: "" })}
//           >
//             X
//           </button>
//           <img
//             src={selectedImg.img}
//             style={{ width: "auto", maxWidth: "90%", maxHeight: "90%" }}
//           />
//           <button
//             onClick={downloadImage}
//             style={{
//               position: "absolute",
//               bottom: "10px",
//               backgroundColor: "white",
//               padding: "10px",
//               borderRadius: "5px",
//               textDecoration: "none",
//               color: "black",
//               fontWeight: "bold",
//               cursor: "pointer",
//             }}
//           >
//             Télécharger
//           </button>
//         </div>
//       )}
//       <div className="App" style={{ padding: 20 }}>
//         <div>
//           <h3>Welcome</h3>
//           <Typography
//             style={{ color: "red", fontSize: 25, fontFamily: "roboto" }}
//             textAlign="center"
//           >
//             Welcome
//           </Typography>
//           <div
//             style={{
//               padding: "20px",
//               textAlign: "center",
//               flexDirection: "row",
//             }}
//           >
//             <Search />
//           </div>
//           <div style={{ textAlign: "center", marginBottom: "20px" }}>
//             <input type="file" accept="image/*" onChange={handleFileChange} />
//             <button onClick={handleUpload}>Upload Image</button>
//           </div>
//           <ResponsiveMasonry
//             columnsCountBreakPoints={{ 350: 2, 750: 4, 900: 7 }}
//           >
//             <Masonry gutter="10px">
//               {imgsUrl?.map((dataVal, i) => (
//                 <img
//                   key={i}
//                   src={dataVal}
//                   alt={dataVal + i}
//                   style={{
//                     display: "block",
//                     cursor: "pointer",
//                     borderRadius: 5,
//                   }}
//                   onClick={() => ViewImage(dataVal, i)}
//                 />
//               ))}
//             </Masonry>
//           </ResponsiveMasonry>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ImageGallery;
