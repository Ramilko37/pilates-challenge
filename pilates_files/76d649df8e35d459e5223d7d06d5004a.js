(function($){'use strict';function gl_findAndReplace(object,value,replacevalue){for(var x in object){if(typeof object[x]==typeof{}){gl_findAndReplace(object[x],value,replacevalue)}
if(object[x]==value){object[x]=replacevalue}}};$('.gnc-plugin-charts').each(function(index,data){var chart_id=$(this).attr('data-attr');var data_var_name="gnc_plugin_data_"+chart_id;var card_data=JSON.parse(window[data_var_name].chart_data);gl_findAndReplace(card_data,'true',!0);gl_findAndReplace(card_data,'false',!1);var ctx=document.getElementById("gnc-plugin-chart-"+chart_id);new Chart(ctx,card_data)})})(jQuery)
;