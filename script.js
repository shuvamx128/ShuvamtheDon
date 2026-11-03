/* ---------- New features ---------- */
$("waLink").href = "https://wa.me/" + WHATSAPP;
$("floatwa").href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent("Hello SHUV, I have a question.");

function tick() {
  const now = new Date();
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  let diff = Math.max(0, end - now);
  const h = Math.floor(diff / 3600000);
  const m = Math.floor(diff % 3600000 / 60000);
  const s = Math.floor(diff % 60000 / 1000);
  $("hh").textContent = String(h).padStart(2, "0");
  $("mm").textContent = String(m).padStart(2, "0");
  $("ss").textContent = String(s).padStart(2, "0");
}
tick();
setInterval(tick, 1000);

window.addEventListener("scroll", () => {
  $("toTop").classList.toggle("show", window.scrollY > 500);
});
$("toTop").onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
