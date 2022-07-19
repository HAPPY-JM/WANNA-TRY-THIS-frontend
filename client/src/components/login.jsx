import swal from 'sweetalert';

const handleAlert = () => {
  swal({
    title: 'Service name',
    content: 'input',
    buttons: ['Cancel', 'Add'],
  }).then((result) => {
    const lower = result.toLowerCase();
    const num = result >= 0;
  });
};
