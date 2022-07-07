$(".cardy").click(function() {
    // Get the ID name for the modal from the data-attribute
    var id = $(this).attr('toggle-modal'); 
    // Use the ID from associated Modal that matches the attriutes name
    var modal = document.getElementById(id);
    // Get Modal close button
    var closeModalBtn = document.getElementsByClassName("close");
    // Open Modal
    modal.style.display = "block";
      // Close Modal when clicking anywhere outside of modal
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
    // Close Modal Function
    function closeModal() {
      modal.style.display = "none";  
    }
    for (var i = 0; i <= closeModalBtn.length; i += 1) {
      closeModalBtn[i].onclick = closeModal;
    }
  });