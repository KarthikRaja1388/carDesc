class Car {
  constructor(company, model, year) {
    this.company = company;
    this.model = model;
    this.year = year;
  }

  getDescription() {
    return `This is a ${this.year} ${this.company} ${this.model}`;
  }
}

let btnGetDesc = document.querySelector(".btn-get-desc");
let companyElementNode = document.querySelector(".company");
let modelElementNode = document.querySelector(".model");
let yearElementNode = document.querySelector(".year");
let display = document.querySelector(".display");

btnGetDesc.addEventListener("click", () => {
  let car = new Car(
    companyElementNode.value,
    modelElementNode.value,
    yearElementNode.value
  );

  console.log(car.getDescription());
  display.textContent = car.getDescription();
});
