document.addEventListener("DOMContentLoaded", () => {
    const refreshBtn = document.getElementById("refresh-btn");
    const osList = document.getElementById("os-list");
    const notification = document.getElementById("notification");

    let ordensServico = [
        { data: "10/03/2025", horario: "14:00", cliente: "Empresa XYZ" },
        { data: "11/03/2025", horario: "09:30", cliente: "Residencial Silva" },
    ];

    function renderOS() {
        osList.innerHTML = "";
        ordensServico.forEach(os => {
            const osItem = document.createElement("div");
            osItem.classList.add("os-item");
            osItem.innerHTML = `<strong>${os.data} - ${os.horario}</strong><br>${os.cliente}`;
            osList.appendChild(osItem);
        });
    }

    function fetchNewOS() {
        refreshBtn.classList.add("refreshing");

        setTimeout(() => {
            refreshBtn.classList.remove("refreshing");

            // Simulando novas O.S recebidas
            let novasOS = [
                { data: "12/03/2025", horario: "15:00", cliente: "Comércio ABC" }
            ];
            ordensServico = [...novasOS, ...ordensServico];
            renderOS();

            notification.textContent = `${novasOS.length} Novas O.S disponíveis.`;
            notification.classList.remove("hidden");
            setTimeout(() => notification.classList.add("hidden"), 3000);
        }, 2000);
    }

    refreshBtn.addEventListener("click", fetchNewOS);
    renderOS();
});
