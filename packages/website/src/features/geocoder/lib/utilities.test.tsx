import "@testing-library/jest-dom";
import { forwardGeocodeNeighborhoodCouncil } from "./utilities";

describe("Forward Geocode Neighborhood Council", () => {
  it("should return an empty array for a query string that does not match any neighborhood council", () => {
    const result = forwardGeocodeNeighborhoodCouncil("abc");
    expect(result).toEqual([]);
  }),
    it("should return the same results for a query string regardless of case", () => {
      const result1 = forwardGeocodeNeighborhoodCouncil("downtown los angeles");
      const result2 = forwardGeocodeNeighborhoodCouncil("Downtown Los Angeles");
      expect(result1).toEqual(result2);
    }),
    it("should return neighborhood councils that partially match the query", () => {
      const result1 = forwardGeocodeNeighborhoodCouncil("Downtown Los");
      const result2 = forwardGeocodeNeighborhoodCouncil("Downtown Los Angeles");
      expect(result1).toEqual(result2);
    }),
    it("should return an array of GeocodeResult type for input query string", () => {
      const result = forwardGeocodeNeighborhoodCouncil("Downtown Los Angeles");
      expect(result).toEqual([
        {
          type: "Feature",
          properties: {
            OBJECTID: 15,
            NAME: "Downtown Los Angeles",
            WADDRESS: "http://dlanc.com/",
            DWEBSITE: "http://empowerla.org/DLANC",
            DEMAIL: "DLANC@EmpowerLA.org",
            DPHONE: "213-978-1551",
            NC_ID: 52,
            CERTIFIED: "2002-04-27T00:00:00Z",
            TOOLTIP: "Downtown Los Angeles",
            NLA_URL: "navigatela/reports/nc_reports.cfm?id=52",
            SERVICE_RE: "REGION 6 - CENTRAL 2",
          },
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [-118.240257039853432, 34.055608844906011],
                [-118.240378982847588, 34.055685917469866],
                [-118.241333029756944, 34.056288901791774],
                [-118.242405172347219, 34.05696069524712],
                [-118.243059606175052, 34.057354619774721],
                [-118.24342184205851, 34.057586562534617],
                [-118.244450799237782, 34.058297634326216],
                [-118.244869612755366, 34.058622639509743],
                [-118.244884418838211, 34.058634129243252],
                [-118.244898859063269, 34.058645335734823],
                [-118.245171340833693, 34.058863946718951],
                [-118.24563248198892, 34.059253370544091],
                [-118.24617202516778, 34.059720203221467],
                [-118.24652777687389, 34.060052285630178],
                [-118.246624273954282, 34.060149678383624],
                [-118.246720778639869, 34.060249573693739],
                [-118.246835388516359, 34.060371953057455],
                [-118.247315194909902, 34.060932697979332],
                [-118.247864212944876, 34.06158096472813],
                [-118.248728967165917, 34.062588010414963],
                [-118.248777635259714, 34.062643921370118],
                [-118.249285234060366, 34.063227062961779],
                [-118.249469251911137, 34.063431872277263],
                [-118.249641139975068, 34.063601673810119],
                [-118.249855219644331, 34.063803918658358],
                [-118.250311628752641, 34.06417391111642],
                [-118.250361968307203, 34.064125276483843],
                [-118.250475537069264, 34.064016495827005],
                [-118.250972665341322, 34.063540094862049],
                [-118.25133647777497, 34.063193110003425],
                [-118.251593269796203, 34.062946983088715],
                [-118.251690412223411, 34.062855068884694],
                [-118.251764416476817, 34.062764227876791],
                [-118.251833525648834, 34.062687134553876],
                [-118.252003101546407, 34.062536343342146],
                [-118.252042582702657, 34.062492294212063],
                [-118.252105071270023, 34.062411443446976],
                [-118.252169157498543, 34.062315145193068],
                [-118.252198747196346, 34.062265969825454],
                [-118.252224991952502, 34.062215752054414],
                [-118.252242955238188, 34.062151832081028],
                [-118.252321720302618, 34.061996757552087],
                [-118.252341410175163, 34.061956195319702],
                [-118.252573813304309, 34.061612879085409],
                [-118.252734233152822, 34.061375896230658],
                [-118.252813118172085, 34.061259983620552],
                [-118.25340311965796, 34.060385614807572],
                [-118.253493482289585, 34.060244926150872],
                [-118.254002841128795, 34.059456595338133],
                [-118.254181807921157, 34.059142623223671],
                [-118.254314764250637, 34.059227482969824],
                [-118.254445338618609, 34.059310822199109],
                [-118.254567562937638, 34.059388831009514],
                [-118.255647279247441, 34.060077944971958],
                [-118.255715038719586, 34.060109050378159],
                [-118.256058886811161, 34.060264601292573],
                [-118.256799495779177, 34.060602042216516],
                [-118.257105335271405, 34.060741534476342],
                [-118.257168129551005, 34.060770254273216],
                [-118.25720812648369, 34.060779910139786],
                [-118.257471607198667, 34.060898292183467],
                [-118.257719675931511, 34.061009748528797],
                [-118.257758893534685, 34.061027270830081],
                [-118.257815891691138, 34.061052736415697],
                [-118.257881963048334, 34.060942610417307],
                [-118.257887888117054, 34.060932735921789],
                [-118.258182430510345, 34.060455520558676],
                [-118.257968788402593, 34.060228568670354],
                [-118.257965056455546, 34.060224604497499],
                [-118.257476938323975, 34.059706069645543],
                [-118.257408961048057, 34.059633855895754],
                [-118.25732781519585, 34.059546758850345],
                [-118.257276453759673, 34.05949089764669],
                [-118.257281599855617, 34.059490492715334],
                [-118.257448348695206, 34.059477365394983],
                [-118.258307952487755, 34.059409689370611],
                [-118.258364473318053, 34.059539746790755],
                [-118.258405980605588, 34.059614198345756],
                [-118.258460686938477, 34.059683108781336],
                [-118.258512015788057, 34.059738996599485],
                [-118.258581538799376, 34.059799312527623],
                [-118.258632824745931, 34.059831812878677],
                [-118.258675782840996, 34.059852670647537],
                [-118.258718761726755, 34.059871137497367],
                [-118.258796460806408, 34.059897777140677],
                [-118.258837822075293, 34.059908746679447],
                [-118.258877410864116, 34.059919244896641],
                [-118.258941810180815, 34.059932132155957],
                [-118.259006244486116, 34.05994196942774],
                [-118.259070634702638, 34.059946309225751],
                [-118.259121806904545, 34.059945142852577],
                [-118.259187821385282, 34.05993881760152],
                [-118.259286793708668, 34.059921785303871],
                [-118.259334634674346, 34.059910014074617],
                [-118.259397304888992, 34.059890639021198],
                [-118.259441841256589, 34.059873019405231],
                [-118.259501160518226, 34.059845430437967],
                [-118.259553892985821, 34.059814058349978],
                [-118.259616498268826, 34.059769261058655],
                [-118.25966259645584, 34.059730339341684],
                [-118.25969715933492, 34.059699347934178],
                [-118.259759709176734, 34.05963465390581],
                [-118.259787663560161, 34.059600923411004],
                [-118.259810643002339, 34.05956516434965],
                [-118.25987627637123, 34.059432775803479],
                [-118.260692862385653, 34.05978548068358],
                [-118.260722412804526, 34.059731850645413],
                [-118.260970485100685, 34.05935107535894],
                [-118.261182422823964, 34.059026029203089],
                [-118.261614347391287, 34.05830581531972],
                [-118.261214370394029, 34.058150054554886],
                [-118.2597961558523, 34.057554788524179],
                [-118.260353004240514, 34.056665314903476],
                [-118.260384682484357, 34.056614567067484],
                [-118.260799782222151, 34.055949565207811],
                [-118.260903229291785, 34.05578071138369],
                [-118.26143371391035, 34.054917760494781],
                [-118.26169976936167, 34.054484387401601],
                [-118.262000325981049, 34.053995645310891],
                [-118.262140806099808, 34.054052703942666],
                [-118.262396985338796, 34.054157261543899],
                [-118.262838312642089, 34.054344512557847],
                [-118.263613536007355, 34.054680128709329],
                [-118.26373916876895, 34.054733797489881],
                [-118.26379042441117, 34.054755659449299],
                [-118.264112735046595, 34.054893377805406],
                [-118.264841660018831, 34.055199890377352],
                [-118.265552399939622, 34.055498864794707],
                [-118.266143826773018, 34.054599367913717],
                [-118.266659620714492, 34.053815756541269],
                [-118.266892902891129, 34.053459753276293],
                [-118.266965164895325, 34.053349337266191],
                [-118.267147522439373, 34.053079288013691],
                [-118.267191314167789, 34.053014303469851],
                [-118.267395593931951, 34.052711197600466],
                [-118.267648606151894, 34.052334526681385],
                [-118.267289877260836, 34.052170100404304],
                [-118.266326151021715, 34.051727779582265],
                [-118.266208781868798, 34.051673772543019],
                [-118.265812133491721, 34.051514918503017],
                [-118.265126924455203, 34.051241554462891],
                [-118.265078312508066, 34.051222161976355],
                [-118.265056834929737, 34.051213973638291],
                [-118.264222249651155, 34.050894635959168],
                [-118.264175980560779, 34.050875845616034],
                [-118.264037158252975, 34.050820161479763],
                [-118.264830410111699, 34.04955749269017],
                [-118.264841904459828, 34.049539283614671],
                [-118.264551229522596, 34.04949045829175],
                [-118.264525496664405, 34.049484537516527],
                [-118.264492645269684, 34.049479786286227],
                [-118.264459785231793, 34.04947058601369],
                [-118.264436424508148, 34.049464046082406],
                [-118.264424765827343, 34.049460781927529],
                [-118.264264327076276, 34.049415861883425],
                [-118.264191349587236, 34.049395432412219],
                [-118.266230523845039, 34.048115384092235],
                [-118.266238700052483, 34.048106962901905],
                [-118.266352260991908, 34.048036583333193],
                [-118.266625819277664, 34.047867043674692],
                [-118.266993186757858, 34.047645028897577],
                [-118.26733917649878, 34.047448820657905],
                [-118.267658767015547, 34.047255762191611],
                [-118.267991536110017, 34.047055116103046],
                [-118.268266645269435, 34.04688928989502],
                [-118.26847420300264, 34.046761052917148],
                [-118.268650427735807, 34.046641814952004],
                [-118.268899164534517, 34.046488067876403],
                [-118.269256670988824, 34.046282898829347],
                [-118.269436237767096, 34.046177049003944],
                [-118.269661923218848, 34.046041212003232],
                [-118.269899137156457, 34.045898136570607],
                [-118.270223603019687, 34.045685137489151],
                [-118.27044754769004, 34.045522512136777],
                [-118.270706000802861, 34.045312751834345],
                [-118.27100063668388, 34.045064095294229],
                [-118.271165203972231, 34.044914997691365],
                [-118.271339615641921, 34.044747672240561],
                [-118.271591320640468, 34.044494646340929],
                [-118.271686707296482, 34.044389325952039],
                [-118.271793607968561, 34.044271613281076],
                [-118.271839646132648, 34.044217582810141],
                [-118.271892285020769, 34.044163193976232],
                [-118.271958065114703, 34.044089540473067],
                [-118.272270355208121, 34.043689021567644],
                [-118.2725135513287, 34.043359071830572],
                [-118.27257597562209, 34.043268938379128],
                [-118.272659722513424, 34.043137882269534],
                [-118.272768034456419, 34.042948034114168],
                [-118.272909204703041, 34.042711742296362],
                [-118.272991227233419, 34.042558363458944],
                [-118.273045397084218, 34.042467904042852],
                [-118.273102770169842, 34.042347555236667],
                [-118.273163410325253, 34.042216894522184],
                [-118.273233764467719, 34.042028505748881],
                [-118.273328606583959, 34.041757969968387],
                [-118.273392360479207, 34.04156993952877],
                [-118.273452826760035, 34.041386382682589],
                [-118.273609320744839, 34.04079077123135],
                [-118.273633707335321, 34.040677709162402],
                [-118.273680836663274, 34.040453651438064],
                [-118.273717999311202, 34.040210036859364],
                [-118.27374705810719, 34.040011781300024],
                [-118.273774278705901, 34.039756167343981],
                [-118.273806410953796, 34.039488521244571],
                [-118.273888366825943, 34.038811672116317],
                [-118.27393347525171, 34.038474955583126],
                [-118.273968859982631, 34.038192875792902],
                [-118.273980194313069, 34.038126214381641],
                [-118.273997963591555, 34.038008701988744],
                [-118.274009288876286, 34.037939292732212],
                [-118.274017394421421, 34.037894621554109],
                [-118.274030329532238, 34.03781284325644],
                [-118.274044896968206, 34.03772556552574],
                [-118.274062667198621, 34.037608397507746],
                [-118.274103130403006, 34.037365462315371],
                [-118.274140348961765, 34.037139708625745],
                [-118.274187301626739, 34.036862754767078],
                [-118.274267986576405, 34.036303723891074],
                [-118.274356703526607, 34.035678038137881],
                [-118.27436635987425, 34.035603136920727],
                [-118.274376053368172, 34.03553957055469],
                [-118.274403460888792, 34.035341661212485],
                [-118.274434174595498, 34.035146149632922],
                [-118.274468169506321, 34.03494410441327],
                [-118.274495682562971, 34.034778825690715],
                [-118.274508599824273, 34.034691895150303],
                [-118.274516613522749, 34.034619402039468],
                [-118.274523058049056, 34.034571643264471],
                [-118.274529492426893, 34.03452079316628],
                [-118.274534323839205, 34.03448437299415],
                [-118.274537526373678, 34.034454482700653],
                [-118.274542358902508, 34.034418405107125],
                [-118.274547161005003, 34.034373054446192],
                [-118.274555217461355, 34.034313613586392],
                [-118.27456326038326, 34.034250050962413],
                [-118.27457937436499, 34.034131512721437],
                [-118.274585682449484, 34.034042192825488],
                [-118.274592036726048, 34.033966954721237],
                [-118.274595061146599, 34.03388279453673],
                [-118.274598193758635, 34.033831608462918],
                [-118.274599686240464, 34.033783517465324],
                [-118.274601237328227, 34.03375328744422],
                [-118.274602750094303, 34.033711379092466],
                [-118.274602699375876, 34.033695922478351],
                [-118.274602561872697, 34.033654017880075],
                [-118.274600626457257, 34.033567121114345],
                [-118.274592446419177, 34.033085919315319],
                [-118.274586607569972, 34.032815267196575],
                [-118.274582617352294, 34.032605063860096],
                [-118.274571768119685, 34.032316219453008],
                [-118.274564417763571, 34.032087819172347],
                [-118.274558796563682, 34.031883459662453],
                [-118.274539598338805, 34.031564750341829],
                [-118.274508710141234, 34.031203819215669],
                [-118.274467881510731, 34.030830888789048],
                [-118.270620513626639, 34.029087122118916],
                [-118.269815988458262, 34.030349506338254],
                [-118.26903113793631, 34.031579211426546],
                [-118.268499140108759, 34.032414717206386],
                [-118.268311947341857, 34.032707094634844],
                [-118.265715655331022, 34.031533313976205],
                [-118.265705079415099, 34.031546310261788],
                [-118.264915869436976, 34.031193298986295],
                [-118.264636549091293, 34.031063743317461],
                [-118.264049861618957, 34.030792302575058],
                [-118.263539224831874, 34.030555383864204],
                [-118.262545976252952, 34.030095214752492],
                [-118.262410479193903, 34.030032655604181],
                [-118.26140237741491, 34.029565625328921],
                [-118.261043770413011, 34.02939947947845],
                [-118.260161296183369, 34.028988170189564],
                [-118.259642363662792, 34.028746793078696],
                [-118.259227565266897, 34.028553287683678],
                [-118.259148243388779, 34.028516345623181],
                [-118.258212905328989, 34.028080055973916],
                [-118.25740317337133, 34.027702929188692],
                [-118.255504414525177, 34.026817348995245],
                [-118.255506313188974, 34.026814341983602],
                [-118.254868203239837, 34.026518487316658],
                [-118.253533001044389, 34.025895129120102],
                [-118.2535296798969, 34.025893592677079],
                [-118.251867438566123, 34.025124549181896],
                [-118.251545984412587, 34.024975822542793],
                [-118.250510924201762, 34.024496924410698],
                [-118.250505771878849, 34.024494540641449],
                [-118.250277864777146, 34.024366449920763],
                [-118.250017721456913, 34.024225126184433],
                [-118.249945457049208, 34.024185868194849],
                [-118.24990555739295, 34.024163488304659],
                [-118.249371936133628, 34.023864182532193],
                [-118.249302768210242, 34.023826127615159],
                [-118.249113704697336, 34.023722108246176],
                [-118.248600081491588, 34.023439513626016],
                [-118.248381894815836, 34.02331630274287],
                [-118.24800503290696, 34.02309795016307],
                [-118.247800075726559, 34.022979531529536],
                [-118.247568675225111, 34.02284809100923],
                [-118.246287782887606, 34.022142469192033],
                [-118.245990278926527, 34.021972685067105],
                [-118.245309325089934, 34.021583200379901],
                [-118.245134132901384, 34.021486012665534],
                [-118.24481349087813, 34.021307706314303],
                [-118.244481248325656, 34.021105036263258],
                [-118.244392215535996, 34.021054469499624],
                [-118.244358937800286, 34.021035568704761],
                [-118.24433356231566, 34.021022106154554],
                [-118.244320032557084, 34.021014927620378],
                [-118.244229699951546, 34.020975226786923],
                [-118.244000471253543, 34.020888580136244],
                [-118.24400137244065, 34.02087497064332],
                [-118.243788405880565, 34.020810107710432],
                [-118.243746068663725, 34.020794643638531],
                [-118.243720421712979, 34.020789401644976],
                [-118.243330017332553, 34.020709609689497],
                [-118.243201241329473, 34.020684449695374],
                [-118.242818236510615, 34.020609323718624],
                [-118.242699349480503, 34.020586185260335],
                [-118.241629560497955, 34.020385328723052],
                [-118.241367092600555, 34.020340865723284],
                [-118.240559776727778, 34.020184489753262],
                [-118.240379814672991, 34.020150481975726],
                [-118.23986144541054, 34.020052938153412],
                [-118.239534538402623, 34.019982820893006],
                [-118.239564602398843, 34.019530048852879],
                [-118.239571364419874, 34.019437242022441],
                [-118.239608799174718, 34.018922940473523],
                [-118.239634258736544, 34.018505657227593],
                [-118.239640639758846, 34.018402730598254],
                [-118.239651167383087, 34.018075578442343],
                [-118.239652616214855, 34.018003437076928],
                [-118.239652556816083, 34.017982691226379],
                [-118.239650390360708, 34.01722375028379],
                [-118.23964806075432, 34.01640592007481],
                [-118.239646053767018, 34.016289150917146],
                [-118.23964204911492, 34.016041846250609],
                [-118.239636673276024, 34.015894164973624],
                [-118.239651305060249, 34.015810988885583],
                [-118.239661419022866, 34.015465780892143],
                [-118.239651693696544, 34.014718170148633],
                [-118.239568967717602, 34.014718880686665],
                [-118.237255682919198, 34.014747138176233],
                [-118.235763424304707, 34.014765472712291],
                [-118.232293115006883, 34.014807989686062],
                [-118.232296382271215, 34.014800942465229],
                [-118.231111554318687, 34.014814153188851],
                [-118.230885578209183, 34.014816676274727],
                [-118.230779968917631, 34.014822918467495],
                [-118.230598470713844, 34.014821811164566],
                [-118.23055056995301, 34.014825196845322],
                [-118.230516623131223, 34.014829799968872],
                [-118.230451926111769, 34.014845964387654],
                [-118.230392795146813, 34.01487012191302],
                [-118.230363471144528, 34.014897961165616],
                [-118.230348496593379, 34.01491219872355],
                [-118.229749655923882, 34.014915865171815],
                [-118.229693559856358, 34.01491616485432],
                [-118.229568531123903, 34.014916762410309],
                [-118.229470066188625, 34.014917221893761],
                [-118.229436899527172, 34.014917366978054],
                [-118.22930527559086, 34.014918002039657],
                [-118.229173646244391, 34.014918638771022],
                [-118.229042051453135, 34.014919243739804],
                [-118.228910423170518, 34.014919874772907],
                [-118.228778793754003, 34.0149204876341],
                [-118.228647166552534, 34.014921119279634],
                [-118.228515537122334, 34.014921728247643],
                [-118.228383908834275, 34.014922359608171],
                [-118.228252281631839, 34.014922992626161],
                [-118.228121309341105, 34.014923599921659],
                [-118.227872737160595, 34.01492478433547],
                [-118.22781440432135, 34.014925056715192],
                [-118.227702784692227, 34.01492559096998],
                [-118.227660870024195, 34.01502707207905],
                [-118.227504752149201, 34.015293170188627],
                [-118.227317198235099, 34.015298971460481],
                [-118.227306477930938, 34.015299303576668],
                [-118.226511585925053, 34.015323887725707],
                [-118.226198131740205, 34.015333764852578],
                [-118.225698235910954, 34.015345690188667],
                [-118.22569333105217, 34.014935522229095],
                [-118.225693029005939, 34.014935523695407],
                [-118.224153864871582, 34.014942152844533],
                [-118.223704057689929, 34.014944086241478],
                [-118.223704058868947, 34.01494412230042],
                [-118.223716408413381, 34.015356531246688],
                [-118.223408188790742, 34.015373902054399],
                [-118.223407462460216, 34.015373943065853],
                [-118.223231460587044, 34.015377646700173],
                [-118.223193646129175, 34.015267389457378],
                [-118.223082239033289, 34.014968437830269],
                [-118.223073964440474, 34.014946852516886],
                [-118.223032187826746, 34.014947043305774],
                [-118.223005111567161, 34.01494704374651],
                [-118.222596979444347, 34.014948880692657],
                [-118.222723438708456, 34.015290584288103],
                [-118.222738237379104, 34.015330573095561],
                [-118.222877839537858, 34.015709177062583],
                [-118.223047413247897, 34.01619008316856],
                [-118.223057429960306, 34.016234030368828],
                [-118.22306254594416, 34.016259013971258],
                [-118.223074583422161, 34.016317792978271],
                [-118.223146029808362, 34.016666654976198],
                [-118.223150135030835, 34.016686904718277],
                [-118.223241330198178, 34.017136706691176],
                [-118.223290307323396, 34.017379144236983],
                [-118.223400174200208, 34.017922988715242],
                [-118.223457023073763, 34.01820350840606],
                [-118.223478247601363, 34.018309370701587],
                [-118.223497156930634, 34.018403685101404],
                [-118.223557357613572, 34.018703777031241],
                [-118.223610857869431, 34.018966099212541],
                [-118.223620550186297, 34.019015636448835],
                [-118.224465753033286, 34.02319178243588],
                [-118.22451989437873, 34.023459281478821],
                [-118.224523856468849, 34.023478800310166],
                [-118.224568341194299, 34.023698640875558],
                [-118.224582815391855, 34.023770156527377],
                [-118.224752955620431, 34.024610754820237],
                [-118.225071748937324, 34.025583248944784],
                [-118.225176218411619, 34.025901931028592],
                [-118.225177945075828, 34.025905025459508],
                [-118.2252940248231, 34.026392272504538],
                [-118.225298420711567, 34.026410723095161],
                [-118.225377172554673, 34.026741283771706],
                [-118.225480578145849, 34.027175326281636],
                [-118.226168947339602, 34.030064610498904],
                [-118.226224960899813, 34.030313237298451],
                [-118.226227088139112, 34.030322267530721],
                [-118.226659684553823, 34.032239122141519],
                [-118.226852513016695, 34.033053803272651],
                [-118.226878978933172, 34.033165618838112],
                [-118.227205161427847, 34.034543663882872],
                [-118.227667672084493, 34.034546127401001],
                [-118.227806291403311, 34.034546890975292],
                [-118.227936667031628, 34.034547331880297],
                [-118.22804063375456, 34.034547828837027],
                [-118.229827951075052, 34.034557140610232],
                [-118.230022659474287, 34.034550256275558],
                [-118.230068850846763, 34.034551196910456],
                [-118.230628343266588, 34.03456178896591],
                [-118.231187834819892, 34.034572405476467],
                [-118.232298534407377, 34.034593639445738],
                [-118.232416071819429, 34.034600001622216],
                [-118.23379142963006, 34.034674448650264],
                [-118.234154675656185, 34.034697129494582],
                [-118.234516907002771, 34.034720888544427],
                [-118.23503685107184, 34.03475527424343],
                [-118.236223610890661, 34.034833658566306],
                [-118.236223703966829, 34.034831338749946],
                [-118.23650422344744, 34.034849603600996],
                [-118.236872308708087, 34.034873612775776],
                [-118.2374089286821, 34.034908703815788],
                [-118.23749954106826, 34.034914628962312],
                [-118.238590912851066, 34.034985845484968],
                [-118.238590608769158, 34.034990095894024],
                [-118.238587442386972, 34.035037176394617],
                [-118.238567459952975, 34.035550706127829],
                [-118.238527846649404, 34.036125790496186],
                [-118.238499583250032, 34.036637625503197],
                [-118.23845559671976, 34.037410891766228],
                [-118.238413173915433, 34.038167336025779],
                [-118.23836139013514, 34.039110287323822],
                [-118.238315766430759, 34.039888722625776],
                [-118.238227724824682, 34.041429073628109],
                [-118.238214695206693, 34.041655618512799],
                [-118.23812079926013, 34.043290609258705],
                [-118.238191812523652, 34.043311085375727],
                [-118.238305759673565, 34.043330798777092],
                [-118.238977978074885, 34.043499494217777],
                [-118.239377718075815, 34.043617872914815],
                [-118.239696778467817, 34.043795182984397],
                [-118.239919991383587, 34.043927311413654],
                [-118.240733464077266, 34.044434747380862],
                [-118.241495713120358, 34.044909616132799],
                [-118.241913605975341, 34.045161351302681],
                [-118.242196429749654, 34.045331719803187],
                [-118.242224862881827, 34.04534884682819],
                [-118.241696889100936, 34.045989473341955],
                [-118.242749999756782, 34.04658296911964],
                [-118.242745384312485, 34.04660177889874],
                [-118.242745280486076, 34.046602201924877],
                [-118.242735327074911, 34.046642761020365],
                [-118.242722267769778, 34.046690870358916],
                [-118.242687670079448, 34.04681397616681],
                [-118.242627513275124, 34.047028027354166],
                [-118.242497989766704, 34.047329854638299],
                [-118.243727794058913, 34.047948061266688],
                [-118.243784026341146, 34.047980232442654],
                [-118.244699978196266, 34.048509755067322],
                [-118.244721452107697, 34.048522425827066],
                [-118.243346763895573, 34.050297558391307],
                [-118.242384644081255, 34.051509954111808],
                [-118.242317558816708, 34.051595326593805],
                [-118.240888063155182, 34.053414452911433],
                [-118.240873256068937, 34.053429942783666],
                [-118.240353496582543, 34.053988570145364],
                [-118.239824986983152, 34.054556591264493],
                [-118.239627529793282, 34.054768242357675],
                [-118.239540325765603, 34.054862855134367],
                [-118.239487854305537, 34.054920713917056],
                [-118.2394517537101, 34.054960554694787],
                [-118.239426781816263, 34.054988113492335],
                [-118.239375684644344, 34.055044060061135],
                [-118.239371828843645, 34.055048282356616],
                [-118.239420062183953, 34.055079003745298],
                [-118.239553790803811, 34.055164181966752],
                [-118.240118772511906, 34.05552404160256],
                [-118.240257039853432, 34.055608844906011],
              ],
            ],
          },
          bbox: [-118.2746027500943, 34.01471817014863, -118.22259697944435, 34.06417391111642],
          center: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-118.24859986476932, 34.03944604063253],
            },
          },
          place_name: "Downtown Los Angeles",
          place_type: ["neighborhood council"],
          text: "Downtown Los Angeles",
        },
      ]);
    });
});