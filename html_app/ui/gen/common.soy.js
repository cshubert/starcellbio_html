// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof scb_common == 'undefined') { var scb_common = {}; }


scb_common.assignment_step = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var eid__soy3 = new soy.StringBuilder((opt_data.assignments) ? soy.$$escapeHtml(opt_data.assignments.selected.experiments.selected_id) : (opt_data.assignment) ? soy.$$escapeHtml(opt_data.assignment.experiments.selected_id) : (opt_data.experiment) ? soy.$$escapeHtml(opt_data.experiment.id) : '');
  eid__soy3 = eid__soy3.toString();
  var aid__soy11 = new soy.StringBuilder((opt_data.assignments) ? soy.$$escapeHtml(opt_data.assignments.selected_id) : (opt_data.assignment) ? soy.$$escapeHtml(opt_data.assignment.id) : '');
  aid__soy11 = aid__soy11.toString();
  output.append((opt_data.step > 0) ? '<div class=\'scb_s_assignment_step\' xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html"><a class=\'scb_s_assignment_step_link scb_f_assignments_step_link ' + ((opt_data.step < 2 && opt_data.step > 0) ? 'scb_s_assignment_step_link_active' : '') + '\' href=\'#view=assignments\'><div class=\'scb_s_assignment_step_wrapper\'><div class=\'' + ((opt_data.step < 2 && opt_data.step > 0) ? 'scb_s_assignments_link_img_active' : 'scb_s_assignments_link_img ') + '\'></div>ASSIGNMENTS</div></a><a class=\'scb_s_assignment_step_link scb_f_experiments_step_link ' + ((opt_data.step >= 2) ? 'scb_s_assignment_step_link_active' : '') + '\' href=\'#view=experiment_last&assignment_id=' + soy.$$escapeHtml(aid__soy11) + '&experiment_id=' + soy.$$escapeHtml(eid__soy3) + '\'><div class=\'scb_s_assignment_step_wrapper\'><div class=\'' + ((opt_data.step >= 2) ? 'scb_s_experiments_link_img_active' : 'scb_s_experiments_link_img ') + '\'></div>EXPERIMENTS</div></a><div class=\'scb_s_assignment_step_link scb_f_lab_notebook_link\' onclick=\'alert("in construction");\'><div class=\'scb_s_assignment_step_wrapper\'><div class=\'scb_s_lab_notebook_link_img\'></div>LAB NOTEBOOK</div></div></div>' : '');
  return opt_sb ? '' : output.toString();
};


