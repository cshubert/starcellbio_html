// This file was automatically generated from userguide.soy.
// Please don't edit this file by hand.

if (typeof scb_userguide == 'undefined') { var scb_userguide = {}; }


scb_userguide.userguide = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div class=\'scb_f_ug_help_search_bar\'><div class=\'handel\'>StarCellBio User Guide<button class=\'scb_f_ug_close_button\'>&#215;</button><br/><div class=\'scb_s_search_wrapper\'><form class=\'scb_f_help_form\'><input type=\'text\' name=\'help\' class =\'help_search_input\' placeholder = \'Search User Guide\'><span class=\'scb_display_search_count\'></span><input type=\'button\' value=\'&#215\' id=\'closesearch\'><input type=\'button\' value=\'Search\' id=\'search\'><br></form><button class=\'scb_f_ug_up_button\'>&#x25B2;</button>&nbsp; <span class=\'scb_f_ug_search_line\'></span>&nbsp;<button class=\'scb_f_ug_down_button\'>&#x25BC;</button></div></div><iframe class=\'scb_s_ug_dialog\' src=\'/static/ug/help.html\'></iframe><span class=\'scb_f_ug_green_line\'></span><input class=\'scb_s_ug_home\' type=\'button\' value=\'Home\' style=\'color: blue;\' id=\'search\' onclick=\'mainUG();\'><input type=\'button\' style=\'color: blue;\' value=\'Popout\' style=\'float:right;\'id=\'main_popout\' onclick=\'return true;\'></div>');
  return opt_sb ? '' : output.toString();
};
