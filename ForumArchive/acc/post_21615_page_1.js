[{"Owner":"mwpowellhtx","Date":"2016-03-31T20:04:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve tried a couple different event listeners_co_ to no avail.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn a _qt_simple_qt_ (i.e. non-ASP.NET) page_co_ it works just fine_co_ engine starts_co_ I can build a scene_co_ no problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever_co_ when I embed my _lt_em_gt_canvas _lt_/em_gt_in an _lt_em_gt_ASP.NET MVC _lt_/em_gt_partial_co_ then try and start the engine_co_ I get _lt_em_gt__qt_WebGL not supported_qt__lt_/em_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe script is in the body_co_ renders along with the other partials to Html. Nothing special about that.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_window.addEventListener(_t_DOMContentLoaded_t__co_ function() {\n\n    // get the canvas DOM element\n    var canvas _eq_ $(_qt_#wizardCanvas_qt_)_sm_\n\n    // load the 3D engine\n    var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_\n\n    var createScene _eq_ function() {\n\n        // create a basic BJS Scene object\n        var s _eq_ new BABYLON.Scene(engine)_sm_\n\n        // connect with partial-provided scene handler\n        (buildScene || (function() {}))(s)_sm_\n\n        return s_sm_\n    }_sm_\n\n    var scene _eq_ createScene()_sm_\n\n    // run the render loop\n    engine.runRenderLoop(function() {\n        scene.render()_sm_\n    })_sm_\n\n    // the canvas/window resize event handler\n    window.onresize(function() {\n        engine.resize()_sm_\n    })_sm_\n})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI_t_ve also tried connecting with the _lt_em_gt_onload _lt_/em_gt_event. No difference.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_window.onload(function() {\n    // ...\n})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tHere are my script references_co_ via MVC script _qt_bundles_qt_.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_script src_eq__qt_/Scripts/jquery-1.10.2.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n\n&lt_sm_script src_eq__qt_/Scripts/bootstrap.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n&lt_sm_script src_eq__qt_/Scripts/respond.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n\n&lt_sm_script src_eq__qt_/Scripts/jquery-ui-1.11.4.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n\n&lt_sm_script src_eq__qt_/Scripts/ExtensionsJS/str-1.0.3.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n&lt_sm_script src_eq__qt_/Scripts/ExtensionsJS/arr-1.0.1.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n\n&lt_sm_script src_eq__qt_/Scripts/Oimo.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n&lt_sm_script src_eq__qt_/Scripts/babylon.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n&lt_sm_script src_eq__qt_/Scripts/poly2tri.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n\n&lt_sm_script src_eq__qt_/Scripts/modernizr-2.6.2.js_qt_&gt_sm_&lt_sm_/script&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIs there something about the server-side MVC rendering that is causing problems? And how else would I know that_co_ per se?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tActually_co_ I wonder if it is because my script references are in the incorrect order. I_t_ll try that next.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRegards_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMichael Powell\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mwpowellhtx","Date":"2016-03-31T20:06:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tApparently include order made no difference in this case.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mwpowellhtx","Date":"2016-03-31T20:27:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhich leads me to a key feasibility question.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs the user enters config input in the form_co_ I want to respond to those form field changes and update the scene elements accordingly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tProbably_co_ I need to learn how to persuade WebGL / babylon to play nice with my ASP.NET MVC rendered pages_sm_ all that is TBD.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mwpowellhtx","Date":"2016-03-31T21:22:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDuh_co_ I figured it out. _lt_em_gt_jQuery _lt_/em_gt_returned an _lt_em_gt_array _lt_/em_gt_of matching elements_co_ of which I want the _lt_em_gt_first_lt_/em_gt_. i.e.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_// ...\n$(_qt_#wizardCanvas_qt_)[0]\n// ..._lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2016-04-01T08:44:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI love when a topic is already solved when I read it _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ Keep up the good work _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mwpowellhtx","Date":"2016-04-01T18:24:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tMix in a little JavaScript_co_ jQuery_co_ and all of a sudden_co_ I_t_ve got a way of signaling via jQuery among my partial views event when the scene is created. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MasterSplinter","Date":"2016-04-02T02:06:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAnd the lesson learned is... Don_t_t use jQuery _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mwpowellhtx","Date":"2016-04-02T03:26:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t@MasterSplinter I don_t_t know what you_t_re talking about. jQuery is working beautifully to connect created scene with the event handler that actually builds the scene.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-04-02T04:17:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI was scrolling down to anwser you and then bam_co_ you had it... Love it when I watch people figure out their problems. ? Good deal keep it up!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/15320-mastersplinter/?do_eq_hovercard_qt_ data-mentionid_eq__qt_15320_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/15320-mastersplinter/_qt_ rel_eq__qt__qt__gt_@MasterSplinter_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t$. Is a must_co_ if you have not used it yet you need to hop in head first today!!!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MasterSplinter","Date":"2016-04-02T04:34:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThat was sarcasm guys. \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-04-02T10:25:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI would say that non sarcastically. Don_t_t use jQuery. Give me one reason to use it in a Babylon project... People tend to forget that jQuery IS JavaScript. It_t_s not a new magical language. And it makes everything a bit slower. \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-04-02T11:34:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tsome logic\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWebGL _eq_&gt_sm_ html5 _eq_&gt_sm_ real standard among browser editors  + really same shared API + querySelectors and other native stuff formerly done by jQuery _eq_&gt_sm_ no real need for jQuery within BJS\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mwpowellhtx","Date":"2016-04-02T12:44:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t@MasterSplinter Sarcasm doesn_t_t convey well through blogs and such. Not without having set up the context.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t@RaananW @jerome Fair enough. I seem to recall reading some blog somewhere recently at how jQuery was going obsolete_co_ for exactly these kinds of reasons. Specifically which reasons I couldn_t_t tell you_co_ but it bears further investigation. Thanks...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MasterSplinter","Date":"2016-04-02T17:20:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tSome stuff is nice and requires fewer lines of code to do with jQuery.  But if you are only using it for class selectors that_t_s just silly.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mwpowellhtx","Date":"2016-04-02T17:41:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t@MasterSplinter I hear you.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut in my case_co_ I_t_m using event mechanisms as well_co_ which jQuery is pretty good at doing. Again_co_ if there_t_s a native alternative that is just as strong_co_ would go native.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLook_co_ I_t_m not defending what I am doing_co_ just looking for stack thoughts. I appreciate the feedback.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-04-02T18:19:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tNo one is attacking_co_ so no defending is needed.  I think that eventually everyone_t_s simply trying to help. I hope it comes out like this as well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhenever I see_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_$.each(....)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI wonder if the person who implemented this knows how JavaScript has changed since ES3. What_t_s wrong with the native forEach function?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tjQuery is no magic. it uses native JavaScript functions. So when asking if there is a native alternative_co_ my answer would be - it is already native _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI am not sure what you mean with event mechanisms. if you refer to the almighty $(selector).on(_t_eventname_t_.....)_co_ then using the addEventListener will work. The selector is the tricky part. This is what makes jQuery so loved by everyone_co_ but also very slow. Luckily_co_ most (if not all) browsers support _lt_a href_eq__qt_http_dd_//www.w3schools.com/jsref/met_document_queryselector.asp_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.w3schools.com/jsref/met_document_queryselector.asp_lt_/a_gt_ so jQuery is mostly not needed _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI have nothing against jQuery in general. but a Babylon project is a WebGL project. It needs speed_co_ and as little delay as possible between frames. And jQuery is not known for its amazing process speed. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-04-02T18:31:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI agree \n_lt_/p_gt_\n\n_lt_p_gt_\n\t16 ms only to do everything once the render loop is started ...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo it_t_s better to keep the more straight forward and direct as possible in our own code and we need to keep in mind that BJS has also lots of operations to compute on its side in order to display our nicest ideas in 3D _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat is jQuery good for ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt used to provide a good poyfill for older browsers that hadn_t_t the wanted methods_co_ it used to provide the way to write a cross-browser code only once (when the browser editors used to love to implement their own version of html or js)_co_ it used to give a nice way to have the query selectors.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut since HTML5 is out (and remember _dd_ if you are using WebGL_co_ you are  necesseraly using HTML5)_co_ all the browser editors tend to converge to the same W3C standard (nearly 20 years after the browser war started_co_ let_t_s enjoy the peace now)_co_ they are even a part of the standard writers.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou don_t_t have to care about the browser versions now (does this IE version have this way to do xmlHttpRequest ? how does this browser call this event ?  etc) if you code with BJS. It_t_s HTML5 for everyone.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust care about the perfs.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMoreover_co_ HTML5 provides natively now what jQuery invented about the querySelector.. but faster. _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI personnaly keep on using jQuery_co_ what is a wonderful lib_co_ when I need to provide a web page to an unknown target (html 4.1_co_ this should work on any browser... well_co_ the more possible_co_ even the oldest ones) or maybe a page with heavy DOM manipulations.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut if I know my code is explicitly  HTML5_co_ I don_t_t know what jQuery brings more. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mwpowellhtx","Date":"2016-04-02T19:53:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ Fair enough. Like I said_co_ the feedback is appreciated_co_ it is good to know. For my part_co_ I_t_m coming at this as though it were ES version 1 to me_sm_ I_t_ve worked with JavaScript in the past_co_ and it_t_s easy enough to prototype bits where I need them. Then_co_ when I learn there are readily available bits_co_ of course_co_ it_t_s good to know.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyhow_co_ I_t_ve put this one to bed now.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks all for the feedback.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]