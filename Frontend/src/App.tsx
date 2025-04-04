import { Outlet } from "react-router"
import "./App.css"
import Nav from "./components/ui/nav"
import Footer from "./pages/footer"
import { useEffect } from "react"
import { useAuth } from "./context/userContextProvider"
import { useProducts } from "./context/productContextProvider"
import { Button } from "./components/ui/button"

function App() {
  const auth = useAuth();
  const products = useProducts();
  useEffect(() => {
    auth?.getCurrentUser()
    products?.getAllProduct()
  }, [])

  const Products = [
    {
      title: "Panchmeva (405g) + Date Bites (180g)",
      images: [
        "https://www.farmley.com/cdn/shop/files/panchmevacopy-80_700x.jpg?v=1715172684",
        "https://www.farmley.com/cdn/shop/files/PanchmevaB__in_599b49f9-522f-40e5-9896-190a95f3482b_700x.jpg?v=1715172684",
        "https://www.farmley.com/cdn/shop/files/PanchmevaB__RD_64e87547-08b0-45ae-855b-63fb594514da_700x.jpg?v=1715172684",
        "https://www.farmley.com/cdn/shop/files/PanchmevaB__usecase_92e5dff1-0970-4e53-8868-a605bccb87c2_700x.jpg?v=1715172684",
        "https://www.farmley.com/cdn/shop/files/Datebite3_0.8x-20_0d4291d3-5bcd-4e57-85e7-e06cb5d3e07b_700x.jpg?v=1715172684",
        "https://www.farmley.com/cdn/shop/files/Datebite_usecase001_044ec427-8f3f-44f6-abf1-fd17ae01888c_700x.jpg?v=1715172684",
        "https://www.farmley.com/cdn/shop/files/Datebite2_0.8x-20_d414446a-73f2-4d51-b222-91b8cb1fa386_700x.jpg?v=1715172684"
      ],
      mrp: 919,
      sellingPrice: 825,
      category: "new launches",
      options: [],
      descriptions: [{ title: "Date Bites", description: "Introducing Farmley's Date Bites, a delectable dessert crafted from 6 wholesome ingredients - Almonds, Dates, Pista, Cashews, Honey & Ghee. These bites have no added sugar, offering a guilt-free indulgence. Packaged for convenience, they're easy to carry, making them an ideal on-the-go snack. Made from Farmley's signature dry fruits and nuts, each bite is a powerhouse of nutrition. They are 100% natural, with 16% protein content. Whether as a dessert or a quick pick-me-up snack or a sweet yet healthy gifting option, these Date Bites deliver a perfect balance of health and taste." }, { title: "Panchmeva", description: "Farmley's Panchmeva is a harmonious blend, curated from our 5 signature dry fruits and nuts. Offering the goodness of - Almonds, Cashews, Green Raisins, Black Raisins & Dates all at once, the product has been designed to be consumed on-the-go. It's 100% adulteration free and a natural energy source without any added preservatives. Packed with essential nutrients, it's a healthy snacking choice suitable for various nutrient needs. Whether for fasting or daily nourishment, this curated medley fits into your various eating occasions. Enjoy it straight from the pack or integrate it into your favourite recipes for a boost of flavour, crunch and nutrition. Discover the perfect balance of taste and health with our thoughtfully curated Panchmeva." }]
    },
    {
      title: "7-in-1 Trail Mix",
      images: [
        "https://www.farmley.com/cdn/shop/files/TrailMixFarmley_700x.jpg?v=1715065666",
        "https://www.farmley.com/cdn/shop/files/Trail_mix_pour_700x.jpg?v=1727080745",
        "https://www.farmley.com/cdn/shop/files/TrailmixB__RD_8f94210e-40e3-4e23-9001-c4f677ab1676_700x.jpg?v=1715065666",
        "https://www.farmley.com/cdn/shop/files/TrailmixB__usecase_d7881c6c-a7e9-42f8-8e1f-f3dcb09c34b2_700x.jpg?v=1715065666",
        "https://www.farmley.com/cdn/shop/files/TrailmixB__IN_9ecea1cb-97ac-42d0-ae5d-3bbd893240ef_700x.jpg?v=1715065666",
        "https://www.farmley.com/cdn/shop/files/TrailMixlisting-packof2-12_1_700x.png?v=1715065666",
        "https://www.farmley.com/cdn/shop/files/Untitleddesign_1_700x.jpg?v=1715065666",
        "https://www.farmley.com/cdn/shop/files/Trail-Mix-Ingredients_20b65b11-38d8-401d-840c-b1b504f53f1a_700x.jpg?v=1715065666",
        "https://www.farmley.com/cdn/shop/files/Common-Listing-Updated_5b1b96b1-f14f-49e4-a12a-8ee51309dc4a_700x.jpg?v=1715065666",
        "https://www.farmley.com/cdn/shop/files/Trail-Mix-listing-ingredients_748d2c85-30a5-4252-bd35-8008f13caf62_700x.jpg?v=1715065666",
        "https://www.farmley.com/cdn/shop/files/Artboard5-100_1_700x.jpg?v=1723458332",
        "https://www.farmley.com/cdn/shop/files/Artboard2-100_700x.jpg?v=1723458332",
        "https://www.farmley.com/cdn/shop/files/Artboard1-100_700x.jpg?v=1723458332"
      ],
      mrp: 299,
      sellingPrice: 249,
      category: "new launches",
      options: ["160 g", "Pack of 3 (160g each)", "Trail mix 450 g Jar"],
      descriptions: [["7-in-1 Trail Mix - Dried Cranberries, Almonds, Cashews, Dried Blueberries, Sunflower Seeds, Pumpkin Seeds, Black Currant", "Farmley's Trail Mix is a handpicked blend of 7 premium dry fruits, nuts, dried berries, and seeds. Bringing together the goodness of - Almonds, Blackcurrant, Cashews, Sunflower Seeds, Blueberries, Pumpkin Seeds & Cranberries, it's a perfect on-the-go snack. This wholesome mix provides a natural energy boost without any adulteration and is rich in protein and omega 3. Packed with antioxidants, it promotes overall wellness while satisfying your taste buds. Versatile and delicious, our trail mix can either be enjoyed straight from the pack or sprinkled over yogurt, or incorporated into recipes for an extra nutritional boost."]]
    },
    {
      title: "Dried Turkish Apricots (200g)",
      images: [
        "https://www.farmley.com/cdn/shop/files/ApricotFOP_700x.jpg?v=1715068560",
        "https://www.farmley.com/cdn/shop/files/03_700x.jpg?v=1715068560",
        "https://www.farmley.com/cdn/shop/files/05_700x.jpg?v=1715068560",
        "https://www.farmley.com/cdn/shop/files/06_700x.jpg?v=1715068560",
        "https://www.farmley.com/cdn/shop/files/04_700x.jpg?v=1715068560",
        "https://www.farmley.com/cdn/shop/files/02_700x.jpg?v=1715068560",
        "https://www.farmley.com/cdn/shop/files/bopdriedapricots-200g_700x.png?v=1715068560",
        "https://www.farmley.com/cdn/shop/files/Veg-logo_5ea52a71-c72f-4778-be68-69b9d050ee35_700x.jpg?v=1715068560"
      ],
      mrp: 349,
      sellingPrice: 299,
      category: "new launches",
      options: [],
      descriptions: [["Savour the natural goodness of Farmley's Dried Apricots - without any added colour - for a wholesome snacking experience.", "Packed with antioxidants, fiber, and vitamin C, these dried apricots are made from real fruits, ensuring a nutritious treat every time.", "Enjoy their versatile uses - whether making a luscious apricot jam, baking into delightful desserts, or sprinkling chopped apricots on oats, salads, or breakfast bowls.", "With their sweet and tangy flavour, they're perfect for enhancing any dish or can be simply enjoyed straight from the pack as a wholesome snack.", "Elevate your culinary creations with our premium Dried Apricots."]]
    },
    {
      title: "Omani Fard Dates (400g)",
      images: [
        "https://www.farmley.com/cdn/shop/files/OmaniDates_700x.jpg?v=1715071727",
        "https://www.farmley.com/cdn/shop/files/03_f21e6a45-c213-454a-85b9-26f1972ca9c3_700x.jpg?v=1715071727",
        "https://www.farmley.com/cdn/shop/files/05_be6f60ed-65a5-4b18-a555-427b4ad23d36_700x.jpg?v=1715071727",
        "https://www.farmley.com/cdn/shop/files/04_674a876b-b9b5-4b7a-8d24-54b43e676273_700x.jpg?v=1715071727",
        "https://www.farmley.com/cdn/shop/files/06_e2df9e42-7d02-46bb-97c8-2edcbe1e3074_700x.jpg?v=1715071727",
        "https://www.farmley.com/cdn/shop/files/02_d422bd2c-da94-4a5c-a286-0707fc8b7bb5_700x.jpg?v=1715071727",
        "https://www.farmley.com/cdn/shop/files/bopFardDates_400g-03_700x.png?v=1715071727",
        "https://www.farmley.com/cdn/shop/files/Veg-logo_7df8f77f-ef1e-48fe-a50a-1ece39228c45_700x.jpg?v=1715071727"
      ],
      mrp: 299,
      sellingPrice: 297,
      category: "new launches",
      options: [],
      descriptions: [["Introducing Farmley's Omani Dates, a natural sweetener, offering a wholesome alternative to post-meal desserts.", "Packed with fiber and antioxidants, these dates are sourced from trusted farmers to make you savour a standard quality.", "Enjoy them straight from the pack for a satisfying snack or chop them up to elevate your kheer or halwa.", "Pair them with a glass of milk for a nutritious boost, or savour them at iftar to open your Ramadan fast with a burst of natural energy.", "Experience the delicious and nutritious goodness of with our Omani Dates."]]
    },
    {
      title: "Berry Mix (200g)",
      images: [
        "https://www.farmley.com/cdn/shop/files/BerryMixFarmley_700x.jpg?v=1715065853",
        "https://www.farmley.com/cdn/shop/files/Berry_mix_pour_new_700x.jpg?v=1727080771",
        "https://www.farmley.com/cdn/shop/files/BerryMixB__Ingredients_700x.jpg?v=1715065853",
        "https://www.farmley.com/cdn/shop/files/BerryMixB_RD_700x.jpg?v=1715065853",
        "https://www.farmley.com/cdn/shop/files/BerryMixB__usecase01_700x.jpg?v=1715065853",
        "https://www.farmley.com/cdn/shop/files/BerryMixB__Usecase_700x.jpg?v=1715065853",
        "https://www.farmley.com/cdn/shop/files/preview_images/02d2752e32b642609bb53caf0bede63f.thumbnail.0000000000_1024x.jpg?v=1710138566",
        "https://www.farmley.com/cdn/shop/files/preview_images/791b18af992943439ce17cec6a3a0ad4.thumbnail.0000000000_1024x.jpg?v=1705668300",
        "https://www.farmley.com/cdn/shop/files/BerryMixB__002_700x.jpg?v=1715065853",
        "https://www.farmley.com/cdn/shop/products/berrymix_Fssai_700x.jpg?v=1715065853",
        "https://www.farmley.com/cdn/shop/files/Veg-logo_25796378-ff71-4a78-8d42-ca80d284b479_700x.jpg?v=1715065853",
        "https://www.farmley.com/cdn/shop/files/Berry-mix_pack-of-2_700x.jpg?v=1715065853",
        "https://www.farmley.com/cdn/shop/files/Berry-mix_pack-of-3_700x.jpg?v=1715065853",
        "https://www.farmley.com/cdn/shop/products/BerryMix-Thumbanil_700x.jpg?v=1715065853"
      ],
      mrp: 349,
      sellingPrice: 292,
      category: "new launches",
      options: ["200 g", "Pack of 3 (200 g each)"],
      descriptions: [["Farmley's Berry Mix is an appetizing fusion of 8 dried berries - Black Raisins, Blackcurrant, Kiwi, Goji Berry, Mango, Blueberry, Strawberry & Cranberry.", "Crafted for those on the move, this pure blend offers a burst of natural goodness without any additives or preservatives and is rich in vitamin C.", "Rich in antioxidants, it's a powerful energy booster that supports your well-being.", "With a refreshing taste, it's a delightful and nutritious choice for any occasion.", "Enjoy it straight from the pack, or get creative by adding it to cereals, salads, or baked goods.", "Sparkle up your snacking experience with this thoughtfully curated mix."]]
    },
    {
      title: "5-in-1 Seed Mix (200 g)",
      images: [
        "https://www.farmley.com/cdn/shop/files/SeedMixFarmley_700x.jpg?v=1715065278",
        "https://www.farmley.com/cdn/shop/files/Seed_mix_pour_700x.jpg?v=1727080774",
        "https://www.farmley.com/cdn/shop/files/SeedmixB__RD_44e06bc0-8217-447e-b988-1d3fa1ceb95f_700x.jpg?v=1715065278",
        "https://www.farmley.com/cdn/shop/files/SeedmixB__In_26c793bd-b3fd-41c0-b0c7-ffc0195a0249_700x.jpg?v=1715065278",
        "https://www.farmley.com/cdn/shop/files/SeedmixB__Usecase_d55a773d-42d8-4b0a-b8d9-31e204521d5a_700x.jpg?v=1715065278",
        "https://www.farmley.com/cdn/shop/files/SeedmixB__primaryusecase_700x.jpg?v=1715065278",
        "https://www.farmley.com/cdn/shop/files/preview_images/47bc5b8064604fcfabed691a2db851fe.thumbnail.0000000000_1024x.jpg?v=1715065271",
        "https://www.farmley.com/cdn/shop/files/preview_images/cf81876bd9334a02ac68198daf7fc712.thumbnail.0000000000_1024x.jpg?v=1715065225",
        "https://www.farmley.com/cdn/shop/files/Seed-Mix-lngredients_May2023_700x.jpg?v=1715065443",
        "https://www.farmley.com/cdn/shop/files/Seed-Mix-origin_700x.jpg?v=1715065443",
        "https://www.farmley.com/cdn/shop/files/Veg-logo_700x.jpg?v=1715065443",
        "https://www.farmley.com/cdn/shop/files/Seed-Mix-FSSAI_700x.jpg?v=1715065443",
        "https://www.farmley.com/cdn/shop/files/pk3SeedmixB_af724014-d2de-451d-9e35-894d60c323b7_700x.jpg?v=1715946177",
        "https://www.farmley.com/cdn/shop/files/pk2-SeedmixB_8c011b23-ea2e-4ced-b8b3-c6bbf5798d24_700x.jpg?v=1715946176",
        "https://www.farmley.com/cdn/shop/files/seedmix1kgjarlistingA_-01_700x.jpg?v=1723468030",
        "https://www.farmley.com/cdn/shop/files/20240726-A7401850-Edit-Edit_700x.jpg?v=1727080774",
        "https://www.farmley.com/cdn/shop/files/seed_mix_1kg_jar_listing_A_-04_700x.jpg?v=1723469047",
        "https://www.farmley.com/cdn/shop/files/seed_mix_1kg_jar_listing_A_-02_700x.jpg?v=1723469050",
        "https://www.farmley.com/cdn/shop/files/seed_mix_1kg_jar_listing_A_-03_700x.jpg?v=1723469050"
      ],
      mrp: 229,
      sellingPrice: 199,
      category: "new launches",
      options: ["200 g", "Pack of 3 (200 g each)", "Seed mix 1 kg Jar"],
      descriptions: [["TASTY NUTRITION: Salted Pumpkin Seeds, Chia Seeds, Flax Seeds, Watermelon Seeds, Sunflower Seeds - the finest medley of salted seeds is the healthiest, crunchiest, tastiest way to address those anytime hunger pangs.", "SUPERFOOD CRAFTED FOR YOU: Each ingredient is individually sourced and combined to bring out that burst of perfect flavour in every mouthful.", "HIGH PROTEIN & FIBRE: Packed with vegan proteins and high dietary fibre, this snack is the love of all vegans and fitness enthusiasts.", "ENERGY BOOSTING SNACK: These natural seeds are a powerhouse of omega-3, omega-6 fatty acids and antioxidants that increase energy levels. Snack on them at any time when you feel hungry or low on energy.", "ALL GOOD NO BAD: This superfood contains no artificial additives, no chemicals, no preservatives - just 100% naturally sourced nuts, seeds and berries."]]
    },
    {
      title: "Combo - Peri - Peri Party Mix(405 g) + Thai Chilli Cashews(200 g) + Black Pepper Cashews(200 g) + Berry Mix(200 g)",
      images: [
        "https://www.farmley.com/cdn/shop/files/SnackMixesFarmleyAssorted_700x.jpg?v=1715071033",
        "https://www.farmley.com/cdn/shop/files/Veg-logo_ce96ad2f-a6d8-4381-8cf6-0559d1c43724_700x.jpg?v=1715071033",
        "https://www.farmley.com/cdn/shop/files/BerryMixB__Ingredients_1_881609d3-d809-41d6-91f6-9fed2a0a9b66_700x.jpg?v=1715071033",
        "https://www.farmley.com/cdn/shop/files/Thaichilli-Cashew_RD_fe5eeee7-a4ba-4c73-87c5-de1402b63531_700x.jpg?v=1715071033",
        "https://www.farmley.com/cdn/shop/files/Thaichilli-Cashew-usp002_8003a65f-65a3-4969-8608-225466f91857_700x.jpg?v=1715071033",
        "https://www.farmley.com/cdn/shop/files/02_6dd1846c-6ebc-4af0-a465-8010928173aa_700x.jpg?v=1715071033",
        "https://www.farmley.com/cdn/shop/files/01_700x.jpg?v=1715071033"
      ],
      mrp: 1656,
      sellingPrice: 1399,
      category: "new launches",
      options: [],
      descriptions: [["Boosts Immunity: The combo is loaded with essential oils, proteins, potassium, calcium that helps to increase your immunity. Also, the presence of antioxidants in them can help you to fight against various infections & illnesses.", "Healthy Bones: These products are rich in proteins, calcium, & other micro-nutrients which help to maintain healthy bones & strengthen them.", "No Adulteration: Farmley's products are sourced from 5000+ trusted farmers & producers, ensuring that there are no middlemen, and the products are 100% adulteration free.", "In-House Processing: Farmley's products are sorted, graded & packed in house, to ensure the right quality standards are maintained."]]
    },
    {
      title: "Classic Salted Almonds (200g) - Roasted, Not Fried",
      images: [
        "https://www.farmley.com/cdn/shop/files/SaltedAlmonds_700x.jpg?v=1715078913",
        "https://www.farmley.com/cdn/shop/files/200g-Salted-Almond-Listing-benefits_700x.jpg?v=1715078913",
        "https://www.farmley.com/cdn/shop/files/40g_Salted-Almond-Listing-07_1_1_700x.jpg?v=1715078913",
        "https://www.farmley.com/cdn/shop/files/ways-to-comsume-almonds_700x.jpg?v=1715078913",
        "https://www.farmley.com/cdn/shop/files/what_s-in-your-salted-almonds_700x.jpg?v=1715078913",
        "https://www.farmley.com/cdn/shop/files/Salted-Almond-Listing-bop_700x.jpg?v=1715078913",
        "https://www.farmley.com/cdn/shop/files/Common-Listing-Updated_4c788185-7cd7-4a13-9ac4-f1abe6944ec9_700x.jpg?v=1715078913",
        "https://www.farmley.com/cdn/shop/files/200g_Salted-Almond-Listing-fssai_700x.jpg?v=1715078913",
        "https://www.farmley.com/cdn/shop/files/Veg-logo_23c3779a-975b-464a-aed7-d0a3825d3117_700x.jpg?v=1715078913"
      ],
      mrp: 369,
      sellingPrice: 309,
      category: "new launches",
      options: ["Classic Salted almonds 200 g"],
      descriptions: [["- Adulteration Free: The complete roasting & flavouring process is carried out in our in-house processing units, ensuring that an adulteration free product is delivered.", "- Roasted, Not Fried: Unlike the other snacking options, that are fried in Palm Oil, our Almonds are roasted & not fried.", "- Loaded With Antioxidants: Almonds have a lot of antioxidants that can aid in the prevention of oxidative stress. They also play a significant role in anti-aging. The powerful antioxidants remain concentrated in the brown layer of the skin.", "- Assist in Blood Sugar Management: Roasted almonds are rich in healthy fats, protein, and fiber while being low in carbohydrates. Almonds are rich in magnesium, making them an excellent alternative for diabetes patients. Magnesium intake also reduces insulin resistance in people who do not have diabetes. Furthermore, the magnesium in almonds may aid in the reduction of blood pressure. Low magnesium levels are connected to high blood pressure, implying that roasted almonds aid in controlling blood pressure.", "- Lower Cholesterol Levels: A high level of LDL lipoproteins - known as bad cholesterol in your blood - is a well-known risk factor for heart disease. According to scientific research, roasted almonds may decrease LDL cholesterol. They do more than only reduce your blood LDL levels. They also protect LDL from oxidation, a crucial stage in the progression of heart disease. Taking one or two handfuls of roasted almonds can lower harmful cholesterol. And it may aid in reducing the risk of heart disease.", "- Lowers Your Calorie Intake by Reducing Hunger: Roasted almonds are low in carbs but high in protein & fiber. Protein & fiber can boost feelings of satiety. It could also assist you in consuming fewer calories. According to scientific studies, a daily 1.5-ounce (43-gram) part of roasted almonds can lower hunger and the desire to eat."]]
    },
    {
      title: "Thai Chilli Cashews - Roasted (160g)",
      images: [
        "https://www.farmley.com/cdn/shop/files/ThaiChilliCashews_700x.jpg?v=1715077939",
        "https://www.farmley.com/cdn/shop/files/Thaichilli-Cashew_RD_dcc45cc9-daf1-4e70-9959-0257b5890dda_700x.jpg?v=1715077939",
        "https://www.farmley.com/cdn/shop/files/Thaichilli-Cashew-Usp02_a4718345-3251-45f8-ae8b-41b7269c6575_700x.jpg?v=1715077939",
        "https://www.farmley.com/cdn/shop/files/Untitleddesign_15_700x.png?v=1715077939",
        "https://www.farmley.com/cdn/shop/files/Thaichilli-Cashew-usp002_5ace31a8-b4fd-47aa-948c-4d35f3e8174b_700x.jpg?v=1715077939",
        "https://www.farmley.com/cdn/shop/files/preview_images/08277ba8550c45ec848e2b8a6c90fcc3.thumbnail.0000000000_1024x.jpg?v=1711445238",
        "https://www.farmley.com/cdn/shop/files/RNF_160g_thai_4cf54a62-6fe0-4802-947d-b538253f55b5_700x.jpg?v=1715077939"
      ],
      mrp: 299,
      sellingPrice: 279,
      category: "new launches",
      options: ["Thai Chilli Cashews - Roasted (160g)"],
      descriptions: [["Indulge in the goodness of Farmley's Roasted Cashews - a snack that's irresistibly flavourful and crunchy", "Expertly roasted, not fried; these cashews deliver an authentic Indian taste that will delight your senses.", "Crafted from our signature cashews, this protein-rich treat offers a wholesome snacking experience.", "Enjoy the perfect balance of health and indulgence with our oven-roasted cashews, a delicious and satisfying option for any time of the day."]]
    },
    {
      title: "Black Pepper Cashews - Roasted (160g)",
      images: [
        "https://www.farmley.com/cdn/shop/files/BlackPepperCashew_700x.jpg?v=1715079126",
        "https://www.farmley.com/cdn/shop/files/BlackPepper-Cashew-rd_1_700x.jpg?v=1715079126",
        "https://www.farmley.com/cdn/shop/files/BlackPepper-Cashew-01_1_700x.jpg?v=1715079126",
        "https://www.farmley.com/cdn/shop/files/BlackPepper-Cashew-001_1_700x.jpg?v=1715079126",
        "https://www.farmley.com/cdn/shop/files/Untitleddesign_1_1_700x.png?v=1715079126",
        "https://www.farmley.com/cdn/shop/files/preview_images/c12f93fe2c4448e0a14d2f0aac9b8e1f.thumbnail.0000000000_1024x.jpg?v=1711446348",
        "https://www.farmley.com/cdn/shop/files/preview_images/450e192e79324e9787079f40f65fff72.thumbnail.0000000000_1024x.jpg?v=1711446347",
        "https://www.farmley.com/cdn/shop/files/BlackPepperCashewPackof2_700x.jpg?v=1715079126",
        "https://www.farmley.com/cdn/shop/files/BlackPepper-Cashew_700x.jpg?v=1715079126",
        "https://www.farmley.com/cdn/shop/files/Blackpepper_Thumbnail_700x.jpg?v=1715079126"
      ],
      mrp: 299,
      sellingPrice: 279,
      category: "new launches",
      options: ["Black Pepper Cashews - Roasted (160g)"],
      descriptions: [["Indulge in the goodness of Farmley's Roasted Cashews - a snack that's irresistibly flavourful and crunchy.", "Expertly roasted, not fried; these cashews deliver an authentic Indian taste that will delight your senses.", "Crafted from our signature cashews, this protein-rich treat offers a wholesome snacking experience.", "Enjoy the perfect balance of health and indulgence with our oven-roasted cashews, a delicious and satisfying option for any time of the day."]]
    },
    {
      title: "Classic Salted Cashews - Roasted (160g)",
      images: [
        "https://www.farmley.com/cdn/shop/files/Artboard1copy11-80_1_700x.jpg?v=1715070947",
        "https://www.farmley.com/cdn/shop/files/Classic-Salted_Thumbnail_700x.jpg?v=1715070947",
        "https://www.farmley.com/cdn/shop/files/Classic-Salted-Cashew-02_ea7a626d-0d16-44ca-98f0-cfa3cf07fe1b_700x.jpg?v=1715070947",
        "https://www.farmley.com/cdn/shop/files/Classic-Salted-Cashew-002_5958ec60-4d6e-4c43-915c-1bb395b86082_700x.jpg?v=1715070947",
        "https://www.farmley.com/cdn/shop/files/RoastedMakhanas-10_003c1b3d-4089-4b8d-8a90-1c8f8f5abdb9_700x.png?v=1715070947",
        "https://www.farmley.com/cdn/shop/files/Veg-logo_3820c6a0-a93d-492f-b668-cb75ed7f2e6b_700x.jpg?v=1715070947",
        "https://www.farmley.com/cdn/shop/files/preview_images/dfe171499e39431c90e2b2c4a84ac554.thumbnail.0000000000_1024x.jpg?v=1711453570",
        "https://www.farmley.com/cdn/shop/files/preview_images/50efff480d904e25b26016315f49d523.thumbnail.0000000000_1024x.jpg?v=1711453566",
        "https://www.farmley.com/cdn/shop/files/SaltedCashewPackof2_700x.jpg?v=1715078681"
      ],
      mrp: 299,
      sellingPrice: 279,
      category: "new launches",
      options: ["Classic Salted Cashews - Roasted (160g)"],
      descriptions: [["Indulge in the goodness of Farmley's Roasted Cashews - a snack that's irresistibly flavourful and crunchy.", "Expertly roasted, not fried; these cashews deliver an authentic Indian taste that will delight your senses.", "Crafted from our signature cashews, this protein-rich treat offers a wholesome snacking experience.", "Enjoy the perfect balance of health and indulgence with our oven-roasted cashews, a delicious and satisfying option for any time of the day."]]
    },
    {
      title: "Panchmeva- Pack of 16",
      images: [
        "https://www.farmley.com/cdn/shop/files/panchmeva-SNACK-MIX-SRP_700x.jpg?v=1726835008",
        "https://www.farmley.com/cdn/shop/files/panchmevasnackmixLUPlisting-03_700x.jpg?v=1726835008",
        "https://www.farmley.com/cdn/shop/files/panchmevasnackmixLUPlisting-04_700x.jpg?v=1726835008",
        "https://www.farmley.com/cdn/shop/files/panchmevasnackmixLUPlisting-07_700x.jpg?v=1726835008",
        "https://www.farmley.com/cdn/shop/files/panchmevasnackmixLUPlisting-01_700x.jpg?v=1726835008",
        "https://www.farmley.com/cdn/shop/files/panchmevasnackmixLUPlisting-02_700x.jpg?v=1726835008",
        "https://www.farmley.com/cdn/shop/files/panchmevasnackmixLUPlisting-06_700x.jpg?v=1726835008",
        "https://www.farmley.com/cdn/shop/files/panchmevasnackmixLUPlisting-05_700x.jpg?v=1726835008",
        ""
      ],
      mrp: 480,
      sellingPrice: 449,
      category: "new launches",
      options: [],
      descriptions: [["Farmley's Panchmeva is a harmonious blend, curated from our 5 signature dry fruits and nuts.", "Offering the goodness of - Almonds, Cashews, Green Raisins, Black Raisins & Dates all at once, the product has been designed to be consumed on-the-go.", "It's 100% adulteration free and a natural energy source without any added preservatives.", "Packed with essential nutrients, it's a healthy snacking choice suitable for various nutrient needs.", "Whether for fasting or daily nourishment, this curated medley fits into your various eating occasions.", "Enjoy it straight from the pack or integrate it into your favourite recipes for a boost of flavour, crunch and nutrition.", "Discover the perfect balance of taste and health with our thoughtfully curated Panchmeva."]]
    }
  ]

  const addProduct = async () => {
    for await (const element of Products) {
      await products?.addProduct(element.title, element.images, element.mrp, element.sellingPrice, element.category, element.options, element.descriptions);
    }
  }

  return (
    <>
      <div className="fixed top-0 z-50 w-full bg-white">
        <Nav />
      </div>
      <div className="max-w-screen mt-20 lg:mt-36">
        <Outlet />
      </div>
      <div>
        <Button onClick={addProduct}>Add Prod</Button>
        <Footer />
      </div>
    </>
  )
}

export default App