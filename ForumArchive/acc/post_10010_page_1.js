[{"Owner":"macguyvok","Date":"2014-10-25T20:41:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m a bit new to Babylon.js_co_ and WebGL development (though I_t_ve been working on 3D game projects for several years). My current project is a 3D space game_co_ and I_t_m attempting to make a skybox. I followed the tutorials linked on the wiki_co_ and was surprised to find that there was no mention of how to make the skybox stay a fixed distance from the camera_co_ or render before everything else._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_After some digging around_co_ I found _lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_mesh.infiniteDistance_lt_/span_gt__sm_ this seems to solve half of my problem. What I_t_m unsure about_co_ however_co_ is how to make the skybox render before everything else in the scene?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For those curious_co_ this is what happens without doing that_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//oi57.tinypic.com/2ld7xxs.jpg_qt_ alt_eq__qt_2ld7xxs.jpg_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//oi60.tinypic.com/2uhwglu.jpg_qt_ alt_eq__qt_2uhwglu.jpg_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Needless to say_co_ it_t_ll be hard to play a game with ships popping in and out of existence.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Any ideas?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2014-10-25T23:39:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_To make the skybox stay where the camera is_co_ you simply make it_t_s position equal to the camera every frame! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_scene.registerBeforeRender(function() {skybox.position _eq_ camera.position}_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"macguyvok","Date":"2014-10-26T01:09:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_59040_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_10010_qt_ data-ipsquote-username_eq__qt_joshcamas_qt_ data-cite_eq__qt_joshcamas_qt_ data-ipsquote-timestamp_eq__qt_1414280350_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_To make the skybox stay where the camera is_co_ you simply make it_t_s position equal to the camera every frame! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_scene.registerBeforeRender(function() {skybox.position _eq_ camera.position}_lt_/pre_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I figured that out_co_ actually.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ Then I discovered _lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_mesh.infiniteDistance_lt_/span_gt__co_ which does that for you automatically. (Which is very nice_co_ if an odd choice of name.)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What I_t_m really trying to figure out is how to control the render order._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2014-10-26T03:31:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m slightly confused - why is render order important?_lt_/p_gt__lt_p_gt_I think I remember something that does this... renderingGroupId_co_ maybe?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"macguyvok","Date":"2014-10-26T04:29:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_59049_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_10010_qt_ data-ipsquote-username_eq__qt_joshcamas_qt_ data-cite_eq__qt_joshcamas_qt_ data-ipsquote-timestamp_eq__qt_1414294301_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_I_t_m slightly confused - why is render order important?_lt_/p_gt__lt_p_gt_I think I remember something that does this... renderingGroupId_co_ maybe?_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Basically_co_ the skybox needs to be rendered before everything else in the scene_co_ so that it never paints on top of the objects in the scene. As you can see in the screenshots_co_ at the edge of the box the model is clipping through the skybox. In order to prevent this (and to prevent the model disappearing entirely) the skybox must always be drawn first._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here is a brief discussion of normal GL techniques for doing this_co_ from Stack Overflow_dd_ _lt_a href_eq__qt_http_dd_//stackoverflow.com/questions/2859722/opengl-how-can-i-put-the-skybox-in-the-infinity_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//stackoverflow.com/questions/2859722/opengl-how-can-i-put-the-skybox-in-the-infinity_lt_/a_gt__lt_/p_gt__lt_p_gt_(That was just what a quick google search turned up_sm_ there are better discussions_sm_ I_t_ll dig up more if you_t_re really interested.)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As far as renderingGroupId_co_ any documentation on that? I haven_t_t been able to find any..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Stephen Andrews","Date":"2014-10-26T07:26:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I was wondering about this too_co_ and the best solution I found was to make the skybox extremely large_co_ (around 200000)_co_ then setting the camera_t_s maxZ property to that size. But it doesn_t_t _lt_em_gt_really_lt_/em_gt_ solve the problem. I assume it would be trivial to force an object to render at the back of the zBuffer using _lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_glDepthBuffer(1_co_1)_co_ but that would probably require a BabylonJS patch._lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_See_dd_ _lt_/span_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/3865-what-do-you-want-in-babylonjs/?p_eq_58479_qt__gt_http_dd_//www.html5gamedevs.com/topic/3865-what-do-you-want-in-babylonjs/?p_eq_58479_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_About the game_co_ I happen to have just started working on a 3D space game as well_co_ but my modeling skills are horrid._lt_/p_gt__lt_p_gt_What sort of game are you trying to make? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And those skybox textures_co_ where did you get them? They look great!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"macguyvok","Date":"2014-10-26T08:10:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_59054_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_10010_qt_ data-ipsquote-username_eq__qt_TriBlade9_qt_ data-cite_eq__qt_TriBlade9_qt_ data-ipsquote-timestamp_eq__qt_1414308412_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_I was wondering about this too_co_ and the best solution I found was to make the skybox extremely large_co_ (around 200000)_co_ then setting the camera_t_s maxZ property to that size. But it doesn_t_t _lt_em_gt_really_lt_/em_gt_ solve the problem. I assume it would be trivial to force an object to render at the back of the zBuffer using _lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_glDepthBuffer(1_co_1)_co_ but that would probably require a BabylonJS patch._lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_See_dd_ _lt_/span_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/3865-what-do-you-want-in-babylonjs/?p_eq_58479_qt__gt_http_dd_//www.html5gamedevs.com/topic/3865-what-do-you-want-in-babylonjs/?p_eq_58479_lt_/a_gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Yeah_co_ I_t_m not willing to just do the huge box hack_sm_ it_t_s unfortunate if that_t_s the only way. OTOH_co_ I_t_m not allergic to making a patch_co_ if it comes down to that. There is a _lt_em_gt_less hacky_lt_/em_gt_ solution_co_ which we came up with thanks to three.js_sm_ create a separate scene for the skybox_co_ render it_co_ then without clearing_co_ render the main scene. I dislike it_co_ but it_t_s the only way to do it in three.js_co_ and it ought to work in Babylon. Just haven_t_t tried it yet._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt_About the game_co_ I happen to have just started working on a 3D space game as well_co_ but my modeling skills are horrid._lt_/p_gt__lt_p_gt_What sort of game are you trying to make? _lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You see our ship? That_t_s about the absolute limit of any of our modeling talents... combined. The game_t_s a space-based MMORPG. My group (3 others_co_ plus me) have been dabbling with it on and off for years_co_ switching engines_co_ learning a lot about design_co_ etc. We finally feel like we_t_ve got a handle on something that fits inside a decent scope and has a chance of being able to see more than just the devs play it_co_ so in the last month or so development_t_s really ramped up. Here_t_s the elevator pitch_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_em_gt_Free to play_co_ story-based MMO_co_ like Guild Wars 2 meets Star Trek Online_co_ focused on small group and casual play._lt_/em_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The interesting part_co_ to me_co_ is less about the game_co_ and the fact that we plan on keeping it 100% open source_co_ and once we get the core gameplay solid_co_ we_t_ll do small content pushes pretty regularly_co_ trying to build our community with each push. If we get enough interested people_co_ we_t_ll probably open up patreon_co_ or something similar_sm_ we_t_re probably about a year out from considering that_co_ though._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you_t_re interested_co_ here_t_s the code for the current version_dd__lt_/p_gt__lt_ul_gt__lt_li_gt_Client_dd_ _lt_a href_eq__qt_https_dd_//github.com/SkewedAspect/rfi-webgl-client_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/SkewedAspect/rfi-webgl-client_lt_/a_gt__lt_/li_gt__lt_li_gt_Server_dd_ _lt_a href_eq__qt_https_dd_//github.com/SkewedAspect/rfi-server_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/SkewedAspect/rfi-server_lt_/a_gt__lt_/li_gt__lt_/ul_gt__lt_p_gt_Not a ton of documentation_co_ atm_co_ because we_t_re still running pretty fast and loose. No demo up_co_ either_co_ but once we have something more interesting than a single ship_co_ that_t_ll probably change.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt_And those skybox textures_co_ where did you get them? They look great!_lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If I remember right_co_ it was this tool_dd_ _lt_a href_eq__qt_http_dd_//sourceforge.net/projects/spacescape/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//sourceforge.net/projects/spacescape/_lt_/a_gt_ (It_t_s been a couple years since we generated that nebula texture_co_ tbh.)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Stephen Andrews","Date":"2014-10-26T09:00:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_Yeah_co_ I_t_m not willing to just do the huge box hack_sm_ it_t_s unfortunate if that_t_s the only way. OTOH_co_ I_t_m not allergic to making a patch_co_ if it comes down to that. There is a _lt_em_gt_less hacky_lt_/em_gt_ solution_co_ which we came up with thanks to three.js_sm_ create a separate scene for the skybox_co_ render it_co_ then without clearing_co_ render the main scene. I dislike it_co_ but it_t_s the only way to do it in three.js_co_ and it ought to work in Babylon. Just haven_t_t tried it yet._lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_I_t_ll take a look at the Babylon sources a bit later. This is a rather pressing issue as it negatively impacts performance to do it my way_co_ and I believe even more so your way._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Your game sounds pretty sweet! I_t_m watching both repos._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_My project is also using Node.js_co_ though in the form of node-webkit for the download client_co_ and a browserified version for the web. I plan to open-source the server_co_ but not the client_co_ as I need some sort of income to host the website and master server list._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The game concept is basically _lt_a href_eq__qt_http_dd_//funorb.wikia.com/wiki/Void_Hunters_qt_ rel_eq__qt_external nofollow_qt__gt_Void Hunters_lt_/a_gt_ meets _lt_a href_eq__qt_http_dd_//www.youtube.com/watch?v_eq_FooHdevXQnM_qt_ rel_eq__qt_external nofollow_qt__gt_Moon Breakers_lt_/a_gt_ (With worse graphics than both games....)_co_ a 3D space dogfighting match-based game in which you scavenge and add parts to your ship. Still trying to think of a good name. Current working title is Steel Privateer._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Attempting to run SpaceScape under WINE. _dd_/_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Anyways_co_ back on topic. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"macguyvok","Date":"2014-10-26T17:10:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_59061_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_10010_qt_ data-ipsquote-username_eq__qt_TriBlade9_qt_ data-cite_eq__qt_TriBlade9_qt_ data-ipsquote-timestamp_eq__qt_1414314029_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_I_t_ll take a look at the Babylon sources a bit later. This is a rather pressing issue as it negatively impacts performance to do it my way_co_ and I believe even more so your way._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think that_co_ tbh_co_ there_t_s not much of a performance impact doing things the three.js way (can_t_t say my way_co_ I haven_t_t actually implemented it in babylon yet.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ )_co_ as it_t_s just a slightly convoluted way of getting at exactly what I want_dd_ rendering the skybox before all else. I expect the penalties to be in slight memory use_co_ with a tiny per-frame performance hit. My biggest complaint about this method is mostly code complexity_sm_ I_t_d prefer to be able to set a couple of flags on the sky box when created_co_ instead of having to create a new scene_co_ etc. I may poke this problem more today_co_ if I come up with any numbers_co_ I_t_ll let you know._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_My project is also using Node.js_co_ though in the form of node-webkit for the download client_co_ and a browserified version for the web. I plan to open-source the server_co_ but not the client_co_ as I need some sort of income to host the website and master server list._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The game concept is basically _lt_a href_eq__qt_http_dd_//funorb.wikia.com/wiki/Void_Hunters_qt_ rel_eq__qt_external nofollow_qt__gt_Void Hunters_lt_/a_gt_ meets _lt_a href_eq__qt_http_dd_//www.youtube.com/watch?v_eq_FooHdevXQnM_qt_ rel_eq__qt_external nofollow_qt__gt_Moon Breakers_lt_/a_gt_ (With worse graphics than both games....)_co_ a 3D space dogfighting match-based game in which you scavenge and add parts to your ship. Still trying to think of a good name. Current working title is Steel Privateer._lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Ah_co_ neat_co_ there needs to be more space games like that! (I was a big fan of _lt_a href_eq__qt_http_dd_//en.wikipedia.org/wiki/Freelancer_(video_game)_qt_ rel_eq__qt_external nofollow_qt__gt_Freelancer_lt_/a_gt_ back in the day.) And_co_ Steal Privateer isn_t_t a terribly name_co_ honestly._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve looked into node-webkit_co_ and we_t_re currently using browserify for the client (things get weird_co_ as we_t_re also using AngularJS_co_ but it works). We_t_re debating between a desktop client being done as a Chrome app_co_ or a node-webkit app. Not sure what direction we_t_ll take in the end._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Regarding the code and making enough money to keep the lights on_co_ just some (unsolicited) friendly advice. Especially with a game built off web tech_co_ it_t_s really hard to keep the client closed source. Obfuscated code can be _lt_a href_eq__qt_http_dd_//jsbeautifier.org/_qt_ rel_eq__qt_external nofollow_qt__gt_deobfuscated_lt_/a_gt__co_ and a node-webkit app can be opened with a little clever work_co_ and an archive tool. Instead_co_ my advice is to focus on what people get for giving you a little $_dd_ first_co_ you did all the work of packaging up the app. For the average person_co_ that_t_s kinda a big deal. In fact_co_ if you get it on Steam_co_ I know people who_t_d pay a few bucks just to have the game in their Steam games list_co_ despite them having the skills to compile it themselves. Second_co_ if that_t_s not enough income_co_ make your master service list require an account to view_co_ and charge a little bit for the account._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you_t_re looking for a place to host it_co_ I know a few places that are really good_co_ and pretty cheap. I might even be able to work out something free if you don_t_t need that much horsepower while you_t_re developing... feel free to PM me_co_ and we_t_ll talk._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt_Attempting to run SpaceScape under WINE. _dd_/_lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Good luck.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ Though_co_ it is using Ogre3D and Qt_co_ both of which are cross platform. I_t_ll bet you could download and compile it for Linux/Mac (which ever platform you_t_re on.) I seem to remember one of the guys on my team got it running on linux... I_t_ll ask him if he remembers how hard it was._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Stephen Andrews","Date":"2014-10-26T22:25:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_strong_gt_EDIT_dd_ The working solution! (As stated above by _lt_/strong_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm_font-size_dd_12px_sm_font-weight_dd_bold_sm__qt__gt__lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_joshcamas)_lt_/span_gt__lt_/span_gt__lt_/p_gt__lt_p_gt_Set the skybox renderingGroupId to 0 like so_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_skybox.renderingGroupId _eq_ 0_sm_ _lt_/pre_gt__lt_p_gt_And for every other renderable object_co_ set the group ID &gt_sm_ 0_dd_ [Could be a pain to remember and debug]_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_ship.renderingGroupId _eq_ 1_sm__lt_/pre_gt__lt_p_gt_(You probably don_t_t need such simple samples)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Rendering groups are rendered in ascending order_co_ starting with zero_co_ and each appears to have a separate depth buffer. A 3D overlay could be rendered on a higher ID_co_ as opposed to sticking it directly in front of the camera._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Example_dd_ _lt_a href_eq__qt_http_dd_//triblade9.wc.lt/steelprivateer/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//triblade9.wc.lt/steelprivateer/_lt_/a_gt__lt_/p_gt__lt_p_gt_ ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------_lt_br_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt__lt_span style_eq__qt_color_dd_#282828_sm__qt__gt__lt_span style_eq__qt_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_I think that_co_ tbh_co_ there_t_s not much of a performance impact doing things the three.js way (can_t_t say my way_co_ I haven_t_t actually implemented it in babylon yet. _lt_/span_gt__lt_/span_gt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_span style_eq__qt_color_dd_#282828_sm__qt__gt__lt_span style_eq__qt_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_ )_co_ as it_t_s just a slightly convoluted way of getting at exactly what I want_dd_ rendering the skybox before all else. I expect the penalties to be in slight memory use_co_ with a tiny per-frame performance hit. My biggest complaint about this method is mostly code complexity_sm_ I_t_d prefer to be able to set a couple of flags on the sky box when created_co_ instead of having to create a new scene_co_ etc. I may poke this problem more today_co_ if I come up with any numbers_co_ I_t_ll let you know._lt_/span_gt__lt_/span_gt__lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_The engine seems to have some sort of system for accomplishing this_co_ but so far I_t_ve only gotten the skybox to render at the FRONT of the depth buffer. Inverting it causes the skybox to be rendered behind the scene _t_color_t_ or something._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-auto_qt__gt_skybox.registerBeforeRender(function() {\tengine.setDepthFunctionToGreater()_sm_})_sm_skybox.registerAfterRender(function() {\tengine.setDepthFunctionToLessOrEqual()_sm_})_sm__lt_/pre_gt__lt_p_gt_^ Inverting those seems to cause the skybox to render at the front of everything._lt_br_gt_ _lt_br_gt_Thanks for the advice! I_t_ll look into those options._lt_br_gt_ _lt_br_gt_I don_t_t intend to make the client pay-to-play_co_ but some sort of in-game purchase options would be nice_co_ (purely cosmetic_co_ such as decals on your ship). If someone decompiles and redistributes the client_co_ I won_t_t mind too much. But it doesn_t_t feel right to have purchase options in an open-source game.  _lt_br_gt_ _lt_br_gt_There_t_s a great free website host I know of (hostinger.co.uk). That would probably be a good place to start._lt_br_gt_ _lt_br_gt_It_t_s not that I don_t_t have money_co_ but that I_t_ve decided that all my hobby projects should be kept separate from my normal income. If they require resources that must be paid for_co_ they must be self-supporting._lt_br_gt_ _lt_br_gt_I_t_ve attempted to_co_ but not suceeded in compiling Spacescape_co_ it_t_s clearly not designed with linux in mind. _dd_/_lt_br_gt_ _lt_br_gt_P.S. A fellow Texan I see. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"macguyvok","Date":"2014-10-27T15:33:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_59112_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_10010_qt_ data-ipsquote-username_eq__qt_TriBlade9_qt_ data-cite_eq__qt_TriBlade9_qt_ data-ipsquote-timestamp_eq__qt_1414362349_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt__lt_strong_gt_EDIT_dd_ The working solution! (As stated above by _lt_/strong_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm_font-size_dd_12px_sm_font-weight_dd_bold_sm__qt__gt__lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_joshcamas)_lt_/span_gt__lt_/span_gt__lt_/p_gt__lt_p_gt_Set the skybox renderingGroupId to 0 like so_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_skybox.renderingGroupId _eq_ 0_sm_ _lt_/pre_gt__lt_p_gt_And for every other renderable object_co_ set the group ID &gt_sm_ 0_dd_ [Could be a pain to remember and debug]_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_ship.renderingGroupId _eq_ 1_sm__lt_/pre_gt__lt_p_gt_(You probably don_t_t need such simple samples)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Rendering groups are rendered in ascending order_co_ starting with zero_co_ and each appears to have a separate depth buffer. A 3D overlay could be rendered on a higher ID_co_ as opposed to sticking it directly in front of the camera._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Example_dd_ _lt_a href_eq__qt_http_dd_//triblade9.wc.lt/steelprivateer/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//triblade9.wc.lt/steelprivateer/_lt_/a_gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ll give that a shot tonight_co_ once I_t_m home. It seems promising though!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The way I_t_m doing the UI_co_ actually_co_ is just using pure HTML elements that are absolutely positioned. It works great_co_ and there_t_s no performance penalty (did a lot of research on that before hand). Means I can use AngularJS and Bootstrap to build my UI_co_ without needing to jump through any hurtles. And_co_ since I build single page apps all the time_co_ I_t_m familiar with the quirks of absolute positioning..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Haha_co_ yeah_co_ lived in Texas...6? 7? years now. Good place_co_ though West Texas (where I_t_m at) is a bit too dry for me_co_ and my wife misses trees. And hills. And bodies of water larger than a puddle. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Stephen Andrews","Date":"2014-10-27T22:58:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_59155_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_10010_qt_ data-ipsquote-username_eq__qt_macguyvok_qt_ data-cite_eq__qt_macguyvok_qt_ data-ipsquote-timestamp_eq__qt_1414424014_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_I_t_ll give that a shot tonight_co_ once I_t_m home. It seems promising though!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The way I_t_m doing the UI_co_ actually_co_ is just using pure HTML elements that are absolutely positioned. It works great_co_ and there_t_s no performance penalty (did a lot of research on that before hand). Means I can use AngularJS and Bootstrap to build my UI_co_ without needing to jump through any hurtles. And_co_ since I build single page apps all the time_co_ I_t_m familiar with the quirks of absolute positioning..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Haha_co_ yeah_co_ lived in Texas...6? 7? years now. Good place_co_ though West Texas (where I_t_m at) is a bit too dry for me_co_ and my wife misses trees. And hills. And bodies of water larger than a puddle. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_Aye_co_ I_t_m using absolute HTML elements as well_co_ combined with jQuery UI at the moment_co_ but I wouldn_t_t mind switching to a different format._lt_/p_gt__lt_p_gt_I never really thought of using Bootstrap for a game UI_co_ how is it holding up?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If only someone would write a node-compatible pure-javascript MVC UI library. That would make life so much easier. &lt_sm_3_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And yeah_co_ I lived [near Dallas] Texas since I was a kid until about three years ago when I came to China for my job. Love Texas._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"macguyvok","Date":"2014-10-29T02:43:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This absolutely worked!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m glad_co_ too_co_ after the hassles I_t_ve been dealing with trying to nail down good_co_ solid movement/controls. Moving a mesh isn_t_t hard. Moving  mesh in a nice_co_ smooth way based on easily tunable properties... is harder. Re-implementing Star Trek Online-esque controls... is even harder still... _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_..then adding networking..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_We have the next little bit weeks cut out for us. Ah_co_ well._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Stephen Andrews","Date":"2014-10-29T02:50:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_59346_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_10010_qt_ data-ipsquote-username_eq__qt_macguyvok_qt_ data-cite_eq__qt_macguyvok_qt_ data-ipsquote-timestamp_eq__qt_1414550580_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_This absolutely worked!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m glad_co_ too_co_ after the hassles I_t_ve been dealing with trying to nail down good_co_ solid movement/controls. Moving a mesh isn_t_t hard. Moving  mesh in a nice_co_ smooth way based on easily tunable properties... is harder. Re-implementing Star Trek Online-esque controls... is even harder still... _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_..then adding networking..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_We have the next little bit weeks cut out for us. Ah_co_ well._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_Do you need help with smooth moving? I think I got it down_co_ unless you_t_re using physics or parenting the camera directly._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Interestingly_co_ a parented camera seems to jerk (or jerk the parent mesh?!) around a lot_co_ whereas a non-parented camera_co_ with the target/position set every frame is much smoother._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2014-10-29T03:15:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ya_t_ll games sound so cool! I wanna use Node.js as well_co_ but... well... I suck. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I wanna build a skyrim-like game! I use semantic ui for the GUI_co_ at least in my editor. _dd_3_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Stephen Andrews","Date":"2014-10-29T03:24:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_59353_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_10010_qt_ data-ipsquote-username_eq__qt_joshcamas_qt_ data-cite_eq__qt_joshcamas_qt_ data-ipsquote-timestamp_eq__qt_1414552559_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Ya_t_ll games sound so cool! I wanna use Node.js as well_co_ but... well... I suck. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I wanna build a skyrim-like game! I use semantic ui for the GUI_co_ at least in my editor. _dd_3_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_Skyrim-like game in WebGL... That sounds fun.. so long as it has a lower level-of-detail._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Space games in WebGL are genius_co_ as they theoretically require less resources since the world is supposed to be mostly empty. xD_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"macguyvok","Date":"2014-10-29T03:31:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_59353_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_10010_qt_ data-ipsquote-username_eq__qt_joshcamas_qt_ data-cite_eq__qt_joshcamas_qt_ data-ipsquote-timestamp_eq__qt_1414552559_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Ya_t_ll games sound so cool! I wanna use Node.js as well_co_ but... well... I suck. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I wanna build a skyrim-like game! I use semantic ui for the GUI_co_ at least in my editor. _dd_3_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Think of node.js as what this _qt_javascript thing_qt_ really ought to be. Personally_co_ I kinda despise writing js code on the client side_sm_ it_t_s so much more messy than my nice node modules.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As for Skyrim_co_ I_t_ve never seen a WebGL game done with that level of detail_sm_ I_t_d _lt_em_gt_love_lt_/em_gt_ to see a tech demo of that. Personally_co_ I think it could do it_co_ but I_t_m the eternal optimist. (You gotta be to stick with an MMO project as long as I have.)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2014-10-29T03:53:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Skyrim will be very expensive - lots of vertices and such. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m also going to run into a slight problem_dd_ I can_t_t model for crap.  eh_co_ I_t_ll figure it out someday. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"macguyvok","Date":"2014-10-29T04:07:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey_co_ there_t_s always sites like this_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.blendswap.com/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.blendswap.com/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Planning on putting a few commissions up on that site once I get a little further along and need assets._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2014-10-30T03:35:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ohh I like! Ima use a few awesome looking houses in my game until I have time to make my own!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for the linky!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]