import react from 'react';
import swal from '@sweetalert/with-react';

const Alert = () => {
  swal(
    {
      title: '로그인해주세요!',
      closeOnClickOutside: true,
    },
    function () {
      //로그인 이벤트 실행
    },
  );
};

const login = () => {
  <Alert />;
};

export default login;
