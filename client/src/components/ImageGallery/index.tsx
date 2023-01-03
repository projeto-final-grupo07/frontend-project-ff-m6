import { ReactNode } from 'react';
import { FieldErrorsImpl } from 'react-hook-form/dist/types';
import { FieldValues } from 'react-hook-form/dist/types/fields';
import { UseFormRegister } from 'react-hook-form/dist/types/form';

interface IPropsImageGallery {
  indexImage: string;
  register: UseFormRegister<FieldValues>;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
}

const ImageGallery = ({ indexImage, register, errors }: IPropsImageGallery) => {
  return (
    <>
      <label>{indexImage}º Imagem de galeria</label>
      <input placeholder='Inserir URL da imagem' {...register(`img${indexImage}`)} />
      {indexImage == '1' ? (
        errors.img1?.message && <p className='errorValue'>{errors.img1.message as ReactNode}</p>
      ) : (
        <></>
      )}
    </>
  );
};

export default ImageGallery;
