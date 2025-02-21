var typed = new Typed(" .text", {
    strings: ["Full stack developer", "Designer for Web ", "Web developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("YOUR_PUBLIC_KEY");  // ✅ Apni EmailJS Public Key yahan daalna

    document.getElementById("submitBtn").addEventListener("click", function (event) {
        event.preventDefault();  // ✅ Page refresh hone se rokna

        console.log("🚀 Form Submit Button Clicked!");

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let subject = document.getElementById("subject").value;
        let message = document.getElementById("message").value;

        if (!name || !email || !message) {
            alert("❌ Please fill all required fields!");
            return;
        }

        console.log("👤 Name:", name);
        console.log("📧 Email:", email);
        console.log("📝 Subject:", subject);
        console.log("💬 Message:", message);

        let templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_email: "tahasiddique94@gmail.com"
        };

        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
            .then(function (response) {
                console.log("✅ Email Sent Successfully!", response);
                alert("✅ Email Sent Successfully to tahasiddique94@gmail.com!");

                // ✅ Show Thank You Message
                document.getElementById("thankYouMessage").style.display = "block";

                // ✅ Form Reset after sending
                document.getElementById("contactForm").reset();

                // ✅ Hide Thank You Message after 5 seconds
                setTimeout(function () {
                    document.getElementById("thankYouMessage").style.display = "none";
                }, 5000);

            }, function (error) {
                console.error("❌ Email Send Failed!", error);
                alert("❌ Email Send Failed! Check Console.");
            });
    });
});

