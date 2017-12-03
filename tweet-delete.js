(function () {
  let items = [].slice.call(document.querySelectorAll('.dropdown-link'));
  items.forEach((item, index) => {
    if (item.innerHTML === 'Delete Tweet') {
      setTimeout( () => {
        item.click();
        var confirm = document.querySelector('.delete-action');
        confirm.click();
      }, 20 * index)
    }
  })
})()
