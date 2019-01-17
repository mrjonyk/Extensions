[{"Owner":"JohnK","Date":"2017-06-30T21:21:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAfter my last excursion into building a house with BJS the corners bugged me a little as they were basically different wall butted together with one edge showing. Also you had to make individual walls and place them correctly. Plans for a house are often shown as just a floor plan so I began to wonder if I could build a house from a floor plan. At this stage just taking a plan and entering measurement as data into the floor plan builder.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is the result _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#4GBWI5%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#4GBWI5#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can read how to use the buildFromPlan function here _lt_a href_eq__qt_http_dd_//babylonjsguide.github.io/gamelets/House#the-function-and-how-to-use-it_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjsguide.github.io/gamelets/House#the-function-and-how-to-use-it_lt_/a_gt_ and there are more details about its construction.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOne thing I have yet to fully write about is setting the interior and exterior textures and colors but this uses the same method as Jerome_t_s faceUV and faceColors method but instead of an array being needed there a just two parameters to set. The other main point about the uvs is that I have set them so that they are scaled according the width of the wall. If the width of the longest wall is 1 and there is a wall of half this length then only half the texture image is used for this wall. In other words if the texture is stripes and the longest wall is covered by 20 vertical stripes then the half sized wall will be covered by 10 vertical stripes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWho knows perhaps I will tackle roofs next.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-07-01T06:27:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\texcellent !\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2017-07-08T06:35:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tVery cool_co_ any chance there could be a tutorial for the PolygonMeshBuilder in conjunction with the angled corners?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWould it work for curved walls?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-07-09T08:59:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_181056_qt_ data-ipsquote-contentid_eq__qt_31378_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1499495753_qt_ data-ipsquote-userid_eq__qt_8101_qt_ data-ipsquote-username_eq__qt_Convergence_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 08/07/2017 at 7_dd_35 AM_co_ Convergence said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tVery cool_co_ any chance there could be a tutorial for the PolygonMeshBuilder in conjunction with the angled corners?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tWould it work for curved walls?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThere is a _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/polygonmeshbuilder_qt_ rel_eq__qt_external nofollow_qt__gt_tutorial_lt_/a_gt_ for PolygonMeshBuilder but not in conjunction with the angled corners. Studying the construction of the angled section it it made from three angled walls. Each wall is made up of a base_co_ two sides_co_ a top and an interior and exterior rectangle_co_ with holes for windows and doors. PolygonMeshBuilder is only used for the interior and exterior rectangles and the holes for windows. Notice that each window is wholly inside one of these angles walls_co_ there is no provision for making a single window that goes across all three angled walls.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo make a curved wall you would need to replace the three angles walls with many angled walls at the correct positions and angles_co_ which can be done but you could not have doors and windows in it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo provide for curved ( or angled section_co_ eg bays) then I would need to add code for a curved wall that could cope with doors and windows. Perhaps I might look at that some time next week.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo show curved walls (without doors or windows) _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#4GBWI5%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#4GBWI5#5  _lt_/a_gt_is possible but not straightforward to achieve.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2017-07-30T05:40:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_181115_qt_ data-ipsquote-contentid_eq__qt_31378_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1499590747_qt_ data-ipsquote-userid_eq__qt_14282_qt_ data-ipsquote-username_eq__qt_JohnK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 7/9/2017 at 4_dd_59 PM_co_ JohnK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThere is a _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/polygonmeshbuilder_qt_ rel_eq__qt_external nofollow_qt__gt_tutorial_lt_/a_gt_ for PolygonMeshBuilder but not in conjunction with the angled corners. Studying the construction of the angled section it it made from three angled walls. Each wall is made up of a base_co_ two sides_co_ a top and an interior and exterior rectangle_co_ with holes for windows and doors. PolygonMeshBuilder is only used for the interior and exterior rectangles and the holes for windows. Notice that each window is wholly inside one of these angles walls_co_ there is no provision for making a single window that goes across all three angled walls.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tTo make a curved wall you would need to replace the three angles walls with many angled walls at the correct positions and angles_co_ which can be done but you could not have doors and windows in it.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tTo provide for curved ( or angled section_co_ eg bays) then I would need to add code for a curved wall that could cope with doors and windows. Perhaps I might look at that some time next week.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tTo show curved walls (without doors or windows) _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#4GBWI5%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#4GBWI5#5  _lt_/a_gt_is possible but not straightforward to achieve.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tSorry for the late reply hehe.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll table my desire for curved walls for now _dd_D_co_ easier to just ExtrudePath a curved path to create a curved mesh without holes _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]