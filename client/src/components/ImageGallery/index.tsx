interface IPropsImageGallery {
  indexImage: string;
}
const ImageGallery = ({ indexImage }: IPropsImageGallery) => {
  return (
    <>
      <label>{indexImage}º Imagem de galeria</label>
      <input placeholder='Inserir URL da imagem' />
    </>
  );
};

export default ImageGallery;
