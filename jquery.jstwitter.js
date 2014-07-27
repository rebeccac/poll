$(function() {			
	var url = window.location.pathname;
	var pageName = url.substring(url.lastIndexOf('/')+1);



	JQTWEET = {
	     
	    // Set twitter hash/user, number of tweets & id/class to append tweets
	    // You need to clear tweet-date.txt before toggle between hash and user
	    // for multiple hashtags, you can separate the hashtag with OR, eg:
	    // hash: '%23jquery OR %23css'			    
	    search: '', //leave this blank if you want to show user's tweet
	    user: 'Federal Lower House', //username
	    numTweets: 80, //number of tweets
	    cacheExpiry: 0.25,
	    appendTo: '#jstwitter',
	    useGridalicious: true,
	    template: '<div class="item"><div class="tweet-wrapper"><div class="header"><div class="avatar"><img src="{PHO}" /></div><span class="name"><a class="name_link" href="https://www.twitter.com/{USER}">{NAME}</a></span></div>{IMG}<span class="text">{TEXT}</span>\
	               <div class="date-time">Tweeted: <span class="time"><a href="{URL}" target="_blank">{AGO}</a></span></div></div></div>',
	     
	    // core function of jqtweet
	    // https://dev.twitter.com/docs/using-search
	    loadTweets: function() {

	        var request;
	         
	        // different JSON request {hash|user}
	        // if (JQTWEET.search) {
	        //     request = {
	        //         q: JQTWEET.search,
	        //         count: JQTWEET.numTweets,
	        //         expiry: JQTWEET.cacheExpiry,
	        //         api: 'search_tweets'
	        //     }
	        // } 
	        
	        if(pageName == 'index.php' || pageName== '' || pageName == 'fed-lower-house.php') {
            	JQTWEET.user = 'Federal Lower House';
            	request = {
	                q: JQTWEET.user,
	                count: JQTWEET.numTweets,
	                list_id: 95526688,
	                expiry: JQTWEET.cacheExpiry,
	                api: 'lists_statuses' 
            	}
        	}

        	else if(pageName == 'fed-upper-house.php') {
            	JQTWEET.user = 'Federal Upper House';
            	request = {
	                q: JQTWEET.user,
	                count: JQTWEET.numTweets,
	                list_id: 95856722,
	                expiry: JQTWEET.cacheExpiry,
	                api: 'lists_statuses'
            	}
        	}

        	else if(pageName == 'act.php') {
            	JQTWEET.user = 'ACT';
            	request = {
	                q: JQTWEET.user,
	                count: JQTWEET.numTweets,
	                list_id: 96400390,
	                expiry: JQTWEET.cacheExpiry,
	                api: 'lists_statuses'
            	}
        	}

        	else if(pageName == 'nsw-lower-house.php') {
            	JQTWEET.user = 'NSW Lower House';
            	request = {
	                q: JQTWEET.user,
	                count: JQTWEET.numTweets,
	                list_id: 95585022,
	                expiry: JQTWEET.cacheExpiry,
	                api: 'lists_statuses'
            	}
        	}

        	else if(pageName == 'nsw-upper-house.php') {
            	JQTWEET.user = 'NSW Upper House';
            	request = {
	                q: JQTWEET.user,
	                count: JQTWEET.numTweets,
	                list_id: 95860103,
	                expiry: JQTWEET.cacheExpiry,
	                api: 'lists_statuses'
            	}
        	}

        	else if(pageName == 'nt.php') {
	        	JQTWEET.user = 'NT';
	            request = {
	                q: JQTWEET.user,
	                count: JQTWEET.numTweets,
	                list_id: 95583402,
	                expiry: JQTWEET.cacheExpiry,
	                api: 'lists_statuses'
	            }
	        }

	        else if(pageName == 'qld.php') {
	        	JQTWEET.user = 'QLD';
	            request = {
	                q: JQTWEET.user,
	                count: JQTWEET.numTweets,
	                list_id: 96580862,
	                expiry: JQTWEET.cacheExpiry,
	                api: 'lists_statuses'
	            }
	        }

	        else if(pageName == 'sa-lower-house.php') {
	        	JQTWEET.user = 'SA Lower House';
	            request = {
	                q: JQTWEET.user,
	                count: JQTWEET.numTweets,
	                list_id: 95526395,
	                expiry: JQTWEET.cacheExpiry,
	                api: 'lists_statuses'
	            }
	        }

	        else if(pageName == 'sa-upper-house.php') {
	        	JQTWEET.user = 'SA Upper House';
	            request = {
	                q: JQTWEET.user,
	                count: JQTWEET.numTweets,
	                list_id: 95858261,
	                expiry: JQTWEET.cacheExpiry,
	                api: 'lists_statuses'
	            }
	        }

	         else if(pageName == 'tas-lower-house.php') {
	        	JQTWEET.user = 'TAS Lower House';
	            request = {
	                q: JQTWEET.user,
	                count: JQTWEET.numTweets,
	                list_id: 95811627,
	                expiry: JQTWEET.cacheExpiry,
	                api: 'lists_statuses'
	            }
	        }

	         else if(pageName == 'tas-upper-house.php') {
	        	JQTWEET.user = 'TAS Upper House';
	            request = {
	                q: JQTWEET.user,
	                count: JQTWEET.numTweets,
	                list_id: 96180420,
	                expiry: JQTWEET.cacheExpiry,
	                api: 'lists_statuses'
	            }
	        }

	        else if(pageName == 'vic-lower-house.php') {
	        	JQTWEET.user = 'VIC Lower House';
	            request = {
	                q: JQTWEET.user,
	                count: JQTWEET.numTweets,
	                list_id: 95532623,
	                expiry: JQTWEET.cacheExpiry,
	                api: 'lists_statuses'
	            }
	        }

	         else if(pageName == 'vic-upper-house.php') {
	        	JQTWEET.user = 'VIC Upper House';
	            request = {
	                q: JQTWEET.user,
	                count: JQTWEET.numTweets,
	                list_id: 96181475,
	                expiry: JQTWEET.cacheExpiry,
	                api: 'lists_statuses'
	            }
	        }

	         else if(pageName == 'wa-lower-house.php') {
	        	JQTWEET.user = 'WA Lower House';
	            request = {
	                q: JQTWEET.user,
	                count: JQTWEET.numTweets,
	                list_id: 96239446,
	                expiry: JQTWEET.cacheExpiry,
	                api: 'lists_statuses'
	            }
	        }

	          else if(pageName == 'wa-upper-house.php') {
	        	JQTWEET.user = 'WA Upper House';
	            request = {
	                q: JQTWEET.user,
	                count: JQTWEET.numTweets,
	                list_id: 96241997,
	                expiry: JQTWEET.cacheExpiry,
	                api: 'lists_statuses'
	            }
	        }

	        
	        $.ajax({
	            url: 'grabtweets.php',
	            type: 'POST',
	            dataType: 'json',
	            data: request,
	            success: function(data, textStatus, xhr) {
		            
		            if (data.httpstatus == 200) {
		            	if (JQTWEET.search) data = data.statuses;

	                var text, name, img;	         
	                	                
	                try {
	                  // append tweets into page
	                  for (var i = 0; i < JQTWEET.numTweets; i++) {		
	                    img = '';
	                    
	                    url = 'http://twitter.com/' + data[i].user.screen_name + '/status/' + data[i].id_str;
	                    try {
	                      if (data[i].entities['media']) {
	                        img = '<a href="' + url + '" target="_blank"><img src="' + data[i].entities['media'][0].media_url + '" /></a>';
	                      }
	                    } catch (e) {  
	                      //no media
	                    }
	                  	
	                  	text = '';
	                    if(data[i]['retweeted_status']) {
	                    	text = "RT @" + data[i]['retweeted_status']['user']['screen_name'] + ": " + data[i]['retweeted_status'].text;
	                    }
	                    else {
	                    	text = data[i].text;
	                    }


	                  	var screen_name = data[i].user.screen_name;
	                  	var name = data[i].user.name;
	                  	var photo = data[i].user.profile_image_url;
	                  	var img = img;
	                  	var timeAgo = JQTWEET.timeAgo(data[i].created_at);
	                  	var url = url;
	                  	
	                       $(JQTWEET.appendTo).append( JQTWEET.template.replace('{TEXT}', JQTWEET.ify.clean(text) )

	                        .replace('{USER}', data[i].user.screen_name)
	                        .replace('{NAME}', data[i].user.name)
	                        .replace('{PHO}', data[i].user.profile_image_url)
	                        .replace('{IMG}', img)                                
	                        .replace('{AGO}', JQTWEET.timeAgo(data[i].created_at) )
	                        .replace('{URL}', url )			                            
	                        );
	                  }
                  
                  } catch (e) {
	                  //item is less than item count
                  }
                  
		                if (JQTWEET.useGridalicious) {                
			                //run grid-a-licious
											$(JQTWEET.appendTo).gridalicious({
												gutter: 13, 
												width: 200, 
												animate: true
											});	                   
										}                  
	                    
	               } else alert('no data returned');
	             
	            }   
	 
	        });
	 
	    }, 
	     
	         
	    /**
	      * relative time calculator FROM TWITTER
	      * @param {string} twitter date string returned from Twitter API
	      * @return {string} relative time like "2 minutes ago"
	      */
	    timeAgo: function(dateString) {
	        var rightNow = new Date();
	        var then = new Date(dateString);
	         
	        if ($.browser.msie) {
	            // IE can't parse these crazy Ruby dates
	            then = Date.parse(dateString.replace(/( \+)/, ' UTC$1'));
	        }
	 
	        var diff = rightNow - then;
	 
	        var second = 1000,
	        minute = second * 60,
	        hour = minute * 60,
	        day = hour * 24,
	        week = day * 7;
	 
	        if (isNaN(diff) || diff < 0) {
	            return ""; // return blank string if unknown
	        }
	 
	        if (diff < second * 2) {
	            // within 2 seconds
	            return "right now";
	        }
	 
	        if (diff < minute) {
	            return Math.floor(diff / second) + " seconds ago";
	        }
	 
	        if (diff < minute * 2) {
	            return "about 1 minute ago";
	        }
	 
	        if (diff < hour) {
	            return Math.floor(diff / minute) + " minutes ago";
	        }
	 
	        if (diff < hour * 2) {
	            return "about 1 hour ago";
	        }
	 
	        if (diff < day) {
	            return  Math.floor(diff / hour) + " hours ago";
	        }
	 
	        if (diff > day && diff < day * 2) {
	            return "yesterday";
	        }
	 
	        if (diff < day * 365) {
	            return Math.floor(diff / day) + " days ago";
	        }
	 
	        else {
	            return "over a year ago";
	        }
	    }, // timeAgo()
	     
	     
	    /**
	      * The Twitalinkahashifyer!
	      * http://www.dustindiaz.com/basement/ify.html
	      * Eg:
	      * ify.clean('your tweet text');
	      */
	    ify:  {
	      link: function(tweet) {
	        return tweet.replace(/\b(((https*\:\/\/)|www\.)[^\"\']+?)(([!?,.\)]+)?(\s|$))/g, function(link, m1, m2, m3, m4) {
	          var http = m2.match(/w/) ? 'http://' : '';
	          return '<a class="twtr-hyperlink" target="_blank" href="' + http + m1 + '">' + ((m1.length > 25) ? m1.substr(0, 24) + '...' : m1) + '</a>' + m4;
	        });
	      },
	 
	      at: function(tweet) {
	        return tweet.replace(/\B[@＠]([a-zA-Z0-9_]{1,20})/g, function(m, username) {
	          return '<a target="_blank" class="twtr-atreply" href="http://twitter.com/intent/user?screen_name=' + username + '">@' + username + '</a>';
	        });
	      },
	 
	      list: function(tweet) {
	        return tweet.replace(/\B[@＠]([a-zA-Z0-9_]{1,20}\/\w+)/g, function(m, userlist) {
	          return '<a target="_blank" class="twtr-atreply" href="http://twitter.com/' + userlist + '">@' + userlist + '</a>';
	        });
	      },
	 
	      hash: function(tweet) {
	        return tweet.replace(/(^|\s+)#(\w+)/gi, function(m, before, hash) {
	          return before + '<a target="_blank" class="twtr-hashtag" href="http://twitter.com/search?q=%23' + hash + '">#' + hash + '</a>';
	        });
	      },
	 
	      clean: function(tweet) {
	        return this.hash(this.at(this.list(this.link(tweet))));
	      }
	    } // ify
	 
	     
	};		
	
});
