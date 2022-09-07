
window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        let formData = new FormData(this);
        formData.append('service_id', 'contact_service');
        formData.append('template_id', ' contact_form2');
        formData.append('user_id', 'rI7ZOYP5L-vB2GH5y');

        this.contact_number.value = Math.random() * 100000 | 0;
        
    
        emailjs.sendForm('contact_service', 'contact_form', this)
        .then(function () {
            swal({
                title: "Tu consulta fue enviada con exito",
                icon: "success",
            });

        }, function (error) {
            swal({
                title: "Error del servidor, vuelva a intentar",
                icon: "warning",
            });
        })
        
    });
}

/* flecha hacia arriba */

arrowUpEvent.onclick = function () {
    window.scrollTo(scrollY, 0);
};