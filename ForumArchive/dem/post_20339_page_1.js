[{"Owner":"jerome","Date":"2016-02-04T15:38:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi folks_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell_co_ it_t_s not yet a feature (soon)_co_ neither a complete demo_co_ neither a project. It_t_s probably an upcoming feature.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs you know_co_ you can populate so far a SPS with some mesh models with the method _lt_strong_gt_sps.addShape(model_co_ number)_lt_/strong_gt_. This means that you create _lt_em_gt_number _lt_/em_gt_particles with the shape of the mesh model.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSoon_co_ you will have also the ability to build a SPS from a given mesh. This means_co_ the SPS will digest the mesh_co_ decompose it in many particles under the hood and set them at the same location that the original mesh facets.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tExample (click on the mesh to blow it -did you notice that I liked to blow things up ?-)_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#YCEMR%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#YCEMR#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_co_ you_t_ve got a box that my SPS digests at the line 153 (don_t_t care about the rest of the code for now) _dd_ _lt_strong_gt_sps.digest(model_co_ {})_sm__lt_/strong_gt__lt_br_gt_\n\tThe box is digested and the SPS will then have as many triangular particles than the original box facets.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you want each particle to be composed by more than one mesh facet (for big meshes for example)_co_ you can specify it with the parameter _lt_em_gt_facetNb_lt_/em_gt__dd_ _lt_strong_gt_sps.digest(model_co_ {facetNb_dd_ 2})_sm__lt_/strong_gt__lt_br_gt_\n\tThis means each particle is now built by 2 mesh facets_co_ so in our former example with quads instead of triangles _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#YCEMR%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#YCEMR#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tObviously this works (or should) with any mesh type _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#YCEMR%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#YCEMR#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe same with particles sized to 64 facets _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#YCEMR%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#YCEMR#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTorus knot ? baoomm _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#YCEMR%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#YCEMR#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe the number of facets per particle doesn_t_t make much sense to you and you would prefer to define the number of particles instead. This is possible_co_ just use the parameter number_dd_ _lt_strong_gt_sps.digest(model_co_ {number_dd_ 20})_sm__lt_/strong_gt__lt_br_gt_\n\tThis will decompose the whole into almost 20  (20 or 21) particles depending on the initial number of the mesh facets.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tline 152 _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#YCEMR%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#YCEMR#6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoes it work with imported meshes also ? yes_co_ sir (beware_co_ this is CPU intensive and I noticed that the PG has side effects on the perfs because it runs faster off the PG) _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#YCEMR%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#YCEMR#7_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_s_gt_no idea of an URL CORS friendly to download the Dude in the PG._lt_/s_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#YCEMR%2310_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#YCEMR#10_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs this compatible with the addShape() method ? yes_co_ sir _dd_ take a look at the line 153 here _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#YCEMR%238_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#YCEMR#8_lt_/a_gt__lt_br_gt_\n\tFirst_co_ I add one box particle_co_ then I digest a box mesh (quads)_co_ then I re-add a box particle. My SPS should then have _dd_ 2 box particles and 6 quad particles_co_ ok ?_lt_br_gt_\n\tSet the cam beneath the box and blow it towards the sky_co_ you will see the quad particles and 2 boxes falling back to the ground._lt_br_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tRight_co_ now you know how this work (or should work). But what is this for ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt could be used to build easily a SPS from any mesh as I explained. Then you can_co_ at the particle level (the one you chose _dd_ facer_co_ several facets_co_ a tenth of the mesh_co_ a third of the mesh_co_ half of the mesh_co_ etc)_co_ morph the mesh_co_ distord it_co_ twist it_co_ vaporize it_co_ liquefy it_co_ blow it_co_ etc\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t[EDIT] I really need to blow a spherical harmonic ribbon_co_ just for fun !\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[EDIT 2] oh_co_ and I forgot to say you can digest several meshes in the SPS or even the same mesh several times _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#YCEMR%239_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#YCEMR#9_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tline 153 _dd_ torus knot digested twice with different particle numbers\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-02-05T10:13:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPRed\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t[EDIT] and documented\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Boz","Date":"2016-02-05T18:20:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWaw !!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt looked promising when I saw the _qt_BABOOM_qt_ demo with sub-meshes_co_ but this one is crazy_co_ so much ideas &amp_sm_ opportunites O_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_boom _eq_ true_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI like it_co_ all is said _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-02-05T19:16:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHappy that it boots your imagination _lt_img alt_eq__qt__dd_lol_dd__qt_ data-emoticon_eq__qt_true_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_laugh.png_qt_ title_eq__qt__dd_lol_dd__qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-02-08T15:24:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWait till I add physics to that demo _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-02-08T17:05:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI don_t_t know anything about physics_co_ but can we set an impostor to something else than a mesh ? (solid particles)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-02-08T17:11:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou_t_ll have to wait and see _dd_-)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-02-08T18:54:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt_t_s wonderful when the doc is updated so frequently _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/Solid_Particle_System#digest-a-mesh_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/overviews/Solid_Particle_System#digest-a-mesh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAvailable yet in the preview version_co_ have fun\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-02-12T14:52:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI just added a new parameter called _lt_em_gt_delta_lt_/em_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you digest a mesh specifying some _lt_em_gt_facetNb_lt_/em_gt_ value to build each particle with _lt_em_gt_facetNb _lt_/em_gt_facets_co_ you can add some little randomness with _lt_em_gt_delta._lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEach particle will then have a random size between _lt_em_gt_facetNb_lt_/em_gt_ and _lt_em_gt_facetNb + delta_lt_/em_gt_ facets. This is useful to simulate more real mesh decomposition as things aren_t_t composed by identical subparts.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_sps.digest(mesh_co_ {facetNb_dd_ 10_co_ delta_dd_ 40})_sm_    // each particle size will be randomly between 10 and 50 facets_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2016-02-12T15:11:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMerge inprogress... Should be up in 5 minutes!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-02-12T15:28:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthank you\n_lt_/p_gt_\n\n_lt_p_gt_\n\tnow documented on-line here _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/Solid_Particle_System#digest-a-mesh_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/overviews/Solid_Particle_System#digest-a-mesh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[EDIT] + PG example _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#HDHQN_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#HDHQN_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(the delta feature will work as soon as it is pushed in the PG engine)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]