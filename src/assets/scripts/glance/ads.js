var script=document.createElement("script");script.src="https://code.jquery.com/jquery-3.6.3.min.js",document.getElementsByTagName("head")[0].appendChild(script);const gameInput={gameName:"",publisherName:""};var LPBannerInstance,LBBannerInstance,StickyBannerInstance,replayInstance,GlanceGamingAdInstance,rewardInstance,_triggerReason;$.getScript("https://g.glance-cdn.com/public/content/games/xiaomi/gamesAd.js","gpid.js").done(function(e,a){console.log(a),window.GlanceGamingAdInterface.setupLibrary(gameInput,successCb,failCb)}).fail(function(e,a,n){console.log("MLIB load failed, reason : ",n)});var is_replay_noFill=!1,is_rewarded_noFill=!1,isRewardGranted=!1,isRewardedAdClosedByUser=!1;const LPMercObj={adUnitName:"",pageName:"",categoryName:"Gamee",placementName:"gameload",containerID:"div-gpt-ad-2",height:250,width:300,xc:"12.0",yc:"3.0",gpid:gpID},StickyObj={adUnitName:"",pageName:"",categoryName:"",placementName:"ingame",containerID:"banner-ad",height:50,width:320,xc:"12.0",yc:"3.0",gpid:gpID},LBBannerObj={adUnitName:"",pageName:"",categoryName:"",placementName:"leaderboard",containerID:"div-gpt-ad-1",height:250,width:300,xc:"12.0",yc:"3.0",gpid:gpID};function successCb(){console.log("set up lib success"),showBumperAd()}function failCb(){}const replayObj={adUnitName:"",placementName:"FsReplay",pageName:"",categoryName:"",containerID:"",height:"",width:"",xc:"",yc:"",gpid:gpID},rewardObj={adUnitName:"",placementName:"FsRewarded",pageName:"",categoryName:"",containerID:"",height:"",width:"",xc:"",yc:"",gpid:gpID};function bannerCallbacks(e){e.adInstance.registerCallback("onAdLoadSucceed",a=>{console.log("onAdLoadSucceeded CALLBACK",a),e.adUnitName===LBBannerObj.adUnitName&&($("#div-gpt-ad-1").css("display","flex"),$(".gameOverDiv").css("margin-top","0px"))}),e.adInstance.registerCallback("onAdLoadFailed",a=>{console.log("onAdLoadFailed  CALLBACK",a),e.adUnitName===LBBannerObj.adUnitName&&($("#div-gpt-ad-1").css("display","none"),$(".gameOverDiv").css("margin-top","100px"))}),e.adInstance.registerCallback("onAdDisplayed",e=>{console.log("onAdDisplayed  CALLBACK",e)})}function rewardedCallbacks(e){e.adInstance.registerCallback("onAdLoadSucceed",a=>{console.log("onAdLoadSucceeded Rewarded CALLBACK",a),e.adUnitName===replayObj.adUnitName&&(is_replay_noFill=!1),e.adUnitName===rewardObj.adUnitName&&(is_rewarded_noFill=!1)}),e.adInstance.registerCallback("onAdLoadFailed",a=>{console.log("onAdLoadFailed Rewarded CALLBACK",a),e.adUnitName===replayObj.adUnitName&&(is_replay_noFill=!0),e.adUnitName===rewardObj.adUnitName&&(is_rewarded_noFill=!0)}),e.adInstance.registerCallback("onAdDisplayed",e=>{console.log("onAdDisplayed Rewarded CALLBACK",e)}),e.adInstance.registerCallback("onAdClosed",a=>{console.log("onAdClosed Rewarded CALLBACK",a),e.adUnitName==rewardObj.adUnitName&&(isRewardedAdClosedByUser=!0),runOnAdClosed(),isRewardGranted=!1,isRewardedAdClosedByUser=!1}),e.adInstance.registerCallback("onAdClicked",e=>{console.log("onAdClicked Rewarded CALLBACK",e)}),e.adInstance.registerCallback("onRewardsUnlocked",a=>{console.log("onRewardsUnlocked Rewarded CALLBACK",a),e.adUnitName===rewardObj.adUnitName&&(isRewardGranted=!0)})}function runOnAdClosed(){"replay"===_triggerReason?(_triggerReason="",showGame(),replayInstance=window.GlanceGamingAdInterface.loadRewardedAd(replayObj,rewardedCallbacks)):"reward"===_triggerReason&&(_triggerReason="",rewardInstance=window.GlanceGamingAdInterface.loadRewardedAd(rewardObj,rewardedCallbacks))}function replayEvent(){_triggerReason="replay",is_replay_noFill?runOnAdClosed():window.GlanceGamingAdInterface.showRewarededAd(replayInstance)}function rewardEvent(){_triggerReason="reward",is_rewarded_noFill?runOnAdClosed():window.GlanceGamingAdInterface.showRewarededAd(rewardInstance)}function showGame(){"true"===recUI?(window.PwaGameCenterInterface.hideRecommendedSection(),showcanvas()):($("#playMore").css("display","none"),LBBannerInstance.destroyAd(),$("#div-gpt-ad-1").html(""))}