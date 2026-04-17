// Function that displays the welcome modal on the homepage
function greetUser()
{
    const modal = new bootstrap.Modal(document.getElementById('welcomeModal'));
    modal.show();
}

// Load screenshots dynamically when the CS50 Homepage modal is opened
document.getElementById('projectModal').addEventListener('shown.bs.modal', function ()
{
    const container = document.getElementById('cs50Screenshots');
    const loader = document.getElementById('cs50Loading');

    container.innerHTML = "";
    loader.style.display = "block";

    const screenshots = ["images/homepageScreenshot.png",
                         "images/aboutMeScreenshot.png"];

    setTimeout(() => {
        loader.style.display = "none";

        screenshots.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            img.alt = "Screenshot of CS50 Homepage";
            img.className = "img-fluid rounded mb-3";
            container.appendChild(img);
        });
    }, 300);
});


// ===============================
// LOCKED-UP FULLSCREEN + ESC LOGIC
// ===============================

// When Locked-Up modal opens
document.getElementById('lockedUpModal').addEventListener('shown.bs.modal', () => {
    const modal = document.getElementById("lockedUpModal");
    const content = modal.querySelector(".modal-content");

    // Request fullscreen on the content element
    if (content.requestFullscreen) {
        content.requestFullscreen();
    } else if (content.webkitRequestFullscreen) {
        content.webkitRequestFullscreen();
    }

    // Delay focus so Bootstrap doesn't override it
    setTimeout(() => {
        content.focus();
    }, 50);
});

// Exit fullscreen when modal closes
document.getElementById('lockedUpModal').addEventListener('hidden.bs.modal', () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
});

// Exit fullscreen when clicking the X button
document.querySelector('#lockedUpModal .btn-close').addEventListener('click', () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
});

// Exit fullscreen when clicking the "Close Game" button (if present)
document.querySelector('#lockedUpModal .btn-secondary')?.addEventListener('click', () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
});

// ESC KEY HANDLER — CLOSE MODAL BEFORE EXITING FULLSCREEN
const lockedUpModal = document.getElementById("lockedUpModal");
const lockedUpContent = lockedUpModal.querySelector(".modal-content");

lockedUpContent.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {

        event.preventDefault();
        event.stopPropagation();

        const modalInstance = bootstrap.Modal.getInstance(lockedUpModal);
        if (modalInstance) {
            modalInstance.hide();
        }

        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    }
});

// When fullscreen exits, close the modal automatically
document.addEventListener("fullscreenchange", () => {
    const modalElement = document.getElementById("lockedUpModal");
    const modalInstance = bootstrap.Modal.getInstance(modalElement);

    // If fullscreen just ended AND the modal is still open → close it
    if (!document.fullscreenElement && modalInstance) {
        modalInstance.hide();
    }
});

