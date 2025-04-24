// src/data.js

const imagesById = {
  1: [
      "https://cdn-images.farfetch-contents.com/off-white-be-right-back-paris_23843597_53806313_1000.jpg?c=3",
      "https://cdn-images.farfetch-contents.com/off-white-be-right-back-paris_23843597_53806306_1000.jpg?c=3",
      "https://cdn-images.farfetch-contents.com/off-white-be-right-back-paris_23843597_53806336_1000.jpg?c=3",
      "https://cdn-images.farfetch-contents.com/off-white-be-right-back-paris_23843597_53806332_1000.jpg?c=3"
  ],
  2: [
      "https://cdn-images.farfetch-contents.com/off-white-be-right-back-new-york_23843598_53806364_1000.jpg?c=3",
      "https://cdn-images.farfetch-contents.com/off-white-be-right-back-new-york_23843598_53806359_1000.jpg?c=3",
      "https://cdn-images.farfetch-contents.com/off-white-be-right-back-new-york_23843598_53806353_1000.jpg?c=3",
      "https://cdn-images.farfetch-contents.com/off-white-be-right-back-new-york_23843598_53806390_1000.jpg?c=3"

  ],
  3: [
    "https://cdn-images.farfetch-contents.com/off-white-be-right-back-miami_23844040_53806537_1000.jpg?c=3",
    "https://cdn-images.farfetch-contents.com/off-white-be-right-back-miami_23844040_53806542_1000.jpg?c=3",
    "https://cdn-images.farfetch-contents.com/off-white-be-right-back-miami_23844040_53806569_1000.jpg?c=3",
    "https://cdn-images.farfetch-contents.com/off-white-be-right-back-miami_23844040_53806575_1000.jpg?c=3"

],
  4: [
    "https://cdn-images.farfetch-contents.com/off-white-be-right-back-milan_23844041_53806615_1000.jpg?c=3",
    "https://cdn-images.farfetch-contents.com/off-white-be-right-back-milan_23844041_53806614_1000.jpg?c=3",
    "https://cdn-images.farfetch-contents.com/off-white-be-right-back-milan_23844041_53806616_1000.jpg?c=3",
    "https://cdn-images.farfetch-contents.com/off-white-be-right-back-milan_23844041_53806647_1000.jpg?c=3"
  ],
  5: [
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a3b7a40d910f4bb4b02bae92014c14fe_9366/Zapatillas_Adi2000_Blanco_GY2081_01_standard.jpg",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4121c1fa622c489a9978ae92005fa901_9366/Zapatillas_Adi2000_Blanco_GY2081_011_hover_standard.jpg",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/08cd5eee7e17480abc1dae92014c5023_9366/Zapatillas_Adi2000_Blanco_GY2081_03_standard.jpg",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4121c1fa622c489a9978ae92005fa901_9366/Zapatillas_Adi2000_Blanco_GY2081_011_hover_standard.jpg"
    ],
  6: [
    "https://nikearprod.vtexassets.com/arquivos/ids/1054908-1200-1200?width=1200&height=1200&aspect=true",
    "https://nikearprod.vtexassets.com/arquivos/ids/1056312-1200-1200?width=1200&height=1200&aspect=true",
    "https://nikearprod.vtexassets.com/arquivos/ids/1057716-1200-1200?width=1200&height=1200&aspect=true",
    "https://nikearprod.vtexassets.com/arquivos/ids/1059120-1200-1200?width=1200&height=1200&aspect=true"
  ],
  7: [
    "https://nikearprod.vtexassets.com/arquivos/ids/679730-1200-1200?width=1200&height=1200&aspect=true",
    "https://nikearprod.vtexassets.com/arquivos/ids/681970-1200-1200?width=1200&height=1200&aspect=true",
    "https://nikearprod.vtexassets.com/arquivos/ids/684209-1200-1200?width=1200&height=1200&aspect=true",
    "https://nikearprod.vtexassets.com/arquivos/ids/686443-1200-1200?width=1200&height=1200&aspect=true"
  ],
  8: [
    "https://nikearprod.vtexassets.com/arquivos/ids/996792-1200-1200?width=1200&height=1200&aspect=true",
    "https://nikearprod.vtexassets.com/arquivos/ids/999803-1200-1200?width=1200&height=1200&aspect=true",
    "https://nikearprod.vtexassets.com/arquivos/ids/1002793-1200-1200?width=1200&height=1200&aspect=true",
    "https://nikearprod.vtexassets.com/arquivos/ids/1005769-1200-1200?width=1200&height=1200&aspect=true"
  ],
  9: [
    "https://nikearprod.vtexassets.com/arquivos/ids/811855-1200-1200?width=1200&height=1200&aspect=true",
    "https://nikearprod.vtexassets.com/arquivos/ids/817744-1200-1200?width=1200&height=1200&aspect=true",
    "https://nikearprod.vtexassets.com/arquivos/ids/822799-1200-1200?width=1200&height=1200&aspect=true",
    "https://nikearprod.vtexassets.com/arquivos/ids/827553-1200-1200?width=1200&height=1200&aspect=true"
  ],
  10: [
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2ec1d00c51bb4b3f939cd975530fb43a_9366/Zapatillas_adidas_Grand_Court_Platforma_Rosa_IE1104_01_standard.jpg",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/88e4030a056045d5af1d0a8d467fcf90_9366/Zapatillas_adidas_Grand_Court_Platforma_Rosa_IE1104_02_standard_hover.jpg",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6bbc9e61cbc54c1daac40bb47b9460c6_9366/Zapatillas_adidas_Grand_Court_Platforma_Rosa_IE1104_03_standard.jpg",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b417eba425a04e168b7ffce4b6613a06_9366/Zapatillas_adidas_Grand_Court_Platforma_Rosa_IE1104_04_standard.jpg"
  ],
  11: [
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/05ae0ea1b75b432ebb3d73c561274178_9366/Zapatillas_Jabbar_Low_Blanco_IH5298_01_standard.jpg",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/05ae0ea1b75b432ebb3d73c561274178_9366/Zapatillas_Jabbar_Low_Blanco_IH5298_01_standard.jpg",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e8ddf7ea3e8142c6a11d59b9d7c232be_9366/Zapatillas_Jabbar_Low_Blanco_IH5298_03_standard.jpg",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/dd56fcc01ed944d2988d728f7179773f_9366/Zapatillas_Jabbar_Low_Blanco_IH5298_04_standard.jpg"
  ],
  12: [
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/79ac6c652cdb457b8d83750097f2f035_9366/Zapatillas_Gazelle_Amarillo_IE0443_01_standard.jpg",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/26719a64dcbb4513a67b7d23b9aa21b0_9366/Zapatillas_Gazelle_Amarillo_IE0443_02_standard_hover.jpg",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ec854f4ab4be4031a55edff81ac89e6e_9366/Zapatillas_Gazelle_Amarillo_IE0443_05_standard.jpg",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bcbb7f4d06554516a1b2a752029aaabe_9366/Zapatillas_Gazelle_Amarillo_IE0443_06_standard.jpg"
  ],
  
};

export default imagesById;
