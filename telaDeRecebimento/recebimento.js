document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const addItemBtn = document.querySelector("#addItem");
  const itemsContainer = document.querySelector("#itemsContainer");

  /* ===============================
        SELECT CUSTOMIZADO
  ================================ */
  document.addEventListener("click", function (e) {
    const select = document.querySelector(".custom-select");
    const list = document.querySelector(".options-list");
    const hiddenSelect = document.querySelector(".hidden-select");

    // abrir / fechar menu
    if (select.contains(e.target)) {
      list.classList.toggle("open");
    } else {
      list.classList.remove("open");
    }

    // selecionar opção
    if (e.target.closest(".options-list li")) {
      const li = e.target.closest("li");
      select.querySelector(".selected").textContent = li.textContent;
      hiddenSelect.value = li.dataset.value;
      list.classList.remove("open");
    }
  });

  /* ===============================
        CRIAÇÃO DO GRUPO DE ITEM
  ================================ */
  function createItemGroup() {
    const itemGroup = document.createElement("div");
    itemGroup.classList.add("item-group", "mb-3");

    itemGroup.innerHTML = `
      <input type="text" class="form-control" placeholder="Informe o Item" required>
      <input type="text" class="form-control" placeholder="Adicione o Lote" required>
      <input type="number" class="form-control text-center" placeholder="Quantidade" required>
      <input type="date" class="form-control" placeholder="Adicione Validade" required>

      <button type="button" class="btn-remove">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="trash-icon">
          <rect class="bin-top" x="18" y="10" width="28" height="6" rx="2" />
          <rect class="bin-body" x="16" y="16" width="32" height="36" rx="3" />
          <line class="bin-line" x1="24" y1="22" x2="24" y2="46" />
          <line class="bin-line" x1="32" y1="22" x2="32" y2="46" />
          <line class="bin-line" x1="40" y1="22" x2="40" y2="46" />
        </svg>
      </button>
    `;

    // evento remover
    itemGroup.querySelector(".btn-remove").addEventListener("click", () => {
      itemGroup.remove();
    });

    return itemGroup;
  }

  // adicionar novo item
  addItemBtn.addEventListener("click", () => {
    const newItem = createItemGroup();
    itemsContainer.appendChild(newItem);
  });

  // envio do formulário
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Formulário enviado com sucesso!");
  });
});
document.addEventListener("input", (e) => {
  if (e.target.type === "number") {
    if (e.target.value < 0) {
      e.target.value = 0;
    }
  }
});
