/* Automatically generated file. Do not edit directly.
Copyright (C) 2019 Gab AI, Inc.
All Rights Reserved */
var BROWSER_CONFIG={name:"Microsoft Edge",slug:"edge",version:"0.1.5"},BROWSER_CHROME_SLUG="chrome",BROWSER_FIREFOX_SLUG="firefox",BROWSER_EDGE_SLUG="edge",BROWSER_SAFARI_SLUG="safari",BASE_URI="https://dissenter.com/discussion/begin-extension?url=",COMMENT_COUNT_URI="https://dissenter.com/notification/comment-count?url=",BACKGROUND_ACTION_OPEN_POPUP="open_popup",BACKGROUND_ACTION_GET_KEY="get_key",BACKGROUND_ACTION_SET_KEY="set_key",BACKGROUND_ACTION_SET_BADGE="set_badge",BACKGROUND_ACTION_TAB_UPDATED="tab_updated",COLOR_GAB_GREEN="#21cf7b",STORAGE_BASE="gab_dissenter_extension_data",TWITTER_BUTTONS_ENABLED="twitter_buttons_enabled",REDDIT_BUTTONS_ENABLED="reddit_buttons_enabled",YOUTUBE_BUTTONS_ENABLED="youtube_buttons_enabled",WINDOW_SIDEBAR_UNAVAILABLE_ENABLED="window_sidebar_unavailable_enabled",WEBSITE_COMMENT_BADGE_ENABLED="website_comment_badge_enabled",DISSENT_DISQUS_BUTTONS_ENABLED="dissent_disqus_buttons_enabled",STORAGE_DEFAULT_PARAMS={};STORAGE_DEFAULT_PARAMS[TWITTER_BUTTONS_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[REDDIT_BUTTONS_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[YOUTUBE_BUTTONS_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[WINDOW_SIDEBAR_UNAVAILABLE_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[WEBSITE_COMMENT_BADGE_ENABLED]=!1,STORAGE_DEFAULT_PARAMS[DISSENT_DISQUS_BUTTONS_ENABLED]=!0;var STORAGE_KEY_ALL="all",isObject=function(e){return!isArray(e)&&!isDate(e)&&(null!==e&&"object"==typeof e)},isString=function(e){return"string"==typeof e||e instanceof String},isDate=function(e){return!isString(e)&&!isArray(e)&&null!=e&&null!=e&&(e&&"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e))},isArray=function(e){return Array.isArray(e)};function ready(e){var t=document;"loading"==t.readyState?t.addEventListener("DOMContentLoaded",e):e()}function getQueryStringValue(e){return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(e).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}var GDBadge=function(){this.setBadge=function(){browser.runtime.sendMessage({action:BACKGROUND_ACTION_SET_BADGE,url:window.location.href})}},gdb=null;browser.runtime.onMessage.addListener(function(e,t,n){return(e.action||"")===BACKGROUND_ACTION_TAB_UPDATED&&browser.runtime.sendMessage({action:BACKGROUND_ACTION_GET_KEY,key:WEBSITE_COMMENT_BADGE_ENABLED},function(e){if(!e)return!1;gdb||(gdb=new GDBadge),gdb.setBadge()}),!0}),ready(function(){browser.runtime.sendMessage({action:BACKGROUND_ACTION_GET_KEY,key:WEBSITE_COMMENT_BADGE_ENABLED},function(e){if(!e)return!1;setTimeout(function(){(gdb=new GDBadge).setBadge()},150)})});var GDDisqus=function(){function e(){var e=document.getElementById("disqus_thread");if(!e)return!1;var t=function(){var e=document.createElement("div");e.style.setProperty("display","block","important"),e.style.setProperty("width","100%","important"),e.style.setProperty("height","80px","important"),e.style.setProperty("padding","20px 0","important"),e.style.setProperty("overflow","hidden","important"),e.style.setProperty("box-sizing","border-box","important");var t=document.createElement("a");return t.textContent="View Comments on Dissenter",t.style.setProperty("display","block","important"),t.style.setProperty("width","100%","important"),t.style.setProperty("height","40px","important"),t.style.setProperty("background-color",COLOR_GAB_GREEN,"important"),t.style.setProperty("color","#fff","important"),t.style.setProperty("border-radius","4px","important"),t.style.setProperty("text-align","center","important"),t.style.setProperty("margin","0 auto","important"),t.style.setProperty("line-height","40px","important"),t.style.setProperty("font-size","14px","important"),t.style.setProperty("box-sizing","border-box","important"),t.style.setProperty("cursor","pointer","important"),e.appendChild(t),e}();return e.parentElement.insertBefore(t,e),t.onclick=n,!0}function n(){var e=window.location.href,t=window.innerHeight;browser.runtime.sendMessage({action:BACKGROUND_ACTION_OPEN_POPUP,url:e,height:t})}this.init=function(){e()}};ready(function(){browser.runtime.sendMessage({action:BACKGROUND_ACTION_GET_KEY,key:DISSENT_DISQUS_BUTTONS_ENABLED},function(e){if(!e)return!1;setTimeout(function(){(new GDDisqus).init()},2500)})});