
document.addEventListener('DOMContentLoaded', () => {

    $('#BuscarDigimon').keydown((teclado)=>{
        if(teclado === 'Enter'){
            let buscarPesonaje = $("#BuscarDigimon").val()
            console.log(buscarPesonaje)
        }
    })

    $("#ClickBuscar").click(() => {
        let buscarPesonaje = $("#BuscarDigimon").val()
        BuscarDigimon(buscarPesonaje)
    });


   
});


function BuscarDigimon(buscarPesonaje) {

    if (buscarPesonaje === "") {
        AlerCapoBasio()
    } else {
        $.get(`https://digimon-api.vercel.app/api/digimon/name/${buscarPesonaje}`, (DataApi) => {

            let nombreDigimon = DataApi[0]?.name;
            let capturalNombre = $('#NombreDigimon');
            capturalNombre.text(nombreDigimon);

            let imgDigimon = DataApi[0]?.img
            let capturaImg = $('#imagenDigimon');
            capturaImg.attr("src", imgDigimon);

            let tipoDigimon = DataApi[0]?.level;
            let capturaLevel = $('#tipoDigimon');
            capturaLevel.text(`El level digimon: ${tipoDigimon}`);

        });
    };
};


function AlerCapoBasio() {

    Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Inserte un nombre para buscar Digimon',
    });
};



