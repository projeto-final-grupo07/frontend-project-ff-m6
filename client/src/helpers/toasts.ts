import { toast } from 'react-toastify';

export const notifySuccess = (msg: string) => toast.success(msg, { autoClose: 1500 });
export const notifyError = (msg: string) =>
  toast.error(msg, { autoClose: 1500, position: 'top-right' });
