!function(e){"use strict";var r=location.search,d=location.protocol+"//"+location.host+location.pathname;-1!==r.indexOf("notify=1")&&window.history.replaceState({},document.title,d),e(function(){e(document).on("click",".gdpr.gdpr-privacy-bar .gdpr-agreement",function(){e(".gdpr-privacy-preferences-frm").submit()}),e(document).on("click",".gdpr-preferences",function(){e(this).data("type");e(".gdpr-overlay").fadeIn(),e(".gdpr.gdpr-privacy-preferences .gdpr-wrapper").fadeIn()}),e(document).on("click",".gdpr.gdpr-privacy-preferences .gdpr-close, .gdpr-overlay",function(){e(".gdpr-overlay").fadeOut(),e(".gdpr.gdpr-privacy-preferences .gdpr-wrapper").fadeOut()}),e(document).on("click",".gdpr.gdpr-privacy-preferences .gdpr-tabs button",function(){var r="."+e(this).data("target");e(".gdpr.gdpr-privacy-preferences .gdpr-tab-content > div").removeClass("gdpr-active"),e(".gdpr.gdpr-privacy-preferences .gdpr-tab-content "+r).addClass("gdpr-active"),e(".gdpr.gdpr-privacy-preferences .gdpr-tabs").hasClass("gdpr-mobile-expanded")&&(e(".gdpr.gdpr-privacy-preferences .gdpr-mobile-menu button").removeClass("gdpr-active"),e(".gdpr.gdpr-privacy-preferences .gdpr-tabs").toggle()),e(".gdpr.gdpr-privacy-preferences .gdpr-tabs button").removeClass("gdpr-active"),e(".gdpr-subtabs li button").removeClass("gdpr-active"),e(this).hasClass("gdpr-tab-button")?(e(this).addClass("gdpr-active"),e(this).hasClass("gdpr-cookie-settings")&&e(".gdpr-subtabs").find("li button").first().addClass("gdpr-active")):(e(".gdpr-cookie-settings").addClass("gdpr-active"),e(this).addClass("gdpr-active"))}),e(document).on("click",".gdpr.gdpr-privacy-preferences .gdpr-mobile-menu button",function(r){e(this).toggleClass("gdpr-active"),e(".gdpr.gdpr-privacy-preferences .gdpr-tabs").toggle().addClass("gdpr-mobile-expanded")}),e(window).resize(function(){e(window).width()>640&&e(".gdpr.gdpr-privacy-preferences .gdpr-tabs").hasClass("gdpr-mobile-expanded")&&(e(".gdpr.gdpr-privacy-preferences .gdpr-mobile-menu button").removeClass("gdpr-active"),e(".gdpr.gdpr-privacy-preferences .gdpr-tabs").removeClass("gdpr-mobile-expanded").removeAttr("style"))}),e("form.gdpr-add-to-deletion-requests").on("submit",function(r){e(this).hasClass("confirmed")||(r.preventDefault(),e(".gdpr-overlay").fadeIn(),e(".gdpr.gdpr-delete-confirmation .gdpr-wrapper").css({display:"flex"}).hide().fadeIn())}),e(document).on("click",".gdpr.gdpr-general-confirmation .gdpr-close, .gdpr-overlay",function(){e(".gdpr-overlay").fadeOut(),e(".gdpr.gdpr-general-confirmation .gdpr-wrapper").fadeOut()}),e(document).on("click",".gdpr.gdpr-delete-confirmation button.gdpr-delete-account",function(){e("form.gdpr-add-to-deletion-requests").addClass("confirmed"),e("form.gdpr-add-to-deletion-requests.confirmed").submit(),e(".gdpr-overlay").fadeOut(),e(".gdpr.gdpr-delete-confirmation .gdpr-wrapper").fadeOut()}),e(".gdpr-accept-confirmation").length>0&&(e(".gdpr-overlay").fadeIn(),e(".gdpr.gdpr-accept-confirmation .gdpr-wrapper").css({display:"flex"}).hide().fadeIn(),e(document).on("click",".gdpr.gdpr-accept-confirmation button.gdpr-ok",function(){e(".gdpr-overlay").fadeOut(),e(".gdpr.gdpr-accept-confirmation .gdpr-wrapper").fadeOut()})),e(".gdpr-consent-modal").length>0&&e("body").css("overflow","hidden"),e(document).on("click",".gdpr-agree",function(r){r.preventDefault();var d=e(this);e.post(GDPR.ajaxurl,{action:"agree_with_terms",nonce:e(this).data("nonce")},function(r){r.success&&d.closest(".gdpr-consent-modal").fadeOut(300,function(){e(this).remove(),0==e(".gdpr-consent-modal").length&&e("body").css("overflow","auto")})})}),e(document).on("click",".gdpr-disagree",function(r){r.preventDefault(),e.post(GDPR.ajaxurl,{action:"disagree_with_terms",nonce:e(this).data("nonce")},function(e){e.success&&location.reload()})})})}(jQuery);