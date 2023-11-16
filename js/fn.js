
 document.addEventListener('DOMContentLoaded', function () {
    const featureModal = new bootstrap.Modal(document.getElementById('featureModal'));
    const thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); 

      
        // Close the "Get Featured" modal
        featureModal.hide();

        // Show the "Thank You" modal
        thankYouModal.show();
    });
});