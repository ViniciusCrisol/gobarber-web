import React, { useEffect, useCallback } from 'react';
import {
  FiXCircle,
  FiAlertCircle,
  FiInfo,
  FiCheckCircle,
} from 'react-icons/fi';

import { useToast, ToastMessage } from '../../../hooks/toast';
import { Container } from './styles';

interface ToastProps {
  toast: ToastMessage;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({ toast }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(toast.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, toast.id]);

  const handleRemoveToast = useCallback(() => {
    removeToast(toast.id);
  }, [removeToast, toast.id]);

  return (
    <Container type={toast.type} hasDescription={!!toast.description}>
      {icons[toast.type || 'info']}

      <div>
        <strong>{toast.title}</strong>
        {toast.description && <p>{toast.description}</p>}
      </div>

      <button onClick={handleRemoveToast} type="button">
        <FiXCircle size={20} />
      </button>
    </Container>
  );
};

export default Toast;