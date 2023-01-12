import { createContext, ReactNode, useContext, useState } from 'react';
import { notifyError, notifySuccess } from '../../helpers/toasts';
import { IMessage, IVehicle } from '../../pages/vehicleDetail/interface';
import api from '../../services';
import { UserContext } from '../UserContext/UserContext';

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
  openModalDelete: boolean;
  setOpenModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
  deleteComment(): void;
  flagComment: boolean;
  setFlagComment: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const { loadUser } = useContext(UserContext);
  const [flagComment, setFlagComment] = useState<boolean>(false);

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
        setFlagComment(!flagComment);
        notifySuccess('Comentário editado com sucesso!');
        setOpen(false);
        getVehicle();
      })
      .catch((err) => notifyError(err.message));
  };

  const deleteComment = () => {
    api
      .delete(`/comment/${commentIdClicked}`, {
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      })
      .then((_) => {
        setFlagComment(!flagComment);
        notifySuccess('Comentário excluido com sucesso!');
        setOpenModalDelete(false);
        getVehicle();
      });
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
        setOpenModalDelete,
        openModalDelete,
        deleteComment,
        flagComment,
        setFlagComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};