scb_common.experiment_step = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'scb_s_experiment_step\'><a class="scb_f_open_experiment scb_s_navigation_button" href="#view=experiment_design&assignment_id=', soy.$$escapeHtml(opt_data.assignment.id), '"> NEW EXPERIMENT &nbsp; <span aria-hidden="true" tabindex="-1">+</span></a><div class = \'scb_s_experiment_step_progress_label\'> ', soy.$$escapeHtml(opt_data.assignment.name), ':</div><div class=\'scb_s_assignment_step_experiment\'><label class="custom-select"><select onchange="location = this.value;">');
  var eList50 = opt_data.assignment.experiments.list;
  var eListLen50 = eList50.length;
  for (var eIndex50 = 0; eIndex50 < eListLen50; eIndex50++) {
    var eData50 = eList50[eIndex50];
    output.append('<option value=\'#view=experiment_last&assignment_id=', soy.$$escapeHtml(opt_data.assignment.id), '&experiment_id=', soy.$$escapeHtml(eData50.id), '\' model_id=\'', soy.$$escapeHtml(opt_data.assignment.id), '\' sub_model_id=\'', soy.$$escapeHtml(opt_data.experiment.id), '\'', (opt_data.experiment.id == eData50.id) ? 'selected="selected"' : '', '>', soy.$$escapeHtml(eData50.name), '&nbsp;&nbsp;</option>');
  }
  output.append('</select></label></div><br/><br/><div class="scb_s_experiment_step_div "><div class=\'scb_s_experiment_step_main_steps \'><div class=\'scb_s_experiment_step_labels\'><div class=\'scb_s_experiment_step_text scb_s_experiment_step_design ', (opt_data.step > 1 || opt_data.last_step > 0) ? 'scb_s_experiment_step_visited' : '', ' ', (opt_data.step == 1) ? 'scb_s_experiment_step_selected' : '', '\'>', (opt_data.step > 1 || opt_data.last_step > 0) ? '<a href=\'#view=experiment_design&assignment_id=' + soy.$$escapeHtml(opt_data.assignment.id) + '&experiment_id=' + soy.$$escapeHtml(opt_data.experiment.id) + '\'>DESIGN</a>' : 'DESIGN', (opt_data.step == 1) ? '<div class="arrow-down-design"></div>' : '', '</div><div class=\'scb_s_experiment_step_text scb_s_experiment_step_setup_and_run ', (opt_data.step > 2 || opt_data.last_step > 3) ? 'scb_s_experiment_step_visited' : '', ' ', (opt_data.step == 2 || opt_data.step == 3) ? 'scb_s_experiment_step_selected' : '', '\'>', (opt_data.step > 2 || opt_data.last_step > 3) ? '<a href=\'#view=experiment_setup&assignment_id=' + soy.$$escapeHtml(opt_data.assignment.id) + '&experiment_id=' + soy.$$escapeHtml(opt_data.experiment.id) + '\'>SETUP & RUN</a>' : 'SETUP & RUN', (opt_data.step == 2 || opt_data.step == 3) ? '<div class="arrow-down-setup"></div>' : '', '</div><div class=\'scb_s_experiment_step_text scb_s_experiment_step_select_technique ', (opt_data.step > 3 || opt_data.last_step > 4) ? 'scb_s_experiment_step_visited' : '', ' ', (opt_data.step > 3) ? 'scb_s_experiment_step_selected' : '', '\'>', (opt_data.step > 3 || opt_data.last_step > 4) ? '<a href=\'#view=select_technique&assignment_id=' + soy.$$escapeHtml(opt_data.assignment.id) + '&experiment_id=' + soy.$$escapeHtml(opt_data.experiment.id) + '\'>SELECT TECHNIQUE</a>' : 'SELECT TECHNIQUE', (opt_data.step > 3) ? '<div class="arrow-down-select"></div>' : '', '</div></div></div><div class=\'scb_s_experiment_step_tech_steps \'><div class=\'scb_s_experiment_step_buttons_title ', (opt_data.step > 3) ? 'scb_s_experiment_step_active_title' : '', '\'>Select Your Technique: </div><div class=\'scb_s_experiment_step_button scb_s_experiment_step_button_wb ', (opt_data.experiment.western_blot_list.length > 0) ? 'scb_s_experiment_step_visited' : '', ' ', (opt_data.step == 5) ? 'scb_s_experiment_step_selected' : '', '\'>', (opt_data.experiment.western_blot_list.length > 0) ? '<a href=\'#view=western_blot&assignment_id=' + soy.$$escapeHtml(opt_data.assignment.id) + '&experiment_id=' + soy.$$escapeHtml(opt_data.experiment.id) + '&western_blot_id=' + soy.$$escapeHtml(opt_data.experiment.western_blot_list.selected_id) + '\'>Western Blotting</a>' : 'Western Blotting', '</div><div class=\' scb_s_experiment_step_button scb_s_experiment_step_button_facs ', (opt_data.experiment.facs_list.length > 0) ? 'scb_s_experiment_step_visited' : '', ' ', (opt_data.step == 6) ? 'scb_s_experiment_step_selected' : '', '\'>', (opt_data.experiment.facs_list.length > 0) ? '<a href=\'#view=facs&assignment_id=' + soy.$$escapeHtml(opt_data.assignment.id) + '&experiment_id=' + soy.$$escapeHtml(opt_data.experiment.id) + '&facs_id=' + soy.$$escapeHtml(opt_data.experiment.facs_list.selected_id) + '\'>Flow Cytometry</a>' : 'Flow Cytometry', '</div><div class=\'scb_s_experiment_step_button scb_s_experiment_step_button_micro ', (opt_data.experiment.microscopy_list.length > 0) ? 'scb_s_experiment_step_visited' : '', ' ', (opt_data.step == 7) ? 'scb_s_experiment_step_selected' : '', '\'>', (opt_data.experiment.microscopy_list.length > 0) ? '<a href=\'#view=microscopy&assignment_id=' + soy.$$escapeHtml(opt_data.assignment.id) + '&experiment_id=' + soy.$$escapeHtml(opt_data.experiment.id) + '&microscopy_id=' + soy.$$escapeHtml(opt_data.experiment.microscopy_list.selected_id) + '\'>Microscopy</a>' : 'Microscopy', '</div></div></div></div>');
  return opt_sb ? '' : output.toString();
};


scb_common.format_time_detailed_w_sec = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.days != 0) ? ' ' + soy.$$escapeHtml(opt_data.days) + ' ' + ((opt_data.days > 1) ? 'd' : 'd') : '', (opt_data.hours != 0) ? ' ' + soy.$$escapeHtml(opt_data.hours) + ' ' + ((opt_data.hours > 1) ? 'h' : 'h') : '', (opt_data.minutes != 0) ? ' ' + soy.$$escapeHtml(opt_data.minutes) + ' ' + ((opt_data.minutes > 1) ? 'min' : 'min') : '', (opt_data.seconds != 0) ? ' ' + soy.$$escapeHtml(opt_data.seconds) + ' ' + ((opt_data.seconds > 1) ? 'sec' : 'sec') : '', (opt_data.now) ? '0 sec' : '');
  return opt_sb ? '' : output.toString();
};


scb_common.format_time_detailed = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.days != 0) ? ' ' + soy.$$escapeHtml(opt_data.days) + ' ' + ((opt_data.days > 1) ? 'd' : 'd') : '', (opt_data.hours != 0) ? ' ' + soy.$$escapeHtml(opt_data.hours) + ' ' + ((opt_data.hours > 1) ? 'h' : 'h') : '', (opt_data.minutes != 0) ? ' ' + soy.$$escapeHtml(opt_data.minutes) + ' ' + ((opt_data.minutes > 1) ? 'min' : 'min') : '', (opt_data.now) ? '0 sec' : '');
  return opt_sb ? '' : output.toString();
};
