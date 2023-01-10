import { createContext, ReactNode, useState } from 'react';
import { notifyError, notifySuccess } from '../../helpers/toasts';
import { IMessage, IVehicle } from '../../pages/vehicleDetail/interface';
import api from '../../services';

interface ICommentContext {
  editComment(data: any): void;
  commentIdClicked: string;
  setCommentIdClicked: React.Dispatch<React.SetStateAction<string>>;
  commentTextClicked: string;
  setCommentTextClicked: React.Dispatch<React.SetStateAction<string>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  commentData: IMessage[];
  setCommentData: React.Dispatch<React.SetStateAction<IMessage[]>>;
  id: any;
  setId: any;
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  vehicleData: IVehicle | undefined;
  setVehicleData: React.Dispatch<React.SetStateAction<IVehicle | undefined>>;
  getVehicle(): void;
}

interface ICommentProviderProps {
  children: ReactNode;
}

export const CommentContext = createContext({} as ICommentContext);

export const CommentProviders = ({ children }: ICommentProviderProps) => {
  const [commentIdClicked, setCommentIdClicked] = useState('');
  const [commentTextClicked, setCommentTextClicked] = useState('');
  const [open, setOpen] = useState(false);
  const [commentData, setCommentData] = useState<IMessage[]>([]);
  const [id, setId] = useState('id');
  const [price, setPrice] = useState(0);
  const [vehicleData, setVehicleData] = useState<IVehicle>();

  const token = localStorage.getItem('token') || '';

  const getVehicle = () => {
    api
      .get(`/vehicle/${id}`)
      .then((res) => {
        setVehicleData(res.data);

        setCommentData(res.data.Message);
        setPrice(+res.data.price);
      })
      .catch((err) => console.log(err));
  };

  const editComment = (data: any) => {
    const commentEdited = {
      message: commentTextClicked,
    };
    api
      .patch(`/comment/${commentIdClicked}`, commentEdited, {
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      })
      .then((_) => {
        notifySuccess('Comentário editado com sucesso!');
        setOpen(false);
        getVehicle();
      })
      .catch((err) => notifyError(err.message));
  };

  return (
    <CommentContext.Provider
      value={{
        editComment,
        commentIdClicked,
        setCommentIdClicked,
        commentTextClicked,
        setCommentTextClicked,
        open,
        setOpen,
        commentData,
        setCommentData,
        id,
        setId,
        price,
        setPrice,
        setVehicleData,
        vehicleData,
        getVehicle,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};
