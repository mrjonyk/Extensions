[{"Owner":"Dad72","Date":"2014-02-27T18:03:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have a error in the console that i don_t_t understand. What is this error? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_Error in Google Chrome_lt_/strong_gt__lt_br_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt_256 WebGL_dd_ INVALID_OPERATION_dd_ drawElements_dd_ attribs not setup correctly                                            _lt_a href_eq__qt_babylon.js_qt_ rel_eq__qt_external nofollow_qt__gt_babylon.js_dd_2_lt_/a_gt__lt_br_gt_WebGL_dd_ too many errors_co_ no more errors will be reported to the console for this context._lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_br_gt__lt_p_gt_this function _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-auto_qt__gt_BABYLON.Engine.prototype.draw _eq_ function (useTriangles_co_ indexStart_co_ indexCount) {        this._gl.drawElements(useTriangles ? this._gl.TRIANGLES _dd_ this._gl.LINES_co_ indexCount_co_ this._gl.UNSIGNED_SHORT_co_ indexStart * 2)_sm_}_sm__lt_/pre_gt__lt_p_gt_Or_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-auto_qt__gt_(function() {with (this[2]) {with (this[1]) {with (this[0]) {return function(event) {SelectedMesh(_qt_Modeles/Rabbit/_qt__co_ _qt_Modeles_qt__co_ _qt_Rabbit.babylon_qt_)_sm_}_sm_...}}}})_lt_/pre_gt__lt_p_gt__lt_strong_gt_Error In Firfox _dd__lt_/strong_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt__lt_div_gt__lt_div_gt__lt_div_gt_ _lt_/div_gt__lt_/div_gt__lt_/div_gt__lt_/div_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_div_gt__lt_div_gt__lt_div_gt__lt_div_gt__lt_span_gt__lt_span_gt_UnknownError_lt_/span_gt__lt_/span_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_  _lt_span_gt__lt_a rel_eq__qt_external nofollow_qt__gt_...){BABYLON.Camera.call(this_co_name_co_position_co_scene)_sm_this.cameraDirection_eq_new BABYLON..._lt_/a_gt__lt_/span_gt__lt_/div_gt__lt_/div_gt__lt_div_gt__lt_a rel_eq__qt_external nofollow_qt__gt_babylon.js (ligne 2)_lt_/a_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_/div_gt__lt_/div_gt__lt_div_gt__lt_div_gt__lt_div_gt__lt_div_gt__lt_span_gt__lt_span_gt_UnknownError_lt_/span_gt__lt_/span_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_  _lt_span_gt__lt_a rel_eq__qt_external nofollow_qt__gt_....forceWireframe_co_true)_sm_if(this._reusable){this._currentRenderTextureInd_eq_(this._cu..._lt_/a_gt__lt_/span_gt__lt_/div_gt__lt_/div_gt__lt_/div_gt__lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I did not have this problem with previous versions ._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-02-27T21:44:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Should come from your side. Everything is working on the website or on my computers_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-02-27T22:07:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes I managed to find the problem. If i wrote_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-auto_qt__gt_function init(CheminModeles_co_ Fichier_co_ Name){    engine _eq_ new BABYLON.Engine(container_co_ true)_sm_    scene _eq_ new BABYLON.Scene(engine)_sm_     BABYLON.SceneLoader.ImportMesh(Name_co_ CheminModeles_co_ Fichier_co_ scene_co_ function (newMeshes_co_ particleSystems_co_ skeletons){        modele _eq_ newMeshes[0]_sm_    })_sm_ } function SelectedMesh(chemin_co_ dossier_co_ meshe){    if(modele){        modele.dispose()_sm_    }     init(CheminModeles_co_ Fichier_co_ Name)_sm_}_lt_/pre_gt__lt_p_gt_I had some errors because of  modele _eq_ newMeshes[0]_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_if i delete _dd__lt_/p_gt__lt_p_gt_    modele _eq_ newMeshes[0]_sm__lt_/p_gt__lt_p_gt_and _lt_/p_gt__lt_p_gt_    if(modele) {_lt_br_gt_        modele.dispose()_sm__lt_br_gt_    } _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_not error._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_I don_t_t know why. _lt_/strong_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]