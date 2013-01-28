scb.ui = scb.ui || {};
scb.ui.static = scb.ui.static || {};
scb.ui.static.WesternBlotGelView = scb.ui.static.WesternBlotGelView || {};

scb.ui.static.WesternBlotGelView.parse = function (element) {
    var assignment_id = $(element).attr('assignment_id');
    var experiment_id = $(element).attr('experiment_id');
    var western_blot_id = $(element).attr('western_blot_id');
    var western_blot_gel_id = $(element).attr('western_blot_gel_id');

    var state = {
        experiment_id:experiment_id,
        assignment_id:assignment_id,
        western_blot_id:western_blot_id,
        western_blot_gel_id:western_blot_gel_id,
        view:'western_blot_gel',
        skip_hash_update:true
    };
    var parsed = scb.ui.static.MainFrame.validate_state(state);
    parsed.state = state;
    return parsed;
}

scb.ui.static.WesternBlotGelView.scb_f_wb_anti_body_select_primary = function (element) {
    var parsed = scb.ui.static.WesternBlotGelView.parse(element);
    if (parsed.redisplay) {
        alert("INVALID ELEMENT!");
    }
    console.info(parsed.western_blot_gel.primary_anti_body);
    parsed.western_blot_gel.primary_anti_body = $(element.selectedOptions).attr('model_id');
    console.info(parsed.western_blot_gel.primary_anti_body);
    console.info(parsed.western_blot_gel);

}

scb.ui.static.WesternBlotGelView.scb_f_wb_anti_body_select_secondary = function (element) {
    var parsed = scb.ui.static.WesternBlotGelView.parse(element);
    if (parsed.redisplay) {
        alert("INVALID ELEMENT!");
    }
    parsed.western_blot_gel.secondary_anti_body = $(element.selectedOptions).attr('model_id');
}

scb.ui.static.WesternBlotGelView.scb_s_western_blot_blot_and_develop = function (element) {
    var parsed = scb.ui.static.WesternBlotGelView.parse(element);
    if (parsed.redisplay) {
        alert("INVALID ELEMENT!");
    }
    if (parsed.western_blot_gel.primary_anti_body && parsed.western_blot_gel.secondary_anti_body) {
        parsed.western_blot_gel.is_developed = true;
        if( parsed.context.template.primary_anti_body[parsed.western_blot_gel.primary_anti_body].gel_name )
        {
            parsed.western_blot_gel.name = parsed.context.template.primary_anti_body[parsed.western_blot_gel.primary_anti_body].gel_name;
        }
    } else {
        alert("Please select primary & secondary anti-body first.");
    }
    scb.ui.static.MainFrame.refresh();
}

scb.ui.static.WesternBlotGelView.scb_s_western_blot_reprobe = function (element) {
    var parsed = scb.ui.static.WesternBlotGelView.parse(element);
    if (parsed.redisplay) {
        alert("INVALID ELEMENT!");
    }
    var gel = parsed.western_blot.gel_list.start({});
    parsed.western_blot.last_gel = gel.id;
    parsed.state.western_blot_gel_id = gel.id;
    scb.ui.static.MainFrame.refresh(parsed.state);
}

scb.ui.static.WesternBlotGelView.scb_f_western_blot_gel_remove = function (element) {
    var parsed = scb.ui.static.WesternBlotGelView.parse(element);
    if (parsed.redisplay) {
        alert("INVALID ELEMENT!");
    }
    parsed.western_blot.gel_list.remove(parsed.western_blot_gel.id);
    var list = parsed.western_blot.gel_list.list;
    parsed.western_blot.last_gel = list.length > 0 ? list[0] : null;
    parsed.state.view = 'western_blot';
    scb.ui.static.MainFrame.refresh(parsed.state);
}
scb.ui.static.WesternBlotGelView.scb_f_wb_exposure_slider_array = [1, 1, 2, 5, 10, 30, 1 * 60, 2 * 60, 5 * 60, 10 * 60, 20 * 60, 60 * 60];

scb.ui.static.WesternBlotGelView.scb_f_wb_exposure_slider = function (e, ui) {
    var element = this;
    var parsed = scb.ui.static.WesternBlotGelView.parse(element);
    if (parsed.redisplay) {
        alert("INVALID ELEMENT!");
    }
    var value = ui.value || $(element).slider('value');
    parsed.western_blot_gel.exposure_time = scb.ui.static.WesternBlotGelView.scb_f_wb_exposure_slider_array[value];
    $('.scb_s_wb_exposure_time_value', $(element).parent()).text(scb.utils.print_time_w_seconds(parsed.western_blot_gel.exposure_time));
    if(_.isObject(e))
    {
        scb.ui.static.MainFrame.refresh();
    }
}

scb.ui.static.WesternBlotGelView.scb_f_wb_exposure_slider_index = function( exposure_time )
{
    var ret = 0;
    _.find(scb.ui.static.WesternBlotGelView.scb_f_wb_exposure_slider_array,function(a,b){if(exposure_time >= a ){
        ret=b;return false};});
    return ret;
}


