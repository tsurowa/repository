class Company {
    constructor () {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        if(!(name || position || department) || salary < 0) {
            throw new Error ('Invalid input!')
        };
        if(!this.departments[department]) {
            this.departments[department] = {};
        };
        if(!this.departments[department][name]) {
            this.departments[department][name] = {salary: Number(salary), position: position};
            return `New employee is hired. Name: ${name}. Position: ${position}`
        };
    }
    bestDepartment() {
        let avgSalary = 0;
        let bestDepartment = '';
        let result = [];
        for(let department in this.departments) {
            let currAvgSalary = 0;
            let sum = 0;
            let count = 0;
            for(let employee in this.departments[department]) {
                sum += this.departments[department][employee].salary;
                count++;
            }
            currAvgSalary = sum / count;
            if (avgSalary <= currAvgSalary) {
                avgSalary = currAvgSalary;
                bestDepartment = department;
            }
        }
        result.push(`Best Department is: ${bestDepartment}`);
        result.push(`Average salary: ${avgSalary.toFixed(2)}`);
        let sorted = Object.entries(this.departments[bestDepartment]).sort((a, b) => b[1].salary - a[1].salary || a[0].localeCompare(b[0]));
        sorted.forEach(el => result.push(`${el[0]} ${el[1].salary} ${el[1].position}`));
        return result.join('\n');
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
