// This file was automatically generated from experiment_design.soy.
// Please don't edit this file by hand.

if (typeof scb_experiment_design == 'undefined') { var scb_experiment_design = {}; }


scb_experiment_design.main = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'scb_s_experiment_design_view\'>');
  scb_homepage.display_header(opt_data, output);
  scb_common.assignment_step({step: 3, assignment_name: opt_data.assignment.name, experiment_name: opt_data.experiment.name, assignment: opt_data.assignment, experiment: opt_data.experiment}, output);
  scb_experiment_design.display_details(opt_data, output);
  scb_homepage.display_footer(opt_data, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


scb_experiment_design.display_details = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'scb_s_design_description\'>');
  scb_common.experiment_step({step: 1}, output);
  output.append('<!--<div class=\'experiment_name_header\'>Experiment name:</div>--><input type=\'text\' class=\'scb_s_experiment_name_edit\' maxlength="15" assignment_id=\'', soy.$$escapeHtml(opt_data.assignment.id), '\' experiment_id=\'', soy.$$escapeHtml(opt_data.experiment.id), '\' value=\'', soy.$$escapeHtml(opt_data.experiment.name), '\'><br/><!--', opt_data.assignment.description, opt_data.t.instructions, '--><br/><div class=\'scb_s_experiment_design_objective_container\'><div class=\'scb_s_experiment_design_objective_text\'>What question is your experiment going to address?</div><textarea class=\'scb_s_experiment_design_objective\' assignment_id=\'', soy.$$escapeHtml(opt_data.assignment.id), '\' experiment_id=\'', soy.$$escapeHtml(opt_data.experiment.id), '\'>', soy.$$escapeHtml(opt_data.experiment.objective), '</textarea></div><div class=\'scb_s_experiment_design_hypothesis_container\'><div class=\'scb_s_experiment_design_hypothesis_text\'>Do you have a hypothesis for this experiment? If so, please write it below.</div><textarea class=\'scb_s_experiment_design_hypothesis\' assignment_id=\'', soy.$$escapeHtml(opt_data.assignment.id), '\' experiment_id=\'', soy.$$escapeHtml(opt_data.experiment.id), '\'>', soy.$$escapeHtml(opt_data.experiment.hypothesis), '</textarea></div><div class=\'scb_s_experiment_design_techniques_container\'><div class=\'scb_s_experiment_design_techniques_text\'>What technique(s) might be best suited for the analysis of this experiment?</div><span class=\'scb_s_experiment_design_techniques_tq_note\'>Please note that by selecting a technique(s), you will not alter the techniques that are available to you for this experiment.</span><span class=\'scb_s_experiment_design_techniques_tq\'>');
  scb_experiment_design.display_techniques({techniques: ['wb', 'fc', 'micro'], experiment: opt_data.experiment, assignment: opt_data.assignment}, output);
  output.append('</span></div><br/><a class="scb_f_open_experiment_setup scb_s_navigation_button" href="#view=experiment_setup&assignment_id=', soy.$$escapeHtml(opt_data.assignment.id), '&experiment_id=', soy.$$escapeHtml(opt_data.experiment.id), '">EXPERIMENT SETUP &nbsp; &#9654;</a><br/><a class="scb_f_open_assignment scb_s_navigation_button" href="#view=assignment&assignment_id=', soy.$$escapeHtml(opt_data.assignment.id), '">&#9664; &nbsp; COMPLETE ASSIGNMENT</a></div>');
  return opt_sb ? '' : output.toString();
};


