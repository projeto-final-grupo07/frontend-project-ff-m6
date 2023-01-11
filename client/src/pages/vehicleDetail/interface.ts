export interface IVehicle {
  id: string;
  typeOffer: boolean;
  title: string;
  year: string;
  mileage: string;
  price: number;
  describe: string;
  typeVehicles: boolean;
  coverImg: string;
  isActive: boolean;
  user_id: string;
  GalleryImgs: IGalleryImg[];
  Message: IMessage[];
  user: IUser;
}

export interface IGalleryImg {
  id: string;
  url: string;
  vehicle_id: string;
}

export interface IMessage {
  id: string;
  comment: string;
  createdAt: string;
  user_id: string;
  vehicle_id: string;
  user: IUser;
}

export interface IUser {
  name: string;
  describe: string;
}

export interface IUserData {
  name: string;
  id: string;
}
