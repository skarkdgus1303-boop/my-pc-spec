const specs = {
  CPU: "여기에 CPU",
  GPU: "여기에 GPU",
  RAM: "여기에 RAM",
  저장장치: "여기에 SSD / HDD",
  메인보드: "여기에 메인보드",
  운영체제: "Windows"
};

const container = document.getElementById("specs");

for (const [name, value] of Object.entries(specs)) {
  const card = document.createElement("div");

  card.className = "card";

  card.innerHTML = `
    <div class="name">${name}</div>
    <div class="value">${value}</div>
  `;

  container.appendChild(card);
}

document.getElementById("updated").textContent =
  "페이지 업데이트: " + new Date().toLocaleString("ko-KR");
