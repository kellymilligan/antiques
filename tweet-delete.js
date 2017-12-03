(function () {
  let items = [].slice.call(document.querySelectorAll('.dropdown-link'));
  items.forEach(item => {
    if (item.innerHTML === 'Delete Tweet') {
      item.click();
      var confirm = document.querySelector('.delete-action');
      confirm.click();
    }
  })
})()
