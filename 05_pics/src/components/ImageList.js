import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderImages = images.map((image) => (
    <ImageShow image={image} key={image.id} />
  ));

  return <div>{renderImages}</div>;
}

export default ImageList;
