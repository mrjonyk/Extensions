[{"Owner":"JCPalmer","Date":"2015-07-22T19:24:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have implemented baking in Blender_co_ but only for the Blender Renderer_co_ not yet the Cycles renderer.  It works_co_ including with multi-materials_co_ but is wasteful in such a case.  My test scene shows this case _lt_a href_eq__qt_https_dd_//googledrive.com/host/0B6-s6ZjHyEwUfkxKTWU2cXZQOGxydC1KS2o0NHUzRzFUTFlNYldDUmIzZ0JxeGVqMlU3c3M_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//googledrive.com/host/0B6-s6ZjHyEwUfkxKTWU2cXZQOGxydC1KS2o0NHUzRzFUTFlNYldDUmIzZ0JxeGVqMlU3c3M_lt_/a_gt_ .  The problem is I was processing each material for a Mesh as I was constructing it.  If there were 2 materials that required the same type of baking_co_ you would get 2 identical textures.  The baked textures are not just for a single material_co_ but the whole mesh_co_ including any image textures._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am solving this problem by having a python class to pre-process all the baking requirements of a mesh ahead of time.  When baking is required_co_ I can just bake once_co_ and apply it to the mesh with no multimaterials at all.  No multi-materials should also improve performance_co_ which is good for a gaming API._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also_co_ the same API for baking is used regardless of renderer.  Cycles might be supportable_co_ implemented as baked textures.  I can detect Nodes &amp_sm_ a diffuse shader_co_ but do not know which node types should cause which type of baking.  Here is the class so far_co_ but I am not sure which shader types map into the Babylon texture types.  Here is the comprehensive list of Node types.  Please advise if other node types can be used to identify textures to bake._lt_a href_eq__qt_http_dd_//www.blender.org/api/blender_python_api_2_75_release/bpy.types.ShaderNode.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.blender.org/api/blender_python_api_2_75_release/bpy.types.ShaderNode.html_lt_/a_gt__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_# need to evaluate the need to bake a mesh before even starting_sm_ class also stores specific types of bakesclass BakingRecipe_dd_    def __init__(self_co_ mesh_co_ forceBaking _eq_ False)_dd_        # initialize all members        self.needsBaking      _eq_ forceBaking        self.cyclesRenderer   _eq_ False        self.diffuseBaking    _eq_ forceBaking        self.ambientBaking    _eq_ False        self.opacityBaking    _eq_ False        self.reflectionBaking _eq_ False        self.emissiveBaking   _eq_ False        self.bumpBaking       _eq_ False        self.specularBaking   _eq_ False                # transfer from Mesh exporter properties        self.bakeSize    _eq_ mesh.data.bakeSize        self.bakeQuality _eq_ mesh.data.bakeQuality # for lossy compression formats                for material_slot in mesh.material_slots_dd_            # a material slot is not a reference to an actual material_sm_ need to look up            for mat in bpy.data.materials_dd_                if material_slot.name _eq__eq_ mat.name_dd_                    material _eq_ mat                    break                        # testing for Cycles renderer has to be different            if material.use_nodes _eq__eq_ True_dd_                self.needsBaking _eq_ True                self.cyclesRenderer _eq_ True                for node in material.node_tree.nodes_dd_                    id _eq_ node.bl_idname                    if id _eq__eq_ _t_ShaderNodeBsdfDiffuse_t__dd_                        self.diffuseBaking _eq_ True                                            if id _eq__eq_ _t_ShaderNodeAmbientOcclusion_t__dd_                        self.ambientBaking _eq_ True                    if id _eq__eq_ _t__t__dd_                        self.opacityBaking _eq_ True                    if id _eq__eq_ _t_ShaderNodeEmission_t__dd_                        self.emissiveBaking _eq_ True                    if id _eq__eq_ _t_ShaderNodeNormal_t_ or id _eq__eq_ _t_ShaderNodeNormalMap_t__dd_                        self.bumpBaking _eq_ True                    if id _eq__eq_ _t__t__dd_                        self.specularBaking _eq_ True                                    else_dd_                textures _eq_ [mtex for mtex in material.texture_slots if mtex and mtex.texture]                for mtex in textures_dd_                    if mtex.texture.type _eq__eq_ _t_IMAGE_t__dd_                        continue                                        self.needsBaking _eq_ True                    if mtex.use_map_diffuse or mtex.use_map_color_diffuse_dd_                        if mtex.texture_coords _eq__eq_ _t_REFLECTION_t__dd_                            self.reflectionBaking _eq_ True                        else_dd_                            self.diffuseBaking _eq_ True                    if mtex.use_map_ambient_dd_                        self.ambientBaking _eq_ True                    if mtex.use_map_alpha_dd_                        self.opacityBaking _eq_ True                    if mtex.use_map_emit_dd_                        self.emissiveBaking _eq_ True                    if mtex.use_map_normal_dd_                        self.bumpBaking _eq_ True                    if mtex.use_map_color_spec_dd_                        self.specularBaking _eq_ True            _lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-07-31T15:10:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks JC.  I sure wish I could participate in conversations with you_co_ on these subjects.  I just KNOW that one of these days_co_ you_t_re going to enable Babylon.App.CreateBlender().  You have done (and still doing) an EXCELLENT job at trying to harvest and utilize every possible data that could be inside a .blend file.  Too cool._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Meantime_co_ until I CAN participate tolerably_co_ THANKS for teaching us (me) what you are doing and the issues you deal-with.  Great post. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__t_BakingRecipe_t_... heh._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-07-31T18:38:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You are welcome.  Cycles baking is now done.  Tested with multi-materials.  Still not sure on the Cycles baking recipe for specular_co_ but stuck something in._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_There are so many Blender features that BJS does not use_co_ that there definitely needs to be documentation.  Am about 90% done.  Having been doing a few commits to check on how it looks._lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/tree/master/TowerOfBabel_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Extensions/tree/master/TowerOfBabel_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Am not going to release anything until documentation is done. .Babylon exporter still needs to be tested_co_ but if you look at the background section of doc_co_ you see that much has already been test indirectly._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-08-01T14:14:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Gorgeous readMe doc.  Fantastically explained_co_ great pics_co_ clean format.  Yay!   What a nice treat... exactly when I am learning Blender and need to install exporters._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Jc_co_ do you have a moment to give me a status report on ShapeKeys?  Now that I re-understand your two-pass TOB exporter system (genius_co_ by the way)_co_ you possibly have ShapeKey classes already being spawned (if present in the .blend file).  I_t_m asking on behalf of a forum user friend_co_ and I have not yet studied Blender ShapeKeys.  I suspect it is a mesh-morphing system._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I suppose a serious _qt_manipulation_qt_ is needed to transform your found ShapeKeys objects... into something usable in webGL.  And I bet a ShapeKeys field can be data-FAT when operating on a high-poly mesh or 10. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Of course_co_ it is not your job to do those conversions/honorings_co_ and I want to thank you for the converting of other classes that you_t_ve already done... without much help.  Good deal! _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__qt_Honoring_qt_?  Is that the correct word?  _qt_There are so many Blender features that BJS does not use_qt_.  That_t_s expected_co_ of course.  Blender is a power modeler and BJS is a _qt_view_qt_ of .blend files and cannot be expected to _qt_honor_qt_ all of Blender_t_s features.  That is an impossible task.  Hear me well_co_ newbies who expect 1-to-1 feature-honoring for Blender-&gt_sm_BJS!  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Like I have room to talk.  I have done TONS of expecting_co_ without knowing the issues behind the expectation/dream._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The newbies will still ask_co_ expect_co_ and demand.  Your docs are definitely ready to explain the situation to everyone.  But just the same_co_ near the bottom of your TOB readme... if you could put some approximate stats as-of xxx date... that would be cool.  Something like... as of xxx date_co_ there is approximately xxx .blend file items... that are NOT honored on first pass.  There is yyy first-pass-honored .blend items... that are NOT honored on second pass._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I bet it_t_s quite satisfying to see TOB chow-up any .blend file and grow your pile of 2nd pass objects.  Roto-tiller.  It_t_s handy for updating_co_ too_co_ because you can tweak these 2nd-pass objects so easily_co_ as Blender or BJS does future changes.  Good good good. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now_co_ staying updated for all the future changes in the first-pass of .blend files_co_ there_t_s a challenge_co_ eh?  Every new Blender feature... potentially requires another TOB spawn-off class_co_ I guess.  Spawn-off... and look-into honoring that new feature in BJS_co_ someday.  You can easily see the Blender features work-pile_co_ I bet.  Pretty tall_co_ probably. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ll try to help if I can.  It_t_s an interesting project... and seriously useful.  Really_co_ it_t_s imperative._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-08-03T13:58:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks_co_  a consequence of working @ Xerox for a decade+ is_dd_  how to document is pretty much beaten into you (before you ask I only document my own stuff). Still adding into &amp_sm_ pushing up to see how it looks.  Cannot get an image and text to display side by side._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Quick answer on shape keys plans.  I am waiting for something to happen.  Am too far in front &amp_sm_ bleeding.  They may have caught up.  Will check again after this release.  On BJS side_co_ have implemented SIMD for Morph 1.3 lib_co_ but never pushed up._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_To be honest_co_ newbies should be able to read &amp_sm_ understand Doc_co_ but not interested in impressing them though.  Now Blender experts like Super Mitch with looks like 20 years experience are another story.  Getting another  5 or 6 under the BJS tent as a result of Cycles is better than a 1000 newbies.  3JS is in deep crap with these people if it does not do Cycles exporting once this is available._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Both exporters are done &amp_sm_ going into QA testing.  The baking scene works on both exporters_co_ but I have a bunch of .blends.  Have found a regression bug in 2.2 with instances in a .babylon. But I do not need it to work with 2.2 to PR it.  Instances work fine in 2.1. (make sure not to inline texture files with 2.1 .babylon though)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]