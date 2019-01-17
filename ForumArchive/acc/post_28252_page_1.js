[{"Owner":"Myjestic","Date":"2017-02-06T16:24:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI created some merged meshes with babylon.js. Then I serialized them and put into a JSON-file (*.babylon).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow I am importing the meshes from this files. Most of them are imported correctly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOne file gives me the following error_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_qt_BJS - [17_dd_06_dd_47]_dd_ importMesh of undefined from undefined version_dd_ undefined_co_ exporter version_dd_ undefinedimportMesh has failed JSON parse_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tStrange on this error is - it only appears on Chrome 55.0. With Firefox 31.6\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny Idea where to search for the error?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-02-06T16:59:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAbout a year ago_co_ a producer tag started getting put into .babylon files by all the exporters.  This identified what produced the file.  Looks like the serializer does not add this field.  Probably should.  Upshot is you are not going to figure out much looking at that error.  Perhaps_co_ you serialized the scene with an older version of BJS_co_ that is causing the problem now.  (Which is why the serializer should add the producer info)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Myjestic","Date":"2017-02-06T17:10:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI did this with BJS 2.5_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_\tvar\tstrMesh _eq_ BABYLON.SceneSerializer.SerializeMesh(mesh)_sm_\n\tstrMesh _eq_ JSON.stringify(strMesh)\t_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tand wrote the String to a file. There is no producer tag like if I am exporting from blender_co_ like this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_\t_qt_producer_qt__dd_ {\n\t\t_qt_name_qt__dd_ _qt_Blender_qt__co_\n\t\t_qt_version_qt__dd_ _qt_2.76 (sub 0)_qt__co_\n\t\t_qt_exporter_version_qt__dd_ _qt_5.0.6_qt__co_\n\t\t_qt_file_qt__dd_ _qt_question1.babylon_qt_\n\t}_co__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI also added this lines to my exported JSON. No change.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd nonetheless_co_ all other exported files are working.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-02-06T17:46:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tCan you reproduce the issue in the PG?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Myjestic","Date":"2017-02-06T18:15:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNow_co_ this is really strange! I tried it on another Computer with exactly the same version of Chrome and there is no error. Everthing works as expected.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe only difference between the two computers is_co_ that the one where it does not work has an internet proxy with a whitelist.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMh now I am totally confused \n_lt_/p_gt_\n\n_lt_p_gt_\n\t _lt_img alt_eq__qt__dd_blink_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_blink.png_qt_ title_eq__qt__dd_blink_dd__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Myjestic","Date":"2017-02-07T10:17:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think it was a problem with the browser cache. I cleared the whole cache and everything works perfect.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRefresh with clearing cache_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_For Firefox Users_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCtrl + F5\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_For Chrome Users_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCtrl + Shift + R\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]