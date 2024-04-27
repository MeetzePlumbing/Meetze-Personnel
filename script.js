(async function () {
    try {
        const data = await fetch("data.json");
        const res = await data.json();
        let employees = res || [];
        let selectedEmployeeId = employees.length > 0 ? employees[0].id : -1;
        let selectedEmployee = employees.length > 0 ? employees[0] : {};

        const employeeList = document.querySelector(".employees__names--list");
        const employeeInfo = document.querySelector(".employees__single--info");
        const createEmployee = document.querySelector(".createEmployee");
        const addEmployeeModal = document.querySelector(".addEmployee");
        const addEmployeeForm = document.querySelector(".addEmployee_create");

        createEmployee.addEventListener("click", () => {
            addEmployeeModal.style.display = "flex";
        });

        addEmployeeModal.addEventListener("click", (e) => {
            if (e.target.className === "addEmployee") {
                addEmployeeModal.style.display = "none";
            }
        });

        addEmployeeForm.addEventListener("submit", (e) => {
            e.preventDefault();
            // Form submission logic here
        });

        employeeList.addEventListener("click", (e) => {
            // Click event handling logic here
        });

        const renderEmployees = () => {
            // Rendering employees logic here
        };

        const renderSingleEmployee = () => {
            // Rendering single employee logic here
        };

        renderEmployees();
        if (selectedEmployee) renderSingleEmployee();
    } catch (error) {
        console.error("Error fetching data:", error);
    }
})();
