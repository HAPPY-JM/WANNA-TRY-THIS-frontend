import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const EmptyPage = () => {
  const navigate = useNavigate();

  useEffect(() => navigate(-2), []);

  return;
};

export default EmptyPage;
