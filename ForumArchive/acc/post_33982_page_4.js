[{"Owner":"SvenFrankson","Date":"2018-06-25T09:58:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhat about this feature ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\thttps_dd_//playground.babylonjs.com/index.html#6FLBU3#2\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI often need to extract VertexData from meshes with submeshes_co_ but it ignores the submeshes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe there_t_s already a way to do it without keeping track of the submesh indexes along the VertexData ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-06-25T14:43:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tInteresting one!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tInitially I thought it was not required as you can do_dd_ mesh.subMeshes _eq_ source.subMeshes.slice(0)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Rodrix3","Date":"2018-06-25T17:04:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_218622_qt_ data-ipsquote-contentid_eq__qt_33982_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1529392624_qt_ data-ipsquote-userid_eq__qt_20526_qt_ data-ipsquote-username_eq__qt_V!nc3r_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 6/19/2018 at 4_dd_17 AM_co_ V!nc3r said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tFrom _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/37968-lamps-on-babylon-open-contest/?do_eq_findComment&amp_sm_comment_eq_218575_qt_ rel_eq__qt__qt__gt_Pryme8_lt_/a_gt__co_ are GI probes something possible?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t+1 on this one! You can read more on this thread and see examples_dd_\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed3917537712_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/37968-lamps-on-babylon-open-contest/?page_eq_2&amp_sm_do_eq_embed_qt_ style_eq__qt_height_dd_339px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SvenFrankson","Date":"2018-06-26T08:14:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_219384_qt_ data-ipsquote-contentid_eq__qt_33982_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1529937839_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t17 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tInteresting one!\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tInitially I thought it was not required as you can do_dd_ mesh.subMeshes _eq_ source.subMeshes.slice(0)\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tAre you sure we can ? I don_t_t fully understand how SubMesh are implemented_co_ but it seems copying the array would not set_lt_strong_gt_ subMesh._mesh_lt_/strong_gt_ or _lt_strong_gt_subMesh._renderingMesh_co_ _lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-06-26T16:07:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\trats..you are right _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ So your code is definitely useful !_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"heyzxz","Date":"2018-06-27T05:40:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAny plan on light probes? _lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt__lt_a href_eq__qt_https_dd_//docs.unity3d.com/Manual/LightProbes.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//docs.unity3d.com/Manual/LightProbes.html_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_I mean use  existing modeling IDE (like blender) to edit light probes_co_ then export to bjs..._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2018-07-04T22:14:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy playground was deleted_co_ seems i make someone is unhappy_co_ my bad._lt_br /_gt_\n\tjust to show that we live in a modern cultured society_co_ the user should be given a reason for deletion_co_ as well as the intervention of mods or admins._lt_br /_gt_\n\t_lt_br /_gt_\n\tThanks in advance._lt_br /_gt_\n\t \n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed8254013969_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/38606-using-typescript-in-playground/?_fromLogin_eq_1&amp_sm_do_eq_embed_qt_ style_eq__qt_height_dd_219px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SvenFrankson","Date":"2018-07-05T09:18:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_220463_qt_ data-ipsquote-contentid_eq__qt_33982_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1530742453_qt_ data-ipsquote-userid_eq__qt_21965_qt_ data-ipsquote-username_eq__qt_Nabroski_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t11 hours ago_co_ Nabroski said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tMy playground was deleted_co_ seems i make someone is unhappy_co_ my bad._lt_br /_gt_\n\t\t\tjust to show that we live in a modern cultured society_co_ the user should be given a reason for deletion_co_ as well as the intervention of mods or admins.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tMine too_co_ but why would you assume it_t_s a deletion ? It looks like a bug...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2018-07-05T12:23:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tchemtrails everywhere!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-05T17:56:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGuys! How can you think I could remove anything? Didn_t_t I prove I was not like that during the last 6 years?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe PG was broken_dd_\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ class_eq__qt_ipsEmbed_finishedLoading_qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed4964724847_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/38637-playground-saved-scenes-hosed/?do_eq_embed&amp_sm_comment_eq_220558&amp_sm_embedComment_eq_220558&amp_sm_embedDo_eq_findComment_qt_ style_eq__qt_height_dd_ 296px_sm_ overflow_dd_ hidden_sm_ max-width_dd_ 502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"max123","Date":"2018-07-06T08:27:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_220570_qt_ data-ipsquote-contentid_eq__qt_33982_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1530813364_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t14 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tGuys! How can you think I could remove anything? Didn_t_t I prove I was not like that during the last 6 years?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWho knows? With summer heat like this? People tend to do crazy things. Bad things. Horrible things..._lt_br /_gt_\n\tWhere_t_s my hammer?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2018-07-06T08:29:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tEverybody has a dark side on him _lt_span_gt__lt_span_gt__lt_span class_eq__qt_ipsEmoji_qt__gt_😈_lt_/span_gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2018-07-16T13:25:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAbout the Inspector_co_ it could be a nice enhancement to get some infos inside popups for some properties_co_ like in _lt_a href_eq__qt_https_dd_//i.imgur.com/vWe2wV7.png_qt_ rel_eq__qt_external nofollow_qt__gt_Blender for example_lt_/a_gt_. This could give us something like that_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_LnWhpfc.png_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_567_qt_ src_eq__qt_https_dd_//i.imgur.com/LnWhpfc.png_qt_ width_eq__qt_355_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf possible_co_ having a _lt_em_gt_right click &gt_sm_ copy js data_lt_/em_gt_ could be a great bonus (with that_co_ you should be able to get direct access to a material or a mesh_co_ for example_dd_ _lt_em_gt_scene.getMeshByName(_qt_myWonderfulName_qt_)_lt_/em_gt_ )\n_lt_/p_gt_\n\n_lt_p_gt_\n\t [edit] github issue_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/issues/4772_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/issues/4772_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2018-07-30T08_dd_07_dd_42Z_t_ title_eq__t_07/30/2018 08_dd_07  AM_t_ data-short_eq__t_Jul 30_t__gt_July 30_lt_/time_gt_ by V!nc3r_lt_/strong_gt_\n\t\n\t\t_lt_br_gt_added github link\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-17T15:54:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLike this idea! you should create an issue!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Rodrix3","Date":"2018-08-21T01:52:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tRTX2080 ti... Should I buy it? _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn other words.. how far are we from implementing any live ray tracing features for BabylonJS_co_ to take advantage of the new RTX cards that will be launched next month by Nvidia?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor the uninformed_dd_ hot news. Nvidia is launching a new technology that will change graphics as we know them today. Shadows and lighting will become hyper realistic. The announcement from Nvidia is fresh_dd_ hours!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t..it would be sooo cool if we could support any of this in BabylonJS! Imagine the possibilities!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-08-21T07:32:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAs soon as we got Webgl support fort it _lt_span_gt__lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MattB","Date":"2018-08-31T19:25:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_d like support for point clouds - especially with variable point density.  I_t_d be willing to donate money for this to happen _dd_).  Sort of like Potree (is there any way to get Potree to work with Babylon?)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-04T17:54:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWe already support point clouds _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1KVF8R#6_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1KVF8R#6_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MattB","Date":"2018-09-06T17:25:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIs there a way to import a point cloud_co_ from a ply_co_ e57_co_ xyz etc_co_ or does it have to be a mesh rendered as a point cloud?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-07T16:32:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\they Matt_co_ well we do not support the file formats you mentioned but eventually everything will end up being a mesh to render\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-09-15T16:07:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi gang.  I think I will have a need/desire for an _qt_onPointerHeld_qt_ event/observable for _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/gui#events_qt_ rel_eq__qt_external nofollow_qt__gt_BJS GUI events_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPossible?  Would someone consider coding it for me/us?  That would be great.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIF... onPointer_lt_u_gt__lt_strong_gt_Out_lt_/strong_gt__lt_/u_gt_ could be repeatedly polled WHILE onPointerHeld was active/repeating_co_ that would be nice_co_ too.  If user_t_s pointer drifts off-of the control_co_ heldPointer cancels.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCase_dd_  Momentary (spring-loaded) rocker/toggle switch_co_ with auto-return-to-center/off.  When held depressed_co_ it repeatedly/constantly does... _lt_em_gt_something_lt_/em_gt_.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tExtra credit for _qt_repeat rate_qt_ (how quickly observer-polled)... but_co_ maybe that is done in the handler (only react to every 10th repeated event_co_ for example).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t know much about _qt_pointer/button held_qt_ things.  Does it stream events repeatedly?  I have so much to learn.  Teachings/corrections welcome_co_ thx.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-17T16:00:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis could be done on user side_dd_ You start a setInterval on pointer down and delete it on pointer out. This way you can define the frequency of the setInterval as you wish\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"The Leftover","Date":"2018-09-18T14:51:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDoes anyone have a subjective / objective sense of whether people use MeshWriter?  I see visits to Wingnut_t_s demo pages (they load my hosted version) but that_t_s all I got.  Mostly curious_co_ I guess.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-09-19T21:37:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey_co_ thx for the setInterval idea_co_ DK &amp_sm_ Lihis (in pm)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMeshWriter is still being discovered_co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29406-the-leftover/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29406_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29406-the-leftover/_qt_ rel_eq__qt__qt__gt_@The Leftover_lt_/a_gt_!  Does it need some WD-40?  Is it getting rusty?  How many future hi-tech-looking advertisements and game intros... will fly-into-view text like... _qt__lt_strong_gt_From the Makers of Serious Sam..._lt_/strong_gt__qt_ (you know_co_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#XWVXN9%2357_qt_ rel_eq__qt_external nofollow_qt__gt_big chrome fonts_lt_/a_gt_... big music_co_ lots of hoopla)?  Lots to come.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUsing webGL for those _qt_holy crap_qt_ game intros and company ads... is just getting started.  No video_co_ no rendering farms_co_ just big chrome-like meshWriter words... smacking users in the face... with blasts of sparkly particles and camera shakes!  BA-BOOM... from the makers of Lite Brite...  BA-BOOM... comes a game SO amazing...  BA-BOOM... that you will forget to pee!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAll of it_co_ in real time.  No video.  No post-processing or rendering.  It_t_s easily usable on standard webpages (html5 canvas)_co_ without a flash player_co_ without a video player_co_ without a Java applet.  Just good ol_t_ webGL (with BJS easifier) producing a screen full of dazzle.  Love it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAren_t_t ya kind of tired of media players fighting over who gets to be _qt_your one-stop media playing app_qt_?  That fight has been going-on for 25 years.  Realplayer_co_ WinAmp_co_ Win Media Player_co_ VLC_co_ BSPlayer_co_ KLite CoDec packs_co_ on and on.  Time to wave the white flag and eat some webM and drink some OGG.  (What did he say?)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWebGL.  YUM!  Versatile_co_ powerful_co_ and easy.  With enough flashing lights_co_ sparkly particles_co_ and chrome-coated fonts/words_co_ we can do some SERIOUS hoopla.  Add a little John Phillip Sousa music_co_ and we got us a parade!  YAY!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tProbably smarter to fly the camera into the words_co_ instead of the words into the camera.  Looks the same in the end.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNah_co_ meshWriter better not go anywhere_co_ in case you were thinking of moth-balling it.  Its very bright future is sure to arrive.  It helps if you remember the days of _qt_cracking screens_qt_ and the competitions to see who could do the best _qt_TA DA!_qt_ hoopla.  Websites will be introducing themselves similar to movie intros/trailers... more and more.  I promise.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_  Flying 3d fonts have a big future_co_ I suspect.  Wait for the 2nd and 3rd _qt_wave_qt_ of webGL fanatics to arrive_co_ and then look at your usage stats.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ You_t_ll have 100 emails per day of feature-add requests... friggin_t_ puppy stampede.  heh.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-11-25T16:29:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAre .hdr files going to be added as valid input to HdrCubeTextures?  Using DDS containers seems odd in the face of an actual file format for this purpose.  Is there a WebGL problem being danced around here?  Blender does directly support .hdr files for enviroment textures &amp_sm_ their implementation of a skybox.  Pretty sure a DDS file is not going to work.  Trying to get something which will directly export that both sides actually use.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]