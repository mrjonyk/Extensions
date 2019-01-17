[{"Owner":"ozRocker","Date":"2017-09-20T00:03:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIs it possible to place a t-shirt over a rigged human mesh and transfer skeleton and weights of human to the t-shirt in Babylon.js?  So then you can animate the t-shirt with the human\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI know you can do all this in Blender_co_ but I_t_m wondering if it could be done in real-time using Babylon.js\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-09-20T12:52:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi OzR.  Sorry for slow replies.  I would say it is quite possible... especially if the T-shirt is skin-tight (or real near to it)_co_ following exact body contours.  Then it can be done by copying SOME positionKind data from the body mesh... into a new blank mesh (or a complete cloning of the rig).  But with skin-tight cloth_co_ will _qt_painting_qt_ the T-shirt onto the body mesh (modified rig texture)... work just as well?  *shrug*\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA nice hanging_co_ swaying_co_ weighted cloth-like physics T-shirt... is much more challenging_co_ I_t_d say.  Also_co_ the likelihood of getting _lt_em_gt_enough_lt_/em_gt_ impostor-nodes and joints onto the t-shirt to make it react nicely with your intense animations at decent speeds... is low.  So so so many physics joints are needed... for _qt_liquid_qt_ cloth sims... that it is an out-of-reach feature with JS_co_ yet_co_ I think.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps your best bet is to deep-clone the rigged skeleton including anims_co_ position them side-by-side_co_ and then up-scale the clone a TINY amount.  Now create a texture for the clone that is ONLY the t-shirt.  Make the rest of the texture.... transparent.  (I bet you wish these texturing steps were automated_co_ eh?  *nod*)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen everything works right_co_ re-overlay the clone position... atop the master... and animate both rigs_co_ as wanted. The clone rig should animate the same as the master_co_ and thus_co_ the t-shirt should be able to follow all the animations on the master... for they are the same animations.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn essence_co_ you_t_re just cloning the rig_co_ and changing the paint job on the clone... to a t-shirt only.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs for changing the master rig_t_s texture_co_ or mapping a new _qt_piece_qt_ of texture atop the original texture... that might be the BEST idea.  No rig cloning needed_co_ but some fancy texture work will be necessary.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust some ideas and comments... likely not good ones.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Others will surely comment soon.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2017-09-20T14:20:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can just try it out to see if its possible.  The reason I asked when I did is because I was going into a meeting with this sportswear company that already had clothing created from Marvelous Designer.  I anticipated them asking if it was possible to use the existing clothing on top of one of my avatars with minimal manual work required.  The meeting is over and they_t_ll be giving me some samples so I can experiment with them.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYour idea about the transparent skin texture is the official technique used for clothing within Second Life.  \n_lt_/p_gt_\n\n_lt_div class_eq__qt_ipsEmbeddedVideo_qt__gt_\n\t_lt_div_gt_\n\t\t_lt_iframe allowfullscreen_eq__qt_true_qt_ frameborder_eq__qt_0_qt_ height_eq__qt_270_qt_ src_eq__qt_https_dd_//www.youtube.com/embed/62SI2NCg2gc?feature_eq_oembed_qt_ width_eq__qt_480_qt__gt__lt_/iframe_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-09-20T17:45:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIt is technically feasible by adding new vertex data to the tshirt model. You need to add matrix indices and matrix weights \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]