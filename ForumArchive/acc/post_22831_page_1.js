[{"Owner":"ozRocker","Date":"2016-05-28T10:25:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tDoes anyone know how to get the rotation of an object in Babylon 2.4?  mesh.rotation is always zero.  I can_t_t set absolute rotation either.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2016-05-28T10:37:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIt_t_s set to zero if there is a rotationQuaternion set. What is the value of mesh.rotationQuaternion ?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2016-05-28T10:40:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tah ok.  rotationQuaternion has values in it.  The thing is all I_t_m doing is calling mesh.rotate().  I used to be able to do that and it would set the rotation vector\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-29T16:12:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYou can try to transform quaternion to vecto3 with quaternion.toEulerAngles but I highly recommend keeping quaternions because they are far more reliable than euler angles\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2016-05-29T16:20:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tso does that mean that the mesh.rotation property is no longer used in Babylon 2.4?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I_t_m spinning a cube like in here_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#GZLLH_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#GZLLH_lt_/a_gt_ the rotation vector remains zero.  But if that_t_s the case then I_t_ll just use quaternion.toEulerAngles\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-29T18:43:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tActually it is not new we always supported both. But if quaternion is set then rotation (euler angles) is ignored_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/How_Rotations_and_Translations_Work_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/overviews/How_Rotations_and_Translations_Work_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2016-05-29T23:11:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\toh right!  I got it now _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  so using mesh.rotate() sets the quaternion.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for the link.  I really needed to read that!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-05-30T04:52:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_130210_qt_ data-ipsquote-contentid_eq__qt_22831_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1464431153_qt_ data-ipsquote-userid_eq__qt_12544_qt_ data-ipsquote-username_eq__qt_ozRocker_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 5/28/2016 at 5_dd_25 AM_co_ ozRocker said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tDoes anyone know how to get the rotation of an object in Babylon 2.4?  mesh.rotation is always zero.  I can_t_t set absolute rotation either.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHi OzR.  You might have confused mesh.rotate() and mesh.rotation.  _lt_em_gt_mesh.rotation _eq_ new BABYLON.Vector3(x_co_ y_co_ z)_sm__lt_/em_gt_  ...will always work fine_co_ but as you now know_co_ _lt_em_gt_mesh.rotate()_lt_/em_gt_ sets the quat_co_ and mesh.rotation doesn_t_t get updated continuously.  (you could do it yourself in the renderLoop_co_ but no_co_ don_t_t do that_co_ something will explode.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOkay_co_ _lt_strong_gt_if_lt_/strong_gt_ you must...  then in the render loop... if (mesh.rotationQuaternion ) { mesh.currentEulerAngles _eq_ mesh.rotationQuaternion.toEulerAngles() }\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDon_t_t let the quat make _qt_pokes_qt_ into mesh.rotation.  Could be trouble.  Also_co_ this activity could mega-bog the scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYuh_co_ you forgot all about the mesh.rotation _eq_ vec3 method... and it is a little offended by that uncaring neglect.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou_t_ve been giving all of your love and attention to .rotate()_co_ right? (just trying to be funny_co_ OzR) \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNo sweat... I tried to set the diffuseColor on a texture yesterday.  MANY times I_t_ve tried to set a color with a vector3.  hellllooooo... wingy?  Anyone home?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  It_t_s part of the fun.  Hat_t_s off to DK... excellent forum custodianship.  (63rd time you_t_ve answered this question_co_ DK?  *nod*  *hug*)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Quats are the _qt_ghosts_qt_ of the forum_co_ it seems... generating many confusions and discussions.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2016-05-30T04:59:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tyeh_co_ well the reason I was confused was because I was using both mesh.rotate() and mesh.rotation back in version 2.3.  I_t_d rotate my avatar with relative movements using mesh.rotate() then if I wanted to find out where he was facing I_t_d read from mesh.rotation.  But its all good now cos I can use  _lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_quaternion.toEulerAngles_lt_/span_gt_ instead\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-05-30T05:32:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again.  I don_t_t know if that is true_co_ OzR.  I don_t_t think there has been any recent changes_co_ but maybe.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs far as I know... any rotate()... or yawPitchRoll()... or physics rotational impulsing... will NOT be updated into mesh.rotation property.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThus_co_ I don_t_t see how you used mesh.rotate()_co_ and got fresh values in mesh.rotation.  As _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5218_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/_qt_ rel_eq__qt__qt__gt_@Temechon_lt_/a_gt_ mentions_co_ mesh.rotation is set to 000 when quat is created.  This is also why we see mesh rotations getting _qt_nulled-out_qt_ when mesh.setPhysicsState.  Physics needs the quat... and makes one_co_ which nulls .rotation. (I think)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHeck_co_ I don_t_t know.  I_t_m probably wrong.  Framework could have changed.  Maybe you are correct_co_ Oz.  My curiosity is piqued_co_ to say the least.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-31T03:50:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tActually you are right _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tMesh.Rotate will always update the quaternion (again to avoid gimbal lock issues with euler angles)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-05-31T11:25:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tnod_co_ DK... thx.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1JNDSK%2312_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1JNDSK#12_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere I am using rotate()  [a Quaternion thing] in both LOCAL and WORLD spaces (lines 43-48)... and I see no sphere.rotation updates happening.  (normal_co_ I think)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(see blue-text reporter above canvas)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12544-ozrocker/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12544_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12544-ozrocker/_qt_ rel_eq__qt__qt__gt_@ozRocker_lt_/a_gt_  _lt_strong_gt_If_lt_/strong_gt_ you _lt_strong_gt_DID_lt_/strong_gt_ see quat rotations... being reported in mesh.rotation... in BJS 2.x...  I want to know about that_co_ ok Oz?  Thanks.  I don_t_t think that changed in any recent versions.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1JNDSK%2313_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1JNDSK#13_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the above PG_co_ I added prop _lt_em_gt_sphere.curEuler_lt_/em_gt__co_ and I am updating IT... from quat.toEulerAngles... continuously. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe see _lt_em_gt_some_lt_/em_gt_ FPS loss... not much.  Ozzy_co_ keep in mind that sphere.rotation is a getter AND setter.  I _lt_u_gt_could_lt_/u_gt_ have continuously sent sphere.rotationQuaternion.toEulerAngles() _eq_&gt_sm_ sphere.rotation... but BECAUSE .rotation is a setter... it doesn_t_t work.  I tested it. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1JNDSK%2314_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1JNDSK#14_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe sphere_t_s rotation goes bonkers_co_ and sphere.rotation STILL doesn_t_t ever leave 0_co_ 0_co_ 0.  I would have thought sphere.rotation would have been some garbage numbers.  But nope_co_ 0_co_ 0_co_ 0.  This ALMOST indicates that... not only is sphere.rotation set to 0_co_0_co_0 when the quat is MADE_co_ but it is also set to 0_co_0_co_0 each time the quat CHANGES.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut_co_ somebody once told me...that you can_t_t _qt_edit_qt_ (change) a Quat_co_ you can only replace it with a different one.  THAT might explain why .rotation stays at 0_co_0_co_0 even as we stream quat.toEulerAngles() into it.  Maybe every time we do a .rotate()_co_ a _lt_u_gt_new_lt_/u_gt_ quat is made... and thus... it re-zeroes .rotation during every .rotate() usage.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tsphere.curEuler (used in #13) doesn_t_t have _t_setter_t_ power_co_ so it is a good place to continuously monitor sphere.rotationQuaternion.toEulerAngles() values... on a case-by-case basis.  DK and the core Gods COULD add .curEuler or similar and have it update just like I did in #13... but... it is likely _lt_strong_gt_not_lt_/strong_gt_ worth the bog-per-usefulness hit. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSetters and getters... yuh yuh yuh.  I wonder if Dublin-based _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18979_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/_qt_ rel_eq__qt__qt__gt_@Nockawa_lt_/a_gt_ has ever coded Irish setters?  ar ar ar!  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_span_gt_ _lt_/span_gt_Party on!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPS_dd_  Anyone seen _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5292_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/_qt_ rel_eq__qt__qt__gt_@Dad72_lt_/a_gt_?  I miss him.  If he doesn_t_t come back and visit soon_co_ I_t_m forming a search and rescue crew.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  He might have been kidnapped by Lerps or something.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-05-31T13:26:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_130562_qt_ data-ipsquote-contentid_eq__qt_22831_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1464693956_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t5 hours ago_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tBut_co_ somebody once told me...that you can_t_t _qt_edit_qt_ (change) a Quat\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI edit quats all the time.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe you are talking about editing a single x_co_ y_co_ z component thinking that it will affect the rotation like it does with eulers.  You have to do the correct math and then set x_co_ y_co_ z_co_ w.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-05-31T16:16:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_130562_qt_ data-ipsquote-contentid_eq__qt_22831_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1464693956_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t4 hours ago_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tPS_dd_  Anyone seen _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5292_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/_qt_ rel_eq__qt__qt__gt_@Dad72_lt_/a_gt_?  I miss him.  If he doesn_t_t come back and visit soon_co_ I_t_m forming a search and rescue crew.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  He might have been kidnapped by Lerps or something.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t@Wingnut I_t_m here_co_ but I spend less often being on a creation project of a carpentry workshop_co_my first profession_co_ I love. I also like manual works_co_ make furniture. . . I need physical activity right now. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt_\n\tBut thank you for your attention. If you want to help me do my workshop_co_ I give free training in carpentry after._lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-05-31T20:05:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_ - if you need to set all 4 values_co_ isn_t_t that replacing the quat?  Ok_co_ maybe it_t_s not TRUE replacing... I guess.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Thanks for the info_co_ Adam.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5292_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/_qt_ rel_eq__qt__qt__gt_@Dad72_lt_/a_gt_ - good to hear from you.  Sure_co_ I_t_ll come do some sanding (about the only thing I_t_m qualified to do).  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Good luck on the project.  Remember the old joke about smelling the wood to identify where it came from?  The punch line was something about a restroom door from a tuna boat... err something like that.  You can imagine the rest of the joke.   (eww)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAhem.  Alrighty then.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Moving right along.  heh\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-05-31T21:10:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ I  _lt_em_gt_had to_lt_/em_gt_ do some more fun tests.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSO... I was thinking about what Adam taught me... no editing allowed... of the discreet components of sphere.rotationQuaternion. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tChanging quat x_co_ y_co_ z_co_ or w... would _lt_strong_gt_not_lt_/strong_gt_ give ANY good/expected results.  But I thought... hmm.  I bet quat.w... could be animated/edited/changed... without meshing-up the mesh.  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI was right... _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1JNDSK%2316_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1JNDSK#16_lt_/a_gt_   (line 61)  Look at that!  Animating quat.w has no affect whatsoever.  Ok_co_ we MUST try the other 3 quat values_co_ now.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_qt_Line 58_co_ 59_co_ 60... animators... ENGAGE!_qt_  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1JNDSK%2315_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1JNDSK#15_lt_/a_gt_   \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOh my goodness.  It_t_s easy to see that the sphere quickly becomes angry with us.  Things like this... can void manufacturer warranties on your motherboard.  And_co_ you could lose a finger.  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_  Yuh_co_ live-poking quat.w was certainly allowed_co_ and no trouble seen... other than almost yawning to death.  heh\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]