scb.ui.static.WesternBlotGelView.scb_s_western_blot_gel_paint_all = function (workarea, gstate, state) {
    var gels = $('.scb_s_western_blot_gel[is_developed="true"]', workarea || $('body'));
    gels.each(function (index, element) {
        scb.ui.static.WesternBlotGelView.scb_s_western_blot_gel_paint(element, gstate, state);
    });
}

scb.ui.static.WesternBlotGelView.scb_s_western_blot_gel_paint = function (element, gstate, state) {
    var parsed = scb.ui.static.WesternBlotGelView.parse(element);
    if (parsed.redisplay) {
        alert("INVALID ELEMENT!");
    }
    var context = gstate.context;

    if( parsed.western_blot_gel.marks.length == 0 )
    {
            // develop gel
        var rows_state = parsed.western_blot.rows_state();
        var lanes = [];
        _.each(rows_state.rows, function (r) {
            if (r.is_valid) lanes.push(r.lane);
        });
        var template = gstate.context.template;
        var model = new scb.components.ModelFactory(template);
        var lane_marks = [];
        _.each(lanes, function (lane, index) {
            var marks = [];
            model.western_blot.compute(lane, parsed.western_blot_gel, marks);
            lane_marks.push({marks:marks,amount_of_protein_loaded:10});
        });
        parsed.western_blot_gel.marks = lane_marks;
    }

    var gel = parsed.western_blot_gel;
    if (gel.canvas_metadata == null) {
        var cstate = {
            time:0,
            gel:gel,
            lanes_length:gel.marks.length
        }

        var c = new scb.components.WesternBlot(cstate, context);
        c.initialize_bias();

        gel.canvas_metadata = {
            background:c.background,
            lane_yslope:c.lane_yslope,
            lane_xoffset:c.lane_xoffset
        }
    }
    var cstate = {
        time:gel.exposure_time,
        gel:gel
    }
    var c = new scb.components.WesternBlot(cstate,context);
    c.background = gel.canvas_metadata.background;
    c.lane_yslope = gel.canvas_metadata.lane_yslope;
    c.lane_xoffset = gel.canvas_metadata.lane_xoffset;
    c.build_one_tab(cstate);
    var canvas_id = parsed.western_blot_gel.id;
    c.paint_blot(canvas_id, c.tab);
    gel.canvas_data = c.tab;
}

scb.ui.static.WesternBlotGelView.register = function (workarea) {
    scb.utils.off_on(workarea, 'change', '.scb_f_wb_anti_body_select_primary', function (e) {
        scb.ui.static.WesternBlotGelView.scb_f_wb_anti_body_select_primary(this);
    });

    scb.utils.off_on(workarea, 'change', '.scb_f_wb_anti_body_select_secondary', function (e) {
        scb.ui.static.WesternBlotGelView.scb_f_wb_anti_body_select_secondary(this);
    });
    scb.utils.off_on(workarea, 'click', '.scb_s_western_blot_blot_and_develop', function (e) {
        scb.ui.static.WesternBlotGelView.scb_s_western_blot_blot_and_develop(this);
    });
    scb.utils.off_on(workarea, 'click', '.scb_s_western_blot_reprobe', function (e) {
        scb.ui.static.WesternBlotGelView.scb_s_western_blot_reprobe(this);
    });
    scb.utils.off_on(workarea, 'click', '.scb_f_western_blot_gel_remove', function (e) {
        scb.ui.static.WesternBlotGelView.scb_f_western_blot_gel_remove(this);
    });


}

scb.ui.WesternBlotGelView = function scb_WesternBlotGelView(gstate) {
    var self = this;

    self.show = function (state) {
        var workarea = state.workarea;
        var experiment = state.experiment;
        var template = state.assignment.template;
        var rows_state = state.western_blot.rows_state();
        var rows = rows_state.rows;

        var kind = 'prepare_gel';

        workarea.html(scb_western_blot_gel.main({
            global_template:gstate.context.master_model,
            t:template,
            assignment:state.assignment,
            experiment:state.experiment,
            western_blot:state.western_blot,
            western_blot_gel:state.western_blot_gel,
            rows:rows,
            kind:kind,
        }));
        state.experiment.last_view = 'western_blot_gel';
        state.western_blot.last_gel = state.western_blot_gel.id;


        $('.scb_f_wb_exposure_slider').slider({
            orientation:"horizontal",
            range:"min",
            max:scb.ui.static.WesternBlotGelView.scb_f_wb_exposure_slider_array.length - 1,
            value:scb.ui.static.WesternBlotGelView.scb_f_wb_exposure_slider_index(state.western_blot_gel.exposure_time),
            slide:scb.ui.static.WesternBlotGelView.scb_f_wb_exposure_slider,
            change:scb.ui.static.WesternBlotGelView.scb_f_wb_exposure_slider
        }).each(scb.ui.static.WesternBlotGelView.scb_f_wb_exposure_slider);

        scb.ui.static.WesternBlotGelView.scb_s_western_blot_gel_paint_all(workarea, gstate, state);

    }
};