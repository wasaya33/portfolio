const onoff = document.querySelector('.on-off');
const day = document.querySelector('.uil-brightness-low');
const dark = document.querySelector('.uil-moon');

onoff.onclick = () => {
    // alert('you clicked me');
    document.body.classList.toggle('change');
    day.classList.toggle('cday');
    dark.classList.toggle('cdark');
}