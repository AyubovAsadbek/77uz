import "./style.css";

const categorries = [
  {
    name: "Для женщин",
    itemsCount: "4 147",
    icon: "public/icons/category-1.svg",
  },
  {
    name: "Красота",
    itemsCount: "574",
    icon: "public/icons/category-2.svg",
  },
  {
    name: "Бытовая техника",
    itemsCount: "547",
    icon: "public/icons/category-3.svg",
  },
  {
    name: "Для мужчин",
    itemsCount: "547",
    icon: "public/icons/category-4.svg",
  },
  {
    name: "Здоровье",
    itemsCount: "684",
    icon: "public/icons/category-5.svg",
  },
  {
    name: "Электроника",
    itemsCount: "4 147",
    icon: "public/icons/category-6.svg",
  },
  {
    name: "Детские товары",
    itemsCount: "635",
    icon: "public/icons/category-7.svg",
  },
  {
    name: "Украшения и бижутерия",
    itemsCount: "4 147",
    icon: "public/icons/category-8.svg",
  },
  {
    name: "Домашняя утварь",
    itemsCount: "4 147",
    icon: "public/icons/category-9.svg",
  },
  {
    name: "Обувь",
    itemsCount: "684",
    icon: "public/icons/category-10.svg",
  },
  {
    name: "Канцелярия",
    itemsCount: "101",
    icon: "public/icons/category-11.svg",
  },
  {
    name: "Спорт и отдых",
    itemsCount: "741",
    icon: "public/icons/category-12.svg",
  },
  {
    name: "Автотовары",
    itemsCount: "63",
    icon: "public/icons/category-13.svg",
  },
  {
    name: "Новые легковые автомобили",
    itemsCount: "847",
    icon: "public/icons/category-14.svg",
  },
  {
    name: "Мототранспорт",
    itemsCount: "4 147",
    icon: "public/icons/category-15.svg",
  },
  {
    name: "Дача, сады и огороды",
    itemsCount: "847",
    icon: "public/icons/category-16.svg",
  },
  {
    name: "Личная гигиена",
    itemsCount: "741",
    icon: "public/icons/category-17.svg",
  },
  {
    name: "Аксессуарлар",
    itemsCount: "574",
    icon: "public/icons/category-18.svg",
  },
  {
    name: "Бытовая химия и личная гигиена",
    itemsCount: "101",
    icon: "public/icons/category-19.svg",
  },
  {
    name: "Строительство и ремонт",
    itemsCount: "4 147",
    icon: "public/icons/category-20.svg",
  },
  {
    name: "Сумки и чемоданы",
    itemsCount: "4 147",
    icon: "public/icons/category-21.svg",
  },
];

const CategoryEl = document.getElementById("categories");
categorries.forEach((category) => {
  CategoryEl.innerHTML += `
            <div
              class="h-[85px] border border-grey rounded-xl shadow-card flex items-center cursor-pointer hover:border-blue group transition-all duration-300"
            >
              <div
                class="w-16 h-16 border border-grey shadow-cardIcon rounded-xl bg-white -ml-8 flex items-center justify-center group-hover:border-blue transition-all duration-300"
              >
                <img src=${category.icon} alt="" />
              </div>
              <div class="text-left flex flex-col gap-1 ml-3">
                <h3
                  class="text-[16px] font-semibold leading-normal text-black-100"
                >
                  ${category.name}
                </h3>
                <p class="text-[14px] font-normal leading-5 text-grey-100">
                  ${category.itemsCount} объявлений
                </p>
              </div>
              <img
                src="public/icons/arrow-right.svg"
                alt=""
                class="ml-auto mr-3 w-3 h-3"
              />
            </div>`;
});
