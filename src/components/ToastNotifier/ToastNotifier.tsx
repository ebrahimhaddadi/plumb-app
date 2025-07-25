
import { ToastContainer, toast, type ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastProps {
    text: string;
    type?: 'success' | 'error' | 'info' | 'warning';
    position?: ToastOptions['position'];
    autoClose?: number;
    rtl?: boolean;
    closeOnClick?: boolean;
    pauseOnHover?: boolean;
    draggable?: boolean;
}
// eslint-disable-next-line react-refresh/only-export-components
export function showToast({
                              text,
                              type = 'info',
                              position = 'top-right',
                              autoClose = 4000,
                              rtl = true,
                              closeOnClick = true,
                              pauseOnHover = true,
                              draggable = true
                          }: ToastProps) {
    const options: ToastOptions = {
        position,
        autoClose,
        rtl,
        closeOnClick,
        pauseOnHover,
        draggable,
    };

    switch (type) {
        case 'success':
            toast.success(text, options);
            break;
        case 'error':
            toast.error(text, options);
            break;
        case 'warning':
            toast.warning(text, options);
            break;
        case 'info':
        default:
            toast.info(text, options);
            break;
    }
}

export default function ToastNotifier() {
    return <ToastContainer />;
}
