[{"Owner":"Maxence","Date":"2014-01-07T16:18:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I was looking on mesh.dispose() method and I noticed that when you dispose a parent without disposing its children_co_ it removes the parent from the scene_co_ but the children still has a reference to the parent._lt_/p_gt__lt_p_gt_So i wonder if this reference is not memory expensive?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I made a jsFiddle to illustrate my question._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//jsfiddle.net/MaxenceBrasselet/c34fS/2/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jsfiddle.net/MaxenceBrasselet/c34fS/2/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_When you click on dispose button_co_ it removes the mesh _qt_Box2_qt_ from the scene_co_ but if you look into the console_co_ you will see that the mesh _qt_Box_qt_ still has a reference to _qt_Box2_qt_ in its parent value._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Should we delete the parent reference of every child when we decide to dispose it?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I decided to test deleting parent reference of every child_co_ and I noticed that when you remove the parent reference_co_ the mesh does not move (jsFiddle to illustrate_dd_ _lt_a href_eq__qt_http_dd_//jsfiddle.net/MaxenceBrasselet/2e4kw/2/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jsfiddle.net/MaxenceBrasselet/2e4kw/2/_lt_/a_gt_) whereas it should move because its position was relative to its parent_co_ and we have removed it_co_ so its position is now relative to the world._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I found why it does not move. It_t_s because in the _qt_isSynchronized_qt_ method_co_ the parent of the mesh is not in cache_co_ so if you change it or remove it_co_ it does not change anything about the object._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think the object must be updated when its parent changes in order to apply transform to its position_co_ rotation and scaling_co_ because it must keep its place in the scene._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I forced it to move it by setting a new position (the cache is thus invalidated). Here_t_s the link _lt_a href_eq__qt_http_dd_//jsfiddle.net/MaxenceBrasselet/2e4kw/3/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jsfiddle.net/MaxenceBrasselet/2e4kw/3/_lt_/a_gt_. Please read the logs in the console._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-01-07T23:54:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello I totally agree with you_co_ this is a mistake I did._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I will update the code to reflect the changes you mentioned_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"damian+merfoo=♥","Date":"2014-01-19T12:46:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Should be called .remove()!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-01-19T16:16:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Fixed with this version_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/releases/tag/v1.8.5_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/releases/tag/v1.8.5_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-01-19T21:35:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sorry_co_ I found a bug _lt_a href_eq__qt_http_dd_//jsfiddle.net/gwenaelhagenmuller/5TBaC/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jsfiddle.net/gwenaelhagenmuller/5TBaC/_lt_/a_gt_._lt_/p_gt__lt_p_gt_I explained it in the discussion of the commit._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-01-20T02:34:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Let_t_s call it an expected behavior _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If we want to keep the mesh where it is right now_co_ we have to decompose the matrix_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]