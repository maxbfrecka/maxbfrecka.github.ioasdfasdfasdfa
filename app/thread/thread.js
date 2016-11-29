angular.module('thread',[])

.directive('mxThread', ['testData', '$routeParams', 'newReplyClick', 'threadData', 'replyData', function(testData, $routeParams, newReplyClick, threadData, replyData){
	return {
		restrict: 'E',
	  templateUrl: 'thread/thread.html',
	  scope: true,
	  transclude: true,
	  controllerAs: "tc",
	  controller: function($firebaseArray){
	  	var tc = this;

	  	tc.threads = threadData.threads;
	  	tc.replies = replyData.replies;
	
	  	//gets thread info from URL and finds thread based on OPID
	  	console.log('routeparams ID is ' + $routeParams.ID)
	  	threadData.currentID = $routeParams.ID;
	  	tc.currentID = threadData.currentID
	  	threadData.currentThread = tc.threads.filter(function(obj) {
    		return obj.OPID === tc.currentID;
			})[0];
			tc.thread = threadData.currentThread;
			console.log(tc.thread)


			//locates replies for this thread...
			function search(nameKey, myArray){
				var array = []
		    for (var i=0; i < myArray.length; i++) {
		    		console.log('ID is' + myArray[i].OPID)
		        if (myArray[i].OPID === nameKey) {
		            array.push(myArray[i]);
		        }
		    }
		    return array
			}
			tc.currentReplies = search(tc.currentID, tc.replies);
			console.log(tc.currentReplies)

			tc.threads.$loaded(function(){
				threadData.currentThread = tc.threads.filter(function(obj) {
	    		return obj.OPID === tc.currentID;
					})[0];
				tc.thread = threadData.currentThread;
			})

			tc.replies.$loaded(function(){
				tc.currentReplies = search(tc.currentID, tc.replies);
			})
			


      tc.newReply = function(send){
      		console.log('current ID when sending:' + tc.currentID)
      		console.log("is REPLY working?!!!")
          // do some validation
          if ( !send.reply ) {
          	console.log("nothing happened"); 
          	return false;
          }
          else {
          // save the thread
            console.log('REPLY might be')
            //array of threads containing thread objects
            //thread object contains array of posts
            // threads[0] selects the first thread
            // threads[0].posts[0] is the OP and also URL
            //array of posts inside of each thread

            tc.replies.$add({OPID: tc.currentID, reply: {
                ID: make_randID(),
                userName: 'anonymous',
                datetime: post_time(),
                content: send.reply.trim(),
                rID1bg: randomRGBcolor(),
                rID2bg: randomRGBcolor(),
                rID3bg: randomRGBcolor(),
                rID4bg: randomRGBcolor(),
                rID5bg: randomRGBcolor(),
                rID6bg: randomRGBcolor(),
                rID7bg: randomRGBcolor(),
                rID8bg: randomRGBcolor()
           	}});
            send.reply = '';
            console.log(tc.currentReplies)
            tc.replies.$loaded(function(){
							tc.currentReplies = search(tc.currentID, tc.replies);
							})
          }
      };










			//for show and hide post
			tc.newReplyClick = newReplyClick.if
	  }
  }
}])

.factory('replyData', ['$firebaseArray', function($firebaseArray){
	var replyData = {}
	var ref = firebase.database().ref('replies');
	replyData.replies = $firebaseArray(ref);
	return replyData
}])


.factory('newReplyClick',function(){
	var newReplyClick = {}

	newReplyClick.if = false

	return newReplyClick
})