scb_experiment_design.display_techniques = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var techList60 = opt_data.techniques;
  var techListLen60 = techList60.length;
  for (var techIndex60 = 0; techIndex60 < techListLen60; techIndex60++) {
    var techData60 = techList60[techIndex60];
    output.append((techData60 == 'wb') ? '<span class=\'scb_s_experiment_design_technique_wb scb_s_experiment_design_technique ' + ((opt_data.experiment.design_wb_cb) ? 'scb_s_experiment_design_selected' : 'scb_s_experiment_design_unselected') + '\' assignment_id=\'' + soy.$$escapeHtml(opt_data.assignment.id) + '\' experiment_id=\'' + soy.$$escapeHtml(opt_data.experiment.id) + '\' data-key=\'design_wb_cb\' ><span class=\'scb_s_homepage_technique_title_image\'><!--        <input type="checkbox" value=\'' + soy.$$escapeHtml(opt_data.experiment.design_wb_cb) + '\'  assignment_id=\'' + soy.$$escapeHtml(opt_data.assignment.id) + '\' experiment_id=\'' + soy.$$escapeHtml(opt_data.experiment.id) + '\' data-key=\'design_wb_cb\' class=\'scb_s_experiment_design_technique_checkbox\' ' + ((opt_data.experiment.design_wb_cb) ? 'checked=\'checked\'' : '') + '>-->        Western Blot</span><!-- <img class=\'scb_s_homepage_technique_title_image\' src=\'images/homepage/western_blot.png\'>-->Western blotting detects overall changes in the amount or chemical modifications of a particular protein.<a href="pdf/Reference%20Library.pdf" class=\'scb_s_homepage_technique_learn_more\' target=\'_blank\'>LEARN MORE</a></span>' : '', (techData60 == 'fc') ? '<span class=\'scb_s_experiment_design_technique_flow scb_s_experiment_design_technique ' + ((opt_data.experiment.design_fc_cb) ? 'scb_s_experiment_design_selected' : 'scb_s_experiment_design_unselected') + '\' assignment_id=\'' + soy.$$escapeHtml(opt_data.assignment.id) + '\' experiment_id=\'' + soy.$$escapeHtml(opt_data.experiment.id) + '\' data-key=\'design_fc_cb\' ><span class=\'scb_s_homepage_technique_title_image\'><!--        <input type="checkbox" value=\'' + soy.$$escapeHtml(opt_data.experiment.design_fc_cb) + '\' assignment_id=\'' + soy.$$escapeHtml(opt_data.assignment.id) + '\' experiment_id=\'' + soy.$$escapeHtml(opt_data.experiment.id) + '\' data-key=\'design_fc_cb\' class=\'scb_s_experiment_design_technique_checkbox\' ' + ((opt_data.experiment.design_fc_cb) ? 'checked=\'checked\'' : '') + '>-->        Flow Cytometry</span><!-- <img class=\'scb_s_homepage_technique_title_image\' src=\'images/homepage/flow_cytometry.png\'> -->Flow cytometry is used to count and analyze the size, shape and properties of individual cells within a heterogeneous population of cells.<a href="pdf/Reference%20Library.pdf" class=\'scb_s_homepage_technique_learn_more\' target=\'_blank\'>LEARN MORE</a></span>' : '', (techData60 == 'fc') ? '<span class=\'scb_s_experiment_design_technique_micro scb_s_experiment_design_technique ' + ((opt_data.experiment.design_mi_cb) ? 'scb_s_experiment_design_selected' : 'scb_s_experiment_design_unselected') + '\' assignment_id=\'' + soy.$$escapeHtml(opt_data.assignment.id) + '\' experiment_id=\'' + soy.$$escapeHtml(opt_data.experiment.id) + '\' data-key=\'design_mi_cb\'><span class=\'scb_s_homepage_technique_title_image\'><!--       <input type="checkbox" value=\'' + soy.$$escapeHtml(opt_data.experiment.design_mi_cb) + '\' assignment_id=\'' + soy.$$escapeHtml(opt_data.assignment.id) + '\' experiment_id=\'' + soy.$$escapeHtml(opt_data.experiment.id) + '\' data-key=\'design_mi_cb\' class=\'scb_s_experiment_design_technique_checkbox\' ' + ((opt_data.experiment.design_mi_cb) ? 'checked=\'checked\'' : '') + '>-->        Microscopy</span><!--    <img class=\'scb_s_homepage_technique_title_image\' src=\'images/homepage/microscopy.png\'> -->Microscopy is used to study the shape, morphology and properties of cells, tissues or organisms that otherwise cannot be observed by eye.<a href="pdf/Reference%20Library.pdf" class=\'scb_s_homepage_technique_learn_more\' target=\'_blank\'>LEARN MORE</a></span>' : '', '<!--<img class=\'scb_s_homepage_technique_more\' src=\'images/homepage/more_techniques.png\'>-->');
  }
  return opt_sb ? '' : output.toString();
};
