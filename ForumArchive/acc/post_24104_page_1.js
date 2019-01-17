[{"Owner":"al404","Date":"2016-07-27T15:21:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre_gt_\n_lt_code_gt_pixelThumbOver _eq_ new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger_co_ testlog)_sm_\n\t\t\nfor (var p _eq_ 0_sm_ p &lt_sm_ totLinked_sm_ p++) {\n\t\t\t\n    var linkedPart _eq_ particella2.createInstance(_qt_minewp_qt_ + p)_sm_\n\tlinkedPart.billboardMode _eq_ BABYLON.Mesh.BILLBOARDMODE_ALL_sm_\n\tlinkedPart.actionManager.registerAction(pixelThumbOver)_sm_\n\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI_t_m trying to add a mouse over event at some instances of my mesh but i get an error when code is executed_co_ i signify the file so i guess u is my linkedPart\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_TypeError_dd_ undefined is not an object (evaluating _t_u.actionManager.registerAction_t_)_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti looked at this playgroud and the only difference i note is that mine are instances and not real mesh\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#8ULNX%2313_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#8ULNX#13_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-07-28T12:17:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi al404_co_ good to see you again.  We need a better playground demo_co_ perhaps. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat is particella2?  Is it a plane?  (I assume so because of billboard).  If it is a particleSystem or particle_co_ I_t_m not sure BJS allows actionManagers on those.  Neither are standard mesh. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut_co_ if a particleSystem is using a mesh for its fountain/emitter_co_ that mesh _lt_u_gt_can_lt_/u_gt_ have an attached actionManager_co_ I believe.  Still_co_ not allowed on the particle or the particleSystem.  Standard particles may LOOK like planes_co_ but they are not really so.  They are _qt_quads_qt_ - each _lt_strong_gt_part of_lt_/strong_gt_ a single mesh.  They are like sections of a single subdivided ground grid_co_ with some of the connecting lines (indices) between the squares... removed.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"al404","Date":"2016-07-29T08:13:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHI _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var particella2 _eq_ BABYLON.MeshBuilder.CreatePlane(_qt_model_qt__co_ {size_dd_ 0.16}_co_ scene)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-size_dd_14px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_particella2 is a mesh_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twe choose a different approach_co_ but the only thing that I can guess is that on an instance\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI modify playground adding a clone of sphere2 at line 31 and setting him offset on X\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I disable ActionManager and sphere2 and add an ActionManager on instance nothing happen_co_ line 69 - 77\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#8ULNX%2333_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#8ULNX#33_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf i enable ActionManager on sphere2 it will work on his stance too\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#8ULNX%2334_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#8ULNX#34_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-07-29T12:33:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYep_co_ I see what you mean... thx for the playgrounds.  I thought I would try to put a full actionManager on sphere2 BEFORE I created the instance of it_co_ named linkedPart.  I wanted to see if an actionManager was instanced-onto the instance.  It isn_t_t.  Then I tried making new actions for linkedPart_t_s actionManager (action 3/4)... that didn_t_t work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYep_co_ interesting find.  Might be normal.  The actionManager on linkedPart IS working (after adding it)... because I am seeing your _qt_mouse over minewp_qt_ and _qt_mouse out minewp_qt_ reports at the console.  But_co_ I_t_d say the _qt_action_qt_ is failing.  Perhaps... it is _lt_em_gt_renderOutline _eq_ true_lt_/em_gt_ that is NOT allowed on instances.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#8ULNX%2336_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#8ULNX#36_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_co_ I set the mouseOverUnit and mouseOutUnit to simply move the mesh to the right/left a bit on mouseover and mouseout.  It works.  LinkedPart has its own actionManager_co_ and I added its own actions (lines 66-70 area).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#8ULNX%2337_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#8ULNX#37_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere... in the same area... line 68...  linkedPart.actionManager _eq_ sphere2.actionManager (adding no actions to linkedPart actionManager).  Instead_co_ I am depending upon the two actions that have already been added to sphere2.actionManager.  It still works fine.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ it is not the action manager on instances... that is the problem.  It is the action.  Outline rendering... on an instance ONLY... seems disallowed.  Position changing... IS allowed.  hmm.  I_t_m not sure if this is a bug or not.  The framework COULD need a little adjustment to the outline renderer... but not sure.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBy the way_co_ I moved all your stuff UPWARD... so we could get a fully stocked actionManager on sphere2 BEFORE we instanced linkedPart.  I wanted to see if the actionManager was put on linkedPart automatically... during the createInstance.  It wasn_t_t.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_   Interesting!  Very very interesting.  hmm.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell_co_ we know renderOutline is not working well on instances.  Let_t_s try edgesRendering...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#8ULNX%2338_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#8ULNX#38_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWorking pretty good.  (Still using linkedPart.actionManager _eq_ sphere2.actionManager).  So_co_ this is an issue with the _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Rendering/babylon.outlineRenderer.js_qt_ rel_eq__qt_external nofollow_qt__gt_outlineRenderer_lt_/a_gt__co_ I believe.  _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Rendering/babylon.outlineRenderer.js#L12_qt_ rel_eq__qt_external nofollow_qt__gt_Line 12 there_lt_/a_gt_... is just scary.  I think we will need to wait for _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ or some other core programmer... to tell us if outlineRenderer _lt_em_gt_should_lt_/em_gt_ be allowed on instances themselves.  Interesting find... well done.  This might award you with a _qt_I contributed to BJS core_qt_ badge.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-07-29T17:45:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWingnut is right_dd_ Instances do not support outlining (they are rendered by a specific and really fast code path which do not allow extra features like outlining)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]