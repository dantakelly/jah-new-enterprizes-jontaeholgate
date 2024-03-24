// When button gets clicked, flyer gets downloaded
document.getElementById("downloadButton").addEventListener("click", function() {
    
    var link = document.createElement('a');
    link.download = './assets/Flyer ^0 Fillable Form Insert.pdf'; 
    link.href = './assets/Flyer ^0 Fillable Form Insert.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
// close

// To switch between members on the "Meet The Team Section for mobile"
// const button = document.querySelector(".otherMembersClick");
//     const teamMember2 = document.querySelector(".teamPerson-2");
//     const teamMember1 = document.querySelector(".meetTheTeam-container");

//     button.addEventListener("click", () => {
//         // Toggle display for both team members
//         teamMember2.style.display = teamMember2.style.display === "none" ? "block" : "block";
//         teamMember1.style.display = teamMember1.style.display === "none" ? "block" : "none";
//         button.style.display = button.style.display === "block" ? "block" : "block"

//             anime({
//         targets: '.otherMembersClick',
//         translateY: 250
//     });

//     });
// close 
