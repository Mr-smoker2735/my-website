// Full Screen Certificate Viewer
function openCert(cardElement) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const imgSrc = cardElement.querySelector("img").src;

  modal.style.display = "flex";
  modalImg.src = imgSrc;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

// WhatsApp Appointment Submission
document.getElementById("appointmentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const doctorWhatsAppNumber = "923187322556"; // Clean international format for WhatsApp

  const patientName = document.getElementById("patientName").value.trim();
  const serviceType = document.getElementById("appointmentType").value;
  const visitDate = document.getElementById("visitDate").value;
  const notes = document.getElementById("notes").value.trim();

  // Create formatted WhatsApp booking message
  let message = `Hello Dr. Areej Zainab,%0A%0A`;
  message += `I would like to book a physical therapy appointment:%0A`;
  message += `• *Patient Name:* ${encodeURIComponent(patientName)}%0A`;
  message += `• *Selected Plan:* ${encodeURIComponent(serviceType)}%0A`;
  message += `• *Preferred Date:* ${encodeURIComponent(visitDate)}%0A`;
  
  if (notes) {
    message += `• *Condition / Details:* ${encodeURIComponent(notes)}%0A`;
  }

  // Opens WhatsApp directly with pre-populated message
  window.open(`https://wa.me/${doctorWhatsAppNumber}?text=${message}`, "_blank");
});
                                        
