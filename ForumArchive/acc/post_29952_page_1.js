[{"Owner":"jsdream","Date":"2017-04-22T18:05:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys!_lt_br /_gt__lt_br /_gt_\n\tAs I can see camera target is being set to mesh_t_s absolute position (_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.followCamera.ts#L46_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.followCamera.ts#L46_lt_/a_gt_)_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var targetPosition _eq_ cameraTarget.getAbsolutePosition()_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIs it possible to somehow set an offset to camera target?_lt_br /_gt_\n\tSo for example when we_t_re following a character_co_ by default the camera will be pointing to middle of the character mesh_co_ but what if I want to point the camera to characters head or even above it_co_ how could I achieve that?_lt_br /_gt__lt_br /_gt_\n\tHope my question is clear enough._lt_br /_gt__lt_br /_gt_\n\tInitially I posted the question here_co_ but following _lt_strong_gt_JohnK_lt_/strong_gt_ suggestion I_t_m creating this new separate topic for the question.\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/8433-smooth-camera-follow/?do_eq_embed&amp_sm_comment_eq_171932&amp_sm_embedComment_eq_171932&amp_sm_embedDo_eq_findComment_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-04-23T09:31:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWould using a parent and child help as in _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#12WBC%2387_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#12WBC#87_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jsdream","Date":"2017-04-23T14:00:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThank you John very much! That_t_s exactly what I was looking for. You_t_re my hero of the day. _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]