const form = document.forms[0];

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let data = new FormData(form);

  let sum = data.get('sum');

  if (isNaN(sum)) {
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Что по Вашему означает сумма: ' + sum + '??'
        })
       return; 
  }

  if (sum <= 0) {
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Сумма должна быть больше нуля!'
        })
       return; 
  }

  const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Добавить?',
      text: "Операция будет добавлена в ваш бюджет",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Да, добавить',
      cancelButtonText: 'Не, погодите',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Добавлено!',
          'Операция была добавлена в ваш бюджет',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          'Отменено!',
          'Мы ничего не добавили, попробуйте еще раз, как будете готовы',
          'error'
        )
      }
    })
});

form.addEventListener("formdata", event => {
    const data = event.formData;

    const entries = [...data.entries()];

    entries.forEach(field => {
        console.log(field);
    })
});
