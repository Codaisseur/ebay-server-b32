const db = require("./db");
const Ad = require("./ads/model");
const Image = require("./images/model");

db.sync({ force: true })
  .then(() =>
    Promise.all([
      Image.destroy({
        where: {}
      }),
      Ad.destroy({
        where: {}
      }),
      Ad.create(
        {
          title: "Laptop",
          description: "It works",
          price: 100.0,
          images: [
            {
              url:
                "https://assets.wired.com/photos/w_1200/wp-content/uploads/2016/10/RZR_001.jpg",

              url:
                "https://i.gadgets360cdn.com/large/mi_gaming_laptop_2019_image_1565003115644.jpg"
            }
          ]
        },
        {
          include: [Image]
        }
      )
    ])
  )
  .then(() => console.log("Database seeded!"))
  .catch(console.error);
