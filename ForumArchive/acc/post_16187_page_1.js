[{"Owner":"GAZ082","Date":"2015-08-03T16:37:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi there. I_t_m trying to import a simple character to play a little with babylonjs. But when i do it_co_ i get on the log_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_WARNING_dd_  No materials have been assigned_dd_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_On the left is how it_t_s rendered by babylonjs_co_ on the right_co_ what should it be_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_08_2015/post-15772-0-50955300-1438619820.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_08_2015/post-15772-0-50955300-1438619820.jpg_qt_ data-fileid_eq__qt_4744_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-15772-0-50955300-1438619820.jpg_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I modified nothing on the original Blender file. Just loaded and hit export to Babylonjs._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What might be wrong?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks!_lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-08-03T19:34:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This is a question for our blender god_dd_ Gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-08-03T21:52:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Gaz - welcome to the BJS forum _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Can you post your blend file somewhere so I can look at it? You can PM me the link if you wish._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And did you create the model - or was it imported from somewhere else?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"GAZ082","Date":"2015-08-04T03:16:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi gryff *bows* _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here is the model!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.blendswap.com/blends/view/80046_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.blendswap.com/blends/view/80046_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-08-04T05:48:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well Gaz_co_ I have the model ...  and you have a couple of issues_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1. The model uses the Cycles Render Engine and all the materials are built through the node system. Currently the BJS Exporter  supports only the Blender Render Engine._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Jeff Palmer (JCPalmer who looks after the exporter) is working on this so watch for developments_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_2. The scene has 10 lamps illuminating the mesh. WebGL allows a maximum of 4. It is not the cause of the problem - but just remember that as you play with BJS._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I will spend more time with the file tomorrow._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Ooh and as for Deltakosh_t_s remarks_co_ remember the old piece of philosophy_dd_ _lt_em_gt__qt_In the kingdom of the blind_co_ the one-eyed man is king_lt_/em_gt__qt_ (Erasmus 1436-1536) _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ alt_eq__qt__dd_o_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-08-04T16:01:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I was able to download this to test.  Good since I do not have a lot of Cycles samples.  Actually 3 meshes in this scene.  The Cycles capable release processed the file fine.  Took a while_co_ but I ran it under Ubuntu_co_ &amp_sm_ I cannot turn on GPU accelerated Cycles rendering.  Am not going to take time to publish_co_ but here was the log file_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_\tExporter version_dd_ 3.0.0_co_ Blender version_dd_ 2.74 (sub 0)_eq__eq__eq__eq__eq__eq__eq__eq__eq_ Conversion from Blender to Babylon.js _eq__eq__eq__eq__eq__eq__eq__eq__eq_\tPython World class constructor completed\tprocessing begun of mesh_dd_  Dientes\t\tWARNING_dd_ No materials have been assigned_dd_ \t\tnum positions      _dd_  6656\t\tnum normals        _dd_  6656\t\tnum uvs            _dd_  0\t\tnum uvs2           _dd_  0\t\tnum colors         _dd_  0\t\tnum indices        _dd_  36864\tprocessing begun of mesh_dd_  Cuerpo\t\tprocessing begun of baked material_dd_  Cuerpo\t\t\tCycles baking texture_co_ type_dd_ DIFFUSE_COLOR_co_ mapped using_dd_ BakingUV\t\t\tCycles baking texture_co_ type_dd_ SPECULAR_co_ mapped using_dd_ BakingUV\t\tnum positions      _dd_  28385\t\tnum normals        _dd_  28385\t\tnum uvs            _dd_  56770\t\tnum uvs2           _dd_  0\t\tnum colors         _dd_  0\t\tnum indices        _dd_  147456\tprocessing begun of camera (FreeCamera)_dd_  Camera\tprocessing begun of mesh_dd_  Lengua\t\tprocessing begun of baked material_dd_  Lengua\t\t\tCycles baking texture_co_ type_dd_ DIFFUSE_COLOR_co_ mapped using_dd_ BakingUV\t\t\tCycles baking texture_co_ type_dd_ SPECULAR_co_ mapped using_dd_ BakingUV\t\tnum positions      _dd_  5824\t\tnum normals        _dd_  5824\t\tnum uvs            _dd_  11648\t\tnum uvs2           _dd_  0\t\tnum colors         _dd_  0\t\tnum indices        _dd_  29952\tprocessing begun of light (POINT)_dd_  Lamp.009\tprocessing begun of light (POINT)_dd_  Lamp.008\tprocessing begun of light (POINT)_dd_  Lamp.007\tprocessing begun of light (POINT)_dd_  Lamp.006\tprocessing begun of light (POINT)_dd_  Lamp.005\tprocessing begun of light (POINT)_dd_  Lamp.003\tprocessing begun of light (POINT)_dd_  Lamp.002\tprocessing begun of light (HEMI)_dd_  Lamp.001\tprocessing begun of light (POINT)_dd_  Lamp_eq__eq__eq__eq__eq__eq__eq__eq__eq_ Writing of javascript file started _eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq_ Writing of javascript file completed _eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq_ end of processing _eq__eq__eq__eq__eq__eq__eq__eq__eq_elapsed time_dd_  1 min_co_ 42.3217 secs_lt_/pre_gt__lt_p_gt_They are using a Glossy node_co_ which is what I pencilled in to do a specular bake.  The diffuse of the body looked right_dd__lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_08_2015/post-8492-0-06617400-1438703621.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_08_2015/post-8492-0-06617400-1438703621.jpg_qt_ data-fileid_eq__qt_4748_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-8492-0-06617400-1438703621.jpg_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But I am concerned about the specular.  I can generate any type of bake possible_co_ but I have to define the needs_co_ recipe.  I asked for input on which node types should cause which bake types in another topic_co_ but no one responded.  Not sure this specular texture is right.  Anyway_co_ I have more to test with_dd__lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_08_2015/post-8492-0-99463800-1438703925.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_08_2015/post-8492-0-99463800-1438703925.jpg_qt_ data-fileid_eq__qt_4749_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-8492-0-99463800-1438703925.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"GAZ082","Date":"2015-08-04T17:02:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you guys. I think ill have to manually set the textures when switching engines? It_t_s been like 6 years since i messed up with Blender_co_ heh._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I dont know what just JC posted_co_ looks like dissected the poor ghosty _dd__t_(_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Funny you do not have cycles samples_co_ i just downloaded 4 or 5 models from blendswap.com and all were Cycles. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ alt_eq__qt__dd_o_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-08-04T17:21:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_From your log file Jeff_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_span_gt_Exporter_lt_/span_gt__lt_span_gt_ version_lt_/span_gt__lt_span_gt__dd__lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span_gt_3.0_lt_/span_gt__lt_span_gt_._lt_/span_gt__lt_span_gt_0_lt_/span_gt__lt_span_gt__co__lt_/span_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is this the latest version available from the BJS github site_co_ or is it still a version you are working on?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As for the spec map above_co_ I would have expected a greyscale image - see this tutorial (at 13.00 min.) _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//www.youtube.com/watch?v_eq_P7VvPxmhZ6w_qt_ rel_eq__qt_external nofollow_qt__gt_Blender/Unity Specular and Normal Mapping_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But maybe BJS handles spec mapping in a different way from Unity._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-08-04T18:25:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_GAZ_co_ you have been out of the game too long.  Those are what 2D textures of 3D objects  look like.  Exporter generates a smart project UV map called_dd_ BakingUV.  Deleted once done along with any temporary images._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Gryff_co_ yes this is not published yet.  If you wish to test either exporter_co_ pm me.  Still testing &amp_sm_ documenting_co_ which the exporter badly needs.  I loaded up this thing &amp_sm_ specular was definitely wrong.  I commented out the specular &amp_sm_ got this_dd_  _lt_a href_eq__qt_https_dd_//googledrive.com/host/0B6-s6ZjHyEwUfkhYdW1yQ2hqTU90SUx6SzFjaVY3TnlQLVA2WmNSdDE5NWJubV9Cc1l2ekE/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//googledrive.com/host/0B6-s6ZjHyEwUfkhYdW1yQ2hqTU90SUx6SzFjaVY3TnlQLVA2WmNSdDE5NWJubV9Cc1l2ekE/index.html_lt_/a_gt_  . Not sure why there are no eyes._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Looks like a _qt_Glossy_qt_ node puts it data into a diffuse bake.  Have ripped out checking for anything to do a specular bake.  I_t_ll just wait till someone complains it is missing_co_ and then I_t_ll know what should trigger it._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-08-04T20:03:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_Exporter generates a smart project UV map called_dd_ BakingUV._lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ Even if the mesh in question already has a UV map_co_ Jeff?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-08-04T20:47:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes.  Presumably if there are image textures that are assigned a UV map_co_ they will used to render_co_ but then be baked using the temp one.  _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_When baking_co_ the temp UV is the only one that will be written to the .babylon / .JS file no matter how many UV maps there are.  Though I have fixed when there are multiple UVs.  The first one always was set to be used._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I had thought of using one if I found it_co_ but what if there was more than 1?  Also_co_ if I just did an unwrap_co_ instead of a smart project_co_ the Gingerbread man was terrible_co_ and minutes instead of seconds to do it.  Smart project always seems to do something good.  Might be hedging a little for the newbie_co_ but for so major an addition_co_ seems like the thing to do for an initial release._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]