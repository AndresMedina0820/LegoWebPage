    const modal  = document.querySelector('.modal')
    const button_1 = document.querySelector('#button_1')
    const close_button = document.querySelector('.modal__content--close')

    button_1.addEventListener('click', () => {
        modal.classList.remove('hidden')
        modal.classList.add('show')
    })

    button_2.addEventListener('click', () => {
        modal.classList.remove('hidden')
        modal.classList.add('show')
    })

    button_3.addEventListener('click', () => {
        modal.classList.remove('hidden')
        modal.classList.add('show')
    })

    close_button.addEventListener('click', () => {
        modal.classList.remove('show')
        modal.classList.add('hidden')  
    })