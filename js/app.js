const handleCatagory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const datas = await res.json();
  const data = datas.data.news_category;
  console.log(data);
  tabBar(data);
};

const tabBar = (data) => {
  const tabContainer = document.getElementById("tab-container");

  data.forEach((news) => {
    // console.log(news);
    const div = document.createElement("div");
    div.innerHTML = `
    <a onclick="displayNews('${news.category_id}')" class="tab text-xl ">${news?.category_name}</a>

    `;
    tabContainer.appendChild(div);
  });

  // data.forEach((item) => {
  //   // console.log(item);

  //   const div = document.createElement("div");
  //   div.innerHTML = `
  //   <a class="tab">Tab 1</a>

  //   `;
  //   tabContainer.appendChild(div);
  // });
};

// newshandeler
const displayNews = async (newsId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${newsId}`
  );
  const datas = await res.json();
  const data = datas.data;
  const newsSection = document.getElementById("news_section");
  // console.log(data);
  data.forEach((news) => {
    console.log(news);
    const div = document.createElement("div");
    div.innerHTML = `

    <div class="flex gap-7">
    <div class=" news-photo h-[300px]">
      <img class="h-full rounded-lg" src="${news.image_url}" alt="">
    </div>
    <div class="flex-1 news-content">

      <h3 class="text-2xl font-bold text-gray-900">${news.title}
      </h3>




      <div class="my-4 mid">
        <p class="leading-8 text-gray-500 ">${news.details.slice(0, 300)}...</p>
      </div>
      <div class="flex items-center justify-between my-6 botom">
        <div class="flex items-center gap-3 p-2 repoter">
          <img class="w-10 h-10 rounded-full" src="${news.author?.img}" alt="">
          <span class="">
            <p>${news.author?.name || "Hidden"}</p>

            <p>${news.author?.published_date || "No Date"}</p>
          </span>
        </div>
        <div class="flex items-center gap-3 vew">
          <img src="image/carbon_view.png" alt="">
          <span>${news.total_view}K</span>



        </div>
        <div class="ratig">
          <div class="rating">
            <input type="radio" name="rating-2" class="bg-orange-400 mask mask-star-2" />
            <input type="radio" name="rating-2" class="bg-orange-400 mask mask-star-2" checked />
            <input type="radio" name="rating-2" class="bg-orange-400 mask mask-star-2" />
            <input type="radio" name="rating-2" class="bg-orange-400 mask mask-star-2" />
            <input type="radio" name="rating-2" class="bg-orange-400 mask mask-star-2" />
          </div>
        </div>
        <div class=" arraw">
          <img class="" src="image/bi_arrow-right-short.png" alt="">
        </div>

      </div>

    </div>

  </div>

    
    
    
    `;
    newsSection.appendChild(div);
  });
};

handleCatagory();
let a = [1, 2, 5];
a.forEach;
