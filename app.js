const oyuncuPuan = document.getElementById("oyuncupuan")
const bilgisayarpuan = document.getElementById("bilgisayarpuan")
const tas = document.getElementById("tas")
const kagit = document.getElementById("kagit")
const makas = document.getElementById("makas")
const oyuncusec = document.getElementById("oyuncusec")
const bilgisec = document.getElementById("bilgisec")
const mesaj = document.getElementById("mesaj")
//burada oyuncu ve bilgisayar puanları 0 dan başlayacak
let oyuncu=0
let bilgisayar=0

//burada bilgisayara rasthele sayı seçtirip resim değiştirdik


 function bilgisayarSecti(){
    const secim = ["tas","kagit", "makas"]
    // marh.floor  sayısı alta yuvarlar Math.random()*3 = 3 tane rastgele sayı seçecek
    const random = Math.floor(Math.random()*3)
    //burada bilgisec içindeki src kısmını dinamik bir şekilde
    bilgisec.setAttribute("src",`resim/${secim[random]}.png`)//random 0 olursa çıktımız tas olur, 1  olursa 2 olursa makas olur
    //fonksiyonçıktısı için return kullanırız
    return secim[random]
 }
 //taş resmine tıkladığımda oyuncu kısmını  taş resmin gelecek bilgisayar ise rastgele birini seçecek
 tas.addEventListener("click", ()=>{
    oyuncusec.setAttribute("src",`resim/tas.png`)
    let bilrandom = bilgisayarSecti()
    sonuc("tas",bilrandom)
})


<!-- //burada kağıt resmine tıkladığımda oyuncu kısmı resmi soru işareti kağıt  resmi olacak  -->
kagit.addEventListener("click", ()=>{ //burada src yi kağıt resmi ile değiştirdik
oyuncusec.setAttribute("src" ,`resim/kagit.png`)
   let bilrandom = bilgisayarSecti()   //bilgisayar rastgele birini seçti bilrandoma atadı
sonuc("kagit",bilrandom) //burada sonucumuz kağıttas kağıtmakas yada kagitkagit olacak
})
makas.addEventListener("click", ()=>{
   oyuncusec.setAttribute("src", `resim/makas.png`)
   let bilrandom = bilgisayarSecti()
   sonuc("makas",bilrandom)


 })

 //burada karşılaştırma yapıp sonuca yazdıracağız

 function sonuc (gamer,computer){
if (gamer+computer === "tasmakas"){   //taş kısmından tasmakas gelirse kazan çalışır
   kazan()
   }else if(gamer+computer === "kagittas"){//kagit kısmında kagittas gelirse kazan fonksiyonu çalışır
      kazan()
   }else if(gamer+computer === "makaskagit"){//makas kısmından makas kagit gelirse kazan çalışır
      kazan()
   }else if(gamer === computer){//oyuncu ve bilgisayar aynı seçim yaparsa berabere çalışır
      berabere()
   }else{      //diğer tüm durumlarda kaybet fonksiyonu çalışır
      kaybet()
   }


 }
 function kazan(){
oyuncu = oyuncu+1 //oyuncu puanına 1 eklenecek
mesaj.innerHTML = "Tebrikler kazandınız"
oyuncuPuan.innerHTML = oyuncu.toString()
 }
 function berabere (){
   mesaj.innerHTML = "berabere" 
 }
 
   
 