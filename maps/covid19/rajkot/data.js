var centerOfMap = {
  "lat": 22.3029,
  "lng": 70.8049
};

var locations=[["Nadim Kasam","22.27405200","70.81936200","Patel Society Street No. 2 Rajkot. ","1","Brown"],["Vimlaben Harshadbhai Kanabar","22.29475500","70.79127990","15/A Jagnath Plot Yagnik Road Rajkot. ","3","Red"],["Mayurdhvajsinh","22.28498600","70.77057100","Tirth New college wadi main road opp. Samrajy apartment Kalawad road Sau.uni.area","2","Brown"],["Kaushal Harish","22.29475900","70.79115800","Jagnath Plot Rajkot.","4","Red"],["Rakesh Arjanbhai Hapaliya","22.28685900","70.77458900","B-102 Shrushti apartment Rajkot. ","5","Red"],["Jitentdra M. Savaliya","22.27312100","70.77423800","Tapan society Nana mava Rajkot. ","8","Red"],["Mehul Kotecha","22.29399300","70.77250300","Saurashtra kala Kendra main road 202 ekta appartment Rajkot. ","6","Red"],["Dhartiben Hapaliya","22.28666380","70.77459410","B-102 Shristy apartment Kalavad road Rajkot. ","7","Red"],["Ashiyana Kureshi ","22.27501350","70.82110670","Jungleswar 27  Rajkot","12","Red"],["Jiluben Jummabhai ","22.27510270","70.81972300","Jungleswar  26 Rajkot","11","Red"],["Jay Sorathiya","22.25883100","70.75640000","Sanidhya Green ApartmentField Marshal roadRajkot","9","Red"],["Altaf Allarkha Patani","22.27506410","70.82097120","JangaleshwarStreet No-27 Rajkot","10","Red"],["Riyaz Altaf Patani","22.27499180","70.82065510","27 -  Jungleswar  Rajkot ","14","Red"],["Sahil Dodriya Jusaif","22.27476480","70.81855100","2 -  Jungleswar  Rajkot ","16","Red"],["Zarinaben  Alfaf Patani","22.27503920","70.82083420","27 -  Jungleswar  Rajkot ","13","Red"],["Emitiyaz Dakora ","22.27466130","70.81764380","Neelam Park Jungleshwar","17","Red"],["Imtiaz Patani ","22.27498570","70.82053300","27 -  Jungleswar  Rajkot ","15","Red"],["ARIFBHAI UMARBHAI PATANI ","22.27375930","70.81764070","SIYANI NAGAR   ST -1  KOTHARIYA ROAD RAJKOT ","19","Red"],["BABY  SIMA ARIF ","22.27585010","70.82071270","JUNGLESWAR - 24  RAJKOT ","18","Red"],["KHERUNBEN HAMID","22.27412820","70.81936680","JUNGLESHWAR RAJKOT","20","Red"],["SEEMA AARIF PILUDIYA","22.27586010","70.82074300","24- JUNGLESWER  RAJKOT ","21","Red"],["ALLARAKHA IBRAHIM MADHAN ","22.27504200","70.81943160","1- JUNGLESWER  RAJKOT","23","Red"],["AARIFBHAI YUNUSBHAI PILUDIYA ","22.27583020","70.82065180","24- JUNGLESWER  RAJKOT","22","Red"],["AFSANA NASIR PILUDIYA","22.27499350","70.81972840","JUNGLESHWAR 26 RAJKOT","26","Red"],["CHUDASAMA FIROZ","22.27581250","70.82061030","JUNGLESHWAR 24 RAJKOT","25","Red"],["NASEEM DILAVAR","22.27577080","70.82041150","JUNGLESHWAR 24 RAJKOT","24","Red"],["DILDAR YUSUFBHAI BALOCH ","22.27577080","70.82045980","24- JUNGLESWER  RAJKOT ","27","Red"],["ANWAR KASAM GHADA","22.26197550","70.81262300","Raj laxmi society near hudko police chowki","28","Red"],["HANIF ANWAR KHIRA","22.27442100","70.81942600","LEva Patel Society street no 2","29","Red"],["JUBEDABEN NURMAMADBHAI PATANI","22.27523830","70.82011210","26- JUNGLESWER  RAJKOT ","34","Red"],["NURMAMADBHAI SUMARBHAI PATANI","22.27522310","70.82005570","26- JUNGLESWER  RAJKOT ","33","Red"],["JULUBEN GANIBHAI ODIYA","22.27519070","70.81993530","26- JUNGLESWER  RAJKOT ","32","Red"],["PIPARWADIYA GANI SULEMAN","22.27517110","70.81986530","26- JUNGLESWER  RAJKOT ","31","Red"],["SAYED HABIBMIYA ZUSAAMIYA","22.27451460","70.81980970","Ankur SocietyJUNGLESWERRajkot","30","Red"],["AMMA MAHMAD KURESHI ","22.27762480","70.82013880","  6- JUNGLESHWAR  RAJKOT","36","Red"],["RAVI AKBARI","22.26790050","70.80705460","SAHKAR SOC. ST NO 8 RAJKOT","35","Red"],["TASLEEM AMIN DODHIYA ","22.27488640","70.81854030","2- GANDHI SCO. JUNGLESHWAR  ","37","Red"],["NASIMBEN YUSUFBHAI ","22.27472910","70.81933680","BHAVANI CHOEK LEVA PATEL SOC. JUNGLESHWAR RAJKOT","38","Red"],["MOMEEN ZIKAR ","22.27562240","70.82062930"," 25- JUNGLESHWAR   RAJKOT","39","Red"],["ZIKAR BAPU CHOPRA","22.27561020","70.82056400"," 25- JUNGLESHWAR   RAJKOT","40","Red"],["Shakilbhai Yunusbhai Mundas","22.27493280","70.81935850","Leva patel street no 1 Jangleshwar","41","Red"],["AVESH IKBALBHAI RAJKOTIYA","22.27571870","70.82017010","JUNGLESHWAR 24","42","Red"],["RUKHSANABEN IKBALBHAI CHUDASAMA","22.27565690","70.82004930","JUNGLESHWAR 24","43","Red"],["JAMILABEN FIROJBHAI CHUDASAMA","22.27568680","70.82018400","JUNGLESHWAR 24","44","Red"],["FINAZBEN SHAHIDBHAI KURESHI","22.27267930","70.81911100","ANKUR SOCIETY","45","Red"],["TANVIR AHANKA","22.27412940","70.81932920","Leva Patel Soc. Jungleshwar","46","Red"],["FARIDABEN BLOCH","22.27578750","70.82049130","JUNGLESHWAR-24","47","Red"],["SAHIL DILDAR BLOCH","22.27579680","70.82052780","JUNGLESHWAR-24","48","Red"],["BODU RAZAK ODIYA ","22.27518080","70.81996680","JUNGLESWAR   26 RAJKOT ","49","Red"],["PARSOTAM SHIVA AKBARI ","22.26772590","70.80705670","KRISHNJEET SOC. -3  RAJKOT ","50","Red"],["AADIL HUSEN PATANI","22.27528880","70.82039090","JUNGLESWAR   RAJKOT ","51","Red"],["MAHBUB JIKAR CHOPDA","22.27551840","70.82020450","JUNGLESWAR -  RAJKOT ","52","Red"],["FARUK JIKAR CHOPDA","22.27550500","70.82014230","JUNGLESWAR -  RAJKOT ","53","Red"],["YUSUFBHAI MAHAMAD MADAS ","22.27498200","70.81923950","Leuva Patel 1 JUNGLESWAR -  RAJKOT ","54","Red"],["SAHIL YUSF MADAS ","22.27498570","70.81926450","Leuva Patel 1 JUNGLESWAR -  RAJKOT ","55","Red"],["RESHMA HABIBMIYA SAIYAD","22.27269170","70.81904660","Ankur Society Jungleshwar","56","Red"],["EBRAHIM KASAM BABI","22.27565590","70.82074730","JUNGLESHWAR-25","57","Red"],["PARWEZ HUSEIN PATNI","22.27566100","70.82084360","JUNGLESHWAR-25","58","Red"],["IQBAL GIGA HALANI","22.27288960","70.81900640","ANKUR SOC. JUNGLESHWAR","59","Red"],["YASHMIN IQBAL HALANI","22.27286270","70.81900060","ANKUR SOC. JUNGLESHWAR","60","Red"],["SHAHID IQBAL HALANI","22.27307150","70.81895540","ANKUR SOC.  JUNGLESHWAR","61","Red"],["MUSKANBEN SOHILBHAI VAID","22.27400840","70.81726470"," PRANAMI CHOK BAGDAI SAME JUNGLESHWAR","62","Red"],["SNEHALKUMAR ARVINDBHAI MAHETA","22.28742460","70.79713180","Manhar plot-8 Rajkot","63","Red"],["","22.27404560","70.81722040","","64","Red"],["","22.27402990","70.81719320","","65","Red"],["","22.27400520","70.81717150","","66","Red"],["","22.27398760","70.81721490","","67","Red"],["","22.27404140","70.81725790","","68","Red"],["","22.27400130","70.81727950","","69","Red"],["","22.27401220","70.81721870","","70","Red"],["","22.27407030","70.81725920","","71","Red"],["","22.27398060","70.81710880","","72","Red"],["","22.27409270","70.81735840","","73","Red"],["","22.27415010","70.81718630","","74","Red"],[" MUSABHAI JEEVABHAI CHANIYA","22.27449920","70.81928630","Leuva patel soc. 4","75","Red"],["BHARATIBEN DIPAKBHAI AAUJI","22.29714030","70.75728030","GURUJI NAGAR QTR SADHUVASVANI ROAD","76","Red"],["Reshmaben Hanifbhai Theba","22.27447980","70.81907410","Leuvapatel soc. 1","77","Red"],["mohmad Asharafbhai Theba","22.27451930","70.81914700","Leuva Patel Soc.1","78","Red"],["Aakib Rahimbhai Piparvadiya","22.27235630","70.81919370","Ankur society  3","79","Red"],["Mustak A Kadri","22.27227490","70.81782770","Ankur society Bhavani Chowk","80","Red"],["Archana Kaliyandas Agrawat","22.28088850","70.75618570","Kevalam Residency Block No 80 Kalavad Road","81","Red"],["Jasumatiben Laxmidas Vishnu","22.28097980","70.75611090","Kevalam Residency Block No 80 Kalavad Road","82","Red"],["Hasuben Munabhai Rathod","22.31220280","70.79799700","Gayakwadi  Kitipara  junction Plot","83","Red"],["Isani Vasant Ramanuj","22.28087010","70.75602620","Kevalam Residency Kalavad Road","84","Red"],["Dr Svati Madhusudan","22.31674510","70.79345790","Amrnath parkprasna nagarjamnagar road","85","Red"],["Arvind Devraj Jethva","22.30870190","70.76639920","Dharam Nagar street no 1 ","86","Red"],["Samir Hasmukh Barot","22.30284750","70.75794380","Santiniketan Park StNo 1Raiya Road ","87","Red"],["Jasvantuben Mansukhbai Bhatti","22.27493710","70.81156560","Anand NagarAjanta ParkShiv Shakti ChowkKothariya Main Road","88","Red"],["Yaminiben Chavda","22.33025590","70.78848300","Nathdwara Society-1Rail nagar","89","Red"],["Malhar Nirav","22.25996260","70.78374320","Shreenathji Society street 7Mavdi main road","90","Red"],["Somabhai Rathod","22.28268090","70.82703380","Ambedkar nagarAji vashat near 80 feet road","91","Red"],["Rohitbhai Dadhaniya","22.30452290","70.76492490","Satadhar parknanavati chowk","92","Red"],["Dr Smitha Chandubhai","22.30391620","70.80110320","Civil Hospital Rajkot","93","Red"],["Dimpalben Parmar","22.25996260","70.78374320","Shreenathji Society street 7Mavdi main road","94","Red"],["KALPANA RAJESH CHAVADA","22.30292290","70.80491920","DANAPITH JUNAGADHNO UTARO RAJKOT","95","Red"],["RUSHIBHAI RAJESHBHAI CHAVADA","22.30297510","70.80470440","DANAPITH JUNAGADHNO UTARO RAJKOT","96","Red"],["MEENABEN AJITHISI PARMAR","22.32663370","70.79076720","RAIL NAGAR BHAGAVATI HALL NATHADWARA PARK","97","Red"],["AJITHSI PRATAPSI PARMAR","22.32685640","70.79080270","RAIL NAGAR NATHADWARA PARK ST HALF RAJKOT","98","Red"],["Rajendrabhai Patel","22.27203560","70.76974420","Silver point 312Opp-Sastri nagar","99","Red"],["DR MEGHAVI BHAPAL","22.30147510","70.78034560"," SAIKUNJ ANAJANI SOC RAIYA ROAD RAJKOT RAJKOT","100","Red"],["DR MANISHA PANCHAL","22.30663900","70.78049720"," ST NO 2 BLOCK NO 70 GREEN PARK AIRPORT ROAD RAJKOT","101","Red"],["Zarinaben gafarbhai","22.29523890","70.80985350","hathikhana rajkot","102","Red"],["Prashan sanjaybhai vanzara","22.30173600","70.77923530","piyush 6 pragatinagar raiya road","103","Red"],["RAJESH kanjibhai  CHAVADA","22.30311670","70.80458160","DANAPITH JUNAGADHNO UTARO RAJKOT","104","Red"],["Ravibhai vijaybhai bhati","22.27797020","70.76324190","g18 vrundavan soc. kalavad road","105","Red"],["Dr Jigarsinh Jadeja","22.27423650","70.76373080","A 104Pradhyuman Green CityKalavad Road nana Mava","106","Red"],["Dr Ankit Dineshbhai Makadia","22.28712400","70.76966400","","Zeel 4 Royal Park Near Dhumketu HallKKV ChowkKalavad Road","107","Red"],["Devangbhai shivubha parmar","22.27261600","70.78854590","chandreshnagar mavdi","108","Red"],["Tejpalbhai Tomar","22.26562780","70.78414400","uday nagar oppo radhika restaurant 150ft rd mavdi","109","Red"],["zeel dineshbhai makadiya","22.28680310","70.76979500","zeel royalpark kalawad road","110","Red"],["bhanuben dhirubhai solanki","22.33010700","70.78869760","shree nathdwara park railnagar","111","Red"],["Rajdeep sinh parakramsinh","22.27000930","70.79163710","naval nagar 3","112","Red"],["hardikbhai arvindbhai purohit","22.26839140","70.79029580","krisshna nagar swaminarayan mandir","113","Red"],["parth tapon satra","22.29476240","70.81014320","ramnath qtr hathi khana street","114","Red"],["ushaben madhukarbhai","22.27804710","70.76527000","ramkrishna nagar street no 5 kalawad rd","115","Red"],["NILESH MANSUKHBHAI KUKADIYA","22.25573520","70.80748990","SHRADHDHA PARK 40 FT ROAD NEAR MANOHAR VIDYALAYA","116","Red"],["ASHISH ASHWIN BHUT","22.30301480","70.80019510","C23 FILTER HOUSE GOVT QTR","117","Red"],["Payal Mohanbhai Sasiya","22.30575050","70.76601660","Nandanvan Avas  Nanavati chowk","118","Red"],["vanita bechar rukadiya","22.26900490","70.78872050","navalnagar 9 mavdi main road","119","Red"],["santoshbhai revansinh Houde","22.26896340","70.76834290","panchratna 4 nana mava main road","120","Red"],["BHANUBEN MAHESHBHAI BAGDAL","22.25546710","70.80752210","SHARDHA SOC STREET NO 4 KOTHARIYA MAIN ROAD","121","Red"],["Arif Hussain Khokhar","22.30057010","70.78057410","Raiya Road Bh Amarpali Nehru nagar 5","122","Red"],["Arun Yogendra Pasvan","22.28588170","70.77082480","Peredise Apartment Royal Park Street no 3Near KKV Hall Rajkot","123","Red"],["Nileshbhai Navnitlal Zikariya","22.28975480","70.79947290","302-Avadh Apartment23/24 Prahlad Plot ","124","Red"],["Rekhaben Yogeshbhai Kher","22.26580270","70.81109530","Morari Nagar 3Nanda Hall Babriya Colony","125","Red"],["Binaben Ajaybhai Mauliya","22.26372700","70.77429140","21Om Nagar","126","Red"],["Bhvnaben Vijaybhai Tanti","22.27479930","70.78303050","ShradhaKings Land Park-B Plot No 6240 Feet Ramani Motar garriage roadMavdi Plot","127","Red"],["Vijaybhai Gobarbhai Tanti","22.27479910","70.78303010","ShradhaKings Land Park-B Plot No 6240 Feet Ramani Motar garriage roadMavdi Plot","128","Red"],["Sandip Nathabhai Makwana","22.30033990","70.77560010","Hanuman Madhi chowkRaiya Road","129","Red"],["Radhika Arjun Kalariya","22.29235110","70.77704580","801 shaligram appartment kotecha chok","130","Red"],["Neelamben Denishbhai Kalawadiya","22.29077410","70.76194440","Garden City Sadhuvasvani Road","131","Red"],["shril Jayeshbhai kalavadiya","22.29066490","70.76229810","Garden City Sadhuvasvani Road","132","Red"],["Rimple Prakash Kher","22.26565380","70.81106310","Morari Nagar","133","Red"],["Arunbhai Bhagvan Thakrar","22.30624310","70.78194500","Airport Road","134","Red"],["Vivek Dineshbhai Parmar","22.28855140","70.79324350","Ramkrushna Nagar","135","Red"],["Divyesh Hansrajbhai Parmar","22.25454780","70.78674990","BL No 15 Astha ApartmentAstha Residency  150 Feet Ring Road Mavdi","136","Red"],["Denish Kalariya","22.29077410","70.76194440","1001 Gardencity TowerOrchid HouseSadhuvasvani Road","137","Red"],["Arjun Anantbhai Kalariya","22.29228310","70.77729170","801 Shaligram Apartment Nirmala Convent Road","138","Red"],["VIREN VIJAYBHAI TANTI","22.27479730","70.78303130"," SHRADDHA KINGS LAND PARK B PLOT 62 40 FEET RAMANI MOTOR GAURAGE MAVDI PLOT","139","Red"],["LALITABEN GOBARBHAI TANTI","22.27479610","70.78303190"," SHRADDHA KINGS LAND PARK B PLOT 62 40 FEET RAMANI MOTOR GAURAGE MAVDI PLOT","140","Red"],["Bhartsinh Zala","22.28330740","70.78429060","12-BShree ColonyPashupatinath Mandir StreetPanchvati Socitey","141","Red"],["Bhavinbhai Narjanbhai  Daftary","22.29223440","70.76020840","402-Shree Maruti Manor ApartmentOpp-Gangotri DairySadhuvasvani Road","142","Red"],["Neha Bhavinbhai  Daftary","22.29223410","70.76020640","402-Shree Maruti Manor ApartmentOpp-Gangotri DairySadhuvasvani Road","143","Red"],["Madhuben Dineshkumar Khant","22.28587290","70.77427240","Shree UmiyakrupaBansi Park Street no-2Opp Wockhardt Hospital","144","Red"],["Husain Mohmadbhai Chauhan","22.27236730","70.81751610","Daval Shah ManjilAnkur Socity-9Corner Opp Vasila Floor Mil Bhavani Chowk","145","Red"],["Anantrai Kababhai Kalaria","22.29228165","70.77729115","Shaligram Apartment BL NO 801 Nirmala Road","146","Red"],["Dipak Hasmuk Vora","22.28297210","70.75448690","Pushkardham Strret No 6 Rajkot","147","Red"],["Renuka jayvantbhai zinzuvadiya","22.29984720","70.82479730","kanak nagar santkabir road","148","Red"],["Kiritbhai narotambhai","22.27535000","70.78700110","Rameshwar park mavdi","149","Red"],["Parimalbhai champakbhai shukla","22.29641450","70.79414960","Rail nagar copper green city","150","Red"],["Ashokbhai karamshibhai ramani","22.30706100","70.81640950","vidhi Ranchhod nagar 28","151","Red"],["Dineshkumar Jamnadas","22.28481060","70.77596760","Shri umiya krupa banshi park kalawad road","152","Red"],["Hiralal Jamnadas","22.28532720","70.77575340","Shri Ram Kutir Banshi park kalawad road","153","Red"],["Kailash Ramsumiranbhai Shukal","22.30617790","70.76952930","Shivam Park GandhigramRingroad","154","Red"],["Madhukar Bhoja Manvar","22.27916910","70.76473600","RK Nagar Kalavad Road","155","Red"],["Amit Hansraj Manvar","22.25433020","70.78672390","Ashtha ResidencyRing road","156","Red"],["Indiraben Krushnakantbhai Alodariya","22.28985300","70.76822300","Prathana ApartmentmJalaram Raviratna ParkmUniversity road","157","Red"],["Archana Devi","22.28326400","70.78448410","Shree colony behind panchayat society","158","Red"],["Raju Mepa","22.29421940","70.76795970","Anamika society street no 2 near 150 ft road","159","Red"],["jaysukhbhai jamanbhai sangani","22.26146330","70.78189510","Mavdi Main Road ","160","Red"],["Rasilaben Dilipbhai sagpariya","22.27089950","70.79025230","Mayani chok rajkot","161","Red"],["Dadhaniya Naliniben","22.28520950","70.78107120","Kings Hight Vidhyanikunj main road near amin marg","162","Red"],["Roshanben Naushadbhai Mir","22.29981510","70.78200500","Amrapali nehrunagar rajkot","163","Red"],["Ratanben keshav dave","22.29540340","70.83071820","Dudhsagar Road behind Vimana Davakhanu","164","Red"],["Hasmukh Mohanbhai Manek","22.31106640","70.75704130","Sopan HeightsRaiya Road","165","Red"],["Jayaben Kesubhai Sagpariya","22.24316260","70.81170100","Kothariya Rajkot","166","Red"],["Daxaben Kishorbhai DAVE","22.27834730","70.81403050","Rameshwar mandir baju kothariya main road","167","Red"],["Alpaben Bhavesh Bhadja","22.29338680","70.75745300","Panjuri Palace behind Harshil Park","168","Red"],["Bhaveshbhai Ravjibhai Bhadja","22.29324800","70.75733500","Mavdi plot Rajkot","169","Red"],["Dipak Ramani","22.25533960","70.78586500","Amrut vatika150feet ring road","170","Red"],["Bavalal Devraj kalariya","22.28712890","70.78113320","UtakrashSilver Park-6Amin Marg","171","Red"],["Kailashben kurjibhai patel","22.30649370","70.77122180","Satyanarayn ParkGandhigram ","172","Red"],["Ramsaran Sukla","22.31172800","70.76854840","Shivam ParkRamapir Chowkdi","173","Red"],["Raghavjibhai Savaliya","22.25388110","70.78778510","PranamBlock-1 Ashray Bunglow Astha Residency","174","Red"],["Dineshbhai Odedra","22.27921300","70.76416540","R.K.Nagar Street No 1 Behind Water TankKalavad Road","175","Red"],["Chirag Arvindbhai Panesariya","22.26071560","70.78980460","Umiya Chowk Dwarkadhis Socity Street No 3","176","Red"],["Bhanu Shamji Pipaliya","22.25373740","70.78788220","Mavdi PlotAshta Residency Ashray","177","Red"],["Ranjanben Jayantibhai Raiyani","22.26583710","70.81121790","RaiyarajAyodhyanagar Street No 1Navnit HallKotharia Main RoadBhakti Nagar","178","Red"],["Sameer Navsadbhai Mir","22.30022920","70.78055390","Rajanagar 1near-raja masjid chowkstreet no 5Opp-Sadguru tirthdham","179","Red"],["Jayeshkumar Indukumar Upadhyay","22.28833230","70.80315640","Ghanshyam 9/18LakhsmivadiMilpara Main RoadBhakti Nagar","180","Red"],["Mayur Jayendrakumar Makhech","22.27903610","70.76809700","Asopalav Block-60Satya Sai Heart Hospital Road B/H Atmiya College","181","Red"],["Shreya Kailashkumar Shukla","22.31022110","70.76447030","Shivam park behind sterling hospital","182","Red"],["Reena Kailashkumar Shukla","22.31022110","70.76447030","Shivam park behind sterling hospital","183","Red"],["Aditya kailashkumar shukla","22.31022110","70.76447030","Shivam park behind sterling hospital","184","Red"],["Shatrugna jaysukhlal ardesana","22.31022110","70.76447030","Murlidhar chok rajkot","185","Red"],["Ravirajsinh Pratapsinh Jadeja","22.28750270","70.76662830","Block-A9Momai KrupaSantivan Socity-2near Panchayat Chowk ","186","Red"],["Vajubhai Maganbhai Sanura","22.24551830","70.80206530","riddhi Sidhi Scoiety Steert no 1Near gondal Chowkdi","187","Red"],["Atulbhai Chimanlal Modi","22.29048480","70.77015440","PankajJalaram-3Street No 2Near Indira Circle","188","Red"],["Yash Ramesh Padaliya","22.28932630","70.78376710","Valkeshwar Apartment Flat No 901Amin Marg","189","Red"],["Khusbu Jaydeep Kariya","22.28896890","70.80508490","12Karanpara101-Abhiyan ApartmentRajkot","190","RED"],["Jaydeep Bharat Kariya","22.28896890","70.80508490","12Karanpara101-Abhiyan ApartmentRajkot","191","RED"],["jayanti Kanji Pansuriya","22.27471110","70.81061280","Anand ParkJakat Naka PaseRajkot","192","RED"],["Twara Darshan Kiyada","22.24188660","70.81079900","near Pani Tankikothariy Gamrajkot","193","RED"],["Prabhaveb satrugan Ardesna","22.31022110","70.76447030","403murli manor apartmentMurlidhar chowkrajkot","194","RED"],["Dhirajlala Chatrbhujbhai Dadhniya","22.28597330","70.78152920","Kings height-2Amin MargRajkot","195","RED"],["Poladiya Rohit","22.26742200","70.76939090","E113 Shastri Nagar  Nana Mauva Road","196","RED"],["Tank Bhavesh Jayanti","22.26056660","70.79356060","Gokuldham SociteyRajkot","197","RED"],["Urvi Kishan","22.23498030","70.81906710","Kothariya Gam","198","RED"],["Kishan Keshu","22.23498330","70.81905710","Kothariya Rajkot","199","RED"],["Kavya Amit Manvar","22.25454680","70.78674690","Astha ResidencyAstha ApartmentRajkot","200","RED"],["Pragnesh Mukundrai Dave","22.26785590","70.79230560","Shrimad Krishna nagar street-9nr swaminarayn Chowkrajkot","201","RED"],["Jaynendra Santilal Modi","22.29321970","70.78697130","102-Sanskruti apartment11-sardar nagarpuajar telecome ni same ni seriastron chowk","202","RED"],["kishan prakash raval","22.24551930","70.80206430","Gondal chowkdiridhi sidhi apartment","203","RED"],["Dharmesh ramani","22.27713330","70.80042610","Dhebar roadrajkot","204","RED"],["Vijaybhai Arvindbhai","22.31859870","70.81595630","Vaidik vihar scoiety-2morbi road","205","RED"],["Rupalben Rakeshbhai rajdev","22.28695200","70.80805500","Vimal-3Gundavadi chowk","206","RED"],["Rinkal Tilava","22.26445800","70.79311970","1 Alankar apartmentfulvadi hallguruprasad chowk","207","RED"],["Milan kotecha","22.29059980","70.80423610","Karnpara 13","208","RED"],["Damji bachubhai jagani","22.30156900","70.82628320","new shakti societysantkabir road","209","RED"],["Padma Premji","22.31509110","70.79112440","Parsana Nagar","212","RED"],["uma rasik","22.26885050","70.78894570","Naval Nagar","213","RED"],["Jitubhai Bachubhai Jagani","22.30036380","70.81775630","shakti society 5 sant kabir road","217","RED"],["Amarben Humbal","22.26393510","70.81691060","kothariya road diptinagar main road","218","RED"],["Rajni mansukhbhai dave","22.30534720","70.75589400","block a301 jinesis height samrudhdhi society rajkot","219","RED"],["Radhaben jayantibhai Humbal","22.27861570","70.80355200","Mayur park bhakti nagar","220","RED"],["Jayantbhai Devdabnhai Humbal","22.27861570","70.80355200","Mayur park bhakti nagar","221","RED"],["bhagvanjibhai vaghjibhai","22.31051790","70.76446860","dharamraj park gandhigram","222","RED"],["Rajni pratap jadeja","22.28768890","70.76641140","panchayat road shantivan society","223","RED"],["Harshida Hasu","22.27513260","70.80439070","Gayatrinagar Main road","224","RED"],["Ramesh Manji Vavesa","22.31582890","70.83870790","pitru park sheri khodiyar park navagam","225","RED"],["Sanjay Chhagan Radadiya","22.25972840","70.78127940","Real prime D402 mavdi chokdi","226","RED"],["Shaileshkumar devshibhai hapaliya","22.26158800","70.78485300","rameshwar society  rajbank vali street mavdi chokdi","227","RED"],["Hinaben divyeshbhai majethiya","22.29482400","70.77428490","street no2 saurashtra kala kendra","228","RED"],["Divyeshbhai Ramniklal majethiya","22.29482400","70.77428490","street no2 saurashtra kala kendra","229","RED"],["Rajendra sinh vanrajsinh jadeja","22.30706100","70.78870740","janta janardan society oppo rajiv gandhi statue","230","RED"],["Girishbhai meghjibhai patel","22.29031250","70.77229830","sahara tower  jagdishan marg jalaram -2 uni road","231","RED"],["jyotsnaben pankajbhai rajvadiya","22.29949400","70.78315040","ram-3 dhruvnagar near amrapali cinema","232","RED"],["Neetben dhamjibhai Jagani","22.30490360","70.83043640","Shakti scoiety  Bh Vimo HospitalSantkabir road","233","RED"],["Daxaben Jeetubhai Jagani","22.30492360","70.83049640","Shakti scoiety  Bh Vimo HospitalSantkabir road","234","RED"],["Vasantben Dilipbhai Jagani","22.30499360","70.83041640","Shakti scoiety  Bh Vimo HospitalSantkabir road","235","RED"],["Rakeshbhai Chimanbhai Madrani","22.26967990","70.80235480","Shakar socitey 3rajkot","236","RED"],["Dheerubhai Haribhai Chanadma","22.25055480","70.78368930","Opp-Marvel hospital  Madhav Gate150 Feet ring road","237","RED"],["Meenaben Dhirajlal Rojasra","22.27719010","70.80562580","Vaniyawadu street-9near jalaram chowkbhaktinagar","238","RED"],["Dhirajlal Raghavjibhai Rojasra","22.27718010","70.80563580","Vaniyawadu street-9near jalaram chowkbhaktinagar ","239","RED"],["Mehul Girishkumar Madiya","22.27675200","70.81129460","Anand Nagar Block 27","240","RED"],["Shabir Valibhai","22.25517050","70.81811160","GaneshnagarMorbi road .","241","RED"],["Risva Jitu Jagani","22.30499160","70.83041640","Shakti scoiety  Bh Vimo HospitalSantkabir road","242","RED"],["Bansi Jitu Jagani","22.30499550","70.83041640","Shakti scoiety  Bh Vimo HospitalSantkabir road ","243","RED"],["Vivek Jitu Jagani","22.30499323","70.83041641","Shakti scoiety  Bh Vimo HospitalSantkabir road","244","RED"],["Naimishbhai Virbhanibhai Humbal","22.26378310","70.81702770","Dipti Nagar Main Road Kothariya","246","RED"],["Virbhanubhai Ghusabhai","22.26375810","70.81710060","Diptinagar Main RoadKOthariya","247","RED"],["Masuben Prabhatbhai Aagariya","22.30713380","70.80868660","12 - Khodiyar Para Soceity ","248","RED"],["Varjangbhai Jayatabhai Hubal","22.27867980","70.80316360","Bhaktinagar Circle Opp Jaynath ","249","RED"],["Hardev Varjangbhai Humbal","22.27858570","70.80327680","Bhakti nagar Circle  Opp Jaynath ","250","RED"],["Vanrajbhai Jaytabhai Humbal","22.27881030","70.80309880","Bhakti nagar Circle  Opp Jaynath ","251","RED"],["Geetaben Vanrajbhai HUmbal","22.27872740","70.80301570","Bhakti nagar Circle  Opp Jaynath ","252","RED"],["Janviben Vanrajbhai HUmbal","22.27905190","70.80294740","Bhakti nagar Circle  Opp Jaynath ","253","RED"],["Nirbhay Vanrajbhai Humbal","22.27890860","70.80237940","Bhakti nagar Circle  Opp Jaynath ","254","RED"],["Dipaliben Arjunbhai Humbal","22.30005630","70.80522030","Swaminarayan Park - 1Bhaktinagar Circle","255","RED"],["Jyotiben Ratnakar Karnik","22.30994600","70.79755460","8-Junction Plot Oopp Morbi House","256","RED"],["Narendrabhai Bharatbhai","22.27553050","70.80556710","3-Gayatri Nagar 7 Bhajaljit ","257","RED"],["Dhsnviben Narendrabhai Ardeshna","22.27584890","70.80560070","Gayatri Nagar 3 7 Bhajaljit ","258","RED"],["Vaishaliben Narendrabhai Aardeshna","22.27562050","70.80571000","Gayatri Nagar 3 7 Bhajaljit ","259","RED"],["Drashti Narendrabhai Ardeshna","22.27552060","70.80597940","Gayatri Nagar 3 7 Bhajaljit ","260","RED"],["Jagdishbhai Devrajbhai Boricha","22.27151860","70.80580030","Valkeshwar 6  Opp Hasan vadi 4 ","261","RED"],["Ashmitaben Subhashbhai Boricha","22.27166350","70.80577520","Valkeshwar 6  Opp Hasan vadi 4 ","262","RED"],["Firozbhai Mohmadbhai Pathan","22.27241090","70.82036820","Jungleswar RMC Qua","263","RED"],["Chandubhai Becharbhai Dabhi","22.28463630","70.76041480","Ghanshyam Nagar Kothariya","264","RED"],["Benaben Nirmalbhai Maru","22.27167480","70.81875440","Sagar Meghani Nagar - 3","265","RED"],["Nanbaiben Nanabhai Maru","22.27174740","70.81872970","New Sagar 4 80 Ft Road  Kothariya","266","RED"],["Girdhar Tapu","22.30641620","70.77046950","Gandhigram  Rajkot","267","RED"],["Jagdish Mohan","22.25661610","70.79695520","Narmad Township","268","RED"],["Surbhiben","22.30032350","70.81827260","Santkabir Road","269","RED"],["Bachu Nagji","22.30033290","70.81791380","Santkabir Road","270","RED"],["Bharati Ashok","22.32589380","70.79331320","Rail Nagar Rajkot","271","RED"],["Dr Prakash Modi","22.30731540","70.79840230","E-1 Medical Quarters Rajkot","272","RED"],["Ilaben Dilipbhai Chavda","22.31406760","70.79202360","Block No 119 Shree Nidhi Shantiniketan Park-3 Parsana nagar-16 Nr Jamnagar Road Rajkot","273","RED"],["Dr T K M Easwar","22.29130120","70.79512870","201 Sankalp Appt 2 Jagnath Plot Dr Yagnik Road","274","RED"],["Dr Ankur Sinojia","22.33242530","70.78619650","E 307 Shyamji Krushna Verma TownshipNr Sunrise School Rajkot","275","RED"],["Tejalben Bhavinbhai Patadiya","22.29405000","70.79349190","Jagnath 14/13KasturiDr Yagnik Road","276","RED"],["Deepakkumar Bhupatrai Mathukia","22.29350680","70.81036460","Adinath Vardhman Nagar Street No 09","277","RED"],["Truptiben Sandipbhai Manavar","22.27782710","70.76414490","Yogi Park Near Rani Tower","279","RED"],["Puriben Dhirubhai Agariya","22.30739150","70.80846540","19-Khodiyar Para Society ","280","RED"],["Vanitaben Manishbhai","22.30007940","70.81617610","4 Balkrushna Block No 134 Saint Kabir Road","281","RED"],["Nitinbhai Ramodbhai Adeshara","22.28651120","70.80463450","7 Laxmivadi","282","RED"],["Nishaben Nitinbhai Adeshara","22.28624240","70.80458640","7 Laxmivadi","283","RED"],["Amarben Ravatbhai Gujaraia","22.27023050","70.81332650","8 Sitaram Society Kothariya Main Road","284","RED"],["Alpaben Kanabhai Boricha","22.26669490","70.82832080","12 Radhakrushna Society ","285","RED"],["Kanabhai Haribhai Boricha","22.26659570","70.82785870","12 Radhakrushna Society ","286","RED"],["Bharatbhai Jayantibhai Pansuriya","22.32775420","70.82187060","Anand Park Morbi Road","287","RED"],["Bharatbhai Pragjibhai Savaliya","22.32803200","70.82243080","1 Ananad Park Society Morbi Road","288","RED"],["Nilamben Amolbhai","22.31170820","70.79935870","Kantik House Junction Plot ","289","RED"],["Jignesh Hasu","22.27468510","70.80397620","Gayatri Nagar ","290","RED"],["Dineshbhai Laxmanbhai Rathod","22.30586260","70.81124010","Mahatma Gandhi Plot Bedi Para","291","RED"],["Dipakbhai Mavjibhai Bechra","22.29076500","70.76851190","Ravi Ratna Park - 5 University Road","292","RED"],["Vallabhbhai Devsibhai Rupareliya","22.27019830","70.78667940","2-Shobhna Society Near Patanjali School Mavdi Plot","293","RED"],["Jayeshbhai Nathabhai Kalariya","22.27142490","70.76757970","104 Royal Shelter Appt Nana Mava Main Road","294","RED"],["chavadiya jadiben gokalbhai","22.27271010","70.79302820","anand bangla chok mavdi main road","295","RED"],["heenaben sidhdhpura","22.28273880","70.76250730","103 ravi jyot appratment snk school road","296","RED"],["dharmeshbhai sidhpura","22.28273880","70.76250730","103 ravi jyot appartment SNK school road","297","RED"],["harish chandra","0.00000000","0.00000000","chandra jagjivan block no f7 merigold residency","298","RED"],["hitesh chandrakant","0.00000000","0.00000000","airport road","299","RED"],["pankaj bhagavan","0.00000000","0.00000000","sant kabir road","300","RED"],["manish navtar","0.00000000","0.00000000","sant kabir road","301","RED"],["madina nizam multani","0.00000000","0.00000000","krushna nagar rajkot","302","RED"],["magan narsi","0.00000000","0.00000000","kothariya road","303","RED"],["naaran devshankar","22.30099330","70.78570490","aadarsh society rajkot","304","RED"],["bharatbhai jentibhai makawana","22.25481260","70.81832760","old ganeshnagar stret 5 kothariya port","305","RED"],["meenaben kasundra","22.28204490","70.76186820","c/10/24 century crystal mall pachal","306","RED"],["subhalaxmi venugopal soni","22.29007590","70.81022290","giriraj jayraj plot 8 palace road","307","RED"],["priyansh venugopal soni","22.29007590","70.81022290","giriraj jayraj plot 8 palace road","308","RED"],["venugopal shyamlal soni","22.29007590","70.81022290","giriraj jayraj plot 8 palace road","309","RED"],["sumitaben vijaybhai sidhdhpura","22.28742330","70.81026660","kevdavadi 22","310","RED"],["sarojben hareshbhai aadesra","22.29420820","70.78988760","shreekul appartment jagnath plot 22/29","311","RED"],["sandipbhai yogeshbhai parmar","0.00000000","0.00000000","punit society kothariya road","312","RED"],["chitranjan jayantilal juthani","22.30164810","70.79843520","yashvi kasturba road bharmal gas agency","313","RED"],["jaydevsinh shaktisinh jadeja","22.29606180","70.77663210","maatrukrupa 4 balmukund nirmal road","314","RED"],["raghubhai bhimjibhai vagadiya","22.24469170","70.78784540","vrundavan vatika matuki restorant pase 80 ft road","315","RED"],["F R Joji","0.00000000","0.00000000","dayamay mata charch old railway station","316","RED"],["gita kishan","22.24452270","70.78423670","meghmaya nagar rajkot","317","RED"],["jafai meraj","0.00000000","0.00000000","mosli line","318","RED"],["naran siva","0.00000000","0.00000000","sitaram nagar bhavnagar road","319","RED"],["jaagrutiben hiteshbhai rathod","22.27332210","70.79346380","4/d maninagar rajkot","320","RED"]];
