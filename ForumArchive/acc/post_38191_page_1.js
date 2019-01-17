[{"Owner":"PeapBoy","Date":"2018-06-12T09:27:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello !_lt_br /_gt_\n\t_lt_br /_gt_\n\tAs WebGL2 comes with new texture formats_co_ I decided to play a bit with them_co_ and it seems to work well in pure WebGL2_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#RBQYSP_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#RBQYSP_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\t(If it prints red_co_ that means the RGB texture did work _lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt_)_lt_br /_gt_\n\t_lt_br /_gt_\n\tI saw texture format has been added to createRenderTargetTexture function so I wanted to try it out._lt_br /_gt_\n\tBut whatever I do_co_ I never achieve to create a RGB Render Target Texture. _lt_span class_eq__qt_ipsEmoji_qt__gt_😥_lt_/span_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tThis code works to create a _lt_strong_gt_RGBA_lt_/strong_gt_ RenderTarget_dd_ _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#RBQYSP%235_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#RBQYSP#5_lt_/a_gt__lt_br /_gt_\n\tThis code fails to create a_lt_strong_gt_ RGB_lt_/strong_gt_ RenderTarget_dd_ _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#RBQYSP%236_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#RBQYSP#6_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tFramebuffer is incomplete._lt_br /_gt_\n\t_lt_br /_gt_\n\tI already pulled the last version of BJS and added gl.pixelStorei(gl.UNPACK_ALIGNMENT_co_ 1) everywhere but it doesn_t_t help much._lt_br /_gt_\n\t_lt_br /_gt_\n\tI_t_m struggling with this_co_ I don_t_t understand where something is different from the pure WebGL2 version. I verified InternalSizedFormat_co_ InternalFormat and TextureType and they_t_re OK._lt_br /_gt_\n\t_lt_br /_gt_\n\tIf anybody has an idea... Thanks in advance _lt_span class_eq__qt_ipsEmoji_qt__gt_😊_lt_/span_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tPeapBoy\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-06-12T20:27:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello in your webgl2 example you are not rendering to the texture so I_t_m not sure it is a proof\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI  remember having a LOT of issues with RGB format and this is why we only offer RGBA so far\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet me know if you manage to render to a RGB texture in webgl2_co_ I will then try to understand what we are doing wrong\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PeapBoy","Date":"2018-06-13T17:22:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMy bad_co_ you_t_re right_co_ I_t_ll come back tomorrow with a new PG if it works _lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PeapBoy","Date":"2018-06-15T16:33:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi !_lt_br /_gt_\n\t_lt_br /_gt_\n\tAs we can see _lt_a href_eq__qt_https_dd_//www.khronos.org/opengl/wiki/Image_Format#Required_formats_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt__co_ RGB format is not required by Opengl specifications (and therefore_co_ by WebGL). That means it_t_s supported for textures but not always for renderbuffers. That_t_s why it worked in my PG which didn_t_t render to a target._lt_br /_gt_\n\tI_t_m sorry for wasting your time_co_ I didn_t_t know this. That_t_s just not possible for now. _lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2018-06-17T10:32:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis answers is marked as solved. I found this interesting._lt_br /_gt_\n\tfloat texture formats are not color readable per default. What i see on the Web people using formats such as RGBA32F for fluid animations or pass large arrays of data as texture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tinternalformat_dd_ RGB_lt_font color_eq__qt_#000000_qt__gt_ myimage _eq_ _lt_/font_gt__lt_font color_eq__qt_#0000ff_qt__gt_new_lt_/font_gt__lt_font color_eq__qt_#000000_qt__gt_ Uint8Array([_lt_/font_gt__lt_font color_eq__qt_#09885a_qt__gt_255_lt_/font_gt__lt_font color_eq__qt_#000000_qt__gt__co_ _lt_/font_gt__lt_font color_eq__qt_#09885a_qt__gt_0_lt_/font_gt__lt_font color_eq__qt_#000000_qt__gt__co_ _lt_/font_gt__lt_font color_eq__qt_#09885a_qt__gt_0_lt_/font_gt__lt_font color_eq__qt_#000000_qt__gt__co_]) is waiting for UNSIGNED_BYTE_lt_/font_gt__lt_br /_gt_\n\t_lt_font color_eq__qt_#000000_qt__gt_while_lt_/font_gt_ internalformat_dd_ FLOAT is at Float32Array_co_ so you run into a conversation error. gl_FragColor _eq_ float 1. what does it mean ? When converted back to an (u)sampler2D RGA texture ? hahah\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is a good explanation_lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//stackoverflow.com/questions/45571488/webgl-2-readpixels-on-framebuffers-with-float-textures/45573301#45573301_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//stackoverflow.com/a/45573301/7332242_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tplaying around_co_ for fun _dd_ )_lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#RBQYSP%238_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#RBQYSP#8 _lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_div style_eq__qt_color_dd_#000000_sm_background-color_dd_#fffffe_sm_font-family_dd_Consolas_co_ _t_Courier New_t__co_ monospace_sm_font-weight_dd_normal_sm_font-size_dd_14px_sm_line-height_dd_19px_sm_white-space_dd_pre_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_div style_eq__qt_color_dd_#000000_sm_background-color_dd_#fffffe_sm_font-family_dd_Consolas_co_ _t_Courier New_t__co_ monospace_sm_font-weight_dd_normal_sm_font-size_dd_14px_sm_line-height_dd_19px_sm_white-space_dd_pre_sm__qt__gt_\n\t\t\t_lt_div_gt_\n\t\t\t\t_lt_br /_gt_\n\t\t\t\t \n\t\t\t_lt_/div_gt_\n\t\t_lt_/div_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PeapBoy","Date":"2018-06-18T14:30:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Nabroski !_lt_br /_gt_\n\t_lt_br /_gt_\n\tThanks for the precious info._lt_br /_gt_\n\t_lt_br /_gt_\n\tRender to a RGB16F texture was possible in WebGL1 with the EXT_color_buffer_half_float extension but isn_t_t possible in WebGL2 anymore as this extension doesn_t_t exist anymore._lt_br /_gt_\n\tWith the EXT_color_buffer_float extension available with WebGL2 though_co_ it_t_s possible to render to R16F_co_ RG16F_co_ RGBA16F_co_ R32F_co_ RG32F_co_ RGBA32F and R11F_G11F_B10F texture._lt_br /_gt_\n\t_lt_br /_gt_\n\tI didn_t_t know the existence of the function uintBitsToFloat()_co_ very handy !_lt_br /_gt_\n\t_lt_br /_gt_\n\tNow_co_ I should pay attention at the precision loss and at the performance gain of using RGB8 texture (not necessarily faster to read RGB textures).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]