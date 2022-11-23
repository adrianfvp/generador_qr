
import qrcode from 'https://cdn.skypack.dev/qrcode';


// Codigo de descarga downloData creado por Carlos Chavez
const downloData = (data) => {

    const blob = new Blob([data], { tyoe: 'image/svg' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'foto.svg')
    a.click()
}


const form = document.querySelector('#qr-form')

form.addEventListener('submit', async (e)=>{
    e.preventDefault();

    const data = new FormData(form);
    const values = Object.fromEntries(data);
    console.log(values.qrname)
    const svgCode = await qrcode.toString(values.qrname, {
        type: 'png',
        color: {
            light: '#E69EF0',
            dark: '#ffffff'
        },
    
    })
    downloData(svgCode)
    document.querySelector('#qr-picture').innerHTML = svgCode;
})

