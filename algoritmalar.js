    var max;
    var min;
    var sayıListesi = [];
    var elemanSayısı;
    var olustur;
    var islem;
    var aranacakSayi;
    var baslangicZamani;
    var bitisZamani;
    var harcananZaman;
    var liste=[];

    //Kullanılan Algoritmalar
    function LinearSearch() {

        //Linear Search aranacak sayıyı almak için
        do {
            aranacakSayi = prompt("Arama algoritması seçtiniz...\n Lütfen aranacak sayıyı giriniz.");
            aranacakSayi = aranacakSayi.trim();
            if (isNaN(aranacakSayi)) {
                alert("Lütfen sayı giriniz!");
            } else if (aranacakSayi == "") {
                alert("Lütfen bir sayı giriniz!");
            }
        } while (isNaN(aranacakSayi) || aranacakSayi == "" || aranacakSayi == null);

        //Geçen süreyi almak için
        baslangicZamani = Date.now();
        //Random oluşturulan diziyi nesne değişkenine alma
        var nesne = generatorMax();
        var veri_var = 0;

        elemanSayısı = parseInt(document.getElementById("kacsayi").value);
        max=parseInt(document.getElementById("maxsayi").value);
        min=parseInt(document.getElementById("minsayi").value);

        var islem_S = 0;
        //Linear Search algoritması
        //Tek tek tüm diziyi kontrol ediyor eğer sayıyı bulursa veri_var=1 ataması yapıyor.
        for (var k = 0; k < elemanSayısı; k++) {
            if (aranacakSayi == sayıListesi[k]) {
                islem_S++;
                veri_var = 1;
                break;
            } else
                islem_S++;
        }

        //Geçen süreyi bulmak
        bitisZamani = Date.now();
        harcananZaman = bitisZamani - baslangicZamani;
        var saniye = parseFloat(harcananZaman / 1000);

        //Ekrana yazdırmak için işlemler
        yazılacak();
        function yazılacak() {

            document.getElementById("tt").style.display = "";
            document.getElementById("buton").style.display = "";
            document.getElementById("liste1").style.overflow = "scroll";

            document.getElementById("bilgi1").style.display = "";
            document.getElementById("bilgi2").style.display = "";
            document.getElementById("bilgi3").style.display = "";
            document.getElementById("bilgi4").style.display = "";

            document.getElementById("aranacakS").style.display = "";
            document.getElementById("bulundu").style.display = "";

            var formKaldir = document.getElementById("form");
            formKaldir.style.display = "none";

            document.getElementById("Oliste").innerHTML = "Oluşturulan " + "<span>" + elemanSayısı + "</span>" + " elemanlı liste: ";
            document.getElementById("liste").innerHTML = nesne;
            document.getElementById("aranacakS").innerHTML = "Aranan sayı: " + "<span>" + aranacakSayi + "</span>";

            if (veri_var == 1) {
                document.getElementById("bulundu").innerHTML = "Aranan sayı " + "<span>" + k + "</span>" + ". indisde bulundu.";
            }
            else {
                document.getElementById("bulundu").innerHTML = "Aranan sayı bulunamadı.";
            }
            document.getElementById("islemS").innerHTML = "Arama için yapılan işlem sayısı " + "<span>" + islem_S + "</span>";
            document.getElementById("yontem").innerHTML = "Aramada kullanılan yöntem: " + "<span>" + islem + "</span>";
            document.getElementById("sure").innerHTML = "Geçen süre " + "<span>" + saniye + "</span>" + " saniyedir.";

            document.getElementById("bilgi1").innerHTML = "Linear Search algoritması" +
                "<br>" + " en basit ve " +
                "<br>" + "çalışma zamanı olarak en kötü" +
                "<br>" + " algoritmalardan biridir.";
            document.getElementById("bilgi2").innerHTML = "Linear Search, verilen veri seti" +
                "<br>" + " üzerinde her bir eleman" +
                "<br>" + " ile aranan değeri" +
                "<br>" + " karşılaştırarak arar." +
                "<br>" + " Eğer aranan " +
                "<br>" + "veri dizide bulunursa" +
                "<br>" + " dizinin indeksini döner. ";
            document.getElementById("bilgi3").innerHTML = "Bu algoritmanın " + "<br>" +
                " zaman karmaşıklığı O(n)’dir. " + "<br>" +
                "Burada n değeri inputu temsil eder. "
                + "<br>" + "Uzunluğu 'n' olan "
                + "<br>" + "bir dizi için en kötü durumda" +
                "<br>" + " 'n' kez çalışacaktır.";

            document.getElementById("bilgi4").innerHTML = "En iyi durum ilk" +
                "<br>" + " karşılaştırmada"
                + " aranan değerin" +
                "<br>" + " bulunmasıdır." +
                "<br>" + " En kötü durum" +
                "<br>" + " ise tüm listenin tüm" +
                "<br>" + " elemanlarını karşılaştırma" +
                "<br>" + " işlemine sokmaktır.";
        }
    }
    function InsertionSort() {


        var islem_S = 0;
        var islem_S1 = 0;
        var islem_S2 = 0;

        //Geçen süreyi almak için başlangıç zamanı
        baslangicZamani = Date.now();
        //Random diziyi nesne degiskenine alma
        var nesne = generatorMax();
        elemanSayısı = parseInt(document.getElementById("kacsayi").value);

        //Insertion Sort algoritması
        function sort(A) {
            var key, i, j;
            for (j = 1; j < elemanSayısı; j++) {
                key = A[j];
                i = j - 1;
                while ((i >= 0) && (A[i] > key)) {
                    A[i + 1] = A[i];
                    i = i - 1;
                    islem_S2++;
                }
                A[i + 1] = key;
                islem_S1++;
            }
            islem_S = islem_S1 + islem_S2;
            return A;
        }

        max=parseInt(document.getElementById("maxsayi").value);
        min=parseInt(document.getElementById("minsayi").value);


        var sırala = nesne;

        //Geçen süreyi bulmak
        bitisZamani = Date.now();
        harcananZaman = bitisZamani - baslangicZamani;
        var saniye = parseFloat(harcananZaman / 1000);

        //Ekrana yazdırma işlemleri
        yazılacak();
        function yazılacak() {
            document.getElementById("tt").style.display = "";
            document.getElementById("buton").style.display = "";

            document.getElementById("liste1").style.overflow = "scroll";
            document.getElementById("liste2").style.display = "";
            document.getElementById("liste2").style.overflow = "scroll";
            document.getElementById("bilgi1").style.display = "";
            document.getElementById("bilgi2").style.display = "";
            document.getElementById("bilgi3").style.display = "";
            document.getElementById("bilgi4").style.display = "";
            document.getElementById("bilgi4").style.left = "1030px";

            var formKaldir = document.getElementById("form");
            formKaldir.style.display = "none";

            document.getElementById("Oliste").innerHTML = "Random üretilmiş " + "<span>" + elemanSayısı + "</span>" + " elemanlı liste: ";
            document.getElementById("liste").innerHTML = nesne;

            document.getElementById("sıraliListe").style.display = "";
            document.getElementById("sıraliListe").innerHTML = "Sıralanmış liste:"
            document.getElementById("listee").innerHTML = sort(sırala);
            document.getElementById("islemS").innerHTML = "Sıralama için yapılan işlem sayısı " + "<span>" + islem_S + "</span>";
            document.getElementById("yontem").innerHTML = "Sıralamada kullanılan yöntem: " + "<span>" + islem + "</span>";
            document.getElementById("sure").innerHTML = "Geçen süre " + "<span>" + saniye + "</span>" + " saniyedir.";

            document.getElementById("bilgi1").innerHTML = " Insertion Sort," +
                "<br>" + " bilgisayar bilimlerinde " +
                "<br>" + "kullanılan ve sıralı diziyi her" +
                "<br>" + " adımda öğe öğe" +
                "<br>" + " oluşturan bir sıralama algoritmasıdır.";
         
            document.getElementById("bilgi2").innerHTML = "Insertion Sort Algoritmasında" +
                "<br>" + " döngü her bir tur döndüğünde" +
                "<br>" + " sıradaki elemanı" +
                "<br>" + " sondan başa doğru karşılaştırarak" +
                "<br>" + " yerine yerleştirme" +
                "<br>" + " esaslı çalışmaktadır.";

            document.getElementById("bilgi3").innerHTML = "Bu algoritmanın " + "<br>" +
                " zaman karmaşıklığı O(n²)’dir. " + "<br>" +
                "En iyi ihtimal ise başlangıçta dizinin" +
                "<br>" + " sıralı olmasıdır. Böylelikle"
                + "<br>" + " hiç yer değiştirme"
                + "<br>" + " yapmadan" +
                "<br>" + "sıralama bitecektir.";

            document.getElementById("bilgi4").innerHTML = "Genelde kart oyunlarında" +
                "<br>" + " insanlar" + "<br>" + "elindeki kartları"
                + "<br>" + " sıralamak için  farkında" +
                "<br>" + " olmadan bu algoritmayı " +
                "<br>" + "uygulamaktadır.";
        }
    }
    function BinarySearch() {


        //Aranacak sayıyı almak için işlemler
        do {
            aranacakSayi = prompt("Arama algoritması seçtiniz...\n Lütfen aranacak sayıyı giriniz.");
            aranacakSayi = aranacakSayi.trim();
            if (isNaN(aranacakSayi)) {
                alert("Lütfen sayı giriniz!");
            } else if (aranacakSayi == "") {
                alert("Lütfen bir sayı giriniz!");
            }
        } while (isNaN(aranacakSayi) || aranacakSayi == "" || aranacakSayi == null);

        //Geçen süreyi bulmak için başlangıç zamanı
        baslangicZamani = Date.now();
        //Random diziyi nesne degiskenine alma
        var nesne = generatorMax();

        elemanSayısı = parseInt(document.getElementById("kacsayi").value);
        max=parseInt(document.getElementById("maxsayi").value);
        min=parseInt(document.getElementById("minsayi").value);


        var sıralı =nesne;
        var donen;

        sıralı.sort(function (a,b){ return a-b});
        var islem1=0;

        //Binary Search algoritması
        var recursiveFunction = function (arr, x, start, end) {
 
            if (start > end) {
                islem1++;
                return 0;
            }
            var mid = Math.floor((start + end) / 2);
            if (arr[mid] === x){
                 donen=mid;
                 islem1++;
                 return 1;
                }

            if (arr[mid] > x){
                islem1++;
                return recursiveFunction(arr, x, start, mid - 1);
            }
            else{
                islem1++;
                return recursiveFunction(arr, x, mid + 1, end);
            }
        }

        //Geçen süreyi bulma
        bitisZamani = Date.now();
        harcananZaman = bitisZamani - baslangicZamani;
        var saniye = parseFloat(harcananZaman / 1000);
        
        //Ekrana yazdırma işlemleri
        yazılacak();
        function yazılacak() {
            document.getElementById("tt").style.display = "";
            document.getElementById("buton").style.display = "";

            document.getElementById("liste1").style.overflow = "scroll";
            
            document.getElementById("bilgi1").style.display = "";
            document.getElementById("bilgi2").style.display = "";
            document.getElementById("bilgi3").style.display = "";
            document.getElementById("bilgi4").style.display = "";

            document.getElementById("aranacakS").style.display = "";
            document.getElementById("bulundu").style.display = "";

            var formKaldir = document.getElementById("form");
            formKaldir.style.display = "none";

            document.getElementById("Oliste").innerHTML = "Oluşturulan " + "<span>" + elemanSayısı + "</span>" + " elemanlı liste: ";
            document.getElementById("liste").innerHTML = nesne;
            document.getElementById("aranacakS").innerHTML = "Aranan sayı: " + "<span>" + aranacakSayi + "</span>";

            if (recursiveFunction(sıralı, Number(aranacakSayi), 0, (sıralı.length)-1)) {
                document.getElementById("bulundu").innerHTML = "Aranan sayı "+ donen +". indisde bulundu.";
            }
            else {
                document.getElementById("bulundu").innerHTML = "Aranan sayı bulunamadı.";
            }

            document.getElementById("islemS").innerHTML = "Arama için yapılan işlem sayısı " + "<span>" +islem1+ "</span>";
            document.getElementById("yontem").innerHTML = "Aramada kullanılan yöntem: " + "<span>" + islem + "</span>";
            document.getElementById("sure").innerHTML = "Geçen süre " + "<span>" + saniye + "</span>" + " saniyedir.";

            document.getElementById("bilgi1").innerHTML = "Binary Search (ikili arama)" +
                "<br>" + "  algoritması, veri seti üzerinde " +
                "<br>" + "arama yapmaya yarayan " +
                "<br>" + " bir algoritmadır. Ve kullanılacak"+
                "<br>" + " veri seti sıralanmış"+
                "<br>" + " durumda olmalıdır.";

            document.getElementById("bilgi2").innerHTML = "Binary Search, her iterasyonda" +
                "<br>" + " arama uzayını yarıya" +
                "<br>" + " indirmek üzere tasarlanmıştır." +
                "<br>" + " Çalışma zamanı olarak" +
                "<br>" + " Linear Search'ten  " +
                "<br>" + "daha hızlı ve iyidir." ;

            document.getElementById("bilgi3").innerHTML = "Bu algoritmanın zaman " + "<br>" +
                " karmaşıklığı O(log n)’dir. " + "<br>" +
                " Öncelikle dizinin ortasındaki değeri "
                + "<br>" + "aranan değer ile karşılaştırır. "
                + "<br>" + "Eğer aranan değer ortanca değerden" +
                "<br>" + " küçükse dizinin ikinci "+"<br>" +"yarısını görmezden gelerek"+
                "<br>" + " ilk yarısında aramaya devam eder." ;

            document.getElementById("bilgi4").innerHTML = "En iyi durum veri setinin" +
                "<br>" + " ortasındaki değerde"
                + " aranan değerin" +
                "<br>" + " bulunmasıdır." +
                "<br>" + " Veri setini ortadan ikiye" +
                "<br>" + " bölme işlemi" +
                "<br>" + " aranan değer bulunana" +
                "<br>" + " kadar devam etmektedir.";
        }


    }
    function MergeSort() {


        //Geçen süre için başlangıç
        baslangicZamani = Date.now();
        //Random diziyi nesne degiskenine atama
        var nesne = generatorMax();
        islem_S=0;

        //Merge Sort algoritması
        function mergeSort(array, half = array.length / 2) {

            if (array.length < 2) {
                
                return array
            }

            const left = array.splice(0, half); 
            islem_S++;
            return merger(mergeSort(left), mergeSort(array))
        }

        function merger(left, right) {

            const arr = [];

            while (left.length && right.length) {
                if (left[0] < right[0]) {
                    arr.push(left.shift())
                } else {
                    arr.push(right.shift())
                }
                islem_S++;
            }

            return [...arr, ...left, ...right];
        }

        elemanSayısı = parseInt(document.getElementById("kacsayi").value);
        max=parseInt(document.getElementById("maxsayi").value);
        min=parseInt(document.getElementById("minsayi").value);

        //Geçen süreyi hesaplama
        bitisZamani = Date.now();
        harcananZaman = bitisZamani - baslangicZamani;
        var saniye = parseFloat(harcananZaman / 1000);

        //Ekrana yazdırma işlemleri
        yazılacak();
        function yazılacak() {
            document.getElementById("tt").style.display = "";
            document.getElementById("buton").style.display = "";

            document.getElementById("liste1").style.overflow = "scroll";
            document.getElementById("liste2").style.display = "";
            document.getElementById("liste2").style.overflow = "scroll";
            
            document.getElementById("bilgi1").style.display = "";
            document.getElementById("bilgi2").style.display = "";
            document.getElementById("bilgi3").style.display = "";
            document.getElementById("bilgi4").style.display = "";
            //document.getElementById("bilgi4").style.left = "1000px";

            var formKaldir = document.getElementById("form");
            formKaldir.style.display = "none";

            document.getElementById("Oliste").innerHTML = "Random üretilmiş " + "<span>" + elemanSayısı + "</span>" + " elemanlı liste: ";
            document.getElementById("liste").innerHTML = nesne;

            document.getElementById("sıraliListe").style.display = "";
            document.getElementById("sıraliListe").innerHTML = "Sıralanmış liste:"
            document.getElementById("listee").innerHTML = mergeSort(nesne);

            document.getElementById("islemS").innerHTML = "Sıralama için yapılan işlem sayısı " + "<span>" + islem_S + "</span>";
            document.getElementById("yontem").innerHTML = "Sıralamada kullanılan yöntem: " + "<span>" + islem + "</span>";
            document.getElementById("sure").innerHTML = "Geçen süre " + "<span>" + saniye + "</span>" + " saniyedir.";

            document.getElementById("bilgi1").innerHTML = "Merge Sort (Birleştirme Sıralaması)," +
                "<br>" + " sıralayacağımız diziyi her seferinde " +
                "<br>" + "ikiye bölüp ayrı ayrı sıraladıktan sonra" +
                "<br>" + " birleştirme mantığına dayanmaktadır." +
                "<br>" + " Divide and Conquer yaklaşımının "+
                "<br>" + "en temel örneklerindendir.";
        
            document.getElementById("bilgi2").innerHTML = "Bağlı liste sıralamasında" +
                "<br>" + " seçilebilecek en performanslı algoritma" +
                "<br>" + "Merge Sort algoritmasıdır. Çünkü " +
                "<br>" + "bağlı listelerin yapısı gereği " +
                "<br>" + " Merge Sort bellekte fazladan sadece" +
                "<br>" + " '1' birim yer tutar";

            document.getElementById("bilgi3").innerHTML = "Bu algoritmanın " + "<br>" +
                " zaman karmaşıklığı O(nlogn)’dir. " + "<br>" +
                "Recursive bir fonksiyon olduğu için" +
                "<br>" + "sürekli kendini çağırarak diziyi"
                + "<br>" + " ikiye bölüyor. Her bölünmüş diziye"
                + "<br>" + " 'Merge' fonk. içinde dizinin uzunluğu " +
                "<br>" + "olan N kadar işlem yapılıyor.";

            document.getElementById("bilgi4").innerHTML = "Merge Sort algoritmasında " +
                "<br>" + "dizinin başlangıç durumu önemsiz "+
                "<br>" + "olduğu için en iyi ihtimal " +
                "<br>" +"veya en kötü"+
                "<br>" + "ihtimal farketmeksizin O(nlogn)" +
                "<br>" + "karmaşıklığında çalışacaktır.";
        }
    }
    function HeapSort(){

        //Geçen süre için başlangıç zamanı alma
        baslangicZamani = Date.now();
        //Random diziyi nesne degiskenine alma
        var nesne = generatorMax();
        var islem_S=0;

        //Heap Sort algoritması
        function BuildHeap(A){
            var n=(A.length)-1;

            for(var i=parseInt(n/2);i>=0;i--){
                islem_S++;
                Heapify(A,n,i);
            }
            for(var i=n; i>0;i--){
                islem_S++;
                var gecici=A[0];
                A[0]=A[i];
                A[i]=gecici;

                Heapify(A,i,0);
            }
        }

        function Heapify(A,n,i){
            var largest=i;
            var left=2*i+1;
            var right=2*i+2;

            if((left<n) && (A[left]>A[largest])){
                largest=left;
            }
            if((right < n) && (A[right]> A[largest])){
                largest=right;
            }
            if(largest != i){
                var degistir= A[i];
                A[i]=A[largest];
                A[largest]=degistir;

                Heapify(A,n,largest);
            }  
        }

        elemanSayısı = parseInt(document.getElementById("kacsayi").value);
        max=parseInt(document.getElementById("maxsayi").value);
        min=parseInt(document.getElementById("minsayi").value);

        //Geçen süreyi bulma
        bitisZamani = Date.now();
        harcananZaman = bitisZamani - baslangicZamani;
        var saniye = parseFloat(harcananZaman / 1000);

        //Ekrana yazdırma işlemleri
        yazılacak();
        function yazılacak() {
            document.getElementById("tt").style.display = "";
            document.getElementById("buton").style.display = "";

            document.getElementById("liste1").style.overflow = "scroll";
            document.getElementById("liste2").style.display = "";
            document.getElementById("liste2").style.overflow = "scroll";

            document.getElementById("bilgi1").style.display = "";
            document.getElementById("bilgi2").style.display = "";
            document.getElementById("bilgi3").style.display = "";
            document.getElementById("bilgi4").style.display = "";

            var formKaldir = document.getElementById("form");
            formKaldir.style.display = "none";

            document.getElementById("Oliste").innerHTML = "Random üretilmiş " + "<span>" + elemanSayısı + "</span>" + " elemanlı liste: ";
            document.getElementById("liste").innerHTML = nesne;

            document.getElementById("sıraliListe").style.display = "";
            document.getElementById("sıraliListe").innerHTML = "Sıralanmış liste:"
            BuildHeap(nesne);
            document.getElementById("listee").innerHTML = nesne;


            document.getElementById("islemS").innerHTML = "Sıralama için yapılan işlem sayısı " + "<span>" + islem_S + "</span>";
            document.getElementById("yontem").innerHTML = "Sıralamada kullanılan yöntem: " + "<span>" + islem + "</span>";
            document.getElementById("sure").innerHTML = "Geçen süre " + "<span>" + saniye + "</span>" + " saniyedir.";

            document.getElementById("bilgi1").innerHTML = " Heap Sort (Yığın Sıralaması)" +
                "<br>" + "  algoritması verinin" +
                "<br>" + " hafızada sıralı tutulması için " +
                "<br>" + " geliştirilen sıralama algoritmalarından " +
                "<br>" + " bir tanesidir. ";
        
            document.getElementById("bilgi2").innerHTML = "Heap Sort'ta, bir ata root bulunur." +
                "<br>" + "Root’un ise left ve right olmak üzere" +
                "<br>" + " çocukları bulunur. Sıralama işlemi" +
                "<br>" +" yaparken bu alanlar üzerlerinde"+
                  "<br>" +" değişiklikler yapılır. İkili ağaç yapısı"+
                "<br>" + "gibi görünür,fakat " +
                "<br>" + "o şekilde çalışmaz. Heap Sort,"+
                "<br>" +" hem dizi mantığı ile hem de node"+
                "<br>" +" mantığı ile kodlanabilir.";

            document.getElementById("bilgi3").innerHTML = "Bu algoritmanın " + "<br>" +
                " zaman karmaşıklığı O(nlogn)’dir. " + "<br>" +
                "Burada logn ağacın derinliğidir." +
                "<br>" + " Derinlik ise,"
                + "<br>" + " maksimum gideceğimiz"
                + "<br>" + " alt ağaç sayısıdır." ;

            document.getElementById("bilgi4").innerHTML = "Heap Sort algoritması" +
                "<br>" + "ile Merge Sort algoritması" +
                "<br>" + "aynı zaman aralığına" +
                "<br>" + " sahip olmalarına rağmen" +
                "<br>" + " Heap Sort algoritması, bellekte" +
                "<br>" + " Merge Sort algoritmasına göre " +
                "<br>" + "daha az yer tutar ve" +
                "<br>" + " daha hızlı çalışır. ";

        }
    }
    function QuickSort(){

        //Geçen süreyi bulmak için başlangıç zamanı
        baslangicZamani = Date.now();
        //Random diziyi nesne degiskenine alma
        var nesne = generatorMax();
        var islem_S=0;

        //Quick Sort algoritması
        function Partition(A,p,q){
            var x=A[q];
            var i=p-1;
            for(var j=p;j<q;j++){
                islem_S++;
                if(A[j]<x){
                    i=i+1;
                    var gecici=A[i];
                    A[i]=A[j];
                    A[j]=gecici;
                }
            }
            var gecici2=A[i+1];
            A[i+1]=A[q];
            A[q]=gecici2;
            return i+1;
        }

        function Quick(A,p,r){
            if(p<r){
                var q=Partition(A,p,r);
                Quick(A,p,q-1);
                Quick(A,q+1,r);
            }
        }

        elemanSayısı = parseInt(document.getElementById("kacsayi").value);
        max=parseInt(document.getElementById("maxsayi").value);
        min=parseInt(document.getElementById("minsayi").value);

        //Geçen süreyi bulma işlemleri
        bitisZamani = Date.now();
        harcananZaman = bitisZamani - baslangicZamani;
        var saniye = parseFloat(harcananZaman / 1000);

        //Ekrana yazdırma işlemleri
        yazılacak();
        function yazılacak() {
            document.getElementById("tt").style.display = "";
            document.getElementById("buton").style.display = "";


            document.getElementById("liste1").style.overflow = "scroll";
            document.getElementById("liste2").style.display = "";
            document.getElementById("liste2").style.overflow = "scroll";

            document.getElementById("bilgi1").style.display = "";
            document.getElementById("bilgi2").style.display = "";
            document.getElementById("bilgi3").style.display = "";
            document.getElementById("bilgi4").style.display = "";
            //document.getElementById("bilgi4").style.left = "980px";

            var formKaldir = document.getElementById("form");
            formKaldir.style.display = "none";

            document.getElementById("Oliste").innerHTML = "Random üretilmiş " + "<span>" + elemanSayısı + "</span>" + " elemanlı liste: ";
            document.getElementById("liste").innerHTML = nesne;

            document.getElementById("sıraliListe").style.display = "";
            document.getElementById("sıraliListe").innerHTML = "Sıralanmış liste:"
            //Sıralama algoritmasını çalıştırma
            Quick(nesne,0,nesne.length-1);
            document.getElementById("listee").innerHTML = nesne;


            document.getElementById("islemS").innerHTML = "Sıralama için yapılan işlem sayısı " + "<span>" + islem_S + "</span>";
            document.getElementById("yontem").innerHTML = "Sıralamada kullanılan yöntem: " + "<span>" + islem + "</span>";
            document.getElementById("sure").innerHTML = "Geçen süre " + "<span>" + saniye + "</span>" + " saniyedir.";

            document.getElementById("bilgi1").innerHTML = "Quick Sort (Hızlı Sıralama) algoritması " +
                "<br>" + "C.A.R.Hoare tarafından bulunan" +
                "<br>" + " etkin bir sıralama yöntemidir." +
                "<br>" + "Aşağıdaki açıklamadan da" +
                "<br>" + "anlaşıldığı üzere bu algoritmada" +
                "<br>" +"böl ve fethet (divide and conquere)"+
                "<br>" + "metodu ile çözüme" +
                "<br>" + "ulaşmak amaçlanmıştır.";

            document.getElementById("bilgi2").innerHTML = "Basitçe sıralanacak olan dizideki " +
                "<br>" + "orta noktada (mean) bulunan bir"+
                "<br>" + "sayıyı seçerek diğer bütün" +
                "<br>" + "sayıları bu orta sayıdan büyük veya"+
                "<br>" + " küçük diye sınıflayarak "+
                "<br>" + " sıralama yapmayı hedeflemektedir." ;

            document.getElementById("bilgi3").innerHTML = "Bu algoritmanın " + "<br>" +
                " zaman karmaşıklığı O(nlogn)’dir. " + "<br>" +
                "Ancak unutulmamalıdır ki " +
                "<br>" + "seçilecek pivot elemanın her"
                + "<br>" + "zaman diziyi tam ortadan"
                + "<br>" + "böleceğini garanti edemeyiz. Bu" +
                "<br>" + "sebeple en kötü ihtimalle O(n²)"+
                "<br>" + "karmaşıklığına gidilebilir.";

            document.getElementById("bilgi4").innerHTML = "Algoritmanın O(n²) karmaşıklığına" +
                "<br>" + "gitmesini önlemek için yapılabilecek "
                + "<br>" + "en basit çözümlerden" +
                "<br>" +"biri her ihtimale karşı"+
                  "<br>" +"dizinin rastgele bir şekilde"+
                "<br>" + " permütasyonunu alıp Quick Sort" +
                "<br>" + "fonksiyonuna göndermektir.";
        }    
    }
    function CountingSort(){

        //Geçen süreyi bulmak için başlangıç zamanını alma
        baslangicZamani = Date.now();
        //Random diziyi nesne degiskenine atama
        var nesne = generatorMax();
        var islem_S=0;

        //Counting Sort algoritması
        function countS(A){
            var n=A.length;
            //var k=101 //A dizisi 0 ile 100 arasında
            var k=max+min;
            var C=[k+2];
            var B=[n];

            for(var i=0;i<=k;i++){
                islem_S++
                C[i]=0;
            }
            for(var j=0;j<n;j++){
                islem_S++
                C[A[j]]=C[A[j]]+1;
            }
            for(var i=1;i<=k;i++){
                islem_S++
                C[i]=C[i]+C[i-1];
            }
            for(var z=n-1;z>=0;z--){
                islem_S++
                B[C[A[z]]-1]=A[z];
                C[A[z]]=C[A[z]]-1;
            }

            for(var i=0;i<A.length;i++){
                A[i]=B[i];
            }

        }


        max=parseInt(document.getElementById("maxsayi").value);
        min=parseInt(document.getElementById("minsayi").value);
        elemanSayısı = parseInt(document.getElementById("kacsayi").value);

        //Geçen süreyi bulma işlemleri
        bitisZamani = Date.now();
        harcananZaman = bitisZamani - baslangicZamani;
        var saniye = parseFloat(harcananZaman / 1000);

        //Ekrana yazdırma işlemleri
        yazılacak();
        function yazılacak() {
            document.getElementById("tt").style.display = "";
            document.getElementById("buton").style.display = "";

            document.getElementById("liste1").style.overflow = "scroll";
            document.getElementById("liste2").style.display = "";
             document.getElementById("liste2").style.overflow = "scroll";
            
            document.getElementById("bilgi1").style.display = "";
            document.getElementById("bilgi2").style.display = "";
            document.getElementById("bilgi3").style.display = "";
            document.getElementById("bilgi4").style.display = "";
            //document.getElementById("bilgi4").style.left = "1030px";

            var formKaldir = document.getElementById("form");
            formKaldir.style.display = "none";

            document.getElementById("Oliste").innerHTML = "Random üretilmiş " + "<span>" + elemanSayısı + "</span>" + " elemanlı liste: ";
            document.getElementById("liste").innerHTML = nesne;

            document.getElementById("sıraliListe").style.display = "";
            document.getElementById("sıraliListe").innerHTML = "Sıralanmış liste:"
            countS(nesne);
            document.getElementById("listee").innerHTML = nesne;


            document.getElementById("islemS").innerHTML = "Sıralama için yapılan işlem sayısı " + "<span>" + islem_S + "</span>";
            document.getElementById("yontem").innerHTML = "Sıralamada kullanılan yöntem: " + "<span>" + islem + "</span>";
            document.getElementById("sure").innerHTML = "Geçen süre " + "<span>" + saniye + "</span>" + " saniyedir.";

            document.getElementById("bilgi1").innerHTML = "Counting Sort (Sayarak Sıralama)" +
                "<br>" + "algoritması, veri kümesinde yer" +
                "<br>" + " alan elemanların aralığını" +
                "<br>" + "kullanarak sıralama yapan " +
                "<br>" + "sıralama algoritmalarından birisidir." +
                "<br>" + "1954 yılında Harold H. Seward"+
                "<br>" + "tarafından yapılmıştır.";

            document.getElementById("bilgi2").innerHTML = "Basitçe sıralanacak olan" +
                "<br>" + "dizideki her sayının kaç tane" +
                "<br>" + " olduğunu farklı bir" +
                "<br>" + "dizide saklar ve daha sonra bu" +
                "<br>" + "sayıların bulunduğu dizinin" +
                "<br>" + "üzerinde işlem yaparak sıralanmış" +
                "<br>" + "olan diziyi elde eder.";

            document.getElementById("bilgi3").innerHTML = "Bu algoritmanın " + "<br>" +
                " zaman karmaşıklığı k=O(n)" + "<br>" +
                " ise O(n)’dir. "+ "<br>" +
                "Diğer sıralama algoritmalarından en" +
                "<br>" + "büyük farkı karşılaştırma"
                + "<br>" + "yapmamasıdır. Bu sebeple"
                + "<br>" + "zaman karmaşıklığı" +
                "<br>" + "O(nlogn)'den farklıdır.";

            document.getElementById("bilgi4").innerHTML = "Avantajları; n ve k" +
            "<br>" + "doğrusaldır (lineerdir) ve" +
            "<br>" + "kolay uygulanır."+
            "<br>" + "Dezavantaj olarak ise extra" +
                "<br>" + "depolama alanına ihtiyaç duyar ve "
                + "<br>" + "sayıların küçük tam sayı"
                + "<br>" + "olduğu varsayılır." ;
        }
    }
    function BucketSort(){


        var secim=0;

        do{
            sec=prompt("Tam sayılar ile sıralama yapmak için T\n Ondalıklı sayılar ile sıralama yapmak için 'O' giriniz.",'T');
            sec=sec.trim();
            if(sec=="T"){
                secim=1;
                break;
            } else if(sec=="O"){
                secim=2;
                //alert(secim);
                break;
            }
        } while(sec!="T" || sec!="O");

        //Başlangıc zamanı
        baslangicZamani = Date.now();
        //Random ondalık dizi olusturma
        var nesne=generatorOndalik();
        //Random tam sayı dizisi olusturma
        var nesne2=generatorMax();

        var islem_S=0;
        var islem1=0;
        var islem2=0;

        //Bucket Sort algoritması (ondalıklı sayılar için)
        var bucketS = (arr, n = arr.length) => {

            //Bucket array olusturma
            let bucket = new Array(n);
            
            //Bucket grubuna ekleme
            for(let i = 0; i < n; i++){
                islem_S++;
                bucket[i] = [];
            }
            
            //Aynı aralıktakileri bucket içine alma
            for(let i = 0; i < n; i++){
                islem_S++;
                let bucketIndex = Math.floor(arr[i]) * n;
                bucket[bucketIndex].push(arr[i]);
            }
            
            //Her grubu kendi içinde sıralama
            for(let i = 0; i < n; i++){
                islem_S++;
                bucket[i].sort();
            }
            
            //Sıralanmıs dizi
            let index = 0;
            for (let i = 0; i < n; i++) {
                islem1++;
                for (let j = 0, size = bucket[i].length; j < size; j++) {
                    
                    islem1++;
                    arr[index++] = bucket[i][j];
                }
            }
            islem_S=islem_S+islem1;
            
        }
        //Bucket Sort algoritması (Tam sayılar için)
        var bucketInt = arr => {
            if (arr.length === 0) {
                islem2++;
               return arr;
            }
            let i,
            minValue = arr[0],
            maxValue = arr[0],
            bucketSize = 5;
            arr.forEach(function (currentVal) {
                islem2++;
               if (currentVal < minValue) {
                  minValue = currentVal;
               } else if (currentVal > maxValue) {
                  maxValue = currentVal;
               }
            })
            let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
            let allBuckets = new Array(bucketCount);
            for (i = 0; i < allBuckets.length; i++) {
                islem2++;
               allBuckets[i] = [];
            }
            arr.forEach(function (currentVal) {
                islem2++;
               allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
            });
            arr.length = 0;
            allBuckets.forEach(function(bucket) {
                islem2++;
               insertion(bucket);
               bucket.forEach(function (element) {
                islem2++;
                  arr.push(element)
               });
            });
            return arr;
         }
         var insertion = arr => {
            let length = arr.length;
            let i, j;
            for(i = 1; i < length; i++) {
                islem2++;
               let temp = arr[i];
               for(j = i - 1; j >= 0 && arr[j] > temp; j--) {
                    islem2++;
                    arr[j+1] = arr[j];
               }
               arr[j+1] = temp;
            }
            return arr;
         };

        elemanSayısı = parseInt(document.getElementById("kacsayi").value);

        //Geçen süreyi hesaplama
        bitisZamani = Date.now();
        harcananZaman = bitisZamani - baslangicZamani;
        var saniye = parseFloat(harcananZaman / 1000);

        //Ekrana yazdırma işlemleri
        yazılacak();
        function yazılacak() {
            document.getElementById("tt").style.display = "";
            document.getElementById("buton").style.display = "";

            
            document.getElementById("liste1").style.overflow = "scroll";
            document.getElementById("liste2").style.display = "";
            document.getElementById("liste2").style.overflow = "scroll";
            
            document.getElementById("bilgi1").style.display = "";
            document.getElementById("bilgi2").style.display = "";
            document.getElementById("bilgi3").style.display = "";
            document.getElementById("bilgi4").style.display = "";

            var formKaldir = document.getElementById("form");
            formKaldir.style.display = "none";

            document.getElementById("Oliste").innerHTML = "Random üretilmiş " + "<span>" + elemanSayısı + "</span>" + " elemanlı liste: ";
            if(secim==2){
                document.getElementById("liste").innerHTML = nesne;
            }else if(secim==1){
                document.getElementById("liste").innerHTML = nesne2;
            }
            document.getElementById("sıraliListe").style.display = "";
            document.getElementById("sıraliListe").innerHTML = "Sıralanmış liste:";

            if(secim==1){
                bucketInt(nesne2);
                document.getElementById("listee").innerHTML = nesne2;
                document.getElementById("islemS").innerHTML = "Sıralama için yapılan işlem sayısı " + "<span>" + islem2 + "</span>";
            } else if(secim==2){
                bucketS(nesne);
                document.getElementById("listee").innerHTML=nesne;
                document.getElementById("islemS").innerHTML = "Sıralama için yapılan işlem sayısı " + "<span>" + islem_S + "</span>";
            }
            
            document.getElementById("yontem").innerHTML = "Sıralamada kullanılan yöntem: " + "<span>" + islem + "</span>";
            document.getElementById("sure").innerHTML = "Geçen süre " + "<span>" + saniye + "</span>" + " saniyedir.";

            document.getElementById("bilgi1").innerHTML = " Bucket Sort (kova sıralaması)," +
                "<br>" + "sıralanacak bir diziyi" +
                "<br>" + " parçalara ayırarak sınırlı" +
                "<br>" + " sayıdaki kovalara" +
                "<br>" + "atan bir sıralama algoritmasıdır." ;
           
            document.getElementById("bilgi2").innerHTML =" Ayrışma işleminin ardından"+
                "<br>" + "her kova kendi içinde ya farklı bir" +
                "<br>" + "algoritma kullanılarak ya da "+
                "<br>" + "kova sıralamasını özyinelemeli" +
                "<br>" + "olarak çağırarak sıralanır.";

            document.getElementById("bilgi3").innerHTML = "Bu algoritmanın " + "<br>" +
                " zaman karmaşıklığı O(n)’dir. " + "<br>" +
                "Değer aralıkları çok büyük seçilirse" +
                "<br>" + " veya girişler düzgün"
                + "<br>" + "dağılımlı değil ise "
                + "<br>" + "sıralama O(n²) olur." ;

            document.getElementById("bilgi4").innerHTML = "Avantajı lineer sıralama" +
                "<br>" + "olmasıdır. Dezavantajı ise"
                + "<br>" + "sayılar arasındaki mesafenin" +
                 "<br>" +"fazla olduğu durumlarda"+
                 "<br>" +"bu algoritmanın verimli"+
                "<br>" + "olmamasıdır. Mesafeye bağlı" +
                "<br>" + "olarak boş kova sayısının artması"+
                "<br>" + "örnek olarak verilebilir.";
        }
    }
    function RadixSort(){

        //Geçen süre için başlangıç zamanı
        baslangicZamani = Date.now();
        //Random olusturulan ondalıklı diziyi nesne degiskenine atama
        var nesne = generatorMax();
        var islem_S=0;

        //Radix sort algoritması
        function radixS(arr) {
            var islem1=0;
            var islem2=0;

            //Max sayıyı bulur ve 10 ile çarparak bir sayı elde eder
            var maxNum = Math.max(...arr) * 10;
            var divisor = 10;
            while (divisor <= maxNum) {
                islem1++;

                //0-9 arasındaki arrayler için bucket olusturma
                var buckets = [...Array(10)].map(() => []);
                //Her sayı için geçerli basamağı alıp bucketa koyma
                for (var num of arr) {
                    islem2++;
                    buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
                }

                //Tüm alt dizileri birleştirerek diziyi güncelleme
                arr = [].concat.apply([], buckets);
                //Bir sonraki anlamlı basamağa git
                divisor *= 10;
            }
            islem_S=islem1+islem2;
            return arr;
        } 

        elemanSayısı = parseInt(document.getElementById("kacsayi").value);

        //Geçen süreyi hesaplama
        bitisZamani = Date.now();
        harcananZaman = bitisZamani - baslangicZamani;
        var saniye = parseFloat(harcananZaman / 1000);

        //Ekrana yazdırma işlemleri
        yazılacak();
        function yazılacak() {
            document.getElementById("tt").style.display = "";
            document.getElementById("buton").style.display = "";

            document.getElementById("liste1").style.overflow = "scroll";

            document.getElementById("liste2").style.display = "";
            document.getElementById("liste2").style.overflow = "scroll";
            
            document.getElementById("bilgi1").style.display = "";
            document.getElementById("bilgi2").style.display = "";
            document.getElementById("bilgi3").style.display = "";
            document.getElementById("bilgi4").style.display = "";
            //document.getElementById("bilgi4").style.left = "1030px";

            var formKaldir = document.getElementById("form");
            formKaldir.style.display = "none";

            document.getElementById("Oliste").innerHTML = "Random üretilmiş " + "<span>" + elemanSayısı + "</span>" + " elemanlı liste: ";
            document.getElementById("liste").innerHTML = nesne;

            document.getElementById("sıraliListe").style.display = "";
            document.getElementById("sıraliListe").innerHTML = "Sıralanmış liste:"
            nesne2=radixS(nesne);
            document.getElementById("listee").innerHTML = nesne2;


            document.getElementById("islemS").innerHTML = "Sıralama için yapılan işlem sayısı " + "<span>" + islem_S + "</span>";
            document.getElementById("yontem").innerHTML = "Sıralamada kullanılan yöntem: " + "<span>" + islem + "</span>";
            document.getElementById("sure").innerHTML = "Geçen süre " + "<span>" + saniye + "</span>" + " saniyedir.";

            document.getElementById("bilgi1").innerHTML = "Radix Sort (taban) algoritması," +
                "<br>" + "1887 yılında Herman" +
                "<br>" + " Hollerith'in geliştirdiği " +
                "<br>" + "“tabulating machine” için kullandığı" +
                "<br>" + "yönteme dayanır. Esasta, 2 tabanına"+
                "<br>" + "göre yazılmış sayıları sıralayan" +
                "<br>" + "hızlı bir algoritmadır." ;
                
            document.getElementById("bilgi2").innerHTML = "Radix Sort Algoritmasında" +
                "<br>" + "en değersiz olan haneden en" +
                "<br>" + "değerli haneye doğru sıralama" +
                "<br>" + "işlemi yapılır. Bu algoritma " +
                "<br>" + "sıralanacak verilerin tamsayı olduğu" +
                "<br>" + " durumlarda kullanılır.";

            document.getElementById("bilgi3").innerHTML = "Bu algoritmanın " + "<br>" +
                " zaman karmaşıklığı O(n)’dir. " + "<br>" +
                "İyi bir çalışma zamanına sahip " +
                "<br>" + "olmasının nedeni bu algoritmanın"
                + "<br>" + "karşılaştırmalı bir sıralama" +
                "<br>" + "algoritması olmamasıdır.";

            document.getElementById("bilgi4").innerHTML = "Çok fazla miktarda sayı" +
                "<br>" + "sıralanacaksa yönetimi zordur. Alan"
                + "<br>" + "maliyeti yüksektir." +
                "<br>" + "Birden fazla anahtara göre"+
                "<br>" + "sıralama gerektiğinde"+
                "<br>" + "kolaylıkla uygulanabilir.";
        }
    }


    function generatorOndalik() {
        elemanSayısı = parseInt(document.getElementById("kacsayi").value);
        for (var i = 0; i < elemanSayısı; i++) {
            olustur = Math.random().toFixed(2);
            liste[i] = olustur;
            //document.writeln(sayıListesi[i]+"  ")
        }
        //document.writeln("Random üretilmiş liste: " + sayıListesi);
        return liste;
    }
    function generatorMax(){
        elemanSayısı = parseInt(document.getElementById("kacsayi").value);
        max=parseInt(document.getElementById("maxsayi").value);
        var min=parseInt(document.getElementById("minsayi").value);
        if(min>max){
            alert("Elemanın min değeri max değerinden büyük olamaz. Lütfen düzeltiniz!");
            Location(index.html);
        }
        for (var i = 0; i < elemanSayısı; i++) {
            olustur = Math.floor(Math.random() * (max - min + 1)) + min;
            sayıListesi[i] = olustur;
        }

        return sayıListesi;
    }
    
    function gonder() {
        var sayi=(document.getElementById("kacsayi").value);
        if(sayi>1000000){
            alert("Eleman sayısı '1000000' sayısından büyük olamaz!");
            Location(index.html);
        }
        islem = (document.getElementById("islem").value);
        if (islem == "Linear Search")
            LinearSearch();
        else if (islem == "Insertion Sort")
            InsertionSort();
        else if (islem == "Binary Search")
            BinarySearch();
        else if (islem == "Merge Sort")
            MergeSort();
        else if(islem == "Heap Sort")
            HeapSort();
        else if(islem == "Quick Sort")
            QuickSort();
        else if(islem == "Counting Sort")
            CountingSort();
        else if(islem == "Bucket Sort")
            BucketSort();
        else if(islem == "Radix Sort")
            RadixSort();
        else
            document.writeln("seçim yap!");
    }

