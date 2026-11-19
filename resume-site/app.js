async function initResume() {
  const res = await fetch("data.json");
  const data = await res.json();
  document.getElementById("summary").textContent = data.summary;

  const skillsGrid = document.getElementById("skills-grid");
  data.competencies.forEach((group) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${group.category}</h3><p class="meta">${group.items.join(" · ")}</p>`;
    skillsGrid.appendChild(card);
  });

  const expList = document.getElementById("experience-list");
  let activeTrack = "all";

  function renderRoles() {
    expList.innerHTML = "";
    const filtered = activeTrack === "all"
      ? data.experience
      : data.experience.filter((item) => item.track === activeTrack);

    filtered.forEach((item) => {
      const el = document.createElement("article");
      el.className = "role-card";
      const bullets = item.highlights.map((h) => `<li>${h}</li>`).join("");
      el.innerHTML = `<h3>${item.role}</h3><p class="meta">${item.period}</p><ul>${bullets}</ul>`;
      expList.appendChild(el);
    });
  }

  document.querySelectorAll(".btn[id^='filter-']").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".btn[id^='filter-']").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeTrack = btn.id.replace("filter-", "");
      renderRoles();
    });
  });

  renderRoles();
}

initResume();
