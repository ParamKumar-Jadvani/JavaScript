class Admin {
  #revenue;
  #comp_name;
  constructor(
    emp_sal = 0,
    staff = 0,
    manager_sal = 0,
    fire = false,
    rev = 0,
    name = ""
  ) {
    this.manager_sal = manager_sal;
    this.emp_sal = emp_sal;
    this.staff = staff;
    this.fire = fire;
    this.#revenue = rev;
    this.#comp_name = name;
  }

  get data() {
    return {
      manager_sal: this.manager_sal,
      emp_sal: this.emp_sal,
      staff: this.staff,
      fire: this.fire,
      revenue: this.#revenue,
      comp_name: this.#comp_name,
    };
  }

  get revenue() {
    return this.#revenue;
  }

  canFire(name) {
    this.canFire = true;
  }

  get comp_name() {
    return this.#comp_name;
  }
}

class Manager extends Admin {
  #manager_sal;
  constructor(emp_sal = 0, staff = 0, manager_sal = 0, fire = false) {
    this.#manager_sal = manager_sal;
    super(emp_sal, staff, manager_sal, fire);
  }

  get manager_sal() {
    return this.#manager_sal;
  }

  canFire(name) {
    this.canFire = true;
  }
}

class Employee extends Manager {
  #emp_sal;
  constructor(emp_sal = 0) {
    this.#emp_sal = emp_sal;
    super(emp_sal);
  }

  get emp_sal() {
    return this.#emp_sal;
  }

  canFire() {
    this.canFire = false;
  }
}

const ad = new Admin(10000, 200, 30000, "Yes", 120000, "Google");

const man = new Manager(10000, 200, 30000, "Yes");

const Emp = new Employee(10000);
