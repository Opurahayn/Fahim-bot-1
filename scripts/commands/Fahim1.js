const fs = require("fs");
module.exports.config = {
  name: "fahim",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("rules")==0 || (event.body.indexOf("Fahim")==0 || (event.body.indexOf("/Rules")==0 || (event.body.indexOf("/rules")==0)))) {
		var msg = {
				body: "💯___WARNING-NOTICE___💯

আসসালামু আলাইকুম 
"༆◥⃧⃜ؖؖؖؖ⃝ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ»̶̶͓͓͓̽̽̽𝄞⋆⃝🌺প⋆⃝🌸࿐" 
ফ্যামেলি গ্রুপের কলিজার ভাই/বোন__😊🍒 

আমাদের গ্রুপে আসার জন্য আপনাকে অনেক ধন্যবাদ______!!🍒😘    

এটা আড্ডা বক্স, এখানে কোন বাজে বিহেভ অথবা ১৮+ কথা বলা যাবে না 💯

এখানে সবাই বন্ধুর মতো আড্ডা দিবা💯

তোমাদের নিয়ে আমাদের এইসব বক্স সো তোমরা মিলে মিশে আড্ডা দিবা 🌼

৩ দিনের বেশি এক্টিভ না থাকলে এডমিন  
আপনাকে বক্সের রুলস অনুযায়ী রিমুভ করতে বাধ্য হবে_______💚🍒
  

༆◥⃧⃜ؖؖؖؖ⃝ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ»̶̶͓͓͓̽̽̽𝄞⋆⃝🌺𝄞⋆⃝🌸࿐ ফ্যামেলি গ্ৰুপের পক্ষ থেকে আপনাকে  জানায় ভালবাসা  অভিরাম_____💯🌸

          🌸💯______𝐂𝐄𝐎______💯🌸
                     
♦️_[𝐎𝐖𝐍𝐄𝐑:☞Fahim Islam (✷‿✷)☜_♦️ "
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

} 
