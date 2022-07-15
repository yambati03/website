import Head from "next/head";
import { useCallback, useState } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../utils/photos";

const Projects = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div>
      <Head>
        <title>Photography</title>
      </Head>
      <div className='m-8'>
        <div className='md:w-3/4 mx-auto space-y-4'>
          <h1 className='font-bold flex text-2xl'>Photography</h1>
          <Gallery photos={photos} onClick={openLightbox} />
        </div>
        <ModalGateway>
          {isViewerOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((it) => ({
                  ...it,
                  source: it.src,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </div>
  );
};

export default Projects;
