[{"Owner":"kraftwer1","Date":"2018-02-20T20:16:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m trying to make my mesh smaller during its linear velocity movement. But unfortunately_co_ as soon as I set the scaling_co_ it stops the movement.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow can I scale down my mesh in size without interrupting the movement? Is there an elegant way without having to calculate positions myself?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSee my example_co_ where the movement stops after 1sec when trying to scale_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#5WEAFN_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#5WEAFN_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-20T21:01:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello and welcome!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis one is for _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-02-21T09:22:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ For me.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe physics engine is dealing with rigid bodies that do not change in scale and shape. Changing the scale of an object will technically recreate the mesh impostor. The old impostor_t_s details (like the angular and linear velocity) will have to be applied to the new impostor. It is possible_co_ but not recommended as there are a lot of factors you will need to consider. Performance will also hurt a lot from that_co_ as recreating the impostor over and over again is relatively _qt_expensive_qt_.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kraftwer1","Date":"2018-02-21T09:38:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for the explanation. Any other way to make the mesh (and its impostor) smaller?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-02-21T14:41:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi kraftwer1.  Welcome aboard.  Hi everyone else_co_ too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo you need smooth-scaling_co_ krafty?  Must the scaling be gentle_co_ or can it be in distinct steps?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ I had to experiment.  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#15AFCG%2333_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#15AFCG#33_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCurrently_co_ the small gray ibox and its impostor... is attached via joint1... to the green player box/impostor.  ibox does the moving_co_ and green box is joint-dragged-along via forces passed-thru the joint.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can use up/down arrow keys to move the ibox along z-axis.  (x-axis moving also works_co_ but auto-scaling is not yet programmed for that axis).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can also turn-on auto-velocity by enabling the code in lines 93-102.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe manual-moving is done in lines 116-136.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRight now_co_ I am NOT copying the linear and angular velocity from previous impostor... to the new impostor that gets installed automatically after a physics-active shape... gets scaled.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tInstead... I re-add the joint that connects ibox and green player - in lines 123 and 134.  It works... sort-of ok.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can re-activate the oldImp-&gt_sm_newImp velocities-copying... by activating lines 118-119_co_ 121-122_co_ 129-130_co_ and 132-133. This makes things act a _lt_u_gt_little_lt_/u_gt_ differently for manual-moving.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRemember that when a physics-active mesh is scaled_co_ our plugins (actually_co_ our physicsImpostor wrapper-code) automatically disposes the old impostor_co_ and adds a new one.  (it_t_s called a forceUpdate_co_ I believe.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can see that activity... in this area of our physicsImpostor wrapper_dd_  _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Physics/babylon.physicsImpostor.ts#L181_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Physics/babylon.physicsImpostor.ts#L181_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is a feature_co_ and is the only way to make a rigid body act any-what _qt_sane_qt_ after a scaling.  It CAN be disabled via hacking the wrapper (over-riding some/all of our wrapper)_co_ but after that... troubles/challenges.  But still_co_ it would be a cool adventure.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYour physicsBODY really needs to change from rigid_co_ to dynamic.  A gruesome challenge.  _lt_a href_eq__qt_http_dd_//schteppe.github.io/cannon.js/docs/classes/Body.html_qt_ rel_eq__qt_external nofollow_qt__gt_No indication of allowed rigidBody scaling features_lt_/a_gt_.... is seen in either of the 3rd party physics engines.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut_co_ if you want to _qt_go deep_qt_ and _qt_go native_qt_ (dive UNDER our physics plugins/wrappers)... you might be able to use dynamic/soft bodies.  I_t_m sure not qualified to talk about that stuff.  I just make goofy playgrounds.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Speak of which... _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#15AFCG%2334_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#15AFCG#34_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn THAT playground_co_ the entire BJS physicsImpostor wrapper/class has been _qt_hijacked_qt_ into the playground (for hacking fun).  Wow_co_ huh?  Around line 213... perhaps adjust-to_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_if (this.shape !_eq_ player) { this.forceUpdate_lt_/strong_gt_() _lt_strong_gt_}_lt_/strong_gt_  // tweak as needed.  That would prevent a shape scaling... from disposing old impostor.  But that would be only the START of the needed hacking to convert from a CannonJS rigidBody... to a dynamicBody.  Greasy deep hacking.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope this has been helpful_co_ and I hope I didn_t_t say any incorrect things.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kraftwer1","Date":"2018-02-23T10:52:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ thanks a lot for your extended investigation! I‘ll dive into it this weekend.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2018-02-23T14:32:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI would try turning visibility off for the physics meshes and then have another set of non-physics meshes that copy the rotation and position of the physics meshes.  Then scaling the non-physics meshes will have no affect on physics.  \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-02-23T17:47:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#5WEAFN%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#5WEAFN#1_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kraftwer1","Date":"2018-02-24T14:15:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ In a nutshell_co_ your first experiment is to set a new scaling every 250ms_co_ while adding the previous velocity to the newly created impostor?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried this in my project and reducing the 250ms to something like 30ms would make the scaling smooth and gentle enough for my purposes_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#5WEAFN%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#5WEAFN#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI guess putting it into requestAnimationFrame() and scale it every whichever frame would make it even smoother.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-02-24T19:43:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNice nice nice! \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#5WEAFN%235_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#5WEAFN#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMinor adjustment... pre-declared _lt_strong_gt_prevVelocity_lt_/strong_gt_ before the interval loop (line 57).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not smart enough to know if that gains any garbage collection efficiency.  It MIGHT be ONLY when _lt_span style_eq__qt_color_dd_#2980b9_sm__qt__gt_new _lt_/span_gt__lt_span_gt_whatever() is used repeatedly... that we need to worry about leakage.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOh yeah_co_ I guess I modified some other things too_co_ having fun.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEver see _lt_a href_eq__qt_http_dd_//www.downvids.net/video/bestimages/img-transport-truck-rollover-air-bag-recovery-728.jpg_qt_ rel_eq__qt_external nofollow_qt__gt_airbags used to tip-up a tipped-over semi-trailer_lt_/a_gt_?  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe even have a slow dramatic camera pull-pan-ped.  (lines 63-65)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI wanted to see the scaled impostor... do something physical... making sure it stayed the correct size.  It does.  Cooooool.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]