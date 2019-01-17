[{"Owner":"royibernthal","Date":"2016-09-27T20:50:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have a model loaded from a .babylon file_co_ which consists of several meshes_co_ a matching skeleton with animations is also loaded from that same file.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_d like to create a clone of the whole model (meshes + skeleton)_co_ and be able to animate each clone separately.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI iterate over the meshes with a simple FOR loop and clone them_co_ so far everything works as expected.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI clone the skeleton_co_ however when I try to animate the clone using scene.beginAnimation(skeleton...) neither the cloned meshes nor the original meshes are animated.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I try to animate the original skeleton_co_ the original meshes are animated successfully.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSince my skeleton cloning is completely separate from the meshes cloning_co_ I guess it makes sense_co_ as they don_t_t have references of each other.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t1) Is there a way to pass the skeleton which meshes it should be attached to after cloning? (or the other way around - pass the cloned skeleton to the cloned meshes)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlternatively - Is there some way to clone the meshes and skeleton in a way that keeps the newly cloned meshes synced to the newly cloned skeleton?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2) Is it even necessary to clone the skeletons if I want different clones of the same model to be animated separately?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3) Does a skeleton have a function similar to mesh.createInstance()? For instance_co_ if I call mesh.createInstance()_co_ should I still call skeleton.clone() or does skeleton have a function similar to createInstance() for improved performance?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-09-27T21:23:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8420-royibernthal/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8420_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8420-royibernthal/_qt_ rel_eq__qt__qt__gt_@royibernthal_lt_/a_gt_ _dd_ did you take a look at this _lt_a href_eq__qt_http_dd_//www.babylonjs.com/Demos/BONES/_qt_ rel_eq__qt_external nofollow_qt__gt_demo_lt_/a_gt_ ? Or read this_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/How_to_use_Bones_and_Skeletons_qt_ rel_eq__qt_external nofollow_qt__gt_ tutorial _lt_/a_gt_?_lt_img alt_eq__qt__dd_huh_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_huh.png_qt_ title_eq__qt__dd_huh_dd__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThe rabbits are cloned meshes_co_ have the same cloned rig_co_ but play different parts of the animation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2016-09-27T21:32:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/?do_eq_hovercard_qt_ data-mentionid_eq__qt_7026_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/_qt_ rel_eq__qt__qt__gt_@gryff_lt_/a_gt_ Yup_co_ both of them.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I understand things correctly_co_ the example in the tutorial is for 1 mesh per skeleton (e.g. the rabbit). What if I have multiple meshes per skeleton? How would that look like?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s say I_t_m loading a human model from a .babylon file.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-Multiple meshes are loaded_dd_ head_co_ hands_co_ legs_co_ etc...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-Only one skeleton is loaded\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tEach mesh has a mesh.skeleton reference_co_ which I can only assume references the same skeleton object_co_ correct me if I_t_m wrong.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe picture I have in my head of how things are connected to each other is probably wrong_co_ would you help me understand how it actually works?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tbtw - Is there a way to see the source of the demo you linked to?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-09-27T21:39:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey_co_ its rabbit and dude... our good buddies.  royi_co_ playground search for _qt_dude_qt_ or _qt_rabbit_qt_... you_t_ll get a bucket of slop to dig-in.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAre you really good at using your object inspector... in your browser f12 dev tools?  console.log the mesh_co_ click on the word _lt_em_gt_object_lt_/em_gt_ in the console_co_ and the object inspector should open.  _lt_em_gt_Y_lt_/em_gt_ou can drill right into the bone matrices and do real-time value changes... twist the rabbit_t_s head backwards and stuff.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ Debug layer and .showBones is handy/hot_co_ too.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2016-09-27T22:26:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey Wingnut_co_ found a similar source in a playground search as you suggested_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1NSCXV%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1NSCXV#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever it clones only the rabbit which consists of 1 mesh per skeleton_co_ I have no idea how to do it for multiple meshes per skeleton.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m familiar with dev tools _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ My guess is the skeleton is properly animated since I called scene.beginAnimation_co_ but my cloned skeleton is simply not linked to the model_t_s cloned meshes_co_ and so the animation isn_t_t rendered.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2016-09-27T22:57:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8420-royibernthal/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8420_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8420-royibernthal/_qt_ rel_eq__qt__qt__gt_@royibernthal_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tI made a function to handle _qt_complete_qt_ cloning of meshes a few weeks back._lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/24335-cloning-advanced-meshes-their-skeletons-outside-loader/?do_eq_embed&amp_sm_comment_eq_139123&amp_sm_embedComment_eq_139123&amp_sm_embedDo_eq_findComment#comment-139123_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1EL5BE%2321_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1EL5BE#21_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe only scenario it doesn_t_t support is a visible parent mesh with visible children_co_ but that can easily be applied.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2016-09-28T00:03:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17943_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/_qt_ rel_eq__qt__qt__gt_@aWeirdo_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHey_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1) I tried setting manually the skeleton property of all the cloned meshes to reference the cloned skeleton_co_ which I think is what you did in your example (correct me if I_t_m wrong).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m trying to set the skeleton of cloned meshes created by originalMesh.createInstance() or originalMesh.clone().\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever_co_ when I try to set mesh.skeleton _eq_ skeleton_co_ the following error is thrown in the console_dd_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tTypeError_dd_ setting a property that has only a getter\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWhat am I missing? Aren_t_t you also setting the skeleton property of a cloned mesh to the cloned skeleton in your example?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t2) Is the first mesh in the array of loaded meshes (newMeshes) set to be the parent of all other meshes via blender? (or any other software)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tdude _eq_ newMeshes[0] seems to be enough to represent the whole model_co_ without needing to manually clone any of the other loaded meshes in the newMeshes array.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2016-09-28T00:23:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8420-royibernthal/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8420_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8420-royibernthal/_qt_ rel_eq__qt__qt__gt_@royibernthal_lt_/a_gt_ _lt_br /_gt_\n\tIf possible_co_ please create a PG_co_ it makes everything much easier _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_br /_gt__lt_br /_gt_\n\tWhen importing a mesh and setting _qt_dude _eq_ newMeshes[0]_sm__qt_ the imported mesh_t_s skeletons aswell as its protential children_t_s skeletons are automaticly applied to dude._lt_br /_gt__lt_br /_gt_\n\tCloning a mesh doesn_t_t do that_co_ _lt_br /_gt__lt_br /_gt_\n\tIf you look closely in my code_co_ you_t_ll notise that in the import code_co_ i make a dude.skeletons array and add all imported skeletons_co_ which i use later in the cloning._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_       dude.skeletons _eq_ []_sm_\n\t\t\n\t\tfor (var i _eq_ 0_sm_ i &lt_sm_ skeletons.length_sm_ i+_eq_1){\n\t\t\tdude.skeletons[i] _eq_ skeletons[i]_sm_\n\t\t\tscene.beginAnimation(dude.skeletons[i]_co_ 0_co_ 120_co_ 1.0_co_ true)_sm_\n\t\t}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt__lt_br /_gt_\n\tThen when cloning_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI start by doing the mesh cloning itself_co_ followed by cloning the dude.skeletons array into a clone.skeletons array_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand then at the end_co_ i set the proper connections between the clone.skeleton variable and the clone.skeletons_lt_em_gt_ _lt_/em_gt_array index.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt_  _lt_/em_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2016-09-28T13:40:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17943_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/_qt_ rel_eq__qt__qt__gt_@aWeirdo_lt_/a_gt_ I just understood the problem_co_ I was trying to set the skeleton of an InstancedMesh created by Mesh/createInstance()_co_ it seems skeleton only has a getter and no setter on InstancedMesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs InstancedMesh not supposed to support cloning skeletons or is there some other way to do it?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI created a rough PG of what I_t_m trying to do_co_ it works when I clone with Mesh/clone()_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1SVN3I%2313_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1SVN3I#13_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-09-28T16:10:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYou are correct_co_ instances cannot have a different skeleton as their source mesh. Cloning mesh is the way to go\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2016-09-28T16:57:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tGotcha. Thank you\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2016-10-17T08:56:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m also attempting to use _lt_strong_gt_this.createInstance()_lt_/strong_gt_ of an imported mesh with no skeleton_co_ only a single mesh. Is this supported for a single imported mesh? Or is _lt_strong_gt_this.createInstance() _lt_/strong_gt_only to use for native objects created in babylon? I would like to use _lt_strong_gt_this.createInstance() _lt_/strong_gt_as I already have my scene completed_co_ and the client decided at the very last moment that they wanted an imported mesh instead of a native babylon sphere in a physics simulation. If this is supported_co_ then how do I access the variable that represents newmeshes[0] on an imported mesh?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried modifying the following PG scene to instance an imported mesh in place of the shperes_co_ but have had no luck. The basic PG scene minus my messy code trying to work with the attached mesh is below_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1MJ09V%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1MJ09V#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI left out the importing of the mesh_co_ but the .babylon file is attached if anyone believes they can instance the low poly mesh after import. It appears I might need to clone_co_ but then would need to make many other modifications to my scene. Either way_co_ if anyone might assist with an example of eith instancing or cloning (instancing preferred)_co_ I would be very grateful.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe only mesh in the scene is named _qt_Cell_05_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks much_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_9871_qt_ data-fileid_eq__qt_9871_qt_ rel_eq__qt__qt__gt_Cell_05.babylon_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2016-10-17T11:21:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/?do_eq_hovercard_qt_ data-mentionid_eq__qt_11286_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/_qt_ rel_eq__qt__qt__gt_@dbawel_lt_/a_gt_ Hi_co_ I don_t_t see in your PG any attempt to import the .babylon file.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s how the import should look like_co_ task.loadmeshes is the _qt_newmeshes_qt_ you_t_re looking for_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var assetsManager _eq_ new BABYLON.AssetsManager(scene)_sm_\n\t\nassetsManager.addMeshTask(_qt_cell_qt__co_ _qt__qt__co_ _qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/_qt__co_ _qt_attachment.php?id_eq_9871_qt_)_sm_\n\t\nassetsManager.onTaskSuccess _eq_ function (task) {\n\t//task.loadedMeshes\n}_sm_\n\nassetsManager.load()_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou won_t_t be able to load the .babylon file though from that URL_co_ you_t_ll get a cross-origin error. Try to load it within your own environment and it should work. Otherwise_co_ you can attempt to load it from a server which will support cross-origin requests from the PG.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2016-10-17T18:10:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8420-royibernthal/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8420_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8420-royibernthal/_qt_ rel_eq__qt__qt__gt_@royibernthal_lt_/a_gt_ - MY apologies that I wasn_t_t clear in my last post. I_t_m using the code above - but unable to generate the code for instancing - only cloning a single mesh. Is instancing supported for imported meshes_co_ and if so_co_ what is the method to identify the imported mesh as meshes[]_sm_ returns a null object on instancing. I need to use the meshes in a physics simulation with hundreds of instances.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2016-10-17T18:12:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8420-royibernthal/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8420_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8420-royibernthal/_qt_ rel_eq__qt__qt__gt_@royibernthal_lt_/a_gt_ - Will your code above address instancing? and if so_co_ how might I impliment?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2016-10-17T21:43:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/?do_eq_hovercard_qt_ data-mentionid_eq__qt_11286_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/_qt_ rel_eq__qt__qt__gt_@dbawel_lt_/a_gt_ a .babylon file contains data from which bjs can create _qt_native_qt_ babylon meshes (along with other scene info which is irrelevant to your question)_co_ so it_t_s all the same_co_ it doesn_t_t matter that the meshes are imported.\n_lt_/p_gt_\n\n_lt_p_gt_\n\ttask.loadedmeshes is an array of meshes on which you can call createInstance(). e.g. task.loadedmeshes[0].createInstance() should work for you.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDepending on the amount of meshes you load from a .babylon file_co_ you might want to loop over task.loadedmeshes and bundle the instances created with some extra logic.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAssuming your .babylon file contains only 1 mesh like you say_co_ this case should be fairly easy_co_ just create as many instances of task.loadedmeshes[0] as you need.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you still have problems or encounter errors_co_ feel free to upload a PG and I_t_ll try my best to help you identify the issue.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]