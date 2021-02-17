var modal = document.querySelector('#modal');

var conta = document.querySelector('.conta')

modal.addEventListener('click', function ()
{
    if(conta.style.display === 'block')
    {
        conta.style.display = 'none'
    }
    else
    {
        conta.style.display = 'block'
    }
})