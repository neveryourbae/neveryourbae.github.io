function generateCard() {
  const token = document.getElementById("token").value || "$TOKEN";
  const price = document.getElementById("price").value || "@ 54.8K";
  const time = document.getElementById("time").value || "44m ago";
  const user = document.getElementById("user").value || "citadelwolf";
  const pnl = document.getElementById("pnl").value || "12.25x";
  const reach = document.getElementById("reach").value || "726.7K";

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const bgUpload = document.getElementById("bgUpload").files[0];

  if (!bgUpload) {
    alert("Please upload a background image!");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const bgImg = new Image();
    bgImg.onload = function () {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background
      ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);

      // Text styles
      ctx.shadowColor = "#0f0";
      ctx.shadowBlur = 10;
      ctx.textBaseline = "top";

      // Token & Price
      ctx.font = "bold 40px Orbitron";
      ctx.fillStyle = "#00ff00";
      ctx.fillText(`${token} ${price}`, 880, 60);

      // Time & Username
      ctx.font = "30px Orbitron";
      ctx.fillText(`${time}`, 880, 110);
      ctx.fillText(`${user}`, 880, 150);

      // PNL Multiplier
      ctx.font = "bold 80px Orbitron";
      ctx.fillStyle = "#39ff14";
      ctx.fillText(`${pnl}`, 880, 240);

      // Reach
      ctx.font = "30px Orbitron";
      ctx.fillStyle = "#ffffff";
      ctx.fillText(`Reached ${reach}`, 880, 320);
    };
    bgImg.src = e.target.result;
  };

  reader.readAsDataURL(bgUpload);
}

function downloadCard() {
  const canvas = document.getElementById("canvas");
  const link = document.createElement("a");
  link.download = "citadelwolf_pnl_card.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}
