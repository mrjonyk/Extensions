[{"Owner":"PorlyBe","Date":"2017-09-16T21:19:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi all_co_ first post here. I_t_m new to babylon (and JavaScript generally).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve been playing around with physics in babylon and came up with this... my virtual money box\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#BEFOO%23201_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#BEFOO#201_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy question is_co_ what would you recommend to speed it up when there are lots of coins (cylinders) being created.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-09-18T09:57:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/28525-porlybe/?do_eq_hovercard_qt_ data-mentionid_eq__qt_28525_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/28525-porlybe/_qt_ rel_eq__qt__qt__gt_@PorlyBe_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twelcome to the forum.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPhysics is fun! for someone being new to babylon and javascript_co_ you did very well creating your first playground _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tA few notes that might get move you forward_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1) There is nothing you can do about the amount of impostors and their impact on performance. If you need ALL coins to always react correctly_co_ they will all have to have their own impostors.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2) Try disposing unneeded impostors. Meaning - If you are 100% sure a coin will never be a part of the pile that needs to react to a new coin_co_ dispose its impostor (and recreate it when needed). This will increase performance. I di it usually when an object is below a certain threshold (for example_co_  if it falls into a pit or something) or when it is not visible to the user. Of course_co_ you need to set your own rules.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3) Try using OimoJS instead - Oimo is wonderful when it comes to a greater number of objects. A simple example - _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#P13KEN_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#P13KEN_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou will notice_co_ that I changed your code a bit.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFirst_co_ I took setTimeout out. The reason for that is rather simple - setTimeout is not being _qt_disposed_qt_ when you press run again. I guess you noticed your console is full of errors_co_ and you didn_t_t know why - this is because each time you press _qt_run_qt__co_ the setTimeout function(s) of the last playground is still set and is still being executed. I used registerBeforeRender with a simple frame counter_co_ but you can use whatever your heart desires.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSecond - I created a new impostor for each object and removed it from the cloning object. I don_t_t see a reason doing that and then changing the mass. It is a change that is simple not needed. Create your impostor with the right mass at the right time.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope this gets you started! Let me know if you have any other questions.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2017-09-18T14:34:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMain thing that jumps out at me is_co_ Cannon_t_s cylinder primitive isn_t_t a mathematically exact cylinder - it creates an approximation out of subdivisions_co_ and Babylon passes in 16 for the number of subdivisions (which is probably overkill for your case).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo anyway each coin in the simulation is a convex polyhedron with like 64 faces (?)_co_ so that_t_s why it gets so slow. If Oimo has precise cylinder primitives_co_ using it instead should be way faster.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou should probably also search for coins that are on the bottom of the pan_co_ or under other coins_co_ and change them to static if they_t_re not moving. That wouldn_t_t be exactly physically correct_co_ but it would limit the number of collisions and make things scale much better.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Valik","Date":"2017-09-25T14:58:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOpening this pg _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#P13KEN_qt_ rel_eq__qt_external nofollow_qt__gt__lt_u_gt_https_dd_//www.babylonjs-playground.com/#P13KEN_lt_/u_gt__lt_/a_gt_ i get a Syntax error and loading assets...please wait. What do i wrong_co_ i get this often when i try to open pgs?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-09-25T15:06:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/15166-valik/?do_eq_hovercard_qt_ data-mentionid_eq__qt_15166_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/15166-valik/_qt_ rel_eq__qt__qt__gt_@Valik_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tit is working for me. Any error in the console?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-09-25T15:07:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello can you make sure to clean your cache. I have no error on this PG\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhich browser / OS are you using?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Valik","Date":"2017-09-26T05:46:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\twin 10 home x64 - ie11 with the error.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tedit_dd_ opening the console is crashing the tab\n_lt_/p_gt_\n\n_lt_p_gt_\n\tedge and ff working.. sorry for that\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]