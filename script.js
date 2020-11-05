chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.message == "hideTitleM" || request.message == "hideReminderM" || request.message == "hideTaskM"){
			// 月ビューの場合
			let elements = document.getElementsByClassName("ifwtOb");
			for (let i=0; i < elements.length; i++) {
	
				try{
					let time = elements[i].getElementsByClassName("ynRLnc")[0].innerHTML;
					if (request.message == "hideTitleM"){
						if (time.match(/^\d{2}:\d{2}～\d{2}:\d{2}/)){
							elements[i].getElementsByClassName("yzifAd")[0].innerHTML = time.match(/^\d{2}:\d{2}～\d{2}:\d{2}/);;
							elements[i].getElementsByClassName("J0Jt0d")[0].innerHTML = "";
						} else if (time.match("リマインダ")){
							elements[i].getElementsByClassName("yzifAd")[0].innerHTML = "リマインダー";
						} else if (time.match("タスク")){
							elements[i].getElementsByClassName("yzifAd")[0].innerHTML = "タスク";
						} else if (time.match("祝日")){
							;
						} else {
							elements[i].getElementsByClassName("yzifAd")[0].innerHTML = "終日の予定";
						}
						
					} else if (request.message == "hideReminderM") {
						
						if (time.match("リマインダ")){
							elements[i].innerHTML = "";
						}
					} else {
						if (time.match("タスク")){
							elements[i].innerHTML = "";
						}
					}
				} catch(e){
					;
				}
			}
		} else { // 週ビューの場合
			let elements = document.getElementsByClassName("NlL62b");
			for (let i=0; i < elements.length; i++) {
				try {
					var time = elements[i].getElementsByClassName("ynRLnc")[0].innerHTML;
				} catch(e){;}
				
				// classList = ["FAxxKc", "K9QN7e", "yzifAd"]
				// 予定（リマインダ、タスク）タイトル、予定詳細、終日タイトル
				if (time.match("祝日")){
					;
				} else {
					if (request.message == "hideTitleW"){
						if (time.match("リマインダ")){
							try{
								elements[i].getElementsByClassName("FAxxKc")[0].innerHTML = "リマインダー";
							}catch(e){
								elements[i].getElementsByClassName("yzifAd")[0].innerHTML = "リマインダー";
							}
						} else if (time.match("タスク")){
							elements[i].getElementsByClassName("FAxxKc")[0].innerHTML = "タスク";
						} else {
							try{
								elements[i].getElementsByClassName("FAxxKc")[0].innerHTML = "";
								try {
									elements[i].getElementsByClassName("K9QN7e")[0].innerHTML = "";		
								}catch(e){;}
							}catch(e){
								elements[i].getElementsByClassName("yzifAd")[0].innerHTML = "終日の予定";
							}
						}
					} else if (request.message == "hideReminderW") {
						if (time.match("リマインダ")){
							elements[i].parentElement.removeChild(elements[i]);
						}
					} else {
						if (time.match("タスク")){
							elements[i].parentElement.removeChild(elements[i]);
						}
					}
				}
			}
		}
	}
);