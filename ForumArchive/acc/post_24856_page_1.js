[{"Owner":"schwarzdavid","Date":"2016-08-30T07:30:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey Guys_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m pretty new with Babylonjs_co_ and I_t_m facing a problem I cannot solve by myself.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have to show a metal plate_co_ which is long and thin. So I_t_m going to create a ribbon_co_ and it works fine_co_ but when the length gets bigger or when I zoom out_co_ the ribbon starts extremely flickering. You can see an example here_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1CZ6XW%2315_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1CZ6XW#15_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nastro","Date":"2016-08-30T08:35:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHi _lt_span_gt__lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23368-schwarzdavid/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23368_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23368-schwarzdavid/_qt_ rel_eq__qt__qt__gt_@schwarzdavid_lt_/a_gt_ test to use _dd_  camera.minZ _eq_ 100_sm__lt_br /_gt_\n\t  camera.maxZ _eq_ 1000_sm__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nastro","Date":"2016-08-30T08:43:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt_t_s ok with add minZ_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1CZ6XW%2316_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1CZ6XW#16_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLine 23\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"schwarzdavid","Date":"2016-08-30T09:00:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThank you very much\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2016-08-30T10:19:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIt seems that your object is not at the right scale. If that_t_s the case_co_ take care to use correct dimensions in your 3d scenes_co_ it_t_s avoid you some _qt_physical_qt_ issues like this.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-08-30T13:53:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys.  Sorry to interrupt_co_ but... _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20526-vnc3r/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20526_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20526-vnc3r/_qt_ rel_eq__qt__qt__gt_@V!nc3r_lt_/a_gt_... what makes you say that?   If this were a piece of edging... that installs along the side of the _lt_a href_eq__qt_http_dd_//www.mackinacbridge.org/about-the-bridge-8/_qt_ rel_eq__qt_external nofollow_qt__gt_Mackinaw Bridge_lt_/a_gt_ (26_co_372 ft)_co_  then the scale _lt_em_gt_could_lt_/em_gt_ be correct_co_ yes?  The model is 5000 _qt__lt_a href_eq__qt_http_dd_//learningwebgl.com/cookbook/index.php/WebGL_dd__Frequently_Asked_Questions#What_are_the_.22units.22_used_to_position_vertices_in_WebGL.3F_Pixels.3F_qt_ rel_eq__qt_external nofollow_qt__gt_units_lt_/a_gt__qt_ in depth.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd what if those units are millimeters?  5 meters_co_ then.  16 ft.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut yeah_co_ I guess Khronos and the gang are pretending that a webGL _qt_unit_qt_ is 1 meter... making this model just over 3 miles deep.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tHave any thoughts_co_ V-meister? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust curious... wondering if you might have some info about something... that I need to beg you to teach me.  heh.  (I_t_m a knowledge thief_co_ and I_t_ll attack ANYONE to get some.)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tKind of a cool playground.  Good ribbon wrangling!   Nice stuff_co_ and welcome to the forum_co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23368-schwarzdavid/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23368_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23368-schwarzdavid/_qt_ rel_eq__qt__qt__gt_@schwarzdavid_lt_/a_gt_!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2016-08-31T07:48:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI answer as a CG artist _lt_em_gt_(is this the right traduction for _lt_/em_gt_infographiste _lt_em_gt_? I_t_ve never been sure ^^)_lt_/em_gt__co_ a dev_t_ surely could add some points (and may correct my own) _dd_\n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\tworking in right units is part of good practices (_lt_a href_eq__qt_https_dd_//docs.unity3d.com/Manual/HOWTO-ArtAssetBestPracticeGuide.html_qt_ rel_eq__qt_external nofollow_qt__gt_example_lt_/a_gt_)_co_ _t_cause even in computer science we just try to copy the real world so all physical values used on 3d engine/software comes from IRL. It_t_s very important if you set a lighting or use physic engine (such basic collision for example) in order to keep logical value of your lamp intensity_co_ gravity_co_ camera parameters_co_ etc. And in physics_co_ _lt_a href_eq__qt_https_dd_//en.wikipedia.org/wiki/International_System_of_Units_qt_ rel_eq__qt_external nofollow_qt__gt_the default unit is meter_lt_/a_gt_.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tconvenience during modeling _dd_ very large unique object are a pain to navigate through_co_ and software viewport handles it with difficulty (example _dd_ in blender the viewport default camera is set to min[10cm] max[1km])\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tpixel density _dd_ I don_t_t want to calculate the required size of the lightmap/dirtmap/occlusion-map of a 5km object to have a clean render_co_ that scares me _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ (even in google earth_co_ the San Francisco bridge have a texture tiled streaming system on it)\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tin case of Mackinaw bridge_co_ if you want a detailled model (to travel it in FPV for example)_co_ you surely make it in several parts_co_ probably largely instanciate_co_ in order to use LOD_co_ camera occlusion culling_co_ etc\n\t_lt_/li_gt_\n_lt_/ul_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-08-31T10:02:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tEXCELLENT answer... thanks! \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23143-max123/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23143_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23143-max123/_qt_ rel_eq__qt__qt__gt_@max123_lt_/a_gt_ recently proposed scaling an entire scene_co_ or camera scaling... and I was thinking about the ramifications. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was wondering if the length of a meter... would scale_co_ too.  IF all units of measure involved in the scene... scaled WITH the scene scaling_co_ then all the _lt_em_gt_ratios_lt_/em_gt_ would remain the same.  Even in Blender_co_ if the scene were scaled-up by a factor of two_co_ the maxZ would double... adjusting to the scene_t_s master scale setting.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHmm_co_ difficult to comprehend.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf there were a scene.scaling property_co_ I wonder how many places in the code_co_ both for webGL framework and physics engines_co_ would need to perform a final multiplication against current scene.scaling.  If scene.scaling DID exist_co_ all the mesh distances from origin 0_co_0_co_0... would need to scale_co_ too.  But the distance _qt_ratios_qt_ of the mesh placements... would remain the same.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ I have a project going that requires lots of vertex locating... and thought about... WHAT if... each vertex position DID NOT contain a location in worldSpace... but each was_co_ instead_co_ the amount of offset from the previous vertex position.  Weird.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t know what my point is.  Just thinking.  Thanks again for the info_co_ refs_co_ and nicely formatted post.  Cool.  Do you have any thoughts on the master scene.scaling property?  I would be glad to hear them_co_ from you and others.  I_t_m not suggesting that scene.scaling would ever be added to BJS.  I_t_m just... trying to see the big picture/impacts of such a thing.  Be well!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2016-08-31T10:10:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIf you_t_re a cg artist and doesn_t_t want to arouse the wrath of coworker-developpers_co_ start to model your scene at the correct scale and don_t_t ask to add a _lt_em_gt_scene.scaling_lt_/em_gt_ function_co_ in my opinion _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ You have summarise some ramifications that this feature could involved_co_ while there is just to use correct scale at the beginning and then no problem appears.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-08-31T10:26:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  But what if... you build a room_co_ and on a shelf in that room... the artist wants three complete BJS scenes placed there_co_ made by other people.  Each of these three scenes were CREATED using correct scale_co_ but their scene items were not based upon a master parent. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn other words_co_ they are very difficult to miniaturize.  If there were a scene.scaling property_co_ it would be easy to miniaturize.  The tiny scenes would work fine IF you shrink your character/cams to match (before entering those scenes).  But what IS _qt_entering_qt_.  Scaling them back up to full scale?  hmm.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOne of the scenes has a rollercoaster... and it operates primarily on gravity and inertial forces.  It would be nice to have that operate correctly_co_ even in miniaturized form.  Dollhouse ops.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_ also spoke recently about putting an entire scene inside the knot-hole of a tree.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  hmm. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut yes_co_ I agree with you... establish/use a standard when scene building_co_ and stay with it.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2016-08-31T14:55:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAnd what if you developp a game like Pillow Castle ? _lt_img alt_eq__qt__dd_ph34r_dd__qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ph34r.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ph34r@2x.png 2x_qt_ title_eq__qt__dd_ph34r_dd__qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_div class_eq__qt_ipsEmbeddedVideo_qt__gt_\n\t_lt_div_gt_\n\t\t_lt_iframe allowfullscreen_eq__qt_true_qt_ frameborder_eq__qt_0_qt_ height_eq__qt_270_qt_ src_eq__qt_https_dd_//www.youtube.com/embed/HEBEQhwG-rU?feature_eq_oembed_qt_ width_eq__qt_480_qt__gt__lt_/iframe_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\tEach project have its own concern_co_ and if you play with different world scale you indeed have to play with logical and the chosen 3d engine_co_ and before start 3d assets have a talk between artists &amp_sm_ dev_t_ _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tEach of these three scenes were CREATED using correct scale_co_ but their scene items were not based upon a master parent. \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tSo if they use correct scale there is no problem_co_ these items or scenes can be merged and place anywhere in a master scene.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-08-31T15:39:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCool video! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou didn_t_t address the challenge_co_ though.  They might be merge-able_co_ but how can they be miniaturized?  Little car_co_ driving on physics-active heightMap terrain_co_ making jumps_co_ auto-pilot.  If I want to change its 2000 by 2000 -unit terrain... to fit on my 2 by 2 -unit shelf_co_  how would that be done? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWould the physics still be correct when it sits on the shelf_co_ with all its units 1000% smaller?  (Not as simple as doors and other static models like that space shuttle_co_ right?)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is not much _qt_talking to dev_qt_ happening in MY world.  Just me_co_ and 25 great playgrounds/scenes that need to sit on a shelf in a room.  Max123 DID get an answer from _qt_dev_qt_ (Deltakosh) who said something like _qt_parent everything to a master parent object_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoing that (adding a master parent) to 25 great physics and animation playgrounds  (initially made by others)... would take me around 700 years to complete.  Not plausible.  _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIdeally_co_ ANY scene can be miniaturized_co_ and still work correct.  (dream-on_co_ Wingnut)  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tMaster parent won_t_t even work_co_ because master parent won_t_t scale the distance between scene items.  All the mesh can scale up/down from a master parent_co_ but the distances between each mesh will not scale proportionally.  *sigh*\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps I am sitting on the fence between dev department and art department_co_ and this is why there is something _qt_up my butt_qt_.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-08-31T16:01:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI was really kinda mulling around this idea like Wingnut said.  You would need to have some sort of model degrader to make sure that your small scenes placed in view are not being drawn as an actual scene but as a small scale model representation of it.  I was talking about using a 4th dimension that would give you your scale location i what ever scene your in then you would have to figure out at what point it transfers over and you would have to reset all your scaling and have the system effectively loop on itself._lt_br /_gt_\n\t \n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/24546-scales-scales-scales/?comment-140350&amp_sm_do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tThe Horton Hears a Who_co_ idea...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-08-31T16:05:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthis whole idea i was working on is loosely inspired by_dd__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_div class_eq__qt_ipsEmbeddedVideo_qt__gt_\n\t_lt_div_gt_\n\t\t_lt_iframe allowfullscreen_eq__qt_true_qt_ frameborder_eq__qt_0_qt_ height_eq__qt_344_qt_ src_eq__qt_https_dd_//www.youtube.com/embed/0fKBhvDjuy0?feature_eq_oembed_qt_ width_eq__qt_459_qt__gt__lt_/iframe_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-08-31T16:12:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\twhich actually also makes me think on a side topic and kinda X-files._lt_br /_gt__lt_br /_gt_\n\tWhat if this concept is real?  What if this is actually how our reality works? Would there be intelligent persons who know how to tap into this?  If you could shift your dimensional scale how fast could you travel between stars when your able to make your scale reference of them minimal_co_ to the point of taking a single step could bring you to a whole other Galaxy... o_O freaky... but anyways with proof of quantum entanglement the new Model of reality is starting to hint to these things.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-08-31T16:29:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_142179_qt_ data-ipsquote-contentid_eq__qt_24856_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1472659283_qt_ data-ipsquote-userid_eq__qt_19199_qt_ data-ipsquote-username_eq__qt_Pryme8_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t32 minutes ago_co_ Pryme8 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tnot being drawn as an actual scene but as a small scale model representation of it\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI would prefer not to accept that _qt_imitation_qt_ and limitation.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  The scene has to work.  We_t_re ONLY scaling it_co_ not making any other changes.  SO_co_ our little auto-piloted terrain jumping car... keeps jumping... bouncing and tumbling from IT_t_S attached physics engine and imposters.  Allow us to turn its tiny scene.gravity knob_co_ and have it change its gravity right now_co_ but not affect the gravity of the shelf holding the scene. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tUse BJS_co_ running on a virtual machine (software-based complete PC computer)?  hmm.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDREAM ON_co_ WINGLEBERRY!  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThat VM would be SO SLOW compared to real PC_t_s_co_ huh?  *nod*  About the same as a steam-powered i7 box.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]