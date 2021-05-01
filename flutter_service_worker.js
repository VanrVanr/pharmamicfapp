'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "5fa7a8c4a532ae705556f91e38bbdd4c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "029d4c20ad8e778ab30acde1b563b2ac",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4fd08af2a576d21103014027e4d1e295",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8f1ca2285517721ddad6c0f5361c015a",
".git/logs/refs/heads/main": "d225aff4346dc8d9672e64d3071bceba",
".git/logs/refs/remotes/origin/main": "bf4efe891d71083bbfd9943642673a41",
".git/objects/00/d1f0eca7c94d919b5d2777a91fc30033c4a726": "59b69ad223235a2e137854a8ff974531",
".git/objects/01/2486ab4a4bf4c90e4e19349d5e94576598893b": "ef7226c810a5392c7be6f0cce670f2d6",
".git/objects/07/4ba37099353d6e9e5502f4a08db871b760f147": "ac8d5b5bc979d1be29cfdca77fcb5dbc",
".git/objects/09/04e0e12a13650dc3248100c098871e183bf137": "109bf0df9c790dc3eb0515ba2fc2e930",
".git/objects/09/061b3c1968a77c39e63badd91a1d7c8c2c9886": "69229f6ef036ca8c99932cca34c0aef5",
".git/objects/09/5fea079e14d020691bb397a2698384d5da2dcc": "4501deac99c7604e08afff4d1e299a1b",
".git/objects/09/6ac1c1f253b3791332da39623a7e85dda70dfc": "6be57a4df4e8a96c9ff62ae913e7cd9e",
".git/objects/0a/6d2b4d83ecb77fb66ee79664b187809159d940": "f591028334cfc14fa28b2f74389ef12e",
".git/objects/0b/4f89fcd13ea0da99a1b6827ce2d156c49652a5": "41c13d1cbda56773d5bc4cda983b560d",
".git/objects/0b/cb9ec7f510beb86598242a93d8a85673e50c5b": "28a97f14ef43362dd20be14c1b6b63d0",
".git/objects/0e/cf4a84414876428a2541ec2c3eac8d0bc052e9": "0a7eec18316774afb256e41f854c57d6",
".git/objects/12/223b03882351f952753c5be90168657b5120d6": "1b0894db5d85944aaede40c94fb13b14",
".git/objects/14/7dd2b1ba077aad069b8e94e25b6e96133d7de6": "07ce2710698fbb588e34e9d7fc88d8fb",
".git/objects/16/5d4b3c83e13436a65bed7a8d22babb505d332a": "2a815214b5d2493af7725c468e4ae59d",
".git/objects/17/db99c11fefa3210b104469ed1dc60e4b9b800f": "91e7faeebe4a455f70279687abd4300e",
".git/objects/1c/584adb8877ab03577ea45e4df66009a9b0931d": "754b63f071e08b30e5d0f7443f9863f2",
".git/objects/1c/cdfbe5242823ed26d9505bb9dc990396b4dc4d": "1d3869b4467a06835a1b42c9b9e85dbb",
".git/objects/1d/d435b9af21ff1587d2ef5411ad98951b64429c": "ee192f91ecc9968158005bf835183345",
".git/objects/1e/e4179eae5c567b1e4ef0f9c8b617595d2ae2f8": "fd84c81856bea92563b29eafd0fcb171",
".git/objects/20/0de82f2f525fd12772000430b6097639f2a3a7": "95b5fd380aa86fb346fd6648778a5c17",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/8088b3a46d8c1d9d73b8c7b0b9b09c0f5f36de": "7a75885622063e40493cd9705c907d96",
".git/objects/22/89bd416ed6b94be2da3533f5e9072e9b24508a": "dbc93e67d5d68030a0b533b2809343da",
".git/objects/24/fb46e74b7d1c755012b8b9863795060274b929": "cd2fcc9720e0b6adf6033dbb95194d05",
".git/objects/26/7b47b00079ac518568eb78c17c69f61ae3b271": "896416e86b5ef8331db3ce82620f2b31",
".git/objects/2a/57fc49e97bd30c32556e1967b7a362f7c3c50c": "2811addfe662ec03afa741eb836708e7",
".git/objects/2a/9248b2f208f55bdb9f07ad9094f2e2594e9cd9": "c4c8a71f8579a57904729f3dc306964d",
".git/objects/2b/cfec81f65bb9b7f3f556d9dd0066d511a0c1f6": "0c5e86ff4eb844a2fe2b257786c243d5",
".git/objects/2d/9bd7ec3129e40b46f320d31792b802b6d1e54e": "15f2f6b8be32b9e6f409d58bf5f866bb",
".git/objects/2d/e34e146ad4e95ea36d657f8d4dff4978f97842": "f360fd0b69cea11eaae04f7696e34105",
".git/objects/2e/a7b8eff662fb852dbd08f53dc62fabc6e9a801": "7b90ec6481485be50bb95773b6d695c9",
".git/objects/31/652fcaf6b9e7034dfdd7416e18c703f79c54e5": "626c87045e24fff716f3e3ed9bf5a5b4",
".git/objects/35/81ae896c7f7e4df6c0c4dae8eb9fca666e2ecb": "cb72e9c4acd235ca632da77ea2b024b1",
".git/objects/36/a9f78e43efa7667acda9cbb0f46e9ded2476b8": "baa0cb00db29b8643a64c868126a7722",
".git/objects/39/c4222ce126007bfb08128607596b6a229d9923": "34e491446519196b49e1e600b71f1b0e",
".git/objects/3a/3d1042c41b9b9ceb03f75fb7a03ddfd88d18d4": "4d844de988736801f5d307bfe27ec0cb",
".git/objects/3a/ccc837398245785db403e142311159bc206f8e": "d7a6b8e2cfac0dc4fede40bc96d15dd7",
".git/objects/3d/69334b6162136ec1b4b00d0e8f3498ae862457": "57bd3a465383e42fd29fd756f0151360",
".git/objects/3e/dd9e1b2d2d46c6d967f55887ca5e690b6ad64c": "47406e841df0ed06768982fef9083d2b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/74da51081ed5d37133e145597e6dbaa800d217": "76da0df6f2df195eb50a4f4163115186",
".git/objects/4e/d6ff2a80fb9bde4741c86244946c473ab027ee": "370bbf0f20d5ab853ba90e9259ccb610",
".git/objects/4f/ee35b5caede527ee5a19bb8a425ebf49ce59a8": "500690e3b3e089c944095496fae938bb",
".git/objects/50/40326622acfecf880aa870d188c07754af70fa": "2799c3c1c724f3a60726ad67310bffec",
".git/objects/51/2d758bccd823d028e3fa52e038a994476dd52e": "3aa8ff281151bf67060e99e4f2d71937",
".git/objects/51/2f601dd28f495b4875978b04177c6ba91f6dd4": "f6fb0c708216dfe8863d3f01587c1f57",
".git/objects/51/b709155b17e8d3922c63b823e3d50b7a5e1523": "87118d0866297c924f6556ad85f88367",
".git/objects/53/8f40c6cad6330136c273d8ecda59d548f69f6e": "992d5370660938987256bfe8a35675f7",
".git/objects/54/e3ca4b6dc175cdde86a5ce7f0d843154295cbb": "28bc7395a51e1b663e1634549ce039f7",
".git/objects/55/4f3d512722f47a9da01469c3412cd7cf8e993a": "c07a938a8ac5b11f81b7564daabe8554",
".git/objects/57/960d14b1a245f6e9fba1d712a17239a9bf386b": "4af9ae086a6a4621d21b7efeebd298e4",
".git/objects/57/a097fbd62f268e527a6fc0bfb712984090a65f": "47a0d78f249962f01107c1a9a1273179",
".git/objects/5c/8d89787be7c1e1feef0070f86049cb9b2afe2f": "41d1e80580f75fe854b3bbb5a67ca9d1",
".git/objects/5c/af173655d0ba9106f76320f3f6cacd131845cd": "317240be21b3a9e57dac8547136b02fb",
".git/objects/5e/3486b046d1f731f0966618941c75194beded8d": "de22a6087382607740d1576a32f4d806",
".git/objects/5e/6bf9a8b1a7d2555baa632f2ab818b5b801a224": "5e59e77b42fd650b17b89ec8a76cbe13",
".git/objects/5f/84496f74abd133ec7add8df137a7b298a4e721": "1901b276bf2ce42ea93499d2367a71b4",
".git/objects/60/5e68a45bb8aeb792b7d5e6c56819b34f014f85": "135480041f84c89baefc7414228d52e1",
".git/objects/60/7ce6f727baad178374de036658d0d5950bc6bc": "1873fe81f2a679167e35ba5f162f5b57",
".git/objects/60/f15c8790ceff356d8ff31c530caacd9c9c5dc7": "e8d5bbc3e7290d7cc06c36eaebf965df",
".git/objects/60/fcf612fc4ee276d5d51cddd4bf54f41d1008ea": "32f0144ee7bce42c942db3b540c2fbe4",
".git/objects/62/ab8aa448563485dd129de5c0b07b32d180dbac": "efaa7e76287622bd7504530a3c86fc50",
".git/objects/62/e9b5e327f32f6fc7153dd5a12e2f61c0839b07": "53d8cef393e7b65634c0674a5b93ede3",
".git/objects/64/92bef7daa430cc68ae1f08b175731b4db7e637": "5e9ec8861e26cb7901f67b963086457d",
".git/objects/67/0d102cd6c4dc3a858cea44232282d58bcb263a": "d4d7eda0e2aeb3bc74eeed65f5719e93",
".git/objects/6a/51d1d9c75b05cfbc126a91e1ec86dda1de33e5": "c9eacc808401baf3f318b0e27941ada4",
".git/objects/6b/31104b596923e709e356d3fb8b8acccaaeba1e": "6283cf28b3071d68cfb362c74b58ef97",
".git/objects/6b/7f475c53330732af4894b28bed02e01683c7d0": "b8088cc26bceff53930d727bf89c238f",
".git/objects/6c/dcb5ae0e9fc5d031726eaab971a6b2fdc1bee4": "be50b8e7eeeb08061a498585a90e3ca1",
".git/objects/6e/7da1861dade7cf03121095d15225dcfd4bd87a": "d2562f2249ef96a39b294c73bf8a01d6",
".git/objects/6f/ec80bede7cad6aa5c7b5a403a6b8ee0456893a": "91398d048fa97042be22574c7b5729ec",
".git/objects/72/198711322b736ab9d5485d3c0a3ac51cf3fb3b": "39eef94c0b6a38c9396256610ae46960",
".git/objects/72/aec04b8b748633c33cc7ef275be5d20414eb80": "d2363d23480eed709f3fc7cb1b789cad",
".git/objects/75/35f6ac3cb6616ce47a27cd2365a2c3fd6a80e2": "840439d80eb446aee645b37aaadc3629",
".git/objects/75/ade6218bc8fef505d291aad9d14c225a6859e4": "42b6179e93622ba6dae21fa6d12918bf",
".git/objects/77/d45ab9895ce57a3cbb3aeea55fba1f660d70ef": "9b1f44263ceb66d29d12cbc4b8f677ee",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/919138c76ea089f935d58727750087e28b6688": "6afec535929940650afca426ee1d79aa",
".git/objects/7c/daf2ea145b6194774e4cc9037b6634793c5f1f": "3c6256ae2a37159394ea8a65f52ed6cb",
".git/objects/80/4d3d06254b56cff467f8a4033f48abeeed5c14": "17ce821d5a0801b7049a305059d75c88",
".git/objects/82/66d61bdd3bd05c784bfa22caaab78b1797e4d6": "5dd52e5211ae0836c7e2f5c53f4a23ae",
".git/objects/82/6887e383750e5ccbd7845e180870e7b53374fb": "6f960df2196ba79d57117ae111cdb58a",
".git/objects/83/01833532c079fb2db7e66c3a2b71741c179e41": "ab6d0865403495b0aa9ef5e3e08d020d",
".git/objects/83/baf5fe21af17a7b9bdfded9ee34afeab9bd4f1": "3df9c2f40237d571a46e850f8d3f9e6d",
".git/objects/87/c9fe4fe1f4ff422ba96453a0d57ae8cecb216e": "8de0830162c2b1f13ebb2ef5de3b0a74",
".git/objects/87/ca42d35fa3f30e12704cfe59f797f3f0120014": "faae01a796cddb63337df3fda26eceff",
".git/objects/87/e7875be35f7e074fb402c00a421c381ac6a84e": "5dab58d52a5e8ef7debe545cae2eb6f6",
".git/objects/88/845fb399278af53d710e8e8de321a93223ad01": "4aa158854613f5908568e9bfcec82eb8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/a7080fe06c1e23e744aff99d4a3ab31a9d2d1d": "2cdfa457dc36f617ba6649eaff5dbc9a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/137891791fe96927ad78e64b0aad7bded08bdc": "9abb042e8c58ed4d703beb8e66b37150",
".git/objects/8d/9a379541e2fe68d1ee2c8ef3a5d071367cf89c": "ddead72f9b792a671386512bd3481b66",
".git/objects/8f/84db6825633b0ceaf36f1a112a2e633805c728": "80c1a8f1ab98edfe006f3d75253024b9",
".git/objects/90/78ea8918b9750aeaf48d56b931e71ca096f7c0": "8906797d5d212106f1154eec5149c299",
".git/objects/91/2634a47267dfa52b907d1acf3d42181bdf7a4b": "7852b03c95c60a736a06e97f2684255b",
".git/objects/91/82d9f2b04b07e0be203943fa5b0cc8f27ba80f": "3c80557d597370962febb54a9f240e9a",
".git/objects/92/70637c171ce1db3c82954cbf5c8fec1e5d6c38": "2ce7f30c0df97a4f2c2824176513e035",
".git/objects/93/3fbfe4d91adee4560adbb7578b8f8c5844c79c": "07c221459384864a895ccde8bcac507e",
".git/objects/93/c285f9cf8057b8dc8d5ba84f041da8f51a6321": "c5c3bf135989a0376b92109c6bd2ae62",
".git/objects/93/d9c9d1965341f45a54eb9f1f1209eed50d1140": "eccb108f4564e9a42be6671c0ccd1e2a",
".git/objects/94/7dab9149f353c1a04386b9fc6b93fa612340da": "b9951f08ad1a45810c6b13d1cf8b7281",
".git/objects/94/da1c8047a0ac1485556a95936cacdce265a507": "5a9a25f8a139f5c2b3b2bc631f21d40e",
".git/objects/94/ead9ef2d89e84044cf2c401213388d9de6ee8e": "e15c787c7cdb718f8e9c9ab5004a5926",
".git/objects/96/7cf3546c3814df5d67fe4ec063ca6de5d5342f": "10418164b9b8d2230c959f1816e2ad3b",
".git/objects/97/3e0d396ea0eb2de7289f47528826e82084aa94": "e9aaeb9331a79bd59d7212c5a6254f0c",
".git/objects/9b/34a0f7866b1f9085af414acef1977b8b18be2a": "f03241abe329d70a8eb4fa7624d52434",
".git/objects/9c/4188d3d257ba1b51793745f1beb3ef0f4fc0b1": "b8af35a58a552072ad67f5142e3650e2",
".git/objects/a0/0b922e9d3540bab8106f3866de75ea1c5be7df": "f74687e84eca088781f5fdd7353ddd9f",
".git/objects/a0/ea7d4b05680c9232ce5309f02ef69af78fa197": "7dd038cf26d03ace6d2f73dd112699ce",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/50aea688d01d54f9164e8b03c0852598df7e87": "f3adadc940ab092d7ea515c229921305",
".git/objects/a6/9b69bd6417e66bfc402b47245bce9c54ae6a06": "230156c268ecba3f2ea9b20135ccc3a7",
".git/objects/a6/a72fb8faae1ad05bfff4a5c6a7eeda878004a5": "16e765c549726b62803bd13730a295c5",
".git/objects/a7/518e1afa3c068c320b1f64aac05aa2dc1a27be": "416f801da250203993c6342f15de1cdd",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/aa/f83a7b029e4fab78b79a358d6de953610f1af6": "ffca7ab8606a882afb904265d6d4f52b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/c49015f98daaa4f205b95b7942434a47e29233": "40fb2eee546038d9abd0583c3421a0fb",
".git/objects/ab/f9fe4c88fc197726a3a569fe0688f57e1fa93e": "3086e05136d2a93dd910ccf64184fc87",
".git/objects/ac/52c9985f73df7b18cca1ffd0d93473dd14d557": "7a72dd22f9dc9974b63f42ba5ddff878",
".git/objects/af/e0d5029e036553f6a57094cdda4274e6c1815a": "1862a9cb616bea26508bdcd37217d7c1",
".git/objects/b0/65460fd2663db67b7761376b73654613a7ea02": "320a98ef7c884da0a75414978a01927f",
".git/objects/b2/97e2b0f6e7bc394c4c305efbed56306c6190c2": "295338730c0e5e929e7e3d1fd9ab6801",
".git/objects/b3/ad1e67a7fa3855b026db952d76f6a206947a98": "da1fab0f3dfdd7c41c37bad6c4bc4129",
".git/objects/b4/c90018259661e325fc23cce21a679a788c3049": "9baf04afbdc49398e591a0243d2699de",
".git/objects/b5/46dbceb0e79ee23043f22b432a265c8791a580": "2c8a8784b6ccb08b7ef2c8ee822bd59f",
".git/objects/b5/6469c1fa7f06e0f45bb3643dcaac1d8a852673": "8a35d71cf514b98040bb378cf9871dc9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c0/21b6b5a03e321164575cfbc374d3467c7b4932": "5b124d44c1e5695f405727457b51370b",
".git/objects/c0/a98407c52375a41d41f2d35e20992bf1dd0e12": "5fd2ae3e93944f0acfdceb50d9ef0ea9",
".git/objects/c0/f55f9c5b9dabdc3c36b4c3272eb3ae86a8d375": "62317c2c7850d69fadd54f57f939c140",
".git/objects/c1/f484579a3a27781f5a2817eb46a0cacc7662db": "4cf9c86f3e1afe39b98e516964c0d531",
".git/objects/ca/88b1b0e46ce0b9c25a206f05483f235468fee8": "6c6b187ea65b328ee5e551652c45d5e1",
".git/objects/cc/a1dbeaa0003779fcd5ec5a5e95631a5c5f8564": "343cbc00809d3db3cf56c5e9e70f3c12",
".git/objects/d0/712c2b89364d1f39223cd7f9705fbc05464758": "c1f50dfad0203d4afc66b2dd1781a7ff",
".git/objects/d0/8a3e0f40e50c4a79f3ed24e594e19ffe5226f5": "f38c8513c36fde576c281c59d4113d4a",
".git/objects/d0/c3f4f98d7741f57335bcdd573970232d747f9b": "9719c5c95eb48388b448ab6a54822aaa",
".git/objects/d4/b29eaa9d65b4f1c768fdca8611edaea1a3b3f5": "227e82bc2067f4b32bc643759f9b00d9",
".git/objects/d4/bc018d17066257942c6aa1eef731f0037601c5": "1096d073c43524b49cfdfdf743cbae27",
".git/objects/d5/e711d7e57706b6697836e087cfb6ab2986ca03": "dcb03fea51d0a2fb895d90f89d7d61dd",
".git/objects/d6/d255a401dd6deac292dd90d5157e8628b071b4": "e36279f68f52d7bf82cf0de7e47dcc3b",
".git/objects/d9/0530c379645e444542781564365d866e7671b9": "deba3b831644214eea6602aaa6199604",
".git/objects/da/4d6cf61bb6657586c8a23f4cf79322669cb3a5": "f8c8f888f8ce3cdf7bfe156591ddf7c2",
".git/objects/dc/e1f5a579dc030f2d3e2487c35934034d588b7e": "a4a26df6df80db6ea67cff04000e71cc",
".git/objects/df/f06fc593fdf348530a359109f276a6b467175d": "22f17c7ef03ce342d1a77c0dbd3503d9",
".git/objects/e0/7029ea8afabc4615cf8f0dc04b0be4890b33a3": "10fed7ba5c8d016e5875768f51f6ee0b",
".git/objects/e1/c8760accebe0a3582d2fdb830e326b149747b7": "29fd3bf512e05af87871eba72d86df75",
".git/objects/e2/466b67673e38f992d19d62e46b4cac2bee9b82": "47bdf3c38df02fb5fdaaa84bcf13572a",
".git/objects/e2/a10125e140bd7468346d37144a2261e8d2d3c1": "504320e6f8f5dfcdf0b1a307bab39302",
".git/objects/e2/a84ba22301b8a511ff0c033c5fafa64232fa9e": "b1e71bd02739d8f4ef8c1ffdd17e216b",
".git/objects/e5/7ae523d2195c260c1acf72fe2438214a3f3bf8": "dcbccacfbfd4d196d7af6fe485290577",
".git/objects/e5/872968cc425fa8960b437b8c045386871e5a45": "09e8a943215f0fcda3372c82efd864ab",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/c5fee771040e75372eb693cd9ea44bc36207d9": "857c8e92adb8b3a4f591214d495810ac",
".git/objects/e7/986dbfa885e28cfcd673c51441be96c32a434c": "8ac6e59bc1aff7c8fba9ef899db7a4a6",
".git/objects/e7/d47d7e7590d74b5d53f37c9f7b0d6585638964": "46e48c9d6f4e061d719a3652c5380d49",
".git/objects/e8/8d1074860e4142e30ee957dca6005c0fd0ebb3": "e2cc92fa493d6aa2ef49d8893164d584",
".git/objects/e8/c2186df1a93e0176200dbe643ce774cffea9a5": "b99e52fa297364f6bfecf8323681e311",
".git/objects/e8/e51c94b330054419427189e2e225f0067cd0a9": "5250b5267b44c142f345007be7509bfe",
".git/objects/e9/9b91e8911243f8bf6af530b31bed49dd6636d9": "3e614147655d4c5c119be7b8b9e510c3",
".git/objects/e9/9e37a75565b8e38a468f5df8303182e683fc7b": "f853e2bbdfb65c13b6190e6f8b82a44c",
".git/objects/ea/ecaa9b537de3052cd89a002dc8a6a6c04ca8a5": "5859d83095476cdf2bcbff4bfc51d80c",
".git/objects/eb/592897b8fd20cee58edeae90a67f9df49ea0db": "fc707e055d9680e17d45a8f68f97e8ce",
".git/objects/ec/9ff8bc957a624d0a05ed6a518cd0e7fae89bbb": "8b93acb1092a50f76c0c233c8e1f54c3",
".git/objects/ef/acbf47435476c95b0894db791eac728437f0d6": "4375127b5827f54fa7a2f4442956fd72",
".git/objects/f0/131b3ad12da02eec55e6a8ca7d78bffd75ae74": "b644c966f736306b84974563b71bc908",
".git/objects/f0/424247a303156a21aada953a1d2d701feede0b": "8eed7179f440318b3e6ecec658eab2ee",
".git/objects/f0/c0ceae23a1396c3f9a91f0b5a7bfcc4b851114": "89bd0e2bfb5848498b72ddaf1c4ace81",
".git/objects/f2/22d3bf6d81d2b3aaa864daf35f14eecba3989c": "0a9f1a8e6c08234315541f949f956576",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f6/5b3f0ecb3d23409ffc3202d4f2394121d88f8e": "0bbcb097a55ed8e8af9378471437de91",
".git/objects/f7/0060689fffb6012e1cb1c4a8bcbfaf818b31a3": "694a469f30a1bdef881cfc69f1eef01f",
".git/objects/f9/3e3a1a1525fb5b91020da86e44810c87a2d7bc": "3bfabf2b9b9d1a341e4263f23c96a46b",
".git/objects/f9/e9c5ea50905df0cb14d2b74b758f4e3960e403": "b54a6b0fa8f9c2f26031612470c7ac77",
".git/objects/fa/23df4c52b55195782ca92034c0baef8f823c7b": "f7928eb5294cad00797208f1750a167d",
".git/objects/fc/b14a5816329a60a44e6669332f69c1180d532c": "d2ca335bdc51fdfe375d064173cba92e",
".git/ORIG_HEAD": "1e24567add34fc5e65e57012d867d3b8",
".git/refs/heads/main": "f0ae61eb31d93766e728f09af4e9cf64",
".git/refs/remotes/origin/main": "f0ae61eb31d93766e728f09af4e9cf64",
"assets/AssetManifest.json": "f88ab5ef128130f5688d31235ee22873",
"assets/data/AteroscleroseColesterol.html": "4a08446944a7a4bc29159a7cfbd159c6",
"assets/data/AteroscleroseDoen%25C3%25A7asassociadas.html": "a470a71eecfbff68e2675726a85b622a",
"assets/data/AteroscleroseFatoresderisco.html": "adf58df3c839bbf02b70955a668c5710",
"assets/data/AteroscleroseOque%25C3%25A9.html": "402ea1489dc54ee436d9072e5ac3b317",
"assets/data/AterosclerosePreven%25C3%25A7%25C3%25A3o.html": "aab401569e4022904b594335865dab0e",
"assets/data/AteroscleroseSintomas.html": "ac0c89ed4018dfef71d7f43e3c80c6b7",
"assets/data/AteroscleroseTratamento.html": "7d6f8c4991eb145956ba277a58664b52",
"assets/data/Contrace%25C3%25A7%25C3%25A3oAtomadeantibi%25C3%25B3ticosinterferecomap%25C3%25ADlula.html": "5eedbfb8ad969e064c8f6d930bd13d8c",
"assets/data/Contrace%25C3%25A7%25C3%25A3oComeceiagoraatomarap%25C3%25ADlulaApartirdequando%25C3%25A9eficaz.html": "c12de8df07b9ff4054227053128f5287",
"assets/data/Contrace%25C3%25A7%25C3%25A3oEsquecimedetomarap%25C3%25ADlulaOquefazer.html": "ea2e52bc8030b83d9e866a2ffea2fd15",
"assets/data/DiabetesDiabetestipo1Causas.html": "44347b2659fe211e6e83ae39d63159d2",
"assets/data/DiabetesDiabetestipo1Diagn%25C3%25B3stico.html": "2675a6fed67bdcd4b3c6b8ea1ac4b556",
"assets/data/DiabetesDiabetestipo1Efeitosalongoprazoecomplica%25C3%25A7%25C3%25B5es.html": "6ff67f2c141d54f95ce11649c7f3f382",
"assets/data/DiabetesDiabetestipo1Oque%25C3%25A9.html": "439db5cd7e2c4c2ca35291e2a1c729b7",
"assets/data/DiabetesDiabetestipo1Sintomasesinais.html": "7f3740536a971a2571b0affbe54b8dde",
"assets/data/DiabetesDiabetestipo1Tratamento.html": "3c345ede6d6d213c72eaacecbeb53c77",
"assets/data/DiabetesDiabetestipo2Causas.html": "125a233c68e666c211e546aeae15e968",
"assets/data/DiabetesDiabetestipo2Oque%25C3%25A9.html": "79dff562432a8cbe6801c8c38d3ab011",
"assets/data/DiabetesDiabetestipo2Sintomasesinais.html": "2de2018c273f51e2347a0a712a58db15",
"assets/data/DiabetesOque%25C3%25A9.html": "643c2487d5f05ce00eb12da56167aabe",
"assets/data/topics.yaml": "73e96ce0f48603f976eb6a6c19d87155",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/images/avatar.png": "0f47c57d2b8b52f1ed6a56c7c5f8a862",
"assets/images/logo1.png": "5b04f94cc6dd6d4128a858512e41688d",
"assets/images/map_mockup.PNG": "ee92771b239c77ebc7f1c426f9c14345",
"assets/images/medicine/1.png": "4a42582f9b67e07347fc4732a6d8a2dc",
"assets/images/medicine/2.png": "47f654e1e89c269734a8273f3012fb02",
"assets/images/medicine/3.png": "4ad582fd71e0223eac6b7a21c830410f",
"assets/images/medicine/app4.PNG": "830f193bdb900454977e4d6e81a749cd",
"assets/NOTICES": "8cf3362e5289bc7315f1654df4cca7e7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "922dc85b722bc20c721bfdb7615a6ab7",
"/": "922dc85b722bc20c721bfdb7615a6ab7",
"main.dart.js": "af54f9212272290f0e63cd5878d37ed9",
"manifest.json": "6477fb4e2b54591ab9b475dd7196cc59",
"README.md": "d41d8cd98f00b204e9800998ecf8427e",
"version.json": "76aec40bf057b0a184a8f020d80f2cac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
