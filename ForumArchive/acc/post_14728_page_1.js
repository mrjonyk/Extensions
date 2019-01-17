[{"Owner":"binyan","Date":"2015-05-24T12:26:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey guys_co__lt_/p_gt__lt_p_gt_To boost a performance on mobile devices with Full HD screen resolution I_t_m doing the following thing_dd__lt_/p_gt__lt_p_gt_1. Set canvas size like half of full screen_lt_/p_gt__lt_p_gt_2. Scale the canvas with CSS_lt_/p_gt__lt_p_gt_As a result_co_ the GPU has to do less work_co_ and the scene runs smoothly. Here is the example css_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-css_qt__gt_#canvas {    position_dd_ absolute_sm_    width_dd_ 40%_sm_    height_dd_ 40%_sm_    -webkit-transform_dd_ scale3d(2.5_co_ 2.5_co_ 1.0)_sm_    transform_dd_ scale3d(2.5_co_ 2.5_co_ 1.0)_sm_    -webkit-transform-origin_dd_ 0 0 0_sm_    transform-origin_dd_ 0 0 0_sm_    top_dd_ 0_sm_    margin-bottom_dd_ 70px_sm_    touch-action_dd_ none_sm_    -ms-touch-action_dd_ none_sm_    z-index_dd_ 0_sm_}_lt_/pre_gt__lt_p_gt_Well_co_ this approach worked until I started dealing with picking collisions. The picking mechanism doesn_t_t take in account the scaling. Therefore the pick result is completely wrong._lt_/p_gt__lt_p_gt_If you run this code without scaling it would work as expected (if you pick sphere_co_ it would write in the console _qt_sphere1_qt_)_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var createScene _eq_ function () {    // This creates a basic Babylon Scene object (non-mesh)    var scene _eq_ new BABYLON.Scene(engine)_sm_    // Our built-in _t_sphere_t_ shape. Params_dd_ name_co_ subdivs_co_ size_co_ scene    var sphere _eq_ BABYLON.Mesh.CreateSphere(_qt_sphere1_qt__co_ 16_co_ 3_co_ scene_co_ false)_sm_\tsphere.rotationQuaternion _eq_ BABYLON.Quaternion.RotationYawPitchRoll(Math.PI / 2_co_ -Math.PI/2_co_ 0)_sm_    var camera _eq_ new BABYLON.FreeCamera(_qt_camera_qt__co_ new BABYLON.Vector3(0_co_ 50_co_ -10)_co_ scene)_sm_    var light _eq_ new BABYLON.DirectionalLight(_qt_dir1_qt__co_ new BABYLON.Vector3(0_co_ -1_co_ 0)_co_ scene)_sm_ \tlight.position _eq_ new BABYLON.Vector3(0_co_ 30_co_ 0)_sm_\tsphere.position _eq_ new BABYLON.Vector3(0_co_1.5_co_0)_sm_    camera.target _eq_ sphere.position_sm_\tcamera.setTarget(sphere.position)_sm_    camera.attachControl(canvas_co_ true)_sm_\t   scene.onPointerDown _eq_ function (evt_co_ pickResult) {        console.log(_qt_Picked _qt_ + pickResult.pickedMesh.name +            _qt_ in x_dd__qt_ + pickResult.pickedPoint.x +            _qt_ y_dd__qt_ + pickResult.pickedPoint.y +            _qt_ z_dd__qt_ + pickResult.pickedPoint.z)_sm_    }    return scene_sm_}_sm__lt_/pre_gt__lt_p_gt_But if you run it with the above css_co_ it wouldn_t_t work_co_ i.e. picking sphere would give you a null result._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Anyone has any idea how to deal with this?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-05-24T16:54:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You can try to set engine.setHardwareScaling(2)_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/babylon.engine.ts#L719_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/babylon.engine.ts#L719_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"binyan","Date":"2015-05-24T19:22:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You mean instead of scaling with CSS? _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-05-24T20:23:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have been working on multiple canvas_t_ for a pick and draw function.  My last android Galaxy tab 4 could not keep up with the refresh on the dynamic texture to make the scene usable.  So I enabled developer options and was able to increase the speed a bit.  Hardware scaling won_t_t really allow you to save resources in your scene_co_ as this is not directly related to scene elements and a 0.5 scaling of elements will cause practically all events passed through your canvas to be incorrect in your script.  My solution was to buy a new tablet_co_ as most all tablets sold today are really responsive.  I went a little farther and bought the Sony Experia V2 (expensive)_co_ but it has replaced my laptop and is just as fast.  But a $300 tablet today will not have the dealys of a tablet a year ago._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"binyan","Date":"2015-05-25T13:04:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Interesting thing... If I use a pure 100% x 100% canvas on my LG G2_co_ I get like 7-8 fps. But if along with 100% x 100% canvas I use engine.setHardwareScaling(_lt_strong_gt_1_lt_/strong_gt_)_co_ I get a significant boost up to 34-35 fps._lt_/p_gt__lt_p_gt_Anyone has an idea why? _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-05-25T20:51:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The value is a scaling number for pixels displayed on the screen.  So a value of 2 renders 2x the pixels_co_ and a value of 1 is native GPU resolution.  This might be different from the screen resolution - just so you know.  If I want to speed up my device_co_ I use a value of 0.5._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"binyan","Date":"2015-05-26T06:16:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_How do I know my phone GPU resolution?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-05-26T06:52:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Simply google the make and model number.  But this is universal setting_co_ so the result will improve performance to some degree the lower the scaling value._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"binyan","Date":"2015-05-26T07:39:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Not sure I understood you well... You say the lower the scaling value the better performance. I_t_m quite sure of opposite... The higher scaling value the better performance. Say the scaling value is 5_co_ so the image looks like crap_co_ but the performance is awesome. Checked it by myself._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-05-26T19:12:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co_ I_t_m not quite sure what you might be seeing_co_ as the lower the value will certainly speed up your device.  I found a few Youtube videos for you to see to confirm.  Here_t_s one of them (the shortest one)_dd_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_\n_lt_/p_gt__lt_div class_eq__qt_ipsEmbeddedVideo_qt_ contenteditable_eq__qt_false_qt__gt__lt_div_gt__lt_iframe width_eq__qt_480_qt_ height_eq__qt_270_qt_ src_eq__qt_https_dd_//www.youtube.com/embed/hnrXRZApCQU?feature_eq_oembed_qt_ frameborder_eq__qt_0_qt_ allowfullscreen_eq__qt_true_qt__gt__lt_/iframe_gt__lt_/div_gt__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"binyan","Date":"2015-05-26T19:39:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well_co_ thanks for putting an effort  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_I_t_m not sure if it_t_s the same scaling as in BABYLON_co_ but if I set a hardware scaling (through BABYLON) to 0.5 it slows my scene down and if I set it to 2 it speeds the scene up._lt_/p_gt__lt_p_gt_It actually does make sense... When you set hardware scaling to 2 you reduce the internal canvas buffer size (and due to this the picture quality becomes worse). So high value of scaling should speed up the rendering._lt_/p_gt__lt_p_gt_Am I missing something?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-05-27T16:10:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I thought you were speaking of scaling in the android GPU rendering to speed up your android device.  I now understand you are speaking of the scaling the rendering engine in BJS - I should have paid more attention.  It is a matter of display quality in BJS_co_ but I would certainly also take a look at turning on your developer options on any older model android device.  You can get a 30 -40% boost this way without compromisig your scene.  Just be very careful in changing the developer options_co_ as if you_t_re not familiar with these_co_ you can really cause your system to have serious issues.  If this occurs_co_ it_t_s best to go back to factory reset._